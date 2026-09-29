import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { links } from "@/data/links";
import type { Project } from "@/data/projects";
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link ${className}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
export function ProjectActions({ project }: { project: Project }) {
  const liveAction = project.liveUrl && (
    <ExternalLink
      href={project.liveUrl}
      className={project.slug === "financial-statement-automation" ? "live-link" : ""}
    >
      {project.slug === "digipaila" ? "Visit DigiPaila" : "Open Live App"}
    </ExternalLink>
  );
  return (
    <div className="project-actions">
      {project.slug === "financial-statement-automation" && liveAction}
      <Link className="text-link" href={`/projects/${project.slug}`}>
        Read project notes <ArrowRight size={17} />
      </Link>
      {project.slug !== "financial-statement-automation" && liveAction}
    </div>
  );
}
export function Footer() {
  return (
    <footer className="shell footer">
      <Link href="/" className="footer-name">
        Arpan Baniya<span className="brand-dot">.</span>
      </Link>
      <span>Built with care, in Nepal.</span>
      <div>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        )}
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number} /</span> {children}
    </div>
  );
}
