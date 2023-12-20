<script lang="ts">
	import Vis from './../../lib/components/vis/Vis.svelte';
	import { onMount } from 'svelte';

	import Collection from '$lib/components/collection/Collection.svelte';
	import Menu from '$lib/components/menu/Menu.svelte';
	import { data } from '$lib/components/vis/data';
	let elements = [];
	let screenSize = 400;

	function handleScroll() {
		let currentSection = '';
		elements.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (pageYOffset >= sectionTop - sectionHeight / 3) {
				currentSection = section.id;
			}
		});
		if (currentSection) {
			const url = new URL(window.location);
			url.searchParams.set('top', currentSection);
			window.history.pushState({}, '', url);
		}
	}
	const defaultConfig = {
		margin: { top: 50, right: 30, bottom: 20, left: 100 },
		size: { width: screenSize, height: 400 },
		bg: 'transparent',
		padding: 0
	};

	// Check screen width on component mount and on window resize
	function checkScreenSize() {
		const innerWidth = window?.innerWidth;
		if (innerWidth <= 600) {
			screenSize = 200;
		} else if (innerWidth <= 900) {
			screenSize = 400;
		} else {
			screenSize = 600;
		}
	}

	onMount(() => {
		checkScreenSize();
		elements = document.querySelectorAll('.scroll-section');
		window.addEventListener('resize', checkScreenSize);
		window.addEventListener('scroll', handleScroll);
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
							<Vis
								fn={graph.fn}
								variant={graph.key}
								data={graph.value}
								title={graph.title}
								config={{ ...defaultConfig, ...graph.config }}
							/>
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
