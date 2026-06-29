import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-4">
          <a
            href={profile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted/50 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted/50 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.contacts.email}`}
            className="text-xs text-muted/50 transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-muted/40">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
        </p>
      </div>
    </footer>
  );
}
