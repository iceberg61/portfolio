import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
      >
        <span className="text-low text-[0.85rem]">
          © {new Date().getFullYear()} OMORI. All rights reserved.
        </span>
        <SocialLinks size={16} />
      </motion.div>
    </footer>
  );
}