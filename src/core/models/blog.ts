import z from "zod"
import { blogFrontmatterSchema } from "../schemas/blogSchema"

export const BLOG_CATEGORIES = [
  "architecture",
  "realtime-systems",
  "distributed-systems",
  "state-management",
  "performance",
  "postmortem",
  "engineering-principles"
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]

export type BlogPost = {
  slug: string
  title: string
  summary: string
  publishedAt: Date
  updatedAt?: Date
  tags: string[]
  category: BlogCategory
  series?: {
    name: string
    order: number
  }
  readingTime: number
  draft: boolean
  heroImage?: string
  canonicalUrl?: string
}

export function mapToBlogPost(
  slug: string,
  frontmatter: z.infer<typeof blogFrontmatterSchema>,
  readingTime: number
): BlogPost {
  return {
    slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    publishedAt: new Date(frontmatter.publishedAt),
    updatedAt: frontmatter.updatedAt
      ? new Date(frontmatter.updatedAt)
      : undefined,
    tags: frontmatter.tags,
    category: frontmatter.category,
    series: frontmatter.series,
    draft: frontmatter.draft,
    heroImage: frontmatter.heroImage,
    canonicalUrl: frontmatter.canonicalUrl,
    readingTime
  }
}