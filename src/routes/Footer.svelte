<script>
  import fiksu from "$lib/images/fiksu.svg";
  import pohjolanpolte from "$lib/images/pohjolanpolte.png";
</script>

<section class="yhteistyossa">
  <h2 style="color: black">Yhteistyössä:</h2>
  <a href="https://fiksukuljetus.com/">
    <img src={fiksu} alt="Fiksukuljetus" />
  </a>
  <a href="https://pohjolanpolte.fi/">
    <img src={pohjolanpolte} alt="Pohjolanpolte" />
  </a>
</section>

<footer>
  <div class="content">
    <h2>kovanen.io</h2>
  </div>
  <hr />
  <div class="content">
    <div class="text">
      <h3>Yritys</h3>
      <ul>
        <li>
          <a href="/">Etusivu</a>
        </li>
        <li>
          <a href="/meista">Meistä</a>
        </li>
        <li>
          <a href="/urat">Urat</a>
        </li>
        <li>
          <a href="/tiimi">Tiimi</a>
        </li>
        <li>
          <a href="/articles">Artikkelit</a>
        </li>
        <li>
          <a href="/tietoturvaseloste">Tietoturvaseloste</a>
        </li>
      </ul>
    </div>
    <div class="text">
      <h3>Palvelut</h3>
      <ul>
        <li>
          <a href="/it-tuki/yrityksille">IT-tuki yrityksille</a>
        </li>
        <li>
          <a href="/it-tuki/yksityisille">IT-tuki yksityishenkilöille</a>
        </li>
        <li>
          <a href="/verkkosivut">Verkkosivut</a>
        </li>
        <li>
          <a href="/hakukoneoptimointi">Hakukone optimointi</a>
        </li>
        <li>
          <a href="/kyberturvallisuus/yksityisille"
            >Kyberturvallisuus yksityishenkilöille</a
          >
        </li>
        <li>
          <a href="/kyberturvallisuus/yrityksille"
            >Kyberturvallisuus yrityksille</a
          >
        </li>
        <li>
          <a href="/mainostus">Mainostus</a>
        </li>
        <li>
          <a href="/konsultointi">Konsultointi</a>
        </li>
        <li>
          <a href="/ai">Tekoäly ja koneoppiminen</a>
        </li>
        <li>
          <a href="/iot">IoT</a>
        </li>
        <li>
          <a href="https://wiki.kovanen.io">wiki.kovanen.io</a>
        </li>
        <li>
          <a href="https://fingpt.fi">fingpt.fi</a>
        </li>
      </ul>
    </div>
    <div class="text">
      <h3>Yhteystiedot</h3>
      <ul>
        <li>Saku Kovanen</li>
        <li>
          <a href="mailto:saku@kovanen.io">saku@kovanen.io</a>
        </li>
        <li>
          <a href="tel:+358442365454">+358 44 236 5454</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/saku-kovanen-055351180/"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="https://sakukovanen.fi">sakukovanen.fi</a>
        </li>
        <li>
          <a href="https://kovanen.io">kovanen.io</a>
        </li>
        <li>
          <a href="https://tietopalvelu.ytj.fi/yritys/3261924-6">3261924-6</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-cc">
    <span> © kovanen.io 2023 </span>
    |
    <a href="/tietoturvaseloste"> Tietoturvaseloste </a>
  </div>
</footer>

<style>

  .yhteistyossa {
    min-height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 20px 0;
    text-align: center;
    padding: 1rem;
  }

  .yhteistyossa h2 {
    width: 100%;
    margin: 20px 0;
  }

  .yhteistyossa a {
    text-decoration: none;
    width: 400px;
    display: block;
    text-align: center;
  }

  .yhteistyossa img {
    max-height: 200px;
    width: auto;
    margin: 10px auto;
  }

  footer {
    background-color: var(--MediumDarkColor1);
    color: var(--LightColor1);
    text-align: left;
  }

  footer .content {
    display: flex;
    width: 100%;
    max-width: 2000px;
    text-align: left;
    justify-content: space-evenly;
    margin: 40px auto;
  }

  footer ul {
    list-style: none;
    padding: 0;
  }

  footer li {
    margin: 10px 0;
  }

  footer a {
    color: var(--LightColor1);
    text-decoration: none;
  }

  footer a:hover {
    color: var(--MediumLightColor1);
  }

  .footer-cc {
    text-align: center;
    background-color: var(--DarkColor1);
    padding: 15px;
    font-size: 0.9em;
  }

  /* SMALL DISPLAY STYLES */
  @media screen and (max-width: 768px) {
    footer .content {
      flex-direction: column;
      width: max-content;
      max-width: 100%;
      margin: 0 auto;
    }

    footer .content .text {
      margin: 10px;
      background-color: var(--MediumColor1);
      color: var(--LightColor1);
      border-radius: 24px;
      padding: 20px;
    }
  }
</style>
