import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon, DownloadIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">01 / À PROPOS</span>
        <h1>Qui je suis, et comment me joindre.</h1>
        <p>Une seule personne, un seul point de contact — du premier échange au produit livré.</p>
      </Reveal>

      <Reveal className="profile-card">
        <div className="avatar avatar-photo">
          <Image src="/profile.png" alt={profile.name} width={104} height={104} priority />
        </div>
        <div className="profile-meta">
          <h2>{profile.name}</h2>
          <span className="role mono">{profile.role}</span>
          <p>{profile.bio}</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="sec-head" style={{ marginBottom: 24 }}>
          <span className="sec-tag mono">CONTACT DIRECT</span>
        </div>
        <div className="contact-list">
          <a className="contact-row" href={profile.whatsappHref} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><WhatsAppIcon /></span>
              <div className="txt"><strong>WhatsApp</strong><span>{profile.whatsapp} — réponse la plus rapide</span></div>
            </div>
            <span className="go mono">Ouvrir →</span>
          </a>
          <a className="contact-row" href={`mailto:${profile.email}`}>
            <div className="label">
              <span className="icon"><MailIcon /></span>
              <div className="txt"><strong>Email</strong><span>{profile.email}</span></div>
            </div>
            <span className="go mono">Écrire →</span>
          </a>
          <a className="contact-row" href={profile.linkedin} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><LinkedInIcon /></span>
              <div className="txt"><strong>LinkedIn</strong><span>{profile.linkedinLabel}</span></div>
            </div>
            <span className="go mono">Voir le profil →</span>
          </a>
          <a className="contact-row" href={profile.github} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><GitHubIcon /></span>
              <div className="txt"><strong>GitHub</strong><span>{profile.githubLabel}</span></div>
            </div>
            <span className="go mono">Voir le code →</span>
          </a>
          <a className="contact-row" href={profile.cv} download>
            <div className="label">
              <span className="icon"><DownloadIcon /></span>
              <div className="txt"><strong>Curriculum Vitae</strong><span>PDF — version anglaise</span></div>
            </div>
            <span className="go mono">Télécharger →</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="factbox">
        <div className="fact-row"><span>Disponible pour</span><span>Missions freelance & CDI</span></div>
        <div className="fact-row"><span>Domaines</span><span>Full-stack · Systèmes d&apos;information · Data & BI</span></div>
        <div className="fact-row"><span>Intérêt</span><span>Systèmes ERP/CRM (Dynamics 365)</span></div>
        <div className="fact-row"><span>Localisation</span><span>{profile.location}</span></div>
        <div className="fact-row"><span>Langues</span><span>{profile.languages}</span></div>
      </Reveal>
    </div>
  );
}
