import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";
import ProjectThumb from "../components/ProjectThumb";
import { GithubIcon } from "../components/icons/BrandIcons";
import { PROJECTS } from "../data/projects";

export default function ProjectPage({ theme, onToggleTheme }) {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        <main className="max-w-6xl mx-auto px-6 md:px-8 py-24 text-center">
          <h1 className="font-display text-2xl mb-4">Project not found</h1>
          <p className="text-mid mb-8">
            That project doesn't exist, or the link's out of date.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[0.92rem] font-semibold bg-accent text-base"
          >
            <ArrowLeft size={18} />
            Back to all projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const {
    title,
    tag,
    hue,
    owner,
    repo,
    summary,
    problem,
    approach,
    outcome,
    stack,
    github,
    live,
  } = project;

  return (
    <PageTransition>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-mid hover:text-hi text-[0.9rem] mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        <p className="text-accent text-[0.85rem] mb-3">{tag}</p>
        <h1 className="font-display font-semibold tracking-tight leading-tight text-[clamp(1.9rem,4vw,2.8rem)] mb-6">
          {title}
        </h1>
        <p className="text-mid text-[1.05rem] leading-relaxed max-w-[60ch] mb-8">
          {summary}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[0.9rem] font-semibold bg-accent text-base hover:-translate-y-0.5 transition-transform"
          >
            <GithubIcon size={18} />
            View on GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[0.9rem] font-semibold border border-line text-hi hover:border-accent transition-colors"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <ProjectThumb
          url={live}
          owner={owner}
          repo={repo}
          hue={hue}
          className="aspect-[16/9] rounded-2xl border border-line mb-12"
        />

        <div className="grid sm:grid-cols-3 gap-8 mb-4">
          <CaseSection heading="Problem" text={problem} />
          <CaseSection heading="Approach" text={approach} />
          <CaseSection heading="Outcome" text={outcome} />
        </div>

        <div className="mt-12 pt-8 border-t border-line">
          <p className="text-low text-[0.85rem] mb-3">Built with</p>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[0.82rem] px-3.5 py-1.5 rounded-full border border-line text-mid"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}

function CaseSection({ heading, text }) {
  return (
    <div>
      <h3 className="font-display text-[0.95rem] text-accent mb-2">
        {heading}
      </h3>
      <p className="text-mid text-[0.92rem] leading-relaxed">{text}</p>
    </div>
  );
}