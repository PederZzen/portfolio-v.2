import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
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
        </Reveal>

        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
