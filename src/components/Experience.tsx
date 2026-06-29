"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="experience" title="Professional Experience" className="bg-surface/30">
      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-accent via-secondary to-transparent" />

        <div className="space-y-10">
          {profile.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-14"
            >
              <div className="absolute left-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-surface">
                <Briefcase className="h-3.5 w-3.5 text-accent" />
              </div>

              <div className="rounded-xl border border-border/50 bg-surface/50 p-5 transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]">
                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-muted">{exp.period}</span>
                </div>
                <p className="mb-2 text-sm text-accent">{exp.role}</p>
                <p className="text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
                <span className="mt-2 inline-block text-xs text-muted/60">
                  {exp.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
