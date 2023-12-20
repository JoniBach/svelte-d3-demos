import * as d3 from 'd3';
import { getDomains, getKeys, getUniqueIds } from '../../utils';

const drawArea = ({ data, x, y, svg, color, index }) => svg
	.selectAll(`path`)
	.attr('class', 'mypath')
	.datum(data)
	.attr('fill', color)
	.attr('opacity', '.6')
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
	const svg = d3
		.select('#density-double')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left},${margin.top})`);

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
		// const density1 = kde(
		// 	data
		// 		.filter(function (d) {
		// 			return d.person === 'A';
		// 		})
		// 		.map(function (d) {
		// 			return d.score;
		// 		})
		// );
		// const density2 = kde(
		// 	data
		// 		.filter(function (d) {
		// 			return d.person === 'B';
		// 		})
		// 		.map(function (d) {
		// 			return d.score;
		// 		})
		// );

		const densities = uniqueIds.map((uniqueId) => kde(
			data.filter(function (d) {
				return d[id] === uniqueId;
			}).map(function (d) {
				return d[keys.x];
			})
		))

		console.log(densities)

		// Plot the area
		// svg
		// 	.append('path')
		// 	.attr('class', 'mypath')
		// 	.datum(density1)
		// 	.attr('fill', '#69b3a2')
		// 	.attr('opacity', '.6')
		// 	.attr('stroke', '#000')
		// 	.attr('stroke-width', 1)
		// 	.attr('stroke-linejoin', 'round')
		// 	.attr(
		// 		'd',
		// 		d3
		// 			.line()
		// 			.curve(d3.curveBasis)
		// 			.x(function (d) {
		// 				return x(d[0]);
		// 			})
		// 			.y(function (d) {
		// 				return y(d[1]);
		// 			})
		// 	);

		// // Plot the area
		// svg
		// 	.append('path')
		// 	.attr('class', 'mypath')
		// 	.datum(density2)
		// 	.attr('fill', '#404080')
		// 	.attr('opacity', '.6')
		// 	.attr('stroke', '#000')
		// 	.attr('stroke-width', 1)
		// 	.attr('stroke-linejoin', 'round')
		// 	.attr(
		// 		'd',
		// 		d3
		// 			.line()
		// 			.curve(d3.curveBasis)
		// 			.x(function (d) {
		// 				return x(d[0]);
		// 			})
		// 			.y(function (d) {
		// 				return y(d[1]);
		// 			})
		// 	);
		// drawArea({ data: densities[0], x, y, svg, index: 0, color: colors[0] })

		for (const [index, data] of densities.entries()) {
			// 	console.log({ data, x, y, svg, index, color: colors[index] })
			drawArea({ data, x, y, svg, index, color: colors[index] })
		}
	});


	// Function to compute density
	function kernelDensityEstimator(kernel, X) {
		return function (V) {
			return X.map(function (x) {
				return [
					x,
					d3.mean(V, function (v) {
						return kernel(x - v);
					})
				];
			});
		};
	}
	function kernelEpanechnikov(k) {
		return function (v) {
			return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
		};
	}
};
