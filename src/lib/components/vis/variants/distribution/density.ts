import * as d3 from 'd3';
import { createSVG, getDomains, getKeys, getValue, kernelDensityEstimator, kernelEpanechnikov } from '../../utils';

const plot = ({ density, x, y, svg }) => svg
	.append('path')
	.attr('class', 'mypath')
	.datum(density)
	.attr('fill', '#69b3a2')
	.attr('opacity', '.8')
	.attr('stroke', '#000')
	.attr('stroke-width', 1)
	.attr('stroke-linejoin', 'round')
	.attr(
		'd',
		d3
			.line()
			.curve(d3.curveBasis)
			.x(function (d) {
				return x(d[0]);
			})
			.y(function (d) {
				return y(d[1]);
			})
	);

export const demoDensity = (newData: string, config: object): void => {
	// set the dimensions and margins of the graph
	const type = 'x',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom;

	// append the svg object to the body of the page
	const svg = createSVG({ id: 'density', width, height, margin });

	// get the data
	d3.json(newData).then(function (data) {

		const domains = getDomains(data, keys, type)


		// add the x Axis
		const x = d3.scaleLinear().domain(domains.x).range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

		// add the y Axis
		const y = d3.scaleLinear().range([height, 0]).domain([0, 0.01]);
		svg.append('g').call(d3.axisLeft(y));

		// Compute kernel density estimation
		const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40));
		const density = kde(
			data.map(function (d) {
				return getValue(d, keys.x);
			})
		);

		// Plot the area
		plot({ density, x, y, svg })
	});


};
