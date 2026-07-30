import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { skillsModules } from "@/lib/data";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">03 / SKILLS</span>
        <h1>Cinq modules, un seul développeur.</h1>
        <p>Les compétences que je mobilise le plus souvent, groupées par la façon dont je les utilise réellement en projet.</p>
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
