"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-secondary" />
          {children}
        </motion.div>
      </div>
    </section>
  );
}
