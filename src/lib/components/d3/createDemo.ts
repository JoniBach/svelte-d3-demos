import { demoDensityDouble } from './demo/distribution/densityDouble';
import { demoHistogramDouble } from './demo/distribution/histogramDouble';
import { demoHistogram } from './demo/distribution/histogram';
import { demoDensity } from './demo/distribution/density'; // Added import statement
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
import { demoTreemap } from './demo/comparison/treemap';
import { demoTreemapJson } from './demo/comparison/treemapJson';
import { demoArc } from './demo/flow/arc';
import { demoChord } from './demo/flow/chord';
import { demoNetwork } from './demo/flow/network';

export const createDemo = (variant: string, data: string, config: object) => {


	switch (variant) {
		// distribution
		case 'histogram':
			demoHistogram(data, config);
			break;
		case 'histogram-double':
			demoHistogramDouble(data, config);
			break;
		case 'density':
			demoDensity(data, config);
			break;
		case 'density-double':
			demoDensityDouble(data, config);
			break;
		case 'density-double-b2b':
			demoDensityDoubleB2B(data, config);
			break;
		case 'ridgeline':
			demoRidgeLine(data, config);
			break;

		// correlation
		case 'scatter':
			demoScatter(data, config);
			break;
		case 'heatmap':
			demoHeatmap(data, config);
			break;
		case 'heatmap-advanced':
			demoHeatmapAdvanced(data, config);
			break;
		case 'correlogram':
			demoCorrelogram(data, config);
			break;
		case 'bubble':
			demoBubble(data, config);
			break;
		case 'bubble-advanced':
			demoBubbleAdvanced(data, config);
			break;
		case 'scatter-connected':
			demoScatterConnected(data, config);
			break;
		case 'scatter-connected-multi':
			demoScatterConnectedMulti(data, config);
			break;
		case 'scatter-connected-smoothe':
			demoScatterConnectedSmoothe(data, config);
			break;
		case 'density-shaded':
			demoDensityShaded(data, config);
			break;

		// ranking
		case 'bar':
			demoBar(data, config);
			break;
		case 'bar-horizontal':
			demoBarHorizontal(data, config);
			break;
		case 'bar-stacked':
			demoBarStacked(data, config);
			break;
		case 'parallel':
			demoParallel(data, config);
			break;
		case 'lolipop':
			demoLolipop(data, config);
			break;
		case 'lolipop-horizontal':
			demoLolipopHorizontal(data, config);
			break;
		case 'lolipop-cleveland':
			demoLolipopCleveland(data, config);
			break;
		case 'bar-circular':
			demoBarCircular(data, config);
			break;
		case 'bar-circular-labels':
			demoBarCircularLabels(data, config);
			break;
		case 'bar-circular-labels-double':
			demoBarCircularLabelsDouble(data, config);
			break;

		// comparison
		case 'treemap':
			demoTreemap(data, config);
			break;
		case 'treemap-json':
			demoTreemapJson(data, config);
			break;
		case 'treemap-circular':
			demoTreemapCircular(data, config);
			break;
		case 'dendrogram':
			demoDendrogram(data, config);
			break;
		case 'doughnut':
			demoDoughnut(data, config);
			break;
		case 'pie':
			demoPie(data, config);
			break;

		// flow
		case 'arc':
			demoArc(data, config);
			break;
		case 'chord':
			demoChord(data, config);
			break;
		case 'network':
			demoNetwork(data, config);
			break;

		// additional variant
		case 'ridgeline-advanced':
			demoRidgeLineAdvanced(data, config);
			break;

		default:
			// handle unknown variant
			console.error(`Unknown variant: ${variant}`);
			break;
	}
};
