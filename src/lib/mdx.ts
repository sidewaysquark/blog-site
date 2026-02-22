import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

import { blogFrontmatterSchema } from "@/core/schemas/blogSchema"
import { mapToBlogPost, BlogPost } from "@/core/models/blog"

const WRITING_PATH = path.join(process.cwd(), "src/content/writing")

type BlogPostWithContent = {
  post: BlogPost
  content: string
}

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(WRITING_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(WRITING_PATH, `${slug}.mdx`)
  const rawFile = fs.readFileSync(filePath, "utf8")

  const { data, content } = matter(rawFile)

  const validated = blogFrontmatterSchema.parse(data)
  // const validated = blogFrontmatterSchema.safeParse(data)
  // if(!validated.success) {
  //   console.error(`Invalid frontmatter in ${slug}.mdx`)
  //   throw validated.error
  // }

  const stats = readingTime(content)

  return mapToBlogPost(
    slug,
    validated,
    Math.ceil(stats.minutes)
  )
}

export function getAllPosts(): BlogPost[] {
  const slugs = getBlogSlugs()

  const posts = slugs.map(getPostBySlug)

  return posts
    .filter((post) => 
      process.env.NODE_ENV === "development"
        ? true
        : post.published
      )
      .sort(
        (a, b) =>
          b.date.getTime() - a.date.getTime()
      )
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.includes(tag)
  )
}

// export function getPostsBySeries(seriesName: string): BlogPost[] {
//   return getAllPosts()
//     .filter((post) => post.series === seriesName)
//     .sort(
//       (a, b) =>
//       (a.series?.order ?? 0) - (b.series?.order ?? 0)
//     )
// }

export function getPostWithContent(
  slug: string
): BlogPostWithContent {
  const filePath = path.join(WRITING_PATH, `${slug}.mdx`)
  const rawFile = fs.readFileSync(filePath, "utf8")

  const { data, content } = matter(rawFile)

  const validated = blogFrontmatterSchema.parse(data)

  const stats = readingTime(content)

  const post = mapToBlogPost(
    slug,
    validated,
    Math.ceil(stats.minutes)
  )

  return { post, content }
}


export function getPostsByProject(projectSlug: string) {
  const posts = getAllPosts();

  return posts
    .filter((post) => post.project === projectSlug)
    .sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}