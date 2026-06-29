"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Mail, Phone, Globe } from "lucide-react";
import { profile } from "@/data/profile";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[128px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[128px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-accent/30 p-1 md:h-40 md:w-40">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-5xl font-bold text-white md:text-6xl">
                {profile.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <div className="absolute -right-2 -bottom-2 rounded-full bg-accent p-2">
              <span className="block h-3 w-3 rounded-full bg-white" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-2 text-lg text-muted md:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted md:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="mb-10 flex justify-center gap-4">
          <a
            href={`mailto:${profile.contacts.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.contacts.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            aria-label="Portfolio"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href={`tel:${profile.contacts.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            aria-label="Phone"
          >
            <Phone className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full border border-border-light px-6 py-3 text-sm text-muted transition-all hover:border-accent hover:text-accent"
          >
            Explore my work
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
