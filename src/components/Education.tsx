"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Languages, Heart, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

const levelPercent: Record<string, number> = {
  Native: 100,
  "B2": 70,
  "A2": 35,
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stagger = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Section id="education" title="Education & More" className="bg-surface/30">
      <div ref={ref} className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={childVariant} className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Education
            </h3>
          </motion.div>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <motion.div
                key={`${edu.school}-${edu.degree}`}
                variants={childVariant}
                className="rounded-lg border border-border/50 bg-surface/30 p-4 transition-all hover:border-accent/20"
              >
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {edu.school}
                  </h4>
                  <span className="shrink-0 text-[10px] text-muted">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-muted">{edu.degree}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-muted/50">
                  <MapPin className="h-2.5 w-2.5" />
                  {edu.location}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={childVariant} className="mb-6 flex items-center gap-3">
              <Award className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Certifications
              </h3>
            </motion.div>
            {profile.certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={childVariant}
                className="rounded-lg border border-border/50 bg-surface/30 p-4 transition-all hover:border-accent/20"
              >
                <h4 className="text-sm font-medium text-foreground">
                  {cert.name}
                </h4>
                <p className="mt-1 text-xs text-muted">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={childVariant} className="mb-4 flex items-center gap-3">
              <Languages className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Languages
              </h3>
            </motion.div>
            <div className="space-y-3">
              {profile.languages.map((lang) => (
                <motion.div key={lang.name} variants={childVariant}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted">{lang.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-light">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${levelPercent[lang.level] || 50}%` } : {}}
                      transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={childVariant} className="mb-4 flex items-center gap-3">
              <Heart className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Interests
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  variants={childVariant}
                  custom={i}
                  className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
