"use client";

import { links } from "@/lib/links";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent), transparent 40%)`,
        }}
      />

      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center space-y-8 ">
          <p className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Get In Touch
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-balance">
            Let&apos;s create something{" "}
            <span className="text-accent">amazing</span> together
          </h2>

          <div className="flex flex-wrap justify-center gap-4 pt-4 ">
            <a
              href="mailto:hello@espenpedersen.dev"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Say Hello
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href={links.gitHub}
              className="group p-3 rounded-2xl border-2 border-border bg-card hover:bg-accent/5 hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub className="size-6 text-primary transition-colors duration-300 group-hover:text-accent" />
            </Link>
            <Link
              href={links.linkedIn}
              className="group p-3 rounded-2xl border-2 border-border bg-card hover:bg-accent/5 hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin className="size-6 text-primary transition-colors duration-300 group-hover:text-accent" />
            </Link>
            <Link
              href={links.email}
              className="group p-3 rounded-2xl border-2 border-border bg-card hover:bg-accent/5 hover:border-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaEnvelope className="size-6 text-primary transition-colors duration-300 group-hover:text-accent" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-8">{links.email}</p>
        </div>
      </div>
    </section>
  );
}
