"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const spring = { type: "spring" as const, stiffness: 200, damping: 20 };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  function validate(): boolean {
    const e: FormErrors = {};
    if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (form.subject.trim().length < 2) e.subject = "Subject is required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMsg(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please try again.");
    }
  }

  const fields: { name: keyof FormData; label: string; type: string; rows?: number }[] = [
    { name: "name", label: "Your Name", type: "text" },
    { name: "email", label: "Your Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
    { name: "message", label: "Message", type: "textarea", rows: 5 },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {fields.map((field, i) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: i * 0.06 }}
        >
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              rows={field.rows}
              value={form[field.name]}
              onChange={(e) => {
                setForm((f) => ({ ...f, [field.name]: e.target.value }));
                if (errors[field.name]) setErrors((e) => ({ ...e, [field.name]: undefined }));
              }}
              className={`w-full rounded-lg border bg-surface/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/40 focus:border-accent/50 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] ${
                errors[field.name] ? "border-red-500/50" : "border-border/50"
              }`}
              placeholder={`Enter your ${field.name}...`}
            />
          ) : (
            <input
              type={field.type}
              value={form[field.name]}
              onChange={(e) => {
                setForm((f) => ({ ...f, [field.name]: e.target.value }));
                if (errors[field.name]) setErrors((e) => ({ ...e, [field.name]: undefined }));
              }}
              className={`w-full rounded-lg border bg-surface/50 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/40 focus:border-accent/50 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] ${
                errors[field.name] ? "border-red-500/50" : "border-border/50"
              }`}
              placeholder={`Enter your ${field.name}...`}
            />
          )}
          <AnimatePresence>
            {errors[field.name] && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1 flex items-center gap-1 text-xs text-red-400"
              >
                <AlertCircle className="h-3 w-3" />
                {errors[field.name]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: fields.length * 0.06 }}
      >
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </motion.div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-accent"
          >
            <CheckCircle className="h-4 w-4 shrink-0" />
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {serverMsg || "Something went wrong. Try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
