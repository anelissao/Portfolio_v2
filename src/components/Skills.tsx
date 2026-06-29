"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Server,
  Blocks,
  Palette,
  Database,
  Code2,
  Wrench,
} from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & LLM": <Brain className="h-4 w-4" />,
  "Back-end": <Server className="h-4 w-4" />,
  Odoo: <Blocks className="h-4 w-4" />,
  "Front-end": <Palette className="h-4 w-4" />,
  RDBMS: <Database className="h-4 w-4" />,
  "Programming Languages": <Code2 className="h-4 w-4" />,
  "Tools & Technologies": <Wrench className="h-4 w-4" />,
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const spring = { type: "spring" as const, stiffness: 120, damping: 16 };

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="skills" title="Technical Skills">
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {profile.skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.category}
            variants={cardVariant}
            className="group rounded-xl border border-border/50 bg-surface/50 p-5 transition-all hover:border-accent/30 hover:bg-surface hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-accent">
                {categoryIcons[skillGroup.category] || (
                  <Code2 className="h-4 w-4" />
                )}
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {skillGroup.category}
              </h3>
            </div>
            <div className="mb-3 h-[2px] w-0 rounded-full bg-gradient-to-r from-accent to-secondary transition-all duration-500 group-hover:w-full" />
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.03 }}
                  className="rounded-lg border border-border-light/50 bg-surface-light/50 px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-accent/20 group-hover:text-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
