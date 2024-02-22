<script lang="ts">
    import '$lib/article_styles.css';
	import itTuki360 from '$lib/images/it-tuki_w360.webp';
</script>

<section class="article-route">
  <slot />

  <div class="content">
    <img src={itTuki360} alt="it-tuki" width="180"/>
    <div>
        <h3>
            - Kovanen.io 2024
        </h3>
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
