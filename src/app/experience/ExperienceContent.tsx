"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function ExperienceContent() {
  const { experience, ui } = useContent();
  const { experience: exp } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{exp.pageTag}</span>
        <h1>{exp.h1}</h1>
      </Reveal>

      <div className="timeline">
        {experience.map((e) => (
          <Reveal key={e.logo + e.date} as="div" className="tl-item">
            <div className="tl-logo mono" aria-hidden="true">{e.logo}</div>
            <div className="tl-content">
              <span className="tl-date mono">{e.date}</span>
              <h3>{e.title}</h3>
              <span className="tl-org">{e.org}</span>
              <p>{e.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
