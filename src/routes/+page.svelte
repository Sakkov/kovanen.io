<script>
  // import scripts
  import { onMount } from "svelte";

  // import elements
  import Form from "./TTTform.svelte";

  // import images
  import arrowDown from "$lib/images/arrow-down.svg";
  import peukku from "$lib/images/mainoskuva12_4_2022.webp";
  import peukku360 from "$lib/images/mainoskuva12_4_2022_w360.webp";
  import verkkosivu1 from "$lib/images/screenshots/1_q80_320x180.webp";
  import verkkosivu2 from "$lib/images/screenshots/2_q80_320x180.webp";
  import verkkosivu3 from "$lib/images/screenshots/3_q80_320x180.webp";
  import verkkosivu4 from "$lib/images/screenshots/4_q80_320x180.webp";
  import verkkosivu5 from "$lib/images/screenshots/5_q80_320x180.webp";
  import verkkosivu6 from "$lib/images/screenshots/6_q80_320x180.webp";
  import verkkosivu7 from "$lib/images/screenshots/7_q80_320x180.webp";
  import verkkosivu8 from "$lib/images/screenshots/8_q80_320x180.webp";
  import itTuki from "$lib/images/it-tuki.webp";
  import itTuki360 from "$lib/images/it-tuki_w360.webp";

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

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <title>verkkosivut it-tuki konsultointi kyberturvallisuus | kovanen.io</title>
  <meta name="description" content="kovanen" />
</svelte:head>

<div id="scrollIndicator" />
<div class="scroll-indicator">
  <span><img src={arrowDown} alt="scroll down" width="50" height="50" /></span>
</div>

<section id="home">
  <div class="content">
    <h1>kovanen.io</h1>
    <p>jotta voisit keskittyä, siihen missä olet parhaimmillasi.</p>
  </div>
</section>

<section id="tilaa">
  <div class="content">
    <h2>
      Tilaa ilmainen verkkosivujen T<sup>3</sup> kartoitus!
    </h2>
    <h3>
      <strong>T</strong>ehokkuus, <strong>T</strong>oimivuus ja
      <strong>T</strong>urvallisuus.
    </h3>
    <p>
      Saat raportin, jossa on listattu mahdolliset ongelmat ja niiden
      korjausvinkit.
    </p>
    <Form />
  </div>
</section>

<section id="peukku">
  <div class="content">
    <div class="text-container">
      <div class="text">
        <h3>Missä sinä tarvitsisit apua?</h3>
        <h2>IT-tuki</h2>
        <h2>verkkosivut</h2>
        <h2>verkkomainostus</h2>
        <h2>hakukone optimointi</h2>
        <h2>kyberturvallisuus</h2>
        <h2>konsultointi</h2>
        <h2>tekoäly ja koneoppiminen</h2>
        <h3>
          <a href="mailto:saku@kovanen.io">saku@kovanen.io</a>
        </h3>
      </div>
    </div>
    <div class="img-container">
      <img src={peukku} alt="Iloinen it-tuki" class="only-large" />
      <img
        src={peukku360}
        alt="Iloinen web kehitys"
        class="medium-and-smaller"
      />
    </div>
  </div>
</section>

<section id="verkkosivuja">
  <div class="content">
    <h2>Rakennamme verkkosivuja, jotka toimivat.</h2>
    <div class="img-container">
      <a href="https://sakukovanen.fi">
        <img
          src={verkkosivu1}
          alt="Saku Kovanen Portfolio"
          width="300"
          height="180"
        />
        <!-- Saku Kovanen Portfolio sivu -->
      </a>
      <a href="https://fiksukuljetus.com">
        <img src={verkkosivu2} alt="Muutto Tampere" width="300" height="180" />
        <!-- Fiksukuljetus -->
      </a>
      <a href="https://haikangrilli.fi">
        <img src={verkkosivu3} alt="Grilli Pirkkala" width="300" height="180" />
        <!-- Haikan Grilli -->
      </a>
      <a href="https://kauvanto.fi">
        <img
          src={verkkosivu4}
          alt="Isännöinti Helsinki"
          width="300"
          height="180"
        />
        <!-- Isännöinti Kauvanto -->
      </a>
      <a href="htpps://kauvanto.com">
        <img
          src={verkkosivu5}
          alt="Psykoterapia Oulu"
          width="300"
          height="180"
        />
        <!-- Psykoterapiapalvelu Kauvanto -->
      </a>
      <a href="https://mary-mc-donald-rissanen.com">
        <img
          src={verkkosivu6}
          alt="Finnish-Canadian writer"
          width="300"
          height="180"
        />
        <!-- Mary McDonald-Rissanen -->
      </a>
      <a href="https://randombible.kovanen.io">
        <img
          src={verkkosivu7}
          alt="random bible verse"
          width="300"
          height="180"
        />
        <!-- Random Bible -->
      </a>
      <a href="https://wiki.kovanen.io">
        <img src={verkkosivu8} alt="suomi wiki" width="300" height="180" />
        <!-- wiki.Kovanen.io -->
      </a>
    </div>
  </div>
</section>

<section id="it-tuki">
  <div class="content">
    <div class="text-container">
      <div class="text">
        <h2>IT-tuki asiantuntemusta</h2>
        <div class="img-container">
          <img
            src={itTuki}
            alt="it-tuki"
            width="500"
            height="375"
            class="only-large"
          />
          <img
            src={itTuki360}
            alt="it-tuki"
            width="360"
            height="270"
            class="medium-and-smaller"
          />
        </div>
        <h3>
          Mikään ongelma ei ole liian pieni tai liian suuri. Autamme sinua
          kaikissa IT-tuki asioissa.
        </h3>
      </div>
    </div>
  </div>
</section>

<style>
  section#home {
    text-align: center;
  }

  .scroll-indicator {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2em;
    z-index: 100;
  }
</style>
