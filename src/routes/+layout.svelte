<script lang="ts">
	import './styles.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import ScrollIndicators from './ScrollIndicators.svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean = false;
	const options: Options = {
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="app" use:inview={options} on:inview_change={handleChange}>
	<ScrollIndicators />

	{#if isInView}
	<Navbar />
	{/if}

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
