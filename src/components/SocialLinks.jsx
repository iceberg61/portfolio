import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons/BrandIcons";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/iceberg61", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourname",
    Icon: LinkedinIcon,
  },
  { label: "X", href: "https://x.com/OmorisTrades", Icon: XIcon },
];

export default function SocialLinks({ size = 18, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ label, href, Icon }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-9 h-9 rounded-full border border-line grid place-items-center text-mid hover:text-accent hover:border-accent transition-colors"
        >
          <Icon size={size} />
        </motion.a>
      ))}
    </div>
  );
}