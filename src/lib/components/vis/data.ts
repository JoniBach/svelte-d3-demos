import { demoDensityDouble } from './variants/distribution/densityDouble';
import { demoHistogramDouble } from './variants/distribution/histogramDouble';
import { demoHistogram } from './variants/distribution/histogram';
import { demoDensity } from './variants/distribution/density';
import { demoDensityDoubleB2B } from './variants/distribution/densityDoubleB2B';
import { demoRidgeLine } from './variants/distribution/ridgeLine';
import { demoRidgeLineAdvanced } from './variants/distribution/ridgeLineAdvanced';
import { demoScatter } from './variants/correlation/scatter';
import { demoHeatmap } from './variants/correlation/heatmap';
import { demoHeatmapAdvanced } from './variants/correlation/heatmapAdvanced';
import { demoCorrelogram } from './variants/correlation/correlogram';
import { demoBubble } from './variants/correlation/bubble';
import { demoBubbleAdvanced } from './variants/correlation/bubbleAdvanced';
import { demoScatterConnected } from './variants/correlation/scatterConnected';
import { demoScatterConnectedMulti } from './variants/correlation/scatterConnectedMulti';
import { demoScatterConnectedSmoothe } from './variants/correlation/scatterConnectedSmoothe';
import { demoDensityShaded } from './variants/correlation/densityShaded';
import { demoBar } from './variants/ranking/bar';
import { demoBarHorizontal } from './variants/ranking/barHorizontal';
import { demoBarStacked } from './variants/ranking/barStacked';
import { demoParallel } from './variants/ranking/parallel';
import { demoLolipop } from './variants/ranking/lolipop';
import { demoLolipopHorizontal } from './variants/ranking/lolipopHorizontal';
import { demoLolipopCleveland } from './variants/ranking/lolipopCleveland';
import { demoBarCircular } from './variants/ranking/barCircular';
import { demoBarCircularLabels } from './variants/ranking/barCircularLabels';
import { demoBarCircularLabelsDouble } from './variants/ranking/barCircularLabelsDouble';
import { demoTreemapCircular } from './variants/comparison/treemapCircular';
import { demoDendrogram } from './variants/comparison/dendrogram';
import { demoDoughnut } from './variants/comparison/doughnut';
import { demoPie } from './variants/comparison/pie';
import { demoTreemapJson } from './variants/comparison/treemapJson';
import { demoArc } from './variants/flow/arc';
import { demoChord } from './variants/flow/chord';
import { demoNetwork } from './variants/flow/network';

