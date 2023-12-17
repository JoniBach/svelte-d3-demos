<script lang="ts">
	import { onMount } from 'svelte';
	import { createDemo } from './createDemo';
	import CodeViewer from '../codeViewer/CodeViewer.svelte';

	export let variant: any = null;
	export let fn: any = null;
	export let title: string = '';
	export let data: any = null;
	export let config: object = {};

	let fnContent: string = '';

	const baseURL = 'https://github.com/JoniBach/svelte-d3-demos/tree/main/static/';

	onMount(() => {
		// createDemo(variant, data, config);
		fn(data, config);
		fnContent = fn.toString();
	});
</script>

<div id="{variant}-title" class="title">
	{variant}
</div>
<div
	class="container"
	style={`background: ${config?.bg || 'transparent'}; padding: ${config?.padding || '0'};`}
>
	{#if title}
		<div class="label">
			<h6>{title}</h6>
			<a class="source" href={baseURL + data}>
				{data}
			</a>
		</div>
	{/if}

	<div class="graph" id={variant} />
	<div class="example-code">
		<CodeViewer code={fnContent} {data} />
	</div>
	<div class="content"></div>
</div>

<style>
	.label {
		margin: 10px;
		padding: 0;
		font-size: 0.8rem;
	}
	.label h6 {
		margin: 0;
		padding: 0;
		font-size: 0.8rem;
	}
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

	.content {
		display: flex;
	}
</style>
