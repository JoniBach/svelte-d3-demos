<script lang="ts">
  import { onMount } from "svelte";

  import Collection from "$lib/components/collection/Collection.svelte";
  import Menu from "$lib/components/menu/Menu.svelte";
  import D3Demo from "$lib/components/d3/D3Demo.svelte";
  import { data } from "./newData";
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

  const config = {
    margin: { top: 50, right: 30, bottom: 20, left: 70 },
    size: { width: 400, height: 400 },
    bg: "transparent",
    padding: 0,
  };

  onMount(() => {
    async function csvToJson(url) {
      const response = await fetch(url);
      const csv = await response.text();

      const lines = csv.split("\n");
      const headers = lines[0].split(",");

      return lines.slice(1).map((line) => {
        const data = line.split(",");
        return headers.reduce((obj, nextKey, index) => {
          obj[nextKey] = data[index];
          return obj;
        }, {});
      });
    }

    // URL of the CSV file
    const url = data[0].graphs[5].value;

    csvToJson(url)
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV data:", error);
      });
  });
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
