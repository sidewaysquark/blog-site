import { getAllPosts } from "@/lib/mdx"
import { projects } from "@/lib/projects"
import Link from "next/link"

export default function Home() {
  const posts = getAllPosts()
  return (
    <div className="max-w-3xl mx-auto py-20">
      <main className="space-y-4 mb-16">
        <h1 className="text-3xl font-semibold tracking-tight">
          Steve Chester
        </h1>
        <p className="mt-6 text-zinc-600">
          Software engineer exploring systems, interfaces, and distributed tools.
          This site functions as a project archive and research journal —
          documenting design decisions, experiments, and long-term development.
        </p>
      </main>

      <section className="space-y-6 mb-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            View all →
          </Link>
        </div>

        <div className="px-2 space-y-8">
          {projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl text-zinc-400 font-medium group-hover:text-zinc-100">
                  {project.name}
                </h3>
              </Link>

              <p className="text-zinc-600 mt-1 max-w-2xl">
                {project.description}
              </p>

              <div className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-900 rounded">
                {project.status}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">
            Latest Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-zinc-400 hover:text-zinc-100"
          >
            View archive →
          </Link>
        </div>

        <div className="px-2 space-y-6">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/writing/${post.slug}`}>
                <h3 className="text-log text-zinc-400 font-medium group-hover:text-zinc-100">
                  {post.title}
                </h3>
              </Link>

              <div className="text-sm text-zinc-500 mt-2">
                {post.date.toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                {post.type === "research" &&
                  ` • ${post.readingTime} min read`}
              </div>
            </article>
          ))}
        </div>

      </section>

    </div>
  )
}