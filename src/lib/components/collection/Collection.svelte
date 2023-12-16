<script lang="ts">
  export let title = "";
</script>

<div class="collection-container">
  <h2 id="{title}-title" class="title">{title}</h2>
  <slot />
  <hr />
</div>

<style>
  .collection-container {
    margin-bottom: 50px;
    position: relative;
  }

  .title {
    position: sticky;
    top: 0;
    background-color: #ccc;
    padding: 10px;
    margin: 0;
    z-index: 2;
  }
</style>
