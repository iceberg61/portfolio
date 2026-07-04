import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import ProjectThumb from "../components/ProjectThumb";
import { PROJECTS } from "../data/projects";

export default function WorkPage({ theme, onToggleTheme }) {
  return (
    <PageTransition>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-mid hover:text-hi text-[0.9rem] mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <p className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4">
          All Projects
        </p>
        <h1 className="font-display font-semibold tracking-tight leading-tight text-[clamp(2rem,4vw,3rem)] max-w-[20ch] mb-14">
          Everything I've shipped, in one place
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className="block rounded-[18px] overflow-hidden border border-line bg-panel hover:-translate-y-1 hover:border-accent transition-all duration-300"
            >
              <ProjectThumb
                url={p.live}
                owner={p.owner}
                repo={p.repo}
                hue={p.hue}
                className="aspect-[16/10]"
              >
                <span className="absolute top-4 right-4 w-9.5 h-9.5 rounded-full bg-base/60 backdrop-blur grid place-items-center text-hi">
                  <ArrowUpRight size={18} />
                </span>
              </ProjectThumb>
              <div className="px-6 py-5.5">
                <h3 className="font-display text-[1.05rem] mb-1.5">
                  {p.title}
                </h3>
                <p className="text-accent text-[0.82rem] mb-2.5">{p.tag}</p>
                <p className="text-mid text-[0.88rem] leading-relaxed">
                  {p.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}