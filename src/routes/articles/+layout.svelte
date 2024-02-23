<script lang="ts">
  import { onMount } from "svelte";
  import "$lib/article_styles.css";
  import itTuki360 from "$lib/images/it-tuki_w360.webp";
  
  var title: string | null = "Wiki";
  var description: string | null = "Kovanen.io tarjoaa tekoälyyn, verkkosivuihin, it-tukeen, konsultointiin ja kyberturvallisuuteen liittyviä palveluita. Kovanen.io on vuonna 2022 perustettu yritys, joka tarjoaa asiakkailleen laadukkaita ja kustannustehokkaita ratkaisuja. Kovanen.io on suomalainen yritys, joka toimii pääasiassa Suomessa, mutta tarjoaa palveluitaan myös ulkomaille.";

  onMount(() => {
    // Find the first h1 element
    const h1 = document.querySelector("h1");

    // Find the first p element
    const p = document.querySelector("p");

    // Set the title variable to the text content of the h1 element
    if (h1) {
      title = h1.textContent;
      document.title = `${title} | Kovanen.io`;
    }

    // Set the description variable to the text content of the p element
    if (p) {
      description = p.textContent;
    }
  });
</script>

<svelte:head>
  <title>
    {title} | Kovanen.io
  </title>
  <meta name="description" content={description} />
</svelte:head>

<section class="article-route">
  <slot />

  <div class="content">
    <img src={itTuki360} alt="it-tuki" width="180" />
    <div>
      <h3>- Kovanen.io 2024</h3>
    </div>
  </div>
</section>

<style>
  section {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--MediumLightColor1);
    padding: 120px 80px;
    border-radius: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 600px) {
    section {
      padding: 100px 30px;
    }

    .content {
      flex-direction: column;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0;
  }

  img {
    border-radius: 24px;
    margin: 10px;
  }
</style>
