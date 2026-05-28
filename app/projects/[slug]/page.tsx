"use client";

import { projects } from "@/lib/projects";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={1000}
        className="w-100"
      />
      <p className="text-sm text-gray-500">{project.description}</p>
      <p className="text-sm text-gray-500">{project.tags.join(", ")}</p>
      <p className="text-sm text-gray-500">{project.link}</p>
      <p className="text-sm text-gray-500">{project.github}</p>
    </div>
  );
}
