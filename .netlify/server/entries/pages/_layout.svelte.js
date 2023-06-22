import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const styles = "";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-n6ueu0.svelte-n6ueu0{background-color:var(--MediumDarkColor1);color:var(--LightColor1);text-align:left}footer.svelte-n6ueu0 .content.svelte-n6ueu0{display:flex;width:100%;max-width:2000px;text-align:left;justify-content:space-evenly;margin:40px auto}footer.svelte-n6ueu0 ul.svelte-n6ueu0{list-style:none;padding:0}footer.svelte-n6ueu0 li.svelte-n6ueu0{margin:10px 0}footer.svelte-n6ueu0 a.svelte-n6ueu0{color:var(--LightColor1)}footer.svelte-n6ueu0 a.svelte-n6ueu0:hover{color:var(--MediumLightColor1)}footer.svelte-n6ueu0 a.svelte-n6ueu0:visited{color:var(--LightColor1)}.footer-cc.svelte-n6ueu0.svelte-n6ueu0{text-align:center;background-color:var(--DarkColor1);padding:15px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-n6ueu0"><div class="content svelte-n6ueu0"><h2>kovanen.io
		</h2></div>
	<hr>
	<div class="content svelte-n6ueu0"><div class="text"><h3>Yritys
			</h3>
			<ul class="svelte-n6ueu0"><li class="svelte-n6ueu0"><a href="/" class="svelte-n6ueu0">Etusivu</a></li>
				<li class="svelte-n6ueu0"><a href="/meista" class="svelte-n6ueu0">Meistä</a></li>
				<li class="svelte-n6ueu0"><a href="/urat" class="svelte-n6ueu0">Urat</a></li>
				<li class="svelte-n6ueu0"><a href="/tiimi" class="svelte-n6ueu0">Tiimi</a></li>
				<li class="svelte-n6ueu0"><a href="/tietoturvaseloste" class="svelte-n6ueu0">Tietoturvaseloste</a></li></ul></div>
		<div class="text"><h3>Palvelut
			</h3>
			<ul class="svelte-n6ueu0"><li class="svelte-n6ueu0"><a href="/it-tuki/yrityksille" class="svelte-n6ueu0">IT-tuki yrityksille</a></li>
				<li class="svelte-n6ueu0"><a href="/it-tuki/yksityisille" class="svelte-n6ueu0">IT-tuki yksityishenkilöille</a></li>
				<li class="svelte-n6ueu0"><a href="/verkkosivut" class="svelte-n6ueu0">Verkkosivut</a></li>
				<li class="svelte-n6ueu0"><a href="/hakukoneoptimointi" class="svelte-n6ueu0">Hakukone optimointi</a></li>
				<li class="svelte-n6ueu0"><a href="/kyberturvallisuus/yksityisille" class="svelte-n6ueu0">Kyberturvallisuus yksityishenkilöille</a></li>
				<li class="svelte-n6ueu0"><a href="/kyberturvallisuus/yrityksille" class="svelte-n6ueu0">Kyberturvallisuus yrityksille</a></li>
				<li class="svelte-n6ueu0"><a href="/mainostus" class="svelte-n6ueu0">Mainostus</a></li>
				<li class="svelte-n6ueu0"><a href="/konsultointi" class="svelte-n6ueu0">Konsultointi</a></li>
				<li class="svelte-n6ueu0"><a href="/ai" class="svelte-n6ueu0">Tekoäly ja koneoppiminen</a></li>
				<li class="svelte-n6ueu0"><a href="/iot" class="svelte-n6ueu0">IoT</a></li>
				<li class="svelte-n6ueu0"><a href="https://wiki.kovanen.io" class="svelte-n6ueu0">wiki.kovanen.io</a></li></ul></div>
		<div class="text"><h3>Yhteystiedot
			</h3>
			<ul class="svelte-n6ueu0"><li class="svelte-n6ueu0">Saku Kovanen
				</li>
				<li class="svelte-n6ueu0"><a href="mailto:saku@kovanen.io" class="svelte-n6ueu0">saku@kovanen.io</a>
				</li><li class="svelte-n6ueu0"><a href="tel:+358442365454" class="svelte-n6ueu0">+358 44 236 5454</a></li>
				<li class="svelte-n6ueu0"><a href="https://www.linkedin.com/in/saku-kovanen-055351180/" class="svelte-n6ueu0">LinkedIn</a></li>
				<li class="svelte-n6ueu0"><a href="https://sakukovanen.fi" class="svelte-n6ueu0">sakukovanen.fi</a></li>
				<li class="svelte-n6ueu0"><a href="https://kovanen.io" class="svelte-n6ueu0">kovanen.io</a></li>
				<li class="svelte-n6ueu0">3261924-6
				</li></ul></div></div>
	<div class="footer-cc svelte-n6ueu0">© kovanen.io 2023 Kaikki oikeudet pidätetään. <a href="/tietoturvaseloste" class="svelte-n6ueu0">Tietoturvaseloste</a></div>
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
