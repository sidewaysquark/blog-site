import Link from "next/link";

interface PostHeaderProps {
  type: "research" | "note";
  title: string;
  date: string;
  category: string;
  readingTime?: number;
  series?: string;
  project?: string | null;
}

export function PostHeader({
  type,
  title,
  date,
  category,
  readingTime,
  series,
  project,
}: PostHeaderProps) {
  if (type === "research") {
    return (
      <header className="mb-14 space-y-6">
        <div className="text-xs uppercase tracking-widest text-zinc-500">
          Research • {category}
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          {title}
        </h1>

        <div className="text-sm text-zinc-500">
          {date}
          {readingTime && ` • ${readingTime} min read`}
        </div>

        {series && (
          <div className="text-sm text-zinc-600">
            Series: {series}
          </div>
        )}

        {project && (
          <div className="rounded-lg border border-zinc-800 p-4 text-sm text-sinc-400">
            Part of project:{" "}
            <Link
              href={`/projects/${project}`}
              className="underline underline-offset-4">
              {project}
            </Link>
          </div>
        )}

      </header>
    )
  }


  return (
    <header className="mb-10 space-y-3">
      <div className="text-xs uppercase tracking-widest text-zinc-600">
        Note
      </div>

      <h1 className="text-3xl font-medium tracking-tight">
        {title}
      </h1>

      <div className="text-sm text-zinc-500">
        {date}
      </div>
    </header>
  )
}