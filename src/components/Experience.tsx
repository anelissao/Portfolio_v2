"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

function TimelineLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-[19px] top-0 bottom-0 w-px overflow-hidden">
      <motion.div
        className="h-full w-full bg-gradient-to-b from-accent via-secondary to-transparent"
        style={{ height }}
      />
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const cardSpring = { type: "spring" as const, stiffness: 100, damping: 18 };
  const dotSpring = { type: "spring" as const, stiffness: 200, damping: 12 };

  return (
    <Section
      id="experience"
      title="Professional Experience"
      className="bg-surface/30"
    >
      <div ref={ref} className="relative mx-auto max-w-3xl">
        <TimelineLine />

        <div className="space-y-12">
          {profile.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...cardSpring, delay: idx * 0.2 }}
              className="relative pl-14"
            >
              <motion.div
                className="absolute left-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-surface"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ ...dotSpring, delay: idx * 0.2 + 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent/40"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: idx * 0.5,
                    ease: "easeInOut",
                  }}
                />
                <Briefcase className="relative h-3.5 w-3.5 text-accent" />
              </motion.div>

              <div className="group rounded-xl border border-border/50 bg-surface/50 p-5 transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]">
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
