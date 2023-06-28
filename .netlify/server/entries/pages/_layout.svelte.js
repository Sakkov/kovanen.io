import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const styles = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-vg1n2z.svelte-vg1n2z{background-color:var(--MediumDarkColor1);color:var(--LightColor1);text-align:left}footer.svelte-vg1n2z .content.svelte-vg1n2z{display:flex;width:100%;max-width:2000px;text-align:left;justify-content:space-evenly;margin:40px auto}footer.svelte-vg1n2z ul.svelte-vg1n2z{list-style:none;padding:0}footer.svelte-vg1n2z li.svelte-vg1n2z{margin:10px 0}footer.svelte-vg1n2z a.svelte-vg1n2z{color:var(--LightColor1);text-decoration:none}footer.svelte-vg1n2z a.svelte-vg1n2z:hover{color:var(--MediumLightColor1)}.footer-cc.svelte-vg1n2z.svelte-vg1n2z{text-align:center;background-color:var(--DarkColor1);padding:15px;font-size:0.9em}@media screen and (max-width: 768px){footer.svelte-vg1n2z .content.svelte-vg1n2z{flex-direction:column;width:max-content;max-width:100%;margin:0 auto}footer.svelte-vg1n2z .content .text.svelte-vg1n2z{margin:10px;background-color:var(--MediumColor1);color:var(--LightColor1);border-radius:24px;padding:20px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-vg1n2z"><div class="content svelte-vg1n2z"><h2>kovanen.io</h2></div>
  <hr>
  <div class="content svelte-vg1n2z"><div class="text svelte-vg1n2z"><h3>Yritys</h3>
      <ul class="svelte-vg1n2z"><li class="svelte-vg1n2z"><a href="/" class="svelte-vg1n2z">Etusivu</a></li>
        <li class="svelte-vg1n2z"><a href="/meista" class="svelte-vg1n2z">Meistä</a></li>
        <li class="svelte-vg1n2z"><a href="/urat" class="svelte-vg1n2z">Urat</a></li>
        <li class="svelte-vg1n2z"><a href="/tiimi" class="svelte-vg1n2z">Tiimi</a></li>
        <li class="svelte-vg1n2z"><a href="/tietoturvaseloste" class="svelte-vg1n2z">Tietoturvaseloste</a></li></ul></div>
    <div class="text svelte-vg1n2z"><h3>Palvelut</h3>
      <ul class="svelte-vg1n2z"><li class="svelte-vg1n2z"><a href="/it-tuki/yrityksille" class="svelte-vg1n2z">IT-tuki yrityksille</a></li>
        <li class="svelte-vg1n2z"><a href="/it-tuki/yksityisille" class="svelte-vg1n2z">IT-tuki yksityishenkilöille</a></li>
        <li class="svelte-vg1n2z"><a href="/verkkosivut" class="svelte-vg1n2z">Verkkosivut</a></li>
        <li class="svelte-vg1n2z"><a href="/hakukoneoptimointi" class="svelte-vg1n2z">Hakukone optimointi</a></li>
        <li class="svelte-vg1n2z"><a href="/kyberturvallisuus/yksityisille" class="svelte-vg1n2z">Kyberturvallisuus yksityishenkilöille</a></li>
        <li class="svelte-vg1n2z"><a href="/kyberturvallisuus/yrityksille" class="svelte-vg1n2z">Kyberturvallisuus yrityksille</a></li>
        <li class="svelte-vg1n2z"><a href="/mainostus" class="svelte-vg1n2z">Mainostus</a></li>
        <li class="svelte-vg1n2z"><a href="/konsultointi" class="svelte-vg1n2z">Konsultointi</a></li>
        <li class="svelte-vg1n2z"><a href="/ai" class="svelte-vg1n2z">Tekoäly ja koneoppiminen</a></li>
        <li class="svelte-vg1n2z"><a href="/iot" class="svelte-vg1n2z">IoT</a></li>
        <li class="svelte-vg1n2z"><a href="https://wiki.kovanen.io" class="svelte-vg1n2z">wiki.kovanen.io</a></li></ul></div>
    <div class="text svelte-vg1n2z"><h3>Yhteystiedot</h3>
      <ul class="svelte-vg1n2z"><li class="svelte-vg1n2z">Saku Kovanen</li>
        <li class="svelte-vg1n2z"><a href="mailto:saku@kovanen.io" class="svelte-vg1n2z">saku@kovanen.io</a></li>
        <li class="svelte-vg1n2z"><a href="tel:+358442365454" class="svelte-vg1n2z">+358 44 236 5454</a></li>
        <li class="svelte-vg1n2z"><a href="https://www.linkedin.com/in/saku-kovanen-055351180/" class="svelte-vg1n2z">LinkedIn</a></li>
        <li class="svelte-vg1n2z"><a href="https://sakukovanen.fi" class="svelte-vg1n2z">sakukovanen.fi</a></li>
        <li class="svelte-vg1n2z"><a href="https://kovanen.io" class="svelte-vg1n2z">kovanen.io</a></li>
        <li class="svelte-vg1n2z">3261924-6</li></ul></div></div>
  <div class="footer-cc svelte-vg1n2z"><span>© kovanen.io 2023 
    </span>
    |
    <a href="/tietoturvaseloste" class="svelte-vg1n2z">Tietoturvaseloste
    </a></div>
</footer>`;
});
const arrowDown = "/_app/immutable/assets/arrow-down.c1ecb22a.svg";
const ScrollIndicators_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scroll-indicator.svelte-1fhi6ul{position:fixed;bottom:10px;left:50%;transform:translateX(-50%);font-size:2em;z-index:100}",
  map: null
};
const ScrollIndicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="scrollIndicator"></div>
<div class="scroll-indicator svelte-1fhi6ul"><span><img${add_attribute("src", arrowDown, 0)} alt="scroll down" width="50" height="50"></span>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(ScrollIndicators, "ScrollIndicators").$$render($$result, {}, {}, {})}
	
	<main>${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