export const data = [
	{
		category: 'distribution',
		graphs: [
			{
				key: 'histogram',
				title: 'Sales Performance',
				value: 'data/distribution/histogram.json',
				note: {
					"price": 195 // value
				},
				config: {
					keys: ['price'],
					margin: { top: 20, right: 20, bottom: 20, left: 40 },
				},
				fn: demoHistogram
			},
			{
				key: 'histogram-double',
				title: 'Sales Performance',
				value: 'data/distribution/histogram-double.json',
				note: {
					"person": "A", // value id
					"score": -1.5981827443881569 // value y
				},
				config: {
					keys: ['score'],
					id: 'person',
					margin: { top: 20, right: 20, bottom: 20, left: 40 },
					colors: ['#69b3a2', '#404080']
				},
				fn: demoHistogramDouble
			},

			{
				key: 'density',
				title: 'Sales Performance',
				value: 'data/distribution/histogram.json',
				note: {
					"price": 195 // value
				},
				config: {
					keys: ['price'],
					margin: { top: 20, right: 20, bottom: 20, left: 40 },
				},
				fn: demoDensity
			},
			{
				key: 'density-double',
				title: 'Density double',
				value: 'data/distribution/density-double.json',
				note: {
					"person": "A", // value x
					"score": -3.834363132893505 // value y
				},
				config: {
					keys: ['score'],
					id: 'person',
					margin: { top: 20, right: 20, bottom: 20, left: 40 },
					colors: ['#69b3a2', '#404080']
				},
				fn: demoDensityDouble
			},
			{
				key: 'density-double-b2b',
				title: 'Density double back to back',
				value: 'data/distribution/density-double-b2b.json',
				note: {
					"type": "variable 1", // value x
					"value": "-1.77631469016691" // value y
				},
				fn: demoDensityDoubleB2B
			},
			{
				key: 'ridgeline',
				title: 'Mental Health',
				value: 'data/distribution/ridgeline.json',
				note: {
					"Severe Depression": 6.0, // value n
					"Major Depression": 17.9, // value n
					"Moderate Depression": 21.6, // value n
					"Mild Depression": 49.0, // value n
					"Low Mood": 42.6, // value n
					"Occasional Sadness": 61.2, // value n
					"Rarely Sad": 63.9, // value n
					"Generally Happy": 78.6, // value n
					"Balanced Mood": 98.8, // value n
					"Occasionally Optimistic": 97.5, // value n
					"Mostly Optimistic": 98.9, // value n
					"Frequently Joyful": 98.2, // value n
					"Regularly Joyful": 99.5, // value n
					"Highly Energetic": 98.2, // value n
					"Extremely Positive": 98.3, // value n
					"Consistently Positive": 93.5, // value n
					"Unwavering Positivity": 95.9 // value n
				},
				fn: demoRidgeLine
			},
			{
				key: 'ridgeline-advanced',
				title: 'Mental Health',
				value: 'data/distribution/ridgeline.json',
				note: {
					"Severe Depression": 6.0, // value n
					"Major Depression": 17.9, // value n
					"Moderate Depression": 21.6, // value n
					"Mild Depression": 49.0, // value n
					"Low Mood": 42.6, // value n
					"Occasional Sadness": 61.2, // value n
					"Rarely Sad": 63.9, // value n
					"Generally Happy": 78.6, // value n
					"Balanced Mood": 98.8, // value n
					"Occasionally Optimistic": 97.5, // value n
					"Mostly Optimistic": 98.9, // value n
					"Frequently Joyful": 98.2, // value n
					"Regularly Joyful": 99.5, // value n
					"Highly Energetic": 98.2, // value n
					"Extremely Positive": 98.3, // value n
					"Consistently Positive": 93.5, // value n
					"Unwavering Positivity": 95.9 // value n
				},
				fn: demoRidgeLineAdvanced
			}
		]
	},
	{
		category: 'correlation',
		graphs: [
			{
				key: 'scatter',
				title: 'Stock Performance',
				value: 'data/correlation/scatter.json',
				note: {
					"x": 1, // value x
					"y": 5.9 // value y
				},
				fn: demoScatter
			},
			{
				key: 'heatmap',
				title: 'Employeee Performance',
				value: 'data/correlation/heatmap.json',
				note: {
					"group": "A", // value x
					"variable": "Efficiency", // value y
					"value": 28.3 // value z
				},
				fn: demoHeatmap
			},
			{
				key: 'heatmap-advanced',
				title: 'Employeee Performance',
				value: 'data/correlation/heatmap.json',
				note: {
					"group": "A", // value x
					"variable": "Efficiency", // value y
					"value": 28.3 // value z
				},
				fn: demoHeatmapAdvanced
			},
			{
				key: 'correlogram',
				title: 'Health and Lifestyle',
				value: 'data/correlation/correlogram.json',
				note: {
					"": "BMI", // value id
					"BMI": "1", // value n
					"Exercise": "-0.5", // value n
					"Sleep": "-0.3", // value n
					"Stress": "0.6", // value n
					"Water": "-0.2", // value n
					"Fruit": "-0.4", // value n
					"Calories": "-0.1", // value n
					"Alcohol": "0.4", // value n
					"Smoking": "0.5", // value n
					"Wellbeing": "-0.3" // value n
				},
				fn: demoCorrelogram
			},
			{
				key: 'bubble',
				title: 'Near Earth Objects',
				value: 'data/correlation/bubble.json',
				note: {
					"Name": "Apollo", // value id
					"Distance_from_Earth": 142.4142256425888, // value x
					"Velocity": 15.87377620842994, // value y
					"Diameter": 4.433799487300515, // value z
				},
				fn: demoBubble
			},
			{
				key: 'bubble-advanced',
				title: 'Near Earth Objects',
				value: 'data/correlation/bubble.json',
				note: {
					"Name": "Apollo", // value id
					"Distance_from_Earth": 142.4142256425888, // value x
					"Velocity": 15.87377620842994, // value y
					"Diameter": 4.433799487300515, // value z
				},
				fn: demoBubbleAdvanced
			},
			{
				key: 'scatter-connected',
				title: 'Scatter connected',
				value: 'data/correlation/scatter-connected.json',
				note: {
					"date": "2023-07-01", // value x
					"average_temperature": "25.36" // value y
				},
				fn: demoScatterConnected
			},
			{
				key: 'scatter-connected-multi',
				title: 'Time Sales Expenses Proffit',
				value: 'data/correlation/scatter-connected-multi.json',
				note: {
					"time": "1", // value n
					"Sales": "2", // value n
					"Expenses": "5", // value n
					"Profit": "13" // value n
				},
				fn: demoScatterConnectedMulti
			},
			{
				key: 'scatter-connected-smoothe',
				title: 'Scatter connected smothe',
				value: 'data/correlation/scatter-connected.json',
				note: {
					"date": "2023-07-01", // value x
					"average_temperature": "25.36" // value y
				},
				fn: demoScatterConnectedSmoothe
			},
			{
				key: 'density-shaded',
				title: 'Shaded',
				value: 'data/correlation/density-shaded.json',
				note: {
					"x": "16.58", // value x
					"y": "5", // value y
					"group": "A" // value id
				},
				fn: demoDensityShaded
			}
		]
	},
	{
		category: 'ranking',
		graphs: [
			{
				key: 'bar',
				title: 'Pokemon evolution level',
				value: 'data/ranking/bar.json',
				note: {
					"name": "Bulbasaur", // value x
					"level": 16 // value y
				},
				fn: demoBar
			},
			{
				key: 'bar-horizontal',
				title: 'Pokemon evolution level',
				value: 'data/ranking/bar.json',
				note: {
					"name": "Bulbasaur", // value x
					"level": 16 // value y
				},
				fn: demoBarHorizontal
			},
			{
				key: 'bar-stacked',
				title: 'Sales of goods',
				value: 'data/ranking/bar-stacked.json',
				note: {
					"group": "Electronics", // value x
					"Online": "120", // value yn
					"In-Store": "85", // value yn
					"Promotional": "45" // value yn
				},
				fn: demoBarStacked
			},
			{
				key: 'parallel',
				title: 'Vehicles performance',
				value: 'data/ranking/parallel.json',
				note: {
					"Model": "Car 1", // value id
					"Speed": "180", // value x
					"Fuel_Efficiency": "30", // value yn
					"Comfort": "80", // value yn
					"Price": "20000" // value yn
				},
				fn: demoParallel
			},
			{
				key: 'lolipop',
				title: 'Pokemon evolution levels',
				value: 'data/ranking/bar.json',
				note: {
					"name": "Bulbasaur", // value x
					"level": 16 // value y
				},
				fn: demoLolipop
			},
			{
				key: 'lolipop-horizontal',
				title: 'Pokemon evolution levels',
				value: 'data/ranking/bar.json',
				note: {
					"name": "Bulbasaur", // value x
					"level": 16 // value y
				},
				fn: demoLolipopHorizontal
			},
			{
				key: 'lolipop-cleveland',
				title: 'Athletes performance',
				value: 'data/ranking/lolipop-cleveland.json',
				note: {
					"Athlete": "Athlete 1", // value y
					"100m": 11.6, // value xn
					"LongJump": 7.33, // value xn
					"HighJump": 1.92, // value xn
					"400m": 48.45, // value xn
					"Javelin": 89.8 // value xn
				},
				fn: demoLolipopCleveland
			},
			{
				key: 'bar-circular',
				title: 'Energy consumption',
				value: 'data/ranking/bar-circular.json',
				note: {
					"Country": "USA", // value x
					"Energy_Consumption": "4000" // value y
				},
				fn: demoBarCircular
			},
			{
				key: 'bar-circular-labels',
				title: 'Energy consumption',
				value: 'data/ranking/bar-circular.json',
				note: {
					"Country": "USA", // value x
					"Energy_Consumption": "4000" // value y
				},
				fn: demoBarCircularLabels
			},
			{
				key: 'bar-circular-labels-double',
				title: 'Energy consumption vs green energy production',
				value: 'data/ranking/bar-circular-double.json',
				note: {
					"Country": "USA", // value x
					"Energy_Consumption": "4000", // value yn
					"Green_Energy_Production": "1260.18" // value yn
				},
				fn: demoBarCircularLabelsDouble
			}
		]
	},
	{
		category: 'comparison',
		graphs: [
			{
				key: 'treemap',
				title: 'Academia',
				value: 'data/comparison/treemap.json',
				note: {
					"name": "University", // value id
					"children": [ // value children
						{
							"name": "Engineering", // value id
							"children": [  // value children
								{
									"name": "Computer Science", // value id
									"value": 25 // value n
								},
							]
						},
					],
				},
				fn: demoTreemapJson
			},
			{
				key: 'treemap-circular',
				title: 'Tech revinue',
				value: 'data/comparison/treemap-circular.json',
				note: {
					"region": "Asia", // value idn
					"subregion": "Southern Asia", // value idn
					"key": "Afghanistan", // value idn
					"value": 25500100 // value x
				},
				fn: demoTreemapCircular
			},
			{
				key: 'dendrogram',
				title: 'Employee structure',
				value: 'data/comparison/dendrogram.json',
				note: {
					"children": [ // value children
						{
							"name": "Faculty of Sciences", // value id
							"children": [ // value children
								{
									"name": "Department of Biology", // value id
									"colname": "level3" // value n
								},
							],
						},
					],
				},
				fn: demoDendrogram
			},
			{
				key: 'doughnut',
				title: 'Example doughnut chart',
				note: {
					a: 9, // value n 
				},
				value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
				fn: demoDoughnut
			},
			{
				key: 'pie',
				title: 'Example pie chart',
				note: {
					a: 9, // value n 
				},
				value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
				fn: demoPie
			}
		]
	},
	{
		category: 'flow',
		graphs: [
			{
				key: 'arc',
				title: 'Engineering team flow',
				value: 'data/flow/arc.json',
				note: {
					"nodes": [
						{
							"id": 1,
							"name": "Project Manager"
						},
					],
					"links": [
						{
							"source": 1,
							"target": 2
						},
					]
				},
				fn: demoArc
			},
			{
				key: 'network',
				title: 'Reasearch team network',
				value: 'data/flow/network.json',
				note: {
					"nodes": [
						{
							"id": 1,
							"name": "Project Manager"
						},
					],
					"links": [
						{
							"source": 1,
							"target": 2
						},
					]
				},
				fn: demoNetwork
			},
			{
				key: 'chord',
				title: 'courntry export connections',
				value: [
					[0, 35, 50, 25], // Exports from Country A to B, C, D
					[40, 0, 30, 20], // Exports from Country B to A, C, D
					[45, 25, 0, 30], // Exports from Country C to A, B, D
					[20, 40, 35, 0] // Exports from Country D to A, B, C
				],
				fn: demoChord
			}
		]
	}
];
