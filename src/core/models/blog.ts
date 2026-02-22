import z from "zod"
import { blogFrontmatterSchema } from "../schemas/blogSchema"

export const BLOG_CATEGORIES = [
  "engineering",
  "architecture",
  "project-breakdown",
  "systems-thinking",
  "state-management",
  "performance",
  "science",
] as const

export const POST_TYPES = [
  "research",
  "note"
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]
export type PostType = typeof POST_TYPES[number]

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: Date
  updatedAt?: Date
  type: PostType
  tags: string[]
  category: BlogCategory
  readingTime: number
  series?: string
  project?: string | null
  published: boolean
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
    description: frontmatter.description,
    date: new Date(frontmatter.date),
    updatedAt: frontmatter.updatedAt
      ? new Date(frontmatter.updatedAt)
      : undefined,
    type: frontmatter.type,
    tags: frontmatter.tags,
    category: frontmatter.category,
    series: frontmatter.series,
    project: frontmatter.project ?? null,
    published: frontmatter.published,
    heroImage: frontmatter.heroImage,
    canonicalUrl: frontmatter.canonicalUrl,
    readingTime
  }
}