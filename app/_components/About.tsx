"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 `}>
          <p className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Me
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-balance">
            The story behind the code
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative`}>
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-border">
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
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-300`}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
