"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <p className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Me
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-balance">
            The story behind the code
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-visible">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-[5/4] w-[130%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--accent)_40%,transparent)_0%,transparent_72%)]"
              aria-hidden
            />
            <Reveal delay={0.1} className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl border-2 border-border">
                <Image
                  src="/images/workspace.jpg"
                  alt="My workspace"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 bg-card rounded-2xl border-2 border-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold font-[family-name:var(--font-heading)]">
                      3+ Years
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Coding Experience
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m a web developer based in{" "}
              <span className="font-medium text-accent">Norway</span> with a
              love for creating elegant solutions to complex problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My journey started with curiosity about how websites work, which
              evolved into a career building modern web applications. I
              specialize in creating responsive, accessible experiences using
              cutting-edge technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am currently working as a Solution Consultant at Tieto in
              Trondheim, where I help customers implement and optimize their
              systems.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
