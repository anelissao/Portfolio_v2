"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="projects" title="Projects">
      <div
        ref={ref}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {profile.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-surface/50 p-6 transition-all hover:border-accent/20 hover:bg-surface hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight gradient-text">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
            </div>

            <h3 className="mb-1 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mb-3 text-xs text-muted">{project.subtitle}</p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border-light/30 bg-surface-light/30 px-2 py-0.5 text-[10px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
