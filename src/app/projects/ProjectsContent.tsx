"use client";

import Reveal from "@/components/Reveal";
import ProjectMockup from "@/components/ProjectMockup";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function ProjectsContent() {
  const { projects, ui } = useContent();
  const { projects: p } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{p.pageTag}</span>
        <h1>{p.h1}</h1>
        <p>{p.lead}</p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((proj) => (
          <Reveal
            key={proj.id}
            className={`project-card${proj.flagship ? " flagship" : ""}`}
          >
            <div className="project-browser">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">{proj.browserUrl}</div>
            </div>
            <div className={`project-preview ${proj.previewClass}`}>
              <ProjectMockup type={proj.mockup} />
              <span className={`status-badge${proj.status.kind !== "neutral" ? " " + proj.status.kind : ""}`}>
                <span className="status-dot"></span>{proj.status.label}
              </span>
            </div>
            <div className="project-body">
              <span className="ptag mono">{proj.ptag}</span>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tag-list">
                {proj.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              {proj.links && (
                <div className="project-links">
                  {proj.links.map((l) => (
                    <a href={l.href} target="_blank" rel="noopener" key={l.href}>{l.label}</a>
                  ))}
                </div>
              )}
              {proj.note && <span className="project-note">{proj.note}</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
