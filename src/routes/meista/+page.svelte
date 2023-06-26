<script>
  import itTukiMeme from "$lib/images/it-tuki_meme.webp";
  import itTukiMeme360 from "$lib/images/it-tuki_meme_w360.webp";
  import etusivuSS360 from "$lib/images/kovanenio_etusivu_ss_w360.webp";
  import searchConsole from "$lib/images/search_console_ss_w360.webp";
  import kyberSecurity from "$lib/images/kybersecurity_lock_w360.webp";
  import bullseye from "$lib/images/bullseye_w360.webp";
</script>

<svelte:head>
  <title>Meistä</title>
  <meta name="description" content="Meistä" />
</svelte:head>

<section id="home">
  <div class="content">
    <h1>Meistä</h1>
    <p>
      Kovanen.io on teknologiapalveluyritys, joka on omistautunut auttamaan
      asiakkaitaan menestymään digitaalisessa maailmassa. Yrityksen perustaja, <a
        href="https://sakukovanen.fi">Saku Kovanen</a
      >, on kolmannen vuoden opiskelija Aalto-yliopistossa ja osa-aikainen
      yrittäjä, joka on intohimoinen teknologiasta ja sen mahdollisuuksista​​.
    </p>
  </div>
</section>

<section id="palvelut">
  <div class="content">
    <h2>Mitä teemme?</h2>
    <p>
      Tarjoamme monipuolisen valikoiman IT-palveluja, jotka kattavat kaiken
      IT-tuesta verkkosivujen suunnitteluun ja hakukoneoptimointiin. Tarjoamme
      palvelujamme sekä yrityksille että yksityishenkilöille.
    </p>
    <div class="blocks">
      <div class="block">
        <div class="block-grid">
          <div>
            <h3>IT-tuki</h3>
            <p>
              Tarjoamme IT-tukea sekä yrityksille että yksityishenkilöille. Ei
              ole väliä onko ongelma pieni tai suuri, olemme täällä
              auttaaksemme. 🤝
              <br />
              <a href="/it-tuki">Lue lisää</a>
            </p>
          </div>
          <img
            src={itTukiMeme360}
            alt="It-Tuki meme"
            width="360"
            height="360"
          />
        </div>
      </div>
      <div class="block">
        <div class="block-grid">
          <img
            src={etusivuSS360}
            alt="Verkkosivun kuvakaappaus"
            width="300"
            height="360"
          />
          <div>
            <h3>Verkkosivut</h3>
            <p>
              Rakennamme toimivia verkkosivuja, jotka auttavat yritystäsi
              kasvamaan ja tavoittamaan enemmän asiakkaita. 💻
              <br />
              <a href="/verkkosivut">Lue lisää</a>
            </p>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-grid">
          <div>
            <h3>Hakukoneoptimointi</h3>
            <p>
              Hakukoneoptimointi (SEO) on avainasemassa verkkosivuston
              näkyvyydessä. Autamme sinua parantamaan sivustosi näkyvyyttä
              hakukoneissa. 🔍
              <br />
              <a href="/hakukoneoptimointi">Lue lisää</a>
            </p>
          </div>
          <img
            src={searchConsole}
            alt="Google Search Console kuvakaappaus"
            width="360"
            height="360"
          />
        </div>
      </div>
      <div class="block">
        <div class="block-grid">
          <img src={kyberSecurity} alt="Kyberturvallisuutta kuvaava lukko" />
          <div>
            <h3>Kyberturvallisuus</h3>
            <p>
              Tarjoamme kyberturvallisuuspalveluita sekä yrityksille että
              yksityishenkilöille. Tavoitteenamme on varmistaa, että tietosi
              ovat turvassa. 🛡️
              <br />
              <a href="/kyberturvallisuus">Lue lisää</a>
            </p>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-grid">
          <div>
            <h3>Mainostus</h3>
            <p>
              Autamme yritystäsi tavoittamaan oikeat asiakkaat oikeaan aikaan
              tehokkailla mainoskampanjoilla. 📢
              <br />
              <a href="/mainostus">Lue lisää</a>
            </p>
          </div>
          <img
            src={bullseye}
            alt="Tikkataulu kuvaamaan mainosten osuvuutta"
            width="360"
            height="360"
          />
        </div>
      </div>
      <div class="block">
        <h3>Konsultointi</h3>
        <p>
          Tarjoamme konsultointipalveluja auttaaksemme yritystäsi navigoimaan
          digitaalisessa maisemassa.
        </p>
      </div>
      <div class="block">
        <h3>Tekoäly ja koneoppiminen</h3>
        <p>
          Hyödynnämme tekoälyn ja koneoppimisen uusimpia teknologioita
          auttaaksemme yritystäsi saavuttamaan tavoitteensa.
        </p>
      </div>
      <div class="block">
        <h3>IoT</h3>
        <p>
          IoT:n avulla voimme auttaa yritystäsi hyödyntämään älykkäiden
          laitteiden tarjoamia mahdollisuuksia.
        </p>
      </div>
    </div>
    <p>
      Yrityksemme tehtävä on auttaa sinua keskittymään siihen, missä olet
      parhaimmillasi. Ota yhteyttä meihin ja selvitetään, miten voimme auttaa
      sinua menestymään.
    </p>
  </div>
</section>

<style>
  section#home {
    text-align: center;
  }

  section#home .content {
    max-width: 800px;
    margin: 0 auto;
  }

  section#home h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  section#home p {
    font-size: 1.5rem;
  }

  section#palvelut {
    margin: 0 auto;
    background-color: var(--MediumLightColor1);
  }

  section#palvelut .content {
    max-width: 800px;
    margin: 0 auto;
  }

  .blocks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .block {
    padding: 1rem;
    border-radius: 24px;
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .block img {
    border-radius: 24px;
  }

  /* Every 3rd */
  .block:nth-child(3n) {
    background-color: var(--HighLightColor1light);
  }

  .block:nth-child(3n + 1) {
    background-color: var(--HighLightColor2light);
  }

  .block:nth-child(3n + 2) {
    background-color: var(--HighLightColor3light);
  }

  .block-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
  }

  /* Small screens */
  @media only screen and (max-width: 480px) {
    .block-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .block:nth-child(2n) .block-grid {
      flex-direction: column-reverse;
    }

    .block img {
      width: 240px;
      height: 240px;
    }
  }
</style>
