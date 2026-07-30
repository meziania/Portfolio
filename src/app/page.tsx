import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="page-wrap">
      <Reveal className="hero">
        <div className="eyebrow mono">DÉVELOPPEUR LOGICIEL — SYSTÈMES D&apos;INFORMATION · FULL-STACK · SÉCURITÉ</div>
        <h1>
          I build full-stack <span>digital systems</span>,<br />secure them by design,<br />and I&apos;m drawn to what runs ERP/CRM.
        </h1>
        <p className="lead">
          Développeur full-stack spécialisé dans le développement digital des systèmes d&apos;information de
          bout en bout — de la base de données à l&apos;interface en production — avec des compétences
          complémentaires en ingénierie des données/BI et un intérêt marqué pour les systèmes ERP/CRM
          (Microsoft Dynamics 365 Business Central).
        </p>
        <div className="hero-ctas">
          <Link href="/projects" className="btn btn-primary">Voir les projets →</Link>
          <Link href="/about" className="btn btn-ghost">À propos de moi</Link>
        </div>
      </Reveal>

      <Reveal>
        <svg
          className="schematic"
          viewBox="0 0 980 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Architecture logicielle : Client, API & Sécurité, Base de données, avec une extension Data & BI"
        >
          <g className="coord">
            <text x="0" y="14">00.CLIENT</text>
            <text x="900" y="14">03.BI</text>
          </g>
          <line x1="160" y1="110" x2="290" y2="110" className="flow-line" />
          <path d="M160 110 L290 110" className="flow-dash" />
          <line x1="450" y1="110" x2="580" y2="110" className="flow-line" />
          <path d="M450 110 L580 110" className="flow-dash" style={{ animationDelay: ".3s" }} />
          <path d="M740 110 L800 110 L800 90 L870 90" className="flow-line" strokeDasharray="3 4" />
          <path d="M740 110 L800 110 L800 90 L870 90" className="flow-dash" style={{ animationDelay: ".6s" }} />

          <rect x="20" y="70" width="140" height="80" rx="4" className="node-box active" />
          <text x="40" y="98" className="node-title">Client</text>
          <text x="40" y="118" className="node-label">React · Next.js</text>
          <text x="40" y="134" className="node-label">TypeScript</text>

          <rect x="290" y="55" width="160" height="110" rx="4" className="node-box" />
          <text x="310" y="83" className="node-title">API & Sécurité</text>
          <text x="310" y="103" className="node-label">Node.js · Django</text>
          <text x="310" y="119" className="node-label">Auth · validation</text>
          <text x="310" y="135" className="node-label">(JWT, Zod)</text>

          <rect x="580" y="70" width="160" height="80" rx="4" className="node-box" />
          <text x="600" y="98" className="node-title">Base de données</text>
          <text x="600" y="118" className="node-label">PostgreSQL</text>
          <text x="600" y="134" className="node-label">Prisma · SQL Server</text>

          <rect x="870" y="72" width="95" height="76" rx="4" className="node-box" opacity={0.75} />
          <text x="888" y="98" className="node-title" fontSize={12}>Data & BI</text>
          <text x="888" y="116" className="node-label">Power BI</text>
          <text x="888" y="132" className="node-label">n8n</text>
        </svg>
      </Reveal>
    </div>
  );
}
