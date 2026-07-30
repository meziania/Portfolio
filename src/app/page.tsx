"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";

export default function Home() {
  const { ui } = useContent();
  const { home } = ui;
  const { schematic } = home;

  return (
    <div className="page-wrap">
      <Reveal className="hero">
        <div className="eyebrow mono">{home.eyebrow}</div>
        <h1>
          {home.h1Before} <span>{home.h1Highlight}</span>{home.h1After}<br />{home.h1Line2}<br />{home.h1Line3}
        </h1>
        <p className="lead">{home.lead}</p>
        <div className="hero-ctas">
          <Link href="/projects" className="btn btn-primary">{home.ctaProjects}</Link>
          <Link href="/about" className="btn btn-ghost">{home.ctaAbout}</Link>
        </div>
      </Reveal>

      <Reveal>
        <svg
          className="schematic"
          viewBox="0 0 980 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={schematic.ariaLabel}
        >
          <g className="coord">
            <text x="0" y="14">{schematic.coordClient}</text>
            <text x="900" y="14">{schematic.coordBi}</text>
          </g>
          <line x1="160" y1="110" x2="290" y2="110" className="flow-line" />
          <path d="M160 110 L290 110" className="flow-dash" />
          <line x1="450" y1="110" x2="580" y2="110" className="flow-line" />
          <path d="M450 110 L580 110" className="flow-dash" style={{ animationDelay: ".3s" }} />
          <path d="M740 110 L800 110 L800 90 L870 90" className="flow-line" strokeDasharray="3 4" />
          <path d="M740 110 L800 110 L800 90 L870 90" className="flow-dash" style={{ animationDelay: ".6s" }} />

          <rect x="20" y="70" width="140" height="80" rx="4" className="node-box active" />
          <text x="40" y="98" className="node-title">{schematic.client}</text>
          <text x="40" y="118" className="node-label">{schematic.clientSub1}</text>
          <text x="40" y="134" className="node-label">{schematic.clientSub2}</text>

          <rect x="290" y="55" width="160" height="110" rx="4" className="node-box" />
          <text x="310" y="83" className="node-title">{schematic.api}</text>
          <text x="310" y="103" className="node-label">{schematic.apiSub1}</text>
          <text x="310" y="119" className="node-label">{schematic.apiSub2}</text>
          <text x="310" y="135" className="node-label">{schematic.apiSub3}</text>

          <rect x="580" y="70" width="160" height="80" rx="4" className="node-box" />
          <text x="600" y="98" className="node-title">{schematic.db}</text>
          <text x="600" y="118" className="node-label">{schematic.dbSub1}</text>
          <text x="600" y="134" className="node-label">{schematic.dbSub2}</text>

          <rect x="870" y="72" width="95" height="76" rx="4" className="node-box" opacity={0.75} />
          <text x="888" y="98" className="node-title" fontSize={12}>{schematic.bi}</text>
          <text x="888" y="116" className="node-label">{schematic.biSub1}</text>
          <text x="888" y="132" className="node-label">{schematic.biSub2}</text>
        </svg>
      </Reveal>
    </div>
  );
}
