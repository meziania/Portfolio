"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function SkillsContent() {
  const { skillsModules, ui } = useContent();
  const { skills } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{skills.pageTag}</span>
        <h1>{skills.h1}</h1>
        <p>{skills.lead}</p>
      </Reveal>

      <div className="skills-grid">
        {skillsModules.map((m) => (
          <Reveal key={m.idx} className="skill-module" data-idx={m.idx}>
            <h3>{m.title}</h3>
            <span className="sub mono">{m.sub}</span>
            <div className="tag-list">
              {m.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
