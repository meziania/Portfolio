import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectMockup from "@/components/ProjectMockup";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">04 / PROJECTS</span>
        <h1>Voir le travail, pas juste en parler.</h1>
        <p>Des produits réellement déployés — pas des maquettes. Chaque badge indique le statut réel du projet.</p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p) => (
          <Reveal
            key={p.id}
            className={`project-card${p.flagship ? " flagship" : ""}`}
          >
            <div className="project-browser">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">{p.browserUrl}</div>
            </div>
            <div className={`project-preview ${p.previewClass}`}>
              <ProjectMockup type={p.mockup} />
              <span className={`status-badge${p.status.kind !== "neutral" ? " " + p.status.kind : ""}`}>
                <span className="status-dot"></span>{p.status.label}
              </span>
            </div>
            <div className="project-body">
              <span className="ptag mono">{p.ptag}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tag-list">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              {p.links && (
                <div className="project-links">
                  {p.links.map((l) => (
                    <a href={l.href} target="_blank" rel="noopener" key={l.href}>{l.label}</a>
                  ))}
                </div>
              )}
              {p.note && <span className="project-note">{p.note}</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
