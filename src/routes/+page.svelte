<script lang="ts">
  import { onMount } from "svelte";

  import Collection from "$lib/components/collection/Collection.svelte";
  import Menu from "$lib/components/menu/Menu.svelte";
  import D3Demo from "$lib/components/d3/D3Demo.svelte";

  let elements = [];

  onMount(() => {
    elements = document.querySelectorAll(".scroll-section");
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    let currentSection = "";
    elements.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });
    if (currentSection) {
      const url = new URL(window.location);
      url.searchParams.set("top", currentSection);
      window.history.pushState({}, "", url);
    }
  }

  const data = [
    {
      category: "distribution",
      graphs: [
        {
          key: "histogram",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv",
        },
        {
          key: "histogram-double",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv",
        },

        {
          key: "density",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv",
        },
        {
          key: "density-double",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv",
        },
        {
          key: "density-double-b2b",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv",
        },
        {
          key: "ridgeline",
          value:
            "https://raw.githubusercontent.com/zonination/perceptions/master/probly.csv",
        },
        {
          key: "ridgeline-advanced",
          value:
            "https://raw.githubusercontent.com/zonination/perceptions/master/probly.csv",
        },
      ],
    },
    {
      category: "correlation",
      graphs: [
        {
          key: "scatter",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv",
        },
        {
          key: "heatmap",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv",
        },
        {
          key: "heatmap-advanced",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv",
        },
        {
          key: "correlogram",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_correlogram.csv",
        },
        {
          key: "bubble",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv",
        },
        {
          key: "bubble-advanced",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv",
        },
        {
          key: "scatter-connected",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
        },
        {
          key: "scatter-connected-multi",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv",
        },
        {
          key: "scatter-connected-smoothe",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
        },
        {
          key: "density-shaded",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_for_density2d.csv",
        },
      ],
    },
    {
      category: "ranking",
      graphs: [
        {
          key: "bar",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
        },
        {
          key: "bar-horizontal",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
        },
        {
          key: "bar-stacked",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv",
        },
        {
          key: "parallel",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv",
        },
        {
          key: "lolipop",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
        },
        {
          key: "lolipop-horizontal",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv",
        },
        {
          key: "lolipop-cleveland",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_cleveland.csv",
        },
        {
          key: "bar-circular",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum.csv",
        },
        {
          key: "bar-circular-labels",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum.csv",
        },
        {
          key: "bar-circular-labels-double",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum.csv",
        },
      ],
    },
    {
      category: "comparison",
      graphs: [
        {
          key: "treemap",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_hierarchy_1level.csv",
        },
        {
          key: "treemap-json",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram_full.json",
        },
        {
          key: "treemap-circular",
          value:
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/11_SevCatOneNumNestedOneObsPerGroup.csv",
        },
        {
          key: "dendrogram",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_dendrogram.json",
        },
        {
          key: "doughnut",
          value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
        },
        {
          key: "pie",
          value: { a: 9, b: 20, c: 30, d: 8, e: 12, f: 3, g: 7, h: 14 },
        },
      ],
    },
    {
      category: "flow",
      graphs: [
        {
          key: "arc",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json",
        },
        {
          key: "network",
          value:
            "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_network.json",
        },
        {
          key: "chord",
          value: [
            [11, 58, 89, 28],
            [51, 18, 20, 61],
            [80, 145, 80, 85],
            [103, 99, 40, 71],
          ],
        },
      ],
    },
  ];

  const config = {
    margin: { top: 100, right: 30, bottom: 20, left: 70 },
    size: { width: 460, height: 400 },
    bg: "transparent",
    padding: 0,
  };
</script>

<body style="margin: 0;">
  <div class="page">
    <Menu {data} />

    <div class="page-content">
      <h1 class="page-title">D3 demos in svelte</h1>

      {#each data as category}
        <Collection title={category.category}>
          {#each category.graphs as graph}
            <div>
              <D3Demo variant={graph.key} data={graph.value} {config} />
            </div>
          {/each}
        </Collection>
      {/each}
    </div>
  </div>
</body>

<style>
  .page {
    display: flex;
  }

  .page-title {
    margin: 0;
    padding: 10px;
    background-color: #aaa;
  }

  .page-content {
    flex: 1;
  }
</style>
