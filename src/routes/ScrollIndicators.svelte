<script lang="ts">
	// import scripts
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// import images
	import arrowDown from '$lib/images/arrow-down.svg';

	onMount(() => {
		window.onscroll = function () {
			// Scroll progress indicator
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;

			var scrollIndicator = document.getElementById('scrollIndicator');

			if (scrollIndicator instanceof HTMLElement) {
				scrollIndicator.style.width = scrolled + '%';
			}
		};
	});

	// Scroll down indicator
  let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div id="scrollIndicator" />
{#if y < 100}
	<div class="scroll-indicator" transition:fade={{ duration: 1000}}>
		<span><img src={arrowDown} alt="scroll down" width="50" height="50" /></span>
	</div>
{/if}

<style>
	.scroll-indicator {
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 2em;
		z-index: 2;
	}
</style>
