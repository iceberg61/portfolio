// `owner` + `repo` are used to pull GitHub's auto-generated social preview
// image for each project (no screenshots needed). `hue` is the fallback
// gradient shown if that image ever fails to load.

export const PROJECTS = [
  {
    slug: "naija-kitchen",
    title: "Naija Kitchen",
    tag: "React · Vite",
    hue: "#c2410c",
    owner: "iceberg61",
    repo: "Naija_Kitchen",
    summary: "A React + Vite site built around Nigerian recipes and cuisine.",
    problem:
      "Wanted a fast, focused front end for browsing Nigerian dishes without the bloat of a typical recipe site.",
    approach:
      "Built with React and Vite for quick dev iteration, keeping the component structure simple and content-first.",
    outcome:
      "A clean, fast-loading foundation that's easy to extend with more recipes and categories over time.",
    stack: ["React", "Vite", "CSS"],
    github: "https://github.com/iceberg61/Naija_Kitchen",
    live: "https://naijakitche.netlify.app/",
  },
  {
    slug: "hotshot-luxury",
    title: "Hotshot Luxury",
    tag: "Full-stack",
    hue: "#1e293b",
    owner: "iceberg61",
    repo: "HOTSHOT-LUXURY",
    summary:
      "A full-stack storefront for a clothing brand, with a React frontend and its own backend.",
    problem:
      "The brand needed a real storefront online, not just a social media page, to showcase and sell its clothing line.",
    approach:
      "React + Vite frontend paired with a custom Node backend, deployed on Vercel.",
    outcome:
      "Live in production and actively representing the brand online.",
    stack: ["React", "Vite", "Node.js"],
    github: "https://github.com/iceberg61/HOTSHOT-LUXURY",
    live: "https://www.hotshotluxuryoriginals.com/",
  },
  {
    slug: "virelux",
    title: "Virelux",
    tag: "React · Vite",
    hue: "#7c3aed",
    owner: "iceberg61",
    repo: "virelux",
    summary: "A React + Vite web app built to explore a clean, modern UI pattern.",
    problem: "Wanted a lightweight project to practice structuring a React app from scratch.",
    approach:
      "Set up with Vite for fast builds and a component-driven layout using plain CSS.",
    outcome: "A solid reference build for future React + Vite projects.",
    stack: ["React", "Vite", "CSS"],
    github: "https://github.com/iceberg61/virelux",
    live: "https://virulex.netlify.app/",
  },
  {
    slug: "chulo-enterprise",
    title: "Chulo Enterprise",
    tag: "Full-stack",
    hue: "#0f766e",
    owner: "iceberg61",
    repo: "Chuloenterprise",
    summary:
      "A personal full-stack project built with Next.js, deployed and live.",
    problem:
      "Wanted to build something end-to-end with Next.js's App Router, including middleware and server-side logic.",
    approach:
      "Used the Next.js App Router with middleware for request handling, deployed on Vercel.",
    outcome: "Shipped and running live in production.",
    stack: ["Next.js", "JavaScript", "Vercel"],
    github: "https://github.com/iceberg61/Chuloenterprise",
    live: "https://www.chuloenterprise.online/login",
  },
  {
    slug: "portman-pet-services",
    title: "Portman Pet Services",
    tag: "HTML · CSS · JavaScript",
    hue: "#b45309",
    owner: "iceberg61",
    repo: "Portman-pet-services",
    summary:
      "A vanilla HTML/CSS/JS website for a pet services business.",
    problem:
      "A pet services business needed a simple, fast website without the overhead of a framework.",
    approach:
      "Built with plain HTML, CSS, and JavaScript for a lightweight, dependency-free site.",
    outcome: "A straightforward, fast-loading site covering the business's core pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/iceberg61/Portman-pet-services",
    live: "",
  },
];