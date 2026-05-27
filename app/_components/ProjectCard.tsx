import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`group relative transition-all duration-700 ease-out`}>
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
