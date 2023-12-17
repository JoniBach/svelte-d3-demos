<script>
	import { fly } from 'svelte/transition';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import 'svelte-highlight/styles/github.css';

	export let code = '';
	export let data = '';
	let isOpen = false;
	let codeIsCoppied = false;
	let dataIsCoppied = false;

	function toggleDrawer() {
		isOpen = !isOpen;
	}

	function copyCode() {
		codeIsCoppied = true;
		navigator.clipboard.writeText(code);
	}

	async function copyData() {
		const response = await fetch(data);
		const rawData = await response.text();
		navigator.clipboard.writeText(rawData);
		dataIsCoppied = true;
	}
</script>

<div class="toolbar">
	<button on:click={toggleDrawer}>{isOpen ? 'hide' : 'show'} code</button>
	<button on:click={copyCode}>{codeIsCoppied ? 'saved' : 'coppy'} code</button>
	<button on:click={copyData}>{dataIsCoppied ? 'saved' : 'coppy'} data</button>
</div>

{#if isOpen}
	<div transition:fly={{ y: isOpen ? 0 : 200 }}>
		<Highlight language={typescript} {code} />
	</div>
{/if}

<style>
	.toolbar {
		display: flex;
		margin: 10px;
	}
</style>
