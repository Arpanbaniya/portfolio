import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { ExternalLink } from "@/components/shared";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? {
        title: project.title,
        description: project.description,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: {
          title: project.title,
          description: project.description,
          url: `/projects/${slug}`,
        },
      }
    : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="case-main shell">
      <Link className="back-link" href="/#work">
        <ArrowLeft size={15} /> Back to selected work
      </Link>
      <header className="case-hero">
        <span className="mono">
          PROJECT NOTES / {project.number} · {project.category.toUpperCase()}
        </span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="case-meta">
          <div>
            <span className="mono">MY ROLE / PROJECT STATUS</span>
            <span>
              {project.role}
              <br />
              {project.status}
            </span>
          </div>
          <div>
            <span className="mono">TOOLS & CONCEPTS</span>
            <ul className="tech-list">
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        {project.liveUrl && (
          <div className="project-actions">
            <ExternalLink href={project.liveUrl}>
              {slug === "digipaila" ? "Visit DigiPaila" : "Open Live App"}
            </ExternalLink>
          </div>
        )}
      </header>
      <section className="case-section">
        <h2>The context</h2>
        <p>{project.context}</p>
      </section>
      <section className="case-section">
        <h2>The problem</h2>
        <p>{project.problem}</p>
      </section>
      <section className="case-section">
        <h2>{slug === "digipaila" ? "My contribution" : "The work"}</h2>
        <ul>
          {project.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
      <section className="case-section">
        <h2>The idea, mapped out</h2>
        <div>
          <div className="architecture">
            {project.flow.map((step, i) => (
              <div key={step}>
                <span>{step}</span>
                {i < project.flow.length - 1 && <ArrowRight size={16} />}
              </div>
            ))}
          </div>
          <p className="mono" style={{ marginTop: 18, fontSize: 9 }}>
            CONCEPTUAL WORKFLOW
          </p>
        </div>
      </section>
      <section className="case-section">
        <h2>The engineering question</h2>
        <p>{project.challenge}</p>
      </section>
      <section className="case-section">
        <h2>What I took away</h2>
        <p>{project.learned}</p>
      </section>
      <section className="case-section">
        <h2>What could come next</h2>
        <p>{project.next}</p>
      </section>
      <div className="case-next">
        <span className="mono">NEXT SET OF NOTES</span>
        <Link href={`/projects/${next.slug}`}>
          {next.title}
          <ArrowUpRight size={25} />
        </Link>
      </div>
    </main>
  );
}
