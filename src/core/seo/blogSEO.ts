import { BlogPost } from "../models/blog"
import { SEOProps } from "./metadata"

export function buildBlogSEO(post: BlogPost): SEOProps {
  return {
    title: post.title,
    description: post.description,
    canonical: post.canonicalUrl,
    publishedTime: post.date.toISOString(),
    modifiedTime: post.updatedAt?.toISOString(),
    tags: post.tags
  }
}