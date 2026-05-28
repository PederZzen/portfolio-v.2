"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/app/functions/scrollToSection";
import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-15 md:gap-12 lg:max-w-6xl lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:max-w-7xl">
        <div className="flex max-w-xl flex-col items-start ">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="block">Espen Pedersen</span>
            </h1>
          </div>
          <p className="mt-4 max-w-prose text-lg text-muted-foreground">
            I am a web developer with a passion for creating beautiful and
            functional digital experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href={links.gitHub}
              className="group p-3 rounded-full border-2 border-border hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-rotate-6"
            >
              <FaGithub className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </Link>
            <Link
              href={links.linkedIn}
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

            <div className="absolute -bottom-2 -left-2 px-5 py-3 bg-card rounded-2xl border-2 border-border shadow-lg">
              <p className="text-sm font-bold font-[family-name:var(--font-heading)]">
                Front-end
              </p>
              <p className="text-xs text-muted-foreground">3+ years</p>
            </div>

            <div className="absolute -top-2 -right-2 px-5 py-3 bg-card rounded-2xl border-2 border-border shadow-lg">
              <p className="text-sm font-bold font-[family-name:var(--font-heading)]">
                UX / UI Design
              </p>
              <p className="text-xs text-muted-foreground">3+ years</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-full justify-center transition-all duration-700 delay-700 md:mt-20">
        <a
          href="#work"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("work");
          }}
          className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-accent" />
          </div>
        </a>
      </div>
    </section>
  );
}
