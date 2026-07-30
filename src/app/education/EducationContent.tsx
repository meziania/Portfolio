"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function EducationContent() {
  const { education, certifications, ui } = useContent();
  const { education: edu } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{edu.pageTag}</span>
        <h1>{edu.h1}</h1>
      </Reveal>

      <div className="edu-grid">
        {education.map((e) => (
          <Reveal key={e.title} className="edu-card">
            <span className="tl-date mono">{e.date}</span>
            <h3>{e.title}</h3>
            <span className="tl-org">{e.org}</span>
            <p>{e.desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="cert-box">
        <h3 className="mono">{edu.certTitle}</h3>
        <div className="tag-list">
          {certifications.map((c) => (
            <span className="tag" key={c}>{c}</span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
