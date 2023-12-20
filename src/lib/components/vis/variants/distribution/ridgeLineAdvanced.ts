import * as d3 from 'd3';

export const demoRidgeLineAdvanced = (newData: string, config: object): void => {
	// set the dimensions and margins of the graph
	const margin = config.margin,
		width = config.size.width - margin.left - margin.right,
		height = config.size.height - margin.top - margin.bottom;

	// append the svg object to the body of the page
	const svg = d3
		.select('#ridgeline-advanced')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`);

	//read data
	d3.json(newData).then(function (data) {
		// Get the different categories and count them
		const categories = Object.keys(data[0]);
		const n = categories.length;

		// Compute the mean of each group
		const allMeans = [];
		for (const i in categories) {
			const currentGroup = categories[i];
			const mean = d3.mean(data, function (d) {
				return +d[currentGroup];
			});
			allMeans.push(mean);
		}

		// Create a color scale using these means.
		const myColor = d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateViridis);

		// Add X axis
		const x = d3.scaleLinear().domain([-10, 120]).range([0, width]);
		svg
			.append('g')
			.attr('class', 'xAxis')
			.attr('transform', 'translate(0,' + height + ')')
			.call(d3.axisBottom(x).tickValues([0, 25, 50, 75, 100]).tickSize(-height))
			.select('.domain')
			.remove();

		// Add X axis label:
		svg
			.append('text')
			.attr('text-anchor', 'end')
			.attr('x', width)
			.attr('y', height + 40)
			.text('Probability (%)');

		// Create a Y scale for densities
		const y = d3.scaleLinear().domain([0, 0.25]).range([height, 0]);

		// Create the Y axis for names
		const yName = d3.scaleBand().domain(categories).range([0, height]).paddingInner(1);
		svg.append('g').call(d3.axisLeft(yName).tickSize(0)).select('.domain').remove();

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
			.attr('fill', function (d) {
				const grp = d.key;
				const index = categories.indexOf(grp);
				const value = allMeans[index];
				return myColor(value);
			})
			.datum(function (d) {
				return d.density;
			})
			.attr('opacity', 0.7)
			.attr('stroke', '#000')
			.attr('stroke-width', 0.1)
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

	// This is what I need to compute kernel density estimation
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
