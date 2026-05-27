"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Annual Wheel",
    description: "A tool to help teams plan and coordinate events.",
    image: "/images/annual-wheel.jpeg",
    tags: ["React", "TypeScript", "D3.js"],
    link: "#",
    github: "#",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Holidaze",
    description:
      "Hotel booking platform with a focus on user experience and accessibility.",
    image: "/images/holidaze.jpeg",
    tags: ["React", "TypeScript", "SCSS"],
    link: "#",
    github: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS and TypeScript.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "Sanity", "TypeScript"],
    link: "#",
    github: "#",
    color: "from-orange-500/20 to-amber-500/20",
  },
] as const;

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: Project;
  index: number;
  visible: boolean;
}) {
  return (
    <article
      className={`group relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${project.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-card transition-colors duration-300 group-hover:border-accent/50">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              href={project.link}
            >
              View Project
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border-2 border-border px-4 py-2 text-sm font-medium transition-all hover:border-accent hover:bg-accent/5"
              href={project.github}
            >
              Code
              <FaGithub className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="px-6 py-24" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <header
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Featured Work
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-4xl font-bold text-balance md:text-5xl">
            Projects I&apos;m proud of
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A selection of recent work showcasing my passion for building
            beautiful, functional web experiences.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
