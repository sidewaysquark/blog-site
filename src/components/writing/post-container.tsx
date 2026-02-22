interface PostContainerProps {
  type: "research" | "note";
  children: React.ReactNode;
}

export function PostContainer({ type, children }: PostContainerProps) {
  const width =
    type === "research"
      ? "max-w-4xl"
      : "max-w-3xl";

  return (
    <div className={`max-auto ${width}`}>
      {children}
    </div>
  )
}