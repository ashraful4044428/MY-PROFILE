import Section from "@/components/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-4">
        {experience.map((exp) => (
          <div
            key={`${exp.role}-${exp.org}`}
            className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6 hover:border-sky-500/40 transition"
          >
            <h3 className="text-slate-100 font-medium">
              {exp.role} · <span className="text-slate-300">{exp.org}</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">{exp.date}</p>

            <ul className="mt-4 list-disc ml-5 text-slate-300 text-sm space-y-2">
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="text-xs rounded-full border border-slate-800 px-3 py-1 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
