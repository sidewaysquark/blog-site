import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { getAllPosts, getPostsByProject } from "@/lib/mdx";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound();

  const relatedPosts = getPostsByProject(project.slug)

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          {project.name}
        </h1>

        <p className="text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="text-sm text-zinc-500">
          {relatedPosts.length} related entries
        </div>

        <div className="text-sm text-zinc-500">
          {project.year} • {project.status}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-medium mb-4">
          Technical Highlights
        </h2>
        <ul className="space-y-2 text-zinc-400">
          {project.highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-6">
          Related Writing
        </h2>
        {relatedPosts.length === 0 ? (
          <p className="text-sm">
            No research entries yet.
          </p>
        ) : (
          <div className="space-y-6">
            {relatedPosts.map((post) => (
              <div key={post.slug}>
                <a href={`/writing/${post.slug}`} className="group">
                  <h3 className="text-lg font-medium group-hover:underline">
                    {post.title}
                  </h3>
                </a>

                <p className="text-sm text-zinc-500">
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
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}