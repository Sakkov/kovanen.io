<script>
  // import scripts

  // import elements
  import Form from "./TTTform.svelte";

  // import images
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
</script>

<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <title>verkkosivut it-tuki konsultointi kyberturvallisuus | kovanen.io</title>
  <meta name="description" content="kovanen" />
</svelte:head>

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

  section#tilaa {
    background-color: var(--MediumLightColor1);
    color: var(--DarkColor1);
  }

  section#peukku {
    background-color: var(--MediumDarkColor1);
    color: var(--DarkColor1);
    line-height: normal;
  }

  section#peukku .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 2000px;
  }

  section#peukku .img-container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  section#peukku img {
    width: 140%;
    transform: translateX(-40%);
    border-radius: 24px;
  }

  section#peukku .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section#peukku .text {
    z-index: 2;
    background-color: var(--LightColor1);
    padding: 20px;
    border-radius: 24px;
    width: max-content;
    height: max-content;
  }

  section#peukku .text h2 {
    margin: 20px 0;
  }

  section#verkkosivuja {
    background-color: var(--MediumLightColor1);
  }

  section#verkkosivuja a {
    text-decoration: none;
  }

  section#verkkosivuja img {
    border-radius: 24px;
  }

  section#it-tuki {
    background-color: var(--LightColor1);
    color: var(--LightColor1);
  }

  section#it-tuki .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0;
  }

  section#it-tuki img {
    height: auto;
    border-radius: 24px;
    max-width: 100vh;
    transform: scale(1.4);
  }

  section#it-tuki .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin: auto;
  }

  section#it-tuki .text {
    z-index: 2;
    background-color: var(--MediumDarkColor1);
    padding: 20px;
    border-radius: 24px;
    width: max-content;
    height: max-content;
  }
</style>
