import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center;"><h1>Kiitos tilauksesta!
    </h1>
    <p>Olemme yhteydessä sinuun mahdollisimman pian.
        <br>
        <a href="/"><span>⬅</span> Takaisin etusivulle</a></p>
</div>`;
});
export {
  Page as default
};
