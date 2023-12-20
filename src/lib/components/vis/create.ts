import { demoDensityDouble } from './variants/distribution/densityDouble';
import { demoHistogramDouble } from './variants/distribution/histogramDouble';
import { demoHistogram } from './variants/distribution/histogram';
import { demoDensity } from './variants/distribution/density'; // Added import statement
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
