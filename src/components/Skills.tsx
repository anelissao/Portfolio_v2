"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import Section from "./Section";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="skills" title="Technical Skills">
      <div
        ref={ref}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {profile.skills.map((skillGroup, groupIdx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            className="group rounded-xl border border-border/50 bg-surface/50 p-5 transition-all hover:border-accent/30 hover:bg-surface hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border-light/50 bg-surface-light/50 px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
