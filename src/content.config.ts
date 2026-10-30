import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    genericName: z.string().default(''),
    category: z.string(),
    type: z.enum(['rx', 'otc']).default('otc'),
    available: z.boolean().default(true),
    image: z.string().nullable().default(null),
    strength: z.string().default(''),
    packaging: z.string().default(''),
    nafdacReg: z.string().default(''),
    description: z.string().default(''),
    order: z.number().default(100),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['open', 'closed']).default('open'),
    employmentType: z.string().default('Full-time'),
    location: z.string().default(''),
    datePosted: z.coerce.date(),
    minimumQualification: z.string().default(''),
    responsibilities: z.array(z.string()).default([]),
    requirements: z.array(z.string()).default([]),
  }),
});

// Keystatic singleton. Loaded as a one-entry collection.
const careersPage = defineCollection({
  loader: glob({ pattern: 'careers-page.json', base: './src/content' }),
  schema: z.object({
    intro: z.string().default(''),
    values: z.array(z.object({ title: z.string(), description: z.string().default('') })).default([]),
    employmentPolicy: z.string().default(''),
  }),
});

export const collections = { products, jobs, careersPage };
