"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");
      setDone("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setDone("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Want to collaborate or discuss a project? Send me a message here, or email me at{" "}
          <a className="text-sky-300 hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
          <input name="name" placeholder="Your Name" required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-sky-500/60" />
          <input name="email" type="email" placeholder="Your Email" required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-sky-500/60" />
          <textarea name="message" placeholder="Your Message" rows={6} required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-sky-500/60" />

          <button disabled={loading} className="rounded-2xl bg-sky-500/15 border border-sky-500/25 px-4 py-3 text-sm text-sky-200 hover:bg-sky-500/20 transition disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {done === "ok" && <p className="text-sm text-emerald-300">✅ Message sent successfully!</p>}
          {done === "err" && <p className="text-sm text-rose-300">❌ Failed to send message. Try again.</p>}
        </form>
      </div>
    </Section>
  );
}
