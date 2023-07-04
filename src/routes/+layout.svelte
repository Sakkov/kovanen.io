<script>
	import './styles.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import ScrollIndicators from './ScrollIndicators.svelte';
</script>

<div class="app">

	<ScrollIndicators />

	<Navbar />
	
	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
