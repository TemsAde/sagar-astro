import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { i as renderComponent, l as renderTemplate } from "./server_DGtkRc-i.mjs";
import { t as createComponent } from "./compiler_CER9PnxM.mjs";
// node_modules/@keystatic/astro/internal/keystatic-astro-page.astro
var keystatic_astro_page_exports = /* @__PURE__ */ __exportAll({
	default: () => $$KeystaticAstroPage,
	file: () => $$file,
	prerender: () => false,
	url: () => void 0
});
var $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Keystatic", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "C:/dev/sagar-astro/node_modules/@keystatic/astro/internal/keystatic-page.js",
		"client:component-export": "Keystatic"
	})}`;
}, "C:/dev/sagar-astro/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);
var $$file = "C:/dev/sagar-astro/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
// \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro
var page = () => keystatic_astro_page_exports;
export { page };
