export const projects = [
  {
    id: 1,
    title: "Annual Wheel",
    slug: "annual-wheel",
    description: "A tool to help teams plan and coordinate events.",
    image: "/images/annual-wheel.jpeg",
    tags: ["React", "TypeScript", "D3.js"],
    link: "",
    github: "",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Holidaze",
    slug: "holidaze",
    description:
      "Hotel booking platform with a focus on user experience and accessibility.",
    image: "/images/holidaze.jpeg",
    tags: ["React", "TypeScript", "SCSS"],
    link: "https://holidazenorway.netlify.app",
    github: "https://github.com/PederZzen/Holidaze",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Portfolio",
    slug: "portfolio-2026",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS and TypeScript.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "Sanity", "TypeScript"],
    link: "https://espenpedersen.no",
    github: "https://github.com/PederZzen/portfolio-v.2",
    color: "from-orange-500/20 to-amber-500/20",
  },
] as const;
