import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const BADGES = [
  { label: "JS", top: "6%", left: "-8%", bg: "#f7df1e", color: "#1a1a1a" },
  { label: "TS", top: "2%", right: "-6%", bg: "#3178c6", color: "#ffffff" },
  { label: "⚛", bottom: "10%", left: "-10%", bg: "#20232a", color: "#61dafb" },
  { label: "Nd", bottom: "0%", right: "-4%", bg: "#3c873a", color: "#ffffff" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-24 md:pb-32 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
    >
      {/* Text block — slides in from the left */}
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center md:text-left"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4"
        >
          Web Developer
        </motion.p>
        <h1 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2.4rem,4.6vw,3.6rem)] mb-6">
          I will give you <span className="text-accent">Best Product</span> in
          the shortest Time
        </h1>
        <p className="text-mid text-[1.02rem] leading-relaxed max-w-[46ch] mx-auto md:mx-0 mb-9">
          I'm a Abuja-based web developer focused on building clean, fast,
          user-friendly digital experiences that people actually enjoy using.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 flex-wrap justify-center md:justify-start"
        >
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#about"
            className="inline-flex items-center px-7 py-3.5 rounded-full text-[0.92rem] font-semibold bg-accent text-base"
          >
            More About Me
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="inline-flex items-center px-7 py-3.5 rounded-full text-[0.92rem] font-semibold border border-line text-hi hover:border-accent transition-colors"
          >
            See My Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Photo + orbit — slides in from the right */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="relative aspect-square max-w-[420px] mx-auto grid place-items-center order-first md:order-last"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-line animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-[10%] rounded-full border border-panel-alt" />

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="relative w-[78%] h-[78%] rounded-full overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        >
          <img
            src="/profile.jpeg"
            alt="Omori"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {BADGES.map((b, i) => (
          <motion.div
            key={`${b.label}-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + i * 0.12,
              ease: EASE,
            }}
            className="absolute w-14 h-14 rounded-2xl grid place-items-center font-display font-bold text-[0.85rem] border border-line shadow-[0_12px_24px_-10px_rgba(0,0,0,0.7)] animate-[float_5s_ease-in-out_infinite]"
            style={{
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              background: b.bg,
              color: b.color,
              animationDelay: `${1.2 + i * 0.6}s`,
            }}
          >
            {b.label}
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ y: 4 }}
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:grid absolute left-8 bottom-8 w-10 h-10 rounded-full border border-line place-items-center text-mid"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}