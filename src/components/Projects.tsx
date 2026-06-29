"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

const gradients = [
  "from-accent/20 to-secondary/20",
  "from-secondary/20 to-accent/20",
  "from-blue-500/20 to-accent/20",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = { type: "spring" as const, stiffness: 100, damping: 18 };

  return (
    <Section id="projects" title="Projects">
      <div
        ref={ref}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {profile.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: idx * 0.15 }}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-surface/50 transition-all hover:border-accent/20 hover:bg-surface hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]"
          >
            <div
              className={`flex h-36 items-center justify-center bg-gradient-to-br ${gradients[idx]} relative overflow-hidden`}
            >
              <span className="text-6xl font-bold tracking-tighter text-foreground/10">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>

            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              </div>

              <p className="mb-2 text-xs text-muted">{project.subtitle}</p>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1 + i * 0.03 }}
                    className="rounded-md border border-border-light/30 bg-surface-light/30 px-2 py-0.5 text-[10px] text-muted"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
