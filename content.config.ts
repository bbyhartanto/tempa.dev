import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  badge: z.string().optional(),
  category: z.string().optional(),
  publishedAt: z.string().optional(),
  readingTime: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  order: z.number().default(100)
})

export default defineContentConfig({
  collections: {
    servicesEn: defineCollection({
      type: 'page',
      source: {
        include: 'en/services/*.md',
        prefix: '/'
      },
      schema: baseSchema
    }),
    servicesId: defineCollection({
      type: 'page',
      source: {
        include: 'id/services/*.md',
        prefix: '/'
      },
      schema: baseSchema
    }),
    caseStudiesEn: defineCollection({
      type: 'page',
      source: {
        include: 'en/case-studies/*.md',
        prefix: '/'
      },
      schema: baseSchema
    }),
    caseStudiesId: defineCollection({
      type: 'page',
      source: {
        include: 'id/case-studies/*.md',
        prefix: '/'
      },
      schema: baseSchema
    }),
    blogEn: defineCollection({
      type: 'page',
      source: {
        include: 'en/blog/*.md',
        prefix: '/'
      },
      schema: baseSchema
    }),
    blogId: defineCollection({
      type: 'page',
      source: {
        include: 'id/blog/*.md',
        prefix: '/'
      },
      schema: baseSchema
    })
  }
})
