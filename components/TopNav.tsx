"use client";
import { useActiveSection } from "@/hooks/useActiveSection";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const active = useActiveSection(items.map((i) => i.id));

  return (
    <div className="mb-8 hidden md:block">
      <div className="flex gap-4 text-sm text-slate-400">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={isActive ? "text-sky-300" : "hover:text-sky-300 transition"}
            >
              {it.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
