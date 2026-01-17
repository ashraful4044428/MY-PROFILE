export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="text-sm tracking-[0.25em] uppercase text-slate-400 mb-5">
        {title}
      </h2>
      <div className="text-base">{children}</div>
    </section>
  );
}
