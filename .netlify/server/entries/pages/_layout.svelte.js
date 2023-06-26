import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const styles = "";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-mftm1t.svelte-mftm1t{background-color:var(--MediumDarkColor1);color:var(--LightColor1);text-align:left}footer.svelte-mftm1t .content.svelte-mftm1t{display:flex;width:100%;max-width:2000px;text-align:left;justify-content:space-evenly;margin:40px auto}footer.svelte-mftm1t ul.svelte-mftm1t{list-style:none;padding:0}footer.svelte-mftm1t li.svelte-mftm1t{margin:10px 0}footer.svelte-mftm1t a.svelte-mftm1t{color:var(--LightColor1)}footer.svelte-mftm1t a.svelte-mftm1t:hover{color:var(--MediumLightColor1)}footer.svelte-mftm1t a.svelte-mftm1t:visited{color:var(--LightColor1)}.footer-cc.svelte-mftm1t.svelte-mftm1t{text-align:center;background-color:var(--DarkColor1);padding:15px}@media screen and (max-width: 768px){footer.svelte-mftm1t .content.svelte-mftm1t{flex-direction:column;width:max-content;max-width:100%;margin:0 auto}footer.svelte-mftm1t .content .text.svelte-mftm1t{margin:10px;background-color:var(--MediumColor1);color:var(--LightColor1);border-radius:24px;padding:20px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-mftm1t"><div class="content svelte-mftm1t"><h2>kovanen.io</h2></div>
  <hr>
  <div class="content svelte-mftm1t"><div class="text svelte-mftm1t"><h3>Yritys</h3>
      <ul class="svelte-mftm1t"><li class="svelte-mftm1t"><a href="/" class="svelte-mftm1t">Etusivu</a></li>
        <li class="svelte-mftm1t"><a href="/meista" class="svelte-mftm1t">Meistä</a></li>
        <li class="svelte-mftm1t"><a href="/urat" class="svelte-mftm1t">Urat</a></li>
        <li class="svelte-mftm1t"><a href="/tiimi" class="svelte-mftm1t">Tiimi</a></li>
        <li class="svelte-mftm1t"><a href="/tietoturvaseloste" class="svelte-mftm1t">Tietoturvaseloste</a></li></ul></div>
    <div class="text svelte-mftm1t"><h3>Palvelut</h3>
      <ul class="svelte-mftm1t"><li class="svelte-mftm1t"><a href="/it-tuki/yrityksille" class="svelte-mftm1t">IT-tuki yrityksille</a></li>
        <li class="svelte-mftm1t"><a href="/it-tuki/yksityisille" class="svelte-mftm1t">IT-tuki yksityishenkilöille</a></li>
        <li class="svelte-mftm1t"><a href="/verkkosivut" class="svelte-mftm1t">Verkkosivut</a></li>
        <li class="svelte-mftm1t"><a href="/hakukoneoptimointi" class="svelte-mftm1t">Hakukone optimointi</a></li>
        <li class="svelte-mftm1t"><a href="/kyberturvallisuus/yksityisille" class="svelte-mftm1t">Kyberturvallisuus yksityishenkilöille</a></li>
        <li class="svelte-mftm1t"><a href="/kyberturvallisuus/yrityksille" class="svelte-mftm1t">Kyberturvallisuus yrityksille</a></li>
        <li class="svelte-mftm1t"><a href="/mainostus" class="svelte-mftm1t">Mainostus</a></li>
        <li class="svelte-mftm1t"><a href="/konsultointi" class="svelte-mftm1t">Konsultointi</a></li>
        <li class="svelte-mftm1t"><a href="/ai" class="svelte-mftm1t">Tekoäly ja koneoppiminen</a></li>
        <li class="svelte-mftm1t"><a href="/iot" class="svelte-mftm1t">IoT</a></li>
        <li class="svelte-mftm1t"><a href="https://wiki.kovanen.io" class="svelte-mftm1t">wiki.kovanen.io</a></li></ul></div>
    <div class="text svelte-mftm1t"><h3>Yhteystiedot</h3>
      <ul class="svelte-mftm1t"><li class="svelte-mftm1t">Saku Kovanen</li>
        <li class="svelte-mftm1t"><a href="mailto:saku@kovanen.io" class="svelte-mftm1t">saku@kovanen.io</a></li>
        <li class="svelte-mftm1t"><a href="tel:+358442365454" class="svelte-mftm1t">+358 44 236 5454</a></li>
        <li class="svelte-mftm1t"><a href="https://www.linkedin.com/in/saku-kovanen-055351180/" class="svelte-mftm1t">LinkedIn</a></li>
        <li class="svelte-mftm1t"><a href="https://sakukovanen.fi" class="svelte-mftm1t">sakukovanen.fi</a></li>
        <li class="svelte-mftm1t"><a href="https://kovanen.io" class="svelte-mftm1t">kovanen.io</a></li>
        <li class="svelte-mftm1t">3261924-6</li></ul></div></div>
  <div class="footer-cc svelte-mftm1t">© kovanen.io 2023 Kaikki oikeudet pidätetään. <a href="/tietoturvaseloste" class="svelte-mftm1t">Tietoturvaseloste</a></div>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app"><main>${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
