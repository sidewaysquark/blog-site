export interface Project {
  slug: string;
  name: string;
  summary: string;
  description: string;
  status: "active" | "complete" | "experimental";
  stack: string[];
  highlights: string[];
  year: number;
}

export const projects: Project[] = [
  {
    slug: "kanban-engine",
    name: "Kanban Engine",
    summary:
      "A modular drag-and-drop task system with state modeling and extensibility.",
    description:
      "A structured exploration of drag mechanics, pointer capture, state modeling, and UI architecture.",
    status: "active",
    stack: ["TypeScript", "React", "State Modeling"],
    highlights: [
      "Custom drag handle system",
      "Pointer capture integration",
      "Column reordering algorithm",
    ],
    year: 2026,
  },
];