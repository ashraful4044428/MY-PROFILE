import Section from "@/components/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className="group rounded-3xl border border-slate-800 bg-slate-950/40 p-6 hover:border-sky-500/40 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-slate-100 font-medium group-hover:text-sky-300 transition">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>
              <span className="text-xs text-slate-500 mt-1 whitespace-nowrap">GitHub ↗</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs rounded-full border border-slate-800 px-3 py-1 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
