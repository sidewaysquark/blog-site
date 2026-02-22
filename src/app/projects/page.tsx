import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          Systems I’ve designed, built, and analyzed. Each project
          includes technical breakdowns and research notes.
        </p>
      </header>

      <div className="grid gap-12 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition"
          >
            <h2 className="text-xl font-medium group-hover:underline">
              {project.name}
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              {project.summary}
            </p>

            <div className="mt-4 text-xs uppercase tracking-wide text-zinc-600">
              {project.year} • {project.status}
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}