import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import ProjectThumb from "./ProjectThumb";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Work() {
  const preview = PROJECTS.slice(0, 6);

  return (
    <section id="work" className="bg-panel border-y border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4">
            03 — Selected Work
          </p>
          <h2 className="font-display font-semibold tracking-tight leading-tight text-[clamp(1.8rem,3vw,2.4rem)] mb-12">
            A few projects I'm proud of
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {preview.map((p) => (
            <motion.div key={p.slug} variants={fadeUp}>
              <Link
                to={`/work/${p.slug}`}
                className="group block rounded-[18px] overflow-hidden border border-line bg-base hover:-translate-y-1.5 hover:border-accent transition-all duration-300"
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
                <div className="px-5 py-4.5">
                  <h3 className="font-display text-[0.98rem] mb-1">
                    {p.title}
                  </h3>
                  <p className="text-mid text-[0.82rem]">{p.tag}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <Link to="/work">
            <motion.span
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[0.92rem] font-semibold border border-line text-hi hover:border-accent hover:bg-accent/10 transition-colors"
            >
              View All Projects
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}