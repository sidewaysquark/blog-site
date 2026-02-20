import { z } from "zod"

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1).max(300),
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime().optional(),
  tags: z.array(z.string()).default([]),
  category: z.enum([
    "architecture",
    "realtime-systems",
    "distributed-systems",
    "state-management",
    "performance",
    "postmortem",
    "engineering-principles"
  ]),
  series: z
    .object({
      name: z.string(),
      order: z.number().int().positive()
    })
    .optional(),
  draft: z.boolean().default(false),
  heroImage: z.string().optional(),
  canonicalUrl: z.string().url().optional()
})