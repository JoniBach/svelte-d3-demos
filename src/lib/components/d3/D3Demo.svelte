<script lang="ts">
	import { onMount } from 'svelte';
	import { createDemo } from './createDemo';

	export let variant: any = null;
	export let data: any = null;
	export let config: object = {};

	onMount(() => createDemo(variant, data, config));
</script>

<div id="{variant}-title" class="title">
	{variant}
</div>
<div
	class="container"
	style={`background: ${config?.bg || 'transparent'}; padding: ${config?.padding || '0'};`}
>
	<div class="graph" id={variant} />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: fit-content;
		justify-content: center;
	}

	.title {
		font-size: 1.1rem;
		font-weight: bold;
		margin-bottom: 1rem;
		position: sticky;
		top: 48px;
		background-color: #eee;
		padding: 5px;
	}

	.graph {
	}
</style>
