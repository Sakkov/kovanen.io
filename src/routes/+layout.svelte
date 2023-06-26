<script>
	import './styles.css';
	import Footer from './Footer.svelte';
	import ScrollIndicators from './ScrollIndicators.svelte';
</script>

<div class="app">

	<ScrollIndicators />
	
	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
