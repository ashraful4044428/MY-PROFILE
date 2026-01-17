import Section from "@/components/Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((group) => (
          <div key={group.group} className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
            <h3 className="text-slate-100 font-medium">{group.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full border border-slate-800 px-3 py-1 text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
