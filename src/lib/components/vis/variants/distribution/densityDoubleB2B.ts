import * as d3 from 'd3';
import { createPlot, createSVG, getDomains, getKeys, getUniqueIds, kernelDensityEstimator, kernelEpanechnikov } from '../../utils';

const createAxis = ({ axis, svg }) => svg
	.append('g')
	.attr('transform', 'translate(-20,0)')
	.call(d3.axisLeft(axis).ticks(2).tickSizeOuter(0));



export const demoDensityDoubleB2B = (newData: string, config: object): void => {
	// set the dimensions and margins of the graph
	// set the dimensions and margins of the graph
	const type = 'x',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom,
		id = config.id,
		colors = config.colors;

	// append the svg object to the body of the page
	const svg = createSVG({ id: 'density-double-b2b', width, height, margin });


	// get the data
	d3.json(newData).then(function (data) {
		const uniqueIds = getUniqueIds(data, id)
		const domains = getDomains(data, keys, type)

		console.log({ domains })
		// add the x Axis
		const x = d3.scaleLinear().domain(domains.x).range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));


		const y1 = d3
			.scaleLinear()
			.range([height / 2, 0])
			.domain([0, 0.12]);

		const y2 = d3
			.scaleLinear()
			.range([height / 2, height])
			.domain([0, 0.12]);

		createAxis({ axis: y1, svg })
		createAxis({ axis: y2, svg })


		// Compute kernel density estimation
		const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60));

		const densities = uniqueIds.map((uniqueId) => kde(
			data.filter(function (d) {
				return d[id] === uniqueId;
			}).map(function (d) {
				return d[keys.x];
			})
		))
		createPlot({ data: densities[0], x, y: y1, svg, color: colors[0] })
		createPlot({ data: densities[1], x, y: y2, svg, color: colors[1] })
	});
};
