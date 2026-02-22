import { getPostWithContent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { Prose } from "@/components/ui/prose";
import { compileMDX } from "next-mdx-remote/rsc";

import { PostHeader } from "@/components/writing/post-header";
import { PostContainer } from "@/components/writing/post-container";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params
  let data

  try {
    data = getPostWithContent(slug)
  } catch {
    notFound()
  }

  const { post, content } = data

  const { content: compiledContent } =
    await compileMDX({
      source: content,
    })

  return (

    <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">
      <PostContainer type={post.type} >
        <PostHeader
          type={post.type}
          title={post.title}
          date={post.date.toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
          category={post.category}
          readingTime={post.readingTime}
          series={post.series}
          project={post.project}
        />

        <Prose type={post.type}>
          {compiledContent}
        </Prose>
      </PostContainer>
    </div>
  )

}