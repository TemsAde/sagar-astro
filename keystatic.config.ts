import { config, fields, collection, singleton } from '@keystatic/core';
import { categories } from './src/data/categories';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'SAGAR' } },

  collections: {
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Product name', validation: { isRequired: true } } }),
        genericName: fields.text({ label: 'Generic name', description: 'Shown under the name, e.g. Ampicillin + Cloxacillin' }),
        category: fields.select({
          label: 'Category',
          options: categories.map((c) => ({ label: c.label, value: c.slug })),
          defaultValue: categories[0].slug,
        }),
        type: fields.select({
          label: 'Product type',
          options: [
            { label: 'Prescription (Rx)', value: 'rx' },
            { label: 'Over the counter (OTC)', value: 'otc' },
          ],
          defaultValue: 'otc',
        }),
        available: fields.checkbox({ label: 'Currently available', defaultValue: true }),
        image: fields.image({ label: 'Product image', directory: 'public/images/products', publicPath: '/images/products/' }),
        strength: fields.text({ label: 'Form & strength', description: 'e.g. Doxycycline 100mg' }),
        packaging: fields.text({ label: 'Packaging', description: 'e.g. 2 x 10' }),
        nafdacReg: fields.text({ label: 'NAFDAC reg. no.' }),
        description: fields.text({ label: 'More information', multiline: true }),
        order: fields.integer({ label: 'Display order', description: 'Lower numbers appear first', defaultValue: 100 }),
      },
    }),

    jobs: collection({
      label: 'Job openings',
      slugField: 'title',
      path: 'src/content/jobs/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Role title', validation: { isRequired: true } } }),
        status: fields.select({
          label: 'Status',
          description: 'Closed roles stay in the CMS but disappear from the website',
          options: [
            { label: 'Open', value: 'open' },
            { label: 'Closed', value: 'closed' },
          ],
          defaultValue: 'open',
        }),
        employmentType: fields.select({
          label: 'Employment type',
          options: [
            { label: 'Full-time', value: 'Full-time' },
            { label: 'Part-time', value: 'Part-time' },
            { label: 'Contract', value: 'Contract' },
            { label: 'Internship', value: 'Internship' },
          ],
          defaultValue: 'Full-time',
        }),
        location: fields.text({ label: 'Location', description: 'e.g. Lagos, Nigeria' }),
        datePosted: fields.date({
          label: 'Date posted',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        minimumQualification: fields.text({ label: 'Minimum qualification', description: 'e.g. B.Pharm with 2 years experience' }),
        responsibilities: fields.array(fields.text({ label: 'Responsibility' }), {
          label: 'Responsibilities',
          itemLabel: (props) => props.value || 'New responsibility',
        }),
        requirements: fields.array(fields.text({ label: 'Requirement' }), {
          label: 'Key requirements',
          itemLabel: (props) => props.value || 'New requirement',
        }),
      },
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
        options: [
          { label: "News / Press release", value: "news" },
          { label: "Blog post", value: "blog" },
        ],
        defaultValue: "news",
      }),
      date: fields.date({ label: "Date", validation: { isRequired: true } }),
      coverImage: fields.image({
        label: "Cover image",
        directory: "public/images/media",
        publicPath: "/images/media/",
      }),
      summary: fields.text({ label: "Summary", multiline: true }),
      content: fields.markdoc({ label: "Full article" }),
    },
  }),

  },

  singletons: {
    careersPage: singleton({
      label: 'Careers page text',
      path: 'src/content/careers-page',
      format: { data: 'json' },
      schema: {
        intro: fields.text({ label: 'Intro line', multiline: true }),
        values: fields.array(
          fields.object({
            title: fields.text({ label: 'Value' }),
            description: fields.text({ label: 'Short description', multiline: true }),
          }),
          { label: 'Our values', itemLabel: (props) => props.fields.title.value || 'New value' },
        ),
        employmentPolicy: fields.text({
          label: 'Employment policy',
          description: 'Blank lines create new paragraphs',
          multiline: true,
        }),
      },
    }),


  gallery: singleton({
    label: "Photo Gallery",
    path: "src/content/gallery",
    schema: {
      photos: fields.array(
        fields.object({
          image: fields.image({
            label: "Photo",
            directory: "public/images/gallery",
            publicPath: "/images/gallery/",
          }),
          alt: fields.text({ label: "Description" }),
        }),
        { label: "Photos", itemLabel: (p) => p.fields.alt.value || "Photo" }
      ),
    },
  }),
  },
});
