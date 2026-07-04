// Shared animation building blocks — keeps every section moving
// with the same easing/duration language instead of each one
// reinventing timing.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

// Wrap a group of children in this, give each child a variant
// (fadeUp etc.) and they'll animate in one after another.
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Default viewport settings for scroll-triggered sections —
// animate once, a bit before the element is fully on screen.
export const viewportOnce = { once: true, amount: 0.25 };
