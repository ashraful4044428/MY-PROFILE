"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { Github, Linkedin, FileDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <div className="relative z-10 rounded-3xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-slate-800">
            <Image src={profile.image} alt={profile.name} fill className="object-cover" priority />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-100">{profile.name}</h1>
            <p className="text-sm text-slate-400 mt-1">Portfolio</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">{profile.title}</p>

        <div className="hidden lg:flex flex-col gap-2">
          {nav.map((it) => {
            const isActive = active === it.id;
            return (
              <a key={it.id} href={`#${it.id}`} className="group flex items-center gap-3 text-sm">
                <span
                  className={[
                    "h-px w-8 transition-all",
                    isActive
                      ? "w-14 bg-sky-400"
                      : "bg-slate-700 group-hover:w-14 group-hover:bg-slate-500",
                  ].join(" ")}
                />
                <span
                  className={[
                    "uppercase tracking-widest text-[11px] transition",
                    isActive
                      ? "text-sky-300"
                      : "text-slate-400 group-hover:text-slate-200",
                  ].join(" ")}
                >
                  {it.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-200 hover:border-sky-500 hover:text-sky-300 transition">
            <Github size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-200 hover:border-sky-500 hover:text-sky-300 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <a href={profile.resume} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500/15 border border-sky-500/25 px-4 py-3 text-sm text-sky-200 hover:bg-sky-500/20 transition">
            <FileDown size={16} /> Download Resume
          </a>

          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 px-4 py-3 text-sm text-slate-200 hover:border-sky-500 hover:text-sky-300 transition">
            <Mail size={16} /> {profile.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
