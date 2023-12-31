import * as d3 from 'd3';
import { createSVG, getDomains, getKeys, getValue } from '../../utils';

export const demoHistogram = (newData: string, config: object): void => {
	// config
	const type = 'x',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom;

	// append the svg object to the body of the page
	const svg = createSVG({ id: 'histogram', width, height, margin });

	// get the data
	d3.json(newData).then(function (data) {
		// X axis: scale and draw:

		const domains = getDomains(data, keys, type)

		const x = d3
			.scaleLinear()
			.domain(domains.x)
			.range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

		// set the parameters for the histogram
		const histogram = d3
			.histogram()
			.value(function (d) {
				return getValue(d, keys.x);
			}) // I need to give the vector of value
			.domain(x.domain()) // then the domain of the graphic
			.thresholds(x.ticks(70)); // then the numbers of bins

		// And apply this function to data to get the bins
		const bins = histogram(data);

		// Y axis: scale and draw:
		const y = d3.scaleLinear().range([height, 0]);
		y.domain([
			0,
			d3.max(bins, function (d) {
				return d.length;
			})
		]); // d3.hist has to be called before the Y axis obviously
		svg.append('g').call(d3.axisLeft(y));

		// append the bar rectangles to the svg element
		svg
			.selectAll('rect')
			.data(bins)
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
			.style('fill', '#69b3a2');
	});
};
