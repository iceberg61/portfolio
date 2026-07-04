import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-base/85 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 font-display font-semibold text-[1.05rem] tracking-tight text-hi justify-self-start"
        >
          <span className="w-[30px] h-[30px] rounded-[9px] grid place-items-center font-bold text-[0.95rem] bg-gradient-to-br from-accent to-[#ff8a3d] text-[#1a1200]">
            O
          </span>
          OMORI
        </a>

        {/* Centered links */}
        <nav
          className="hidden md:flex items-center gap-8 justify-self-center"
          aria-label="Primary"
        >
          {LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              whileHover={{ y: -2 }}
              className="text-[0.9rem] text-mid hover:text-hi transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 justify-self-end">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="/#contact"
            className="border border-line rounded-full px-5 py-2.5 text-[0.85rem] font-medium whitespace-nowrap text-hi hover:border-accent hover:bg-accent/10 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2 justify-self-end">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="text-hi p-1"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden flex flex-col gap-1 px-6 pb-6 pt-2 overflow-hidden"
            aria-label="Mobile"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-line text-mid"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center border border-line rounded-full px-5 py-2.5 text-hi"
            >
              Contact Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-10 h-10 rounded-full border border-line grid place-items-center text-mid hover:text-accent hover:border-accent transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}