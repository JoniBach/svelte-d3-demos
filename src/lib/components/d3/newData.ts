import { demoDensityDouble } from './demo/distribution/densityDouble';
import { demoHistogramDouble } from './demo/distribution/histogramDouble';
import { demoHistogram } from './demo/distribution/histogram';
import { demoDensity } from './demo/distribution/density';
import { demoDensityDoubleB2B } from './demo/distribution/densityDoubleB2B';
import { demoRidgeLine } from './demo/distribution/ridgeLine';
import { demoRidgeLineAdvanced } from './demo/distribution/ridgeLineAdvanced';
import { demoScatter } from './demo/correlation/scatter';
import { demoHeatmap } from './demo/correlation/heatmap';
import { demoHeatmapAdvanced } from './demo/correlation/heatmapAdvanced';
import { demoCorrelogram } from './demo/correlation/correlogram';
import { demoBubble } from './demo/correlation/bubble';
import { demoBubbleAdvanced } from './demo/correlation/bubbleAdvanced';
import { demoScatterConnected } from './demo/correlation/scatterConnected';
import { demoScatterConnectedMulti } from './demo/correlation/scatterConnectedMulti';
import { demoScatterConnectedSmoothe } from './demo/correlation/scatterConnectedSmoothe';
import { demoDensityShaded } from './demo/correlation/densityShaded';
import { demoBar } from './demo/ranking/bar';
import { demoBarHorizontal } from './demo/ranking/barHorizontal';
import { demoBarStacked } from './demo/ranking/barStacked';
import { demoParallel } from './demo/ranking/parallel';
import { demoLolipop } from './demo/ranking/lolipop';
import { demoLolipopHorizontal } from './demo/ranking/lolipopHorizontal';
import { demoLolipopCleveland } from './demo/ranking/lolipopCleveland';
import { demoBarCircular } from './demo/ranking/barCircular';
import { demoBarCircularLabels } from './demo/ranking/barCircularLabels';
import { demoBarCircularLabelsDouble } from './demo/ranking/barCircularLabelsDouble';
import { demoTreemapCircular } from './demo/comparison/treemapCircular';
import { demoDendrogram } from './demo/comparison/dendrogram';
import { demoDoughnut } from './demo/comparison/doughnut';
import { demoPie } from './demo/comparison/pie';
import { demoTreemapJson } from './demo/comparison/treemapJson';
import { demoArc } from './demo/flow/arc';
import { demoChord } from './demo/flow/chord';
import { demoNetwork } from './demo/flow/network';

export const data = [
	{
		category: 'distribution',
		graphs: [
			{
				key: 'histogram',
				title: 'Sales Performance',
				value: 'data/distribution/histogram.json',
				fn: demoHistogram
			},
			{
				key: 'histogram-double',
				title: 'Sales Performance',
				value: 'data/distribution/histogram-double.json',
				fn: demoHistogramDouble
			},

			{
				key: 'density',
				title: 'Sales Performance',
				value: 'data/distribution/histogram.json',
				fn: demoDensity
			},
			{
				key: 'density-double',
				title: 'Density double',
				value: 'data/distribution/density-double.json',
				fn: demoDensityDouble
			},
			{
				key: 'density-double-b2b',
				title: 'Density double back to back',
				value: 'data/distribution/density-double-b2b.json',
				// data originally from "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv",
				fn: demoDensityDoubleB2B
			},
			{
				key: 'ridgeline',
				title: 'Mental Health',
				value: 'data/distribution/ridgeline.json',
				fn: demoRidgeLine
			},
			{
				key: 'ridgeline-advanced',
				title: 'Mental Health',
				value: 'data/distribution/ridgeline.json',
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
				fn: demoScatter
			},
			{
				key: 'heatmap',
				title: 'Employeee Performance',
				value: 'data/correlation/heatmap.json',
				fn: demoHeatmap
			},
			{
				key: 'heatmap-advanced',
				title: 'Employeee Performance',
				value: 'data/correlation/heatmap.json',
				fn: demoHeatmapAdvanced
			},
			{
				key: 'correlogram',
				title: 'Health and Lifestyle',
				value: 'data/correlation/correlogram.json',
				fn: demoCorrelogram
			},
			{
				key: 'bubble',
				title: 'Near Earth Objects',
				value: 'data/correlation/bubble.json',
				fn: demoBubble
			},
			{
				key: 'bubble-advanced',
				title: 'Near Earth Objects',
				value: 'data/correlation/bubble.json',
				fn: demoBubbleAdvanced
			},
			{
				key: 'scatter-connected',
				title: 'Scatter connected',
				value: 'data/correlation/scatter-connected.json',
				fn: demoScatterConnected
			},
			{
				key: 'scatter-connected-multi',
				title: 'Time Sales Expenses Proffit',
				value: 'data/correlation/scatter-connected-multi.json',
				fn: demoScatterConnectedMulti
			},
			{
				key: 'scatter-connected-smoothe',
				title: 'Scatter connected smothe',
				value: 'data/correlation/scatter-connected.json',
				fn: demoScatterConnectedSmoothe
			},
			{
				key: 'density-shaded',
				value: 'data/correlation/density-shaded.json',
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
				fn: demoBar
			},
			{
				key: 'bar-horizontal',
				title: 'Pokemon evolution level',
				value: 'data/ranking/bar.json',
				fn: demoBarHorizontal
			},
			{
				key: 'bar-stacked',
				title: 'Sales of goods',
				value: 'data/ranking/bar-stacked.json',
				fn: demoBarStacked
			},
			{
				key: 'parallel',
				title: 'Vehicles performance',
				value: 'data/ranking/parallel.json',
				fn: demoParallel
			},
			{
				key: 'lolipop',
				title: 'Pokemon evolution levels',
				value: 'data/ranking/bar.json',
				fn: demoLolipop
			},
			{
				key: 'lolipop-horizontal',
				title: 'Pokemon evolution levels',
				value: 'data/ranking/bar.json',
				fn: demoLolipopHorizontal
			},
			{
				key: 'lolipop-cleveland',
				title: 'Athletes performance',
				value: 'data/ranking/lolipop-cleveland.json',
				fn: demoLolipopCleveland
			},
			{
				key: 'bar-circular',
				title: 'Energy consumption',
				value: 'data/ranking/bar-circular.json',
				fn: demoBarCircular
			},
			{
				key: 'bar-circular-labels',
				title: 'Energy consumption',
				value: 'data/ranking/bar-circular.json',
				fn: demoBarCircularLabels
			},
			{
				key: 'bar-circular-labels-double',
				title: 'Energy consumption vs green energy production',
				value: 'data/ranking/bar-circular-double.json',
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
				fn: demoTreemapJson
			},
			{
				key: 'treemap-circular',
				title: 'Tech revinue',
				value: 'data/comparison/treemap-circular.json',
				// originally from "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/11_SevCatOneNumNestedOneObsPerGroup.csv",
				fn: demoTreemapCircular
			},
			{
				key: 'dendrogram',
				title: 'Employee structure',
				value: 'data/comparison/dendrogram.json',
				fn: demoDendrogram
			},
			{
				key: 'doughnut',
				title: 'Example doughnut chart',
				value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
				fn: demoDoughnut
			},
			{
				key: 'pie',
				title: 'Example pie chart',
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
				fn: demoArc
			},
			{
				key: 'network',
				title: 'Reasearch team network',
				value: 'data/flow/network.json',
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
