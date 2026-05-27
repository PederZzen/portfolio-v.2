"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 md:gap-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-16 xl:max-w-7xl">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="block">Espen Pedersen</span>
            </h1>
          </div>
          <p className="mt-4 max-w-prose text-lg text-muted-foreground">
            I am a web developer with a passion for creating beautiful and
            functional digital experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:gap-4 hover:shadow-xl transition-all duration-300"
            >
              See my work
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              About me
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <Link
              href="https://github.com/PederZzen"
              className="group p-3 rounded-full border-2 border-border hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-rotate-6"
            >
              <FaGithub className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/espen-holm-pedersen-0a36a315a/"
              className="group p-3 rounded-full border-2 border-border hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-rotate-6"
            >
              <FaLinkedin className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative transition-all duration-1000 delay-300">
            <div className="absolute -inset-8 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <Image
                src="/images/espen-portrait.jpg"
                alt="Espen Pedersen"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -left-4 px-5 py-3 bg-card rounded-2xl border-2 border-border shadow-lg">
              <p className="text-sm font-bold font-[family-name:var(--font-heading)]">
                Based in Norway
              </p>
              <p className="text-xs text-muted-foreground">UTC+1</p>
            </div>

            <div className="absolute -top-2 -right-2 px-5 py-3 bg-card rounded-2xl border-2 border-border shadow-lg">
              <p className="text-sm font-bold font-[family-name:var(--font-heading)]">
                3+ years
              </p>
              <p className="text-xs text-muted-foreground">of crafting web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
