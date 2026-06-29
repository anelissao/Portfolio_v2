"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Languages, Heart } from "lucide-react";
import { profile } from "@/data/profile";
import Section from "./Section";

const iconMap: Record<string, React.ReactNode> = {
  education: <GraduationCap className="h-3.5 w-3.5 text-accent" />,
  certification: <Award className="h-3.5 w-3.5 text-accent" />,
  languages: <Languages className="h-3.5 w-3.5 text-accent" />,
  interests: <Heart className="h-3.5 w-3.5 text-accent" />,
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="education" title="Education & More" className="bg-surface/30">
      <div ref={ref} className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            {iconMap.education}
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Education
            </h3>
          </div>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div
                key={`${edu.school}-${edu.degree}`}
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
                <span className="mt-1 inline-block text-[10px] text-muted/50">
                  {edu.location}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              {iconMap.certification}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Certifications
              </h3>
            </div>
            {profile.certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-border/50 bg-surface/30 p-4 transition-all hover:border-accent/20"
              >
                <h4 className="text-sm font-medium text-foreground">
                  {cert.name}
                </h4>
                <p className="mt-1 text-xs text-muted">{cert.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              {iconMap.languages}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-lg border border-border/50 bg-surface/30 px-4 py-2 text-center transition-all hover:border-accent/20"
                >
                  <p className="text-sm font-medium text-foreground">
                    {lang.name}
                  </p>
                  <p className="text-xs text-muted">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4 flex items-center gap-3">
              {iconMap.interests}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs text-accent"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
