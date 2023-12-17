<script>
	import { fly } from 'svelte/transition';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import 'svelte-highlight/styles/github.css';

	export let code = '';
	let isOpen = false;
	let isCoppied = false;

	function toggleDrawer() {
		isOpen = !isOpen;
	}

	function copyCode() {
		isCoppied = true;
		navigator.clipboard.writeText(code);
	}
</script>

Code:
<button on:click={toggleDrawer}>{isOpen ? 'hide' : 'show'}</button>
<button on:click={copyCode}>{isCoppied ? 'saved' : 'coppy'}</button>

{#if isOpen}
	<div transition:fly={{ y: isOpen ? 0 : 200 }}>
		<Highlight language={typescript} {code} />
	</div>
{/if}
