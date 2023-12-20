import * as d3 from 'd3';
import { createSVG, getKeys, kernelDensityEstimator, kernelEpanechnikov } from '../../utils';

export const demoRidgeLine = (newData: string, config: object): void => {
	// set the dimensions and margins of the graph
	const type = 'n',
		keys = getKeys(config.keys, type),
		margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom,
		id = config.id,
		colors = config.colors;

	// append the svg object to the body of the page
	const svg = createSVG({ id: 'ridgeline', width, height, margin });

	//read data
	d3.json(newData).then(function (data) {
		// Get the different categories and count them
		const categories = Object.keys(data[0]);
		const n = categories.length;

		// Add X axis
		const x = d3.scaleLinear().domain([-10, 140]).range([0, width]);
		svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

		// Create a Y scale for densities
		const y = d3.scaleLinear().domain([0, 0.4]).range([height, 0]);

		// Create the Y axis for names
		const yName = d3.scaleBand().domain(categories).range([0, height]).paddingInner(1);
		svg.append('g').call(d3.axisLeft(yName));

		// Compute kernel density estimation for each column:
		const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40)); // increase this 40 for more accurate density.
		const allDensity = [];
		for (let i = 0; i < n; i++) {
			const key = categories[i];
			const density = kde(
				data.map(function (d) {
					return d[key];
				})
			);
			allDensity.push({ key: key, density: density });
		}

		// Add areas
		svg
			.selectAll('areas')
			.data(allDensity)
			.join('path')
			.attr('transform', function (d) {
				return `translate(0, ${yName(d.key) - height})`;
			})
			.datum(function (d) {
				return d.density;
			})
			.attr('fill', '#69b3a2')
			.attr('stroke', '#000')
			.attr('stroke-width', 1)
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
	});


};
