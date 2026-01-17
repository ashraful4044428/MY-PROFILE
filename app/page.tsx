import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import GlowCursor from "@/components/GlowCursor";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GlowCursor />
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10">
          <aside className="lg:sticky lg:top-10 h-fit">
            <Sidebar />
          </aside>

          <section className="min-h-[80vh]">
            <TopNav />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </section>
        </div>
      </div>
    </main>
  );
}
