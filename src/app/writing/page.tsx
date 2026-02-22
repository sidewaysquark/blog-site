import { getAllPosts } from "@/lib/mdx";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (

    <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Research & Writing
        </h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Notes on building software, system design, and technical exploration.
          A record of experiments, obstacles, and lessons learned.
        </p>
      </header>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug}>
            <a href={`writing/${post.slug}`}>

              {post.type === "research" ? (
                <h2 className="text-3xl font-semibold hover:underline">
                  {post.title}
                </h2>
              ) : (
                <h2 className="text-2xl font-semibold hover:underline">
                  {post.title}
                </h2>
              )}
            </a>
            {post.type === "research" ? (
              <p className="mt-2 text-zinc-400">
                {post.description}
              </p>
            ) : (
              <p className="mt-2 text-zinc-500">
                {post.description}
              </p>
            )}

            <div className="mt-2 text-xs uppercase tracking-wide text-neutral-400">
              {post.category.replace("-", " ")}
            </div>

            <div className="mt-4 flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-neutral-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

    </div>
  )
}