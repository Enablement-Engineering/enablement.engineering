import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      type: z.enum(['article', 'note', 'tutorial']).default('article'),
      draft: z.boolean().default(false),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }).optional(),
      url: z.string().url().optional(),
      featured: z.boolean().default(false),
    }),
  }),
  artifacts: defineCollection({
    schema: z.object({
      title: z.string(),
      type: z.enum(['image', 'audio', 'video', 'link']),
      content: z.string(),
    }),
  }),
  services: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      whoItHelps: z.array(z.string()).default([]),
      outcomes: z.array(z.string()).default([]),
      packages: z.array(z.object({
        name: z.string(),
        description: z.string(),
        priceNote: z.string().optional(),
        ctaText: z.string().optional(),
      })).default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
  }),
  case_studies: defineCollection({
    schema: z.object({
      title: z.string(),
      client: z.string().optional(),
      sector: z.string().optional(),
      problem: z.string(),
      ladderPatterns: z.array(z.string()).default([]),
      outcomes: z.array(z.string()).default([]),
      metrics: z.array(z.object({ label: z.string(), before: z.number().optional(), after: z.number().optional(), note: z.string().optional() })).default([]),
      publishDate: z.date(),
      draft: z.boolean().default(false),
      image: z.object({ src: z.string(), alt: z.string() }).optional(),
      tags: z.array(z.string()).default([]),
    }),
  }),
  patterns: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      intent: z.string(),
      inputs: z.array(z.string()).default([]),
      outputs: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  }),
  testimonials: defineCollection({
    schema: z.object({
      author: z.string(),
      role: z.string().optional(),
      quote: z.string(),
      link: z.string().url().optional(),
    }),
  }),
}; 