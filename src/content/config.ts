import { defineCollection, z } from 'astro:content';

// Work/Case Studies collection
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    engagement: z.enum(['discovery', 'build', 'partnership', 'personal']),
    duration: z.string(),
    status: z.enum(['completed', 'ongoing', 'upcoming']).optional(),
    featured: z.boolean().default(false),
    publishedAt: z.date(),
    modifiedAt: z.date().optional(),
    tags: z.array(z.string()).default([]),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

// Writing/Articles collection
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    modifiedAt: z.date().optional(),
    type: z.enum(['essay', 'case-study', 'prompt-lab', 'note']),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    external: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

// Definitions collection for glossary terms
const definitions = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    shortDefinition: z.string(),
    draft: z.boolean().default(false),
    relatedTerms: z.array(z.string()).default([]),
  }),
});

// Ladders collection for practical tools/patterns
const ladders = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    capabilities: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).default([]),
    publishedAt: z.date(),
    modifiedAt: z.date().optional(),
  }),
});

export const collections = {
  work,
  writing,
  definitions,
  ladders,
};
