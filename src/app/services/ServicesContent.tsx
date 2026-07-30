"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function ServicesContent() {
  const { ui } = useContent();
  const { services } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{services.pageTag}</span>
        <h1>{services.h1}</h1>
        <p>{services.lead}</p>
      </Reveal>

      <Reveal>
        <div className="benefits">
          {services.benefits.map((b, i) => (
            <div className="benefit-item" key={b.title}>
              <span className="benefit-num mono">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="about-outcome">
          {services.outcomePrefix}{" "}
          <strong>{services.outcomeStrong}</strong>.
        </p>
      </Reveal>
    </div>
  );
}
