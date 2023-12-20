import * as d3 from 'd3';
import { createPlot, createSVG, getDomains, getKeys, getUniqueIds, kernelDensityEstimator, kernelEpanechnikov } from '../../utils';


export const demoDensityDouble = (newData: string, config: object): void => {

	// set the dimensions and margins of the graph
	const type = 'x',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom,
		id = config.id,
		colors = config.colors;

	// append the svg object to the body of the page
	const svg = createSVG({ id: 'density-double', width, height, margin });

	// get the data
	d3.json(newData).then(function (data) {
		const uniqueIds = getUniqueIds(data, id)
		const domains = getDomains(data, keys, type)

		// add the x Axis
		const x = d3.scaleLinear().domain(domains.x).range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

		// add the y Axis
		const y = d3.scaleLinear().range([height, 0]).domain([0, 0.12]);
		svg.append('g').call(d3.axisLeft(y));

		// Compute kernel density estimation
		const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60));

		const densities = uniqueIds.map((uniqueId) => kde(
			data.filter(function (d) {
				return d[id] === uniqueId;
			}).map(function (d) {
				return d[keys.x];
			})
		))

		for (const [index, data] of densities.entries()) {
			createPlot({ data, x, y, svg, color: colors[index] })
		}
	});
};
