import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as setOnSetGetEnv, t as getEnv$1 } from "./runtime_CbHAOOc6.mjs";
import { makeGenericAPIRouteHandler } from "@keystatic/core/api/generic";
import { collection, config, fields, singleton } from "@keystatic/core";
// \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
// node_modules/@keystatic/astro/dist/keystatic-astro-api.js
function makeHandler(_config) {
	return async function keystaticAPIRoute(context) {
		var _config$clientId, _config$clientSecret, _config$secret;
		const { body, headers, status } = await makeGenericAPIRouteHandler({
			..._config,
			clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : getSecret("KEYSTATIC_GITHUB_CLIENT_ID"),
			clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : getSecret("KEYSTATIC_GITHUB_CLIENT_SECRET"),
			secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : getSecret("KEYSTATIC_SECRET")
		}, { slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG" })(context.request);
		return new Response(body, {
			status,
			headers
		});
	};
}
// src/data/categories.ts
var categories = [
	{
		slug: "analgesics",
		label: "Analgesic/Antiinflammatory/Antipyretics",
		short: "Analgesics"
	},
	{
		slug: "antibiotics",
		label: "Antibiotics/Antibacterial/Antifungal",
		short: "Antibiotics"
	},
	{
		slug: "antimalarials",
		label: "Antimalarials",
		short: "Antimalarials"
	},
	{
		slug: "corticosteroids",
		label: "Corticosteroids",
		short: "Corticosteroids"
	},
	{
		slug: "antacids",
		label: "Antacids",
		short: "Antacids"
	},
	{
		slug: "ors-electrolytes",
		label: "ORS/Electrolytes",
		short: "ORS/Electrolytes"
	},
	{
		slug: "lifestyle",
		label: "Lifestyle",
		short: "Lifestyle"
	},
	{
		slug: "antihelmintics",
		label: "Antihelmintics",
		short: "Antihelmintics"
	},
	{
		slug: "antifungals",
		label: "Antifungals",
		short: "Antifungals"
	},
	{
		slug: "respiratory-support",
		label: "Cough/Cold/Respiratory Support",
		short: "Respiratory"
	},
	{
		slug: "vitamins-supplements",
		label: "Vitamins/Supplements/Hemanitics",
		short: "Vitamins"
	}
];
// keystatic.config.ts
var keystatic_config_default = config({
	storage: { kind: "local" },
	ui: { brand: { name: "SAGAR" } },
	collections: {
		products: collection({
			label: "Products",
			slugField: "name",
			path: "src/content/products/*",
			format: { data: "json" },
			schema: {
				name: fields.slug({ name: {
					label: "Product name",
					validation: { isRequired: true }
				} }),
				genericName: fields.text({
					label: "Generic name",
					description: "Shown under the name, e.g. Ampicillin + Cloxacillin"
				}),
				category: fields.select({
					label: "Category",
					options: categories.map((c) => ({
						label: c.label,
						value: c.slug
					})),
					defaultValue: categories[0].slug
				}),
				type: fields.select({
					label: "Product type",
					options: [{
						label: "Prescription (Rx)",
						value: "rx"
					}, {
						label: "Over the counter (OTC)",
						value: "otc"
					}],
					defaultValue: "otc"
				}),
				available: fields.checkbox({
					label: "Currently available",
					defaultValue: true
				}),
				image: fields.image({
					label: "Product image",
					directory: "public/images/products",
					publicPath: "/images/products/"
				}),
				strength: fields.text({
					label: "Form & strength",
					description: "e.g. Doxycycline 100mg"
				}),
				packaging: fields.text({
					label: "Packaging",
					description: "e.g. 2 x 10"
				}),
				nafdacReg: fields.text({ label: "NAFDAC reg. no." }),
				description: fields.text({
					label: "More information",
					multiline: true
				}),
				order: fields.integer({
					label: "Display order",
					description: "Lower numbers appear first",
					defaultValue: 100
				})
			}
		}),
		jobs: collection({
			label: "Job openings",
			slugField: "title",
			path: "src/content/jobs/*",
			format: { data: "json" },
			schema: {
				title: fields.slug({ name: {
					label: "Role title",
					validation: { isRequired: true }
				} }),
				status: fields.select({
					label: "Status",
					description: "Closed roles stay in the CMS but disappear from the website",
					options: [{
						label: "Open",
						value: "open"
					}, {
						label: "Closed",
						value: "closed"
					}],
					defaultValue: "open"
				}),
				employmentType: fields.select({
					label: "Employment type",
					options: [
						{
							label: "Full-time",
							value: "Full-time"
						},
						{
							label: "Part-time",
							value: "Part-time"
						},
						{
							label: "Contract",
							value: "Contract"
						},
						{
							label: "Internship",
							value: "Internship"
						}
					],
					defaultValue: "Full-time"
				}),
				location: fields.text({
					label: "Location",
					description: "e.g. Lagos, Nigeria"
				}),
				datePosted: fields.date({
					label: "Date posted",
					defaultValue: { kind: "today" },
					validation: { isRequired: true }
				}),
				minimumQualification: fields.text({
					label: "Minimum qualification",
					description: "e.g. B.Pharm with 2 years experience"
				}),
				responsibilities: fields.array(fields.text({ label: "Responsibility" }), {
					label: "Responsibilities",
					itemLabel: (props) => props.value || "New responsibility"
				}),
				requirements: fields.array(fields.text({ label: "Requirement" }), {
					label: "Key requirements",
					itemLabel: (props) => props.value || "New requirement"
				})
			}
		}),
		media: collection({
			label: "Media",
			slugField: "title",
			path: "src/content/media/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				type: fields.select({
					label: "Type",
					options: [{
						label: "News / Press release",
						value: "news"
					}, {
						label: "Blog post",
						value: "blog"
					}],
					defaultValue: "news"
				}),
				date: fields.date({
					label: "Date",
					validation: { isRequired: true }
				}),
				coverImage: fields.image({
					label: "Cover image",
					directory: "public/images/media",
					publicPath: "/images/media/"
				}),
				summary: fields.text({
					label: "Summary",
					multiline: true
				}),
				content: fields.markdoc({ label: "Full article" })
			}
		})
	},
	singletons: {
		careersPage: singleton({
			label: "Careers page text",
			path: "src/content/careers-page",
			format: { data: "json" },
			schema: {
				intro: fields.text({
					label: "Intro line",
					multiline: true
				}),
				values: fields.array(fields.object({
					title: fields.text({ label: "Value" }),
					description: fields.text({
						label: "Short description",
						multiline: true
					})
				}), {
					label: "Our values",
					itemLabel: (props) => props.fields.title.value || "New value"
				}),
				employmentPolicy: fields.text({
					label: "Employment policy",
					description: "Blank lines create new paragraphs",
					multiline: true
				})
			}
		}),
		gallery: singleton({
			label: "Photo Gallery",
			path: "src/content/gallery",
			schema: { photos: fields.array(fields.object({
				image: fields.image({
					label: "Photo",
					directory: "public/images/gallery",
					publicPath: "/images/gallery/"
				}),
				alt: fields.text({ label: "Description" })
			}), {
				label: "Photos",
				itemLabel: (p) => p.fields.alt.value || "Photo"
			}) }
		})
	}
});
// node_modules/@keystatic/astro/internal/keystatic-api.js
var keystatic_api_exports = /* @__PURE__ */ __exportAll({
	ALL: () => ALL,
	all: () => all,
	prerender: () => false
});
var all = makeHandler({ config: keystatic_config_default });
var ALL = all;
// \0virtual:astro:page:node_modules/@keystatic/astro/internal/keystatic-api@_@js
var page = () => keystatic_api_exports;
export { page };
