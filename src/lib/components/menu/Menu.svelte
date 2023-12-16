<script>
    export let data
    

  function navigateToElement(elementId) {
    const element = document.getElementById(elementId + '-title');
console.log(elementId, element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="sidebar">
    <div class="sidebar-content">
        {#each data as category}
            <div class="category" on:click={() => navigateToElement(category.category)}>
                {category.category}
            </div>
            {#each category.graphs as graph}
                <div class="item" on:click={() => navigateToElement(graph.key)}>
                    {graph.key}
                </div>
            {/each}
        {/each}
    </div>
</div>

<style>
    .sidebar {
        width: 200px;
        background-color: #f0f0f0;
		position: relative;
    }
    
    .sidebar-content {
        overflow-y: scroll;
        max-height: 100vh;

        position: sticky;
        top: 0;
    }
    
    .category {
        font-weight: bold;
        margin-bottom: 5px;
        cursor: pointer;
        background-color: #ccc;
        padding: 5px;
    }
        
    .item {
        cursor: pointer;
        margin-left: 20px;
        margin-bottom: 5px;
    }
    .sidebar-content::-webkit-scrollbar {
        display: none;
    }
</style>
