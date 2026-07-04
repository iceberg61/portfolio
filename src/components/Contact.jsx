import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Clock, CheckCircle2, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { fadeLeft, fadeRight, staggerContainer, viewportOnce } from "../lib/motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="overflow-x-hidden max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-16"
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.p
          variants={fadeLeft}
          className="font-display uppercase tracking-[0.14em] text-[0.78rem] text-accent mb-4"
        >
          04 — Get In Touch
        </motion.p>
        <motion.h2
          variants={fadeLeft}
          className="font-display font-semibold tracking-tight leading-tight text-[clamp(1.8rem,3vw,2.4rem)] mb-5"
        >
          Let's build something together
        </motion.h2>
        <motion.p variants={fadeLeft} className="text-mid leading-relaxed max-w-[52ch] mb-3">
          Have a project in mind or just want to say hello? My inbox is
          always open.
        </motion.p>

        <motion.div
          variants={fadeLeft}
          className="inline-flex items-center gap-2 text-[0.85rem] text-accent-2 border border-accent-2/30 bg-accent-2/10 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
          Currently available for freelance work
        </motion.div>

        <motion.div variants={fadeLeft} className="flex flex-col gap-3.5 mb-8">
          <div className="flex items-center gap-3 text-mid">
            <Mail size={18} className="text-accent shrink-0" />
            <span>godstimegodwin111@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-mid">
            <Phone size={18} className="text-accent shrink-0" />
            <span>+2349153605825</span>
          </div>
          <div className="flex items-center gap-3 text-mid">
            <MapPin size={18} className="text-accent shrink-0" />
            <span>Abuja, Nigeria</span>
          </div>
          <div className="flex items-center gap-3 text-mid">
            <Clock size={18} className="text-accent shrink-0" />
            <span>Usually replies within 24 hours</span>
          </div>
        </motion.div>

        <motion.div variants={fadeLeft}>
          <p className="text-low text-[0.85rem] mb-3">Find me elsewhere</p>
          <SocialLinks />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative bg-panel border border-line rounded-[20px] p-8 min-h-105"
      >
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col items-center justify-center text-center gap-4 py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              >
                <CheckCircle2 size={48} className="text-accent-2" />
              </motion.div>
              <h3 className="font-display text-xl">Message sent</h3>
              <p className="text-mid max-w-[32ch]">
                Thanks for reaching out — I'll get back to you within a day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-accent text-[0.9rem] underline underline-offset-4 mt-2"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2 text-[0.85rem] text-mid">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-base border border-line rounded-[10px] px-3.5 py-3 text-hi text-[0.95rem] focus:outline-2 focus:outline-accent focus:outline-offset-1 transition-shadow"
                  />
                </label>
                <label className="flex flex-col gap-2 text-[0.85rem] text-mid">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="bg-base border border-line rounded-[10px] px-3.5 py-3 text-hi text-[0.95rem] focus:outline-2 focus:outline-accent focus:outline-offset-1 transition-shadow"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-[0.85rem] text-mid">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project"
                  required
                  className="resize-y bg-base border border-line rounded-[10px] px-3.5 py-3 text-hi text-[0.95rem] focus:outline-2 focus:outline-accent focus:outline-offset-1 transition-shadow"
                />
              </label>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="self-start inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-[0.92rem] font-semibold bg-accent text-base"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}