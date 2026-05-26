"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 items-center justify-between">
        <div className="order-1 container mx-auto px-6">
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold`}>
              <span className="block">Header</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            I am a web developer with a passion for creating beautiful and
            functional digital experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
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
          <div className="flex items-center gap-4 mt-6">
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
        <div className="order-2 relative mx-auto w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
          <Image
            src="/images/espen-portrait.jpg"
            alt="Espen Pedersen"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
