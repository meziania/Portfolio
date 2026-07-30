import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Services" };

const benefits = [
  {
    title: "Une application livrée de bout en bout",
    desc: "Base de données, backend, interface : un seul interlocuteur du besoin métier jusqu'au produit en production.",
  },
  {
    title: "Des systèmes pensés sécurité dès la conception",
    desc: "Authentification robuste (JWT, hashing), protections applicatives (Helmet, validation Zod), row-level security et anti-fraude — pas ajoutées après coup.",
  },
  {
    title: "Des pipelines et automatisations qui tournent sans vous",
    desc: "ETL/ELT (n8n, SQL Server, APIs, ERP/CRM), workflows automatisés et intégrations IA qui alimentent vos rapports sans intervention manuelle.",
  },
  {
    title: "Des dashboards qui répondent à vos vraies questions",
    desc: "Power BI/DAX construits sur un modèle de données propre et documenté — pas des rapports génériques copiés-collés.",
  },
  {
    title: "Une gestion de projet et une communication sans friction",
    desc: "Méthodologie Scrum, points d'avancement clairs, en français, anglais ou darija selon votre équipe.",
  },
];

export default function ServicesPage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">02 / SERVICES</span>
        <h1>Du besoin métier au produit livré.</h1>
        <p>
          Vos données sont éparpillées entre un ERP, un CRM, des fichiers Excel et plusieurs outils, et personne ne
          peut vous dire avec certitude ce qui se passe réellement dans votre business ? Je conçois les pipelines, les
          modèles de données et les dashboards BI qui règlent ce problème — une fois, proprement, documenté.
        </p>
      </Reveal>

      <Reveal>
        <div className="benefits">
          {benefits.map((b, i) => (
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
          Résultat : vous gagnez du temps de décision et vous arrêtez de coordonner plusieurs prestataires pour{" "}
          <strong>un seul produit</strong>.
        </p>
      </Reveal>
    </div>
  );
}
