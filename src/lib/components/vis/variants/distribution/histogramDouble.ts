import * as d3 from 'd3';
import { getDomains, getKeys, getUniqueIds, getValue } from '../../utils';

const drawRectangle = ({ data, x, y, height, svg, index, color }) => svg
	.selectAll(`rect${index}`)
	.data(data)
	.join('rect')
	.attr('x', 1)
	.attr('transform', function (d) {
		return `translate(${x(d.x0)} , ${y(d.length)})`;
	})
	.attr('width', function (d) {
		return x(d.x1) - x(d.x0) - 1;
	})
	.attr('height', function (d) {
		return height - y(d.length);
	})
	.style('fill', color)
	.style('opacity', 0.6);


export const demoHistogramDouble = (newData: string, config: object): void => {
	console.log();
	// set the dimensions and margins of the graph
	const type = 'x',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom,
		id = config.id,
		colors = config.colors;

	// append the svg object to the body of the page
	const svg = d3
		.select('#histogram-double')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

	// get the data
	d3.json(newData).then(function (data) {
		const uniqueIds = getUniqueIds(data, id)
		const domains = getDomains(data, keys, type)

		const x = d3
			.scaleLinear()
			.domain(domains.x)
			.range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

		const histogram = d3
			.histogram()
			.value(function (d) {
				return +d.score;
			})
			.domain(x.domain())
			.thresholds(x.ticks(40));

		const bins = uniqueIds.map((uniqueId) => histogram(
			data.filter(function (d) {
				return d[id] === uniqueId;
			})
		))

		const y = d3.scaleLinear().range([height, 0]);
		y.domain([
			0,
			d3.max(bins[0], function (d) {
				return d.length;
			})
		]);
		svg.append('g').call(d3.axisLeft(y));

		for (const [index, data] of bins.entries()) {
			drawRectangle({ data, x, y, height, svg, index, color: colors[index] })
		}

	});
};
