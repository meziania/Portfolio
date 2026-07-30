import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { education, certifications } from "@/lib/data";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">06 / EDUCATION</span>
        <h1>Formation & certifications.</h1>
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
        <h3 className="mono">CERTIFICATIONS</h3>
        <div className="tag-list">
          {certifications.map((c) => (
            <span className="tag" key={c}>{c}</span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
