import Section from "./Section";
import ContactForm from "./ContactForm";
import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="bg-surface/30">
      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-8 text-sm leading-relaxed text-muted">
            Have a project in mind or just want to chat? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.contacts.email}`}
              className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-light bg-surface-light/50">
                <Mail className="h-3.5 w-3.5" />
              </span>
              {profile.contacts.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-light bg-surface-light/50">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              Casablanca, Morocco
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
