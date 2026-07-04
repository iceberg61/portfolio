import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Gauge } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const SERVICES = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building fast, accessible interfaces with React and modern CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Designing APIs and services that stay reliable as things grow.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Making sure every screen size gets the same great experience.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    desc: "Shipping sites that load fast and rank well from day one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4">
          02 — What I Do
        </p>
        <h2 className="font-display font-semibold tracking-tight leading-tight text-[clamp(1.8rem,3vw,2.4rem)] max-w-[16ch] mb-12">
          I build amazing digital experiences
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SERVICES.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-panel border border-line rounded-[18px] px-6.5 py-8 hover:border-accent transition-colors duration-300"
          >
            <motion.div
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 rounded-xl bg-accent/12 text-accent grid place-items-center mb-5"
            >
              <Icon size={22} />
            </motion.div>
            <h3 className="font-display text-[1.05rem] mb-2.5">{title}</h3>
            <p className="text-mid text-[0.92rem] leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}