import { motion } from "framer-motion";
import { Download, BadgeCheck } from "lucide-react";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="bg-panel border-y border-line overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="relative aspect-[4/5] rounded-3xl border border-line overflow-hidden bg-gradient-to-br from-panel-alt to-base max-w-xs mx-auto md:max-w-none">
            <div className="absolute w-[60%] aspect-square rounded-full top-[15%] left-[20%] blur-md bg-[radial-gradient(circle,color-mix(in_srgb,var(--c-accent)_25%,transparent),transparent_70%)]" />
            <img
              src="/me1.jpeg"
              alt="Omori"
              className="relative w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeRight}
            className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4"
          >
            01 — About Me
          </motion.p>
          <motion.h2
            variants={fadeRight}
            className="font-display font-semibold tracking-tight leading-tight text-[clamp(1.8rem,3vw,2.4rem)] max-w-[20ch] mb-5"
          >
            I turn your ideas into remarkable digital products
          </motion.h2>
          <motion.p
            variants={fadeRight}
            className="text-mid leading-relaxed max-w-[56ch] mb-6"
          >
            I've spent years living at the intersection of design and product
            strategy — working closely with founders and teams to turn rough
            concepts into interfaces people trust and enjoy using.
          </motion.p>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 w-fit border border-line rounded-xl px-4.5 py-3.5 mb-6"
          >
            <BadgeCheck size={22} className="text-accent shrink-0" />
            <span className="font-medium text-hi">
              5+ Years of Experience Designing Digital Products
            </span>
          </motion.div>

          <motion.p
            variants={fadeRight}
            className="text-low leading-relaxed max-w-[56ch] mb-6"
          >
            I care about how a product works as much as how it looks. Every
            engagement starts with the problem, not the pixels — that's what
            keeps the end result simple, usable, and worth coming back to.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[0.92rem] font-semibold bg-accent text-base"
          >
            <Download size={18} />
            Download My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}