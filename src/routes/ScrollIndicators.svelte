<script>
  // import scripts
  import { onMount } from "svelte";

  // import images
  import arrowDown from "$lib/images/arrow-down.svg";

  onMount(() => {
    window.onscroll = function () {
      // Scroll progress indicator
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var scrollIndicator = document.getElementById("scrollIndicator");

      if (scrollIndicator instanceof HTMLElement) {
        scrollIndicator.style.width = scrolled + "%";
      }

      // Scroll down indicator
      var scrollIndicatorQuery = document.querySelector(".scroll-indicator");

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        if (scrollIndicatorQuery instanceof HTMLElement) {
          scrollIndicatorQuery.style.display = "none";
        }
      } else {
        if (scrollIndicatorQuery instanceof HTMLElement) {
          scrollIndicatorQuery.style.display = "block";
        }
      }
    };
  });
</script>

<div id="scrollIndicator" />
<div class="scroll-indicator">
  <span><img src={arrowDown} alt="scroll down" width="50" height="50" /></span>
</div>

<style>
  .scroll-indicator {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2em;
    z-index: 100;
  }
</style>