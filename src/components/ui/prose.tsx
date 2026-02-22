import { cn } from "@/lib/cn";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

export function Prose({ children, className, type }: ProseProps) {
  const density =
    type === "research"
      ? "leading-relaxed"
      : "leading-normal"
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert",
        "max-w-none",
        "prose-headings:scroll-mt-24",
        "prose-a:text-blue-600 hover:prose-a:text-blue-500",
        "prose-pre:rounded-xl prose-pre:bg-zinc-900",
        "prose-img:rounded-xl",
        className,
        density
      )}
    >
      {children}
    </article>
  );
}