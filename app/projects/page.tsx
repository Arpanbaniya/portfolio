import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
export const metadata: Metadata = {
  title: "Project archive",
  alternates: { canonical: "/projects" },
};
export default function Archive() {
  return (
    <main id="main" className="shell case-main">
      <header className="archive-title">
        <span className="mono">THE COMPLETE COLLECTION</span>
        <h1 style={{ marginTop: 25 }}>
          Projects &<br />
          <span className="serif">experiments.</span>
        </h1>
        <p>
          Five steps in an ongoing education. Select a project to read the
          notes.
        </p>
      </header>
      <div className="journey">
        {projects.map((p) => (
          <Link
            className="journey-item"
            key={p.slug}
            href={`/projects/${p.slug}`}
          >
            <span className="journey-number">{p.number}</span>
            <div>
              <h2 style={{ fontSize: 24 }}>{p.title}</h2>
              <p>{p.category}</p>
            </div>
            <span className="journey-type">{p.status}</span>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </main>
  );
}
