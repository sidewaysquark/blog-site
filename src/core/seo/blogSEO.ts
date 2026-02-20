import { BlogPost } from "../models/blog"
import { SEOProps } from "./metadata"

export function buildBlogSEO(post: BlogPost): SEOProps {
  return {
    title: post.title,
    description: post.summary,
    canonical: post.canonicalUrl,
    publishedTime: post.publishedAt.toISOString(),
    modifiedTime: post.updatedAt?.toISOString(),
    tags: post.tags
  }
}