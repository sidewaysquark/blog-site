import { z } from "zod"

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).max(300),
  date: z.string(),
  updatedAt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  type: z.enum(["research", "note"]),
  category: z.enum([
  "engineering",
  "architecture",
  "project-breakdown",
  "systems-thinking",
  "state-management",
  "performance",
  "science",
  ]),
  series: z.string().optional(),
  project: z.string().optional(),
  published: z.boolean().default(true),
  heroImage: z.string().optional(),
  canonicalUrl: z.string().url().optional()
})