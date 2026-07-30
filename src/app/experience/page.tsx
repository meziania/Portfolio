import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">05 / EXPERIENCE</span>
        <h1>Parcours.</h1>
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
