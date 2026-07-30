"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/i18n/LanguageProvider";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon, DownloadIcon } from "@/components/Icons";

export default function AboutContent() {
  const { profile, ui } = useContent();
  const { about } = ui;

  return (
    <div className="page-wrap">
      <Reveal className="page-head">
        <span className="page-tag mono">{about.pageTag}</span>
        <h1>{about.h1}</h1>
        <p>{about.sub}</p>
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
          <span className="sec-tag mono">{about.contactTag}</span>
        </div>
        <div className="contact-list">
          <a className="contact-row" href={profile.whatsappHref} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><WhatsAppIcon /></span>
              <div className="txt"><strong>{about.whatsappTitle}</strong><span>{profile.whatsapp} — {about.whatsappNote}</span></div>
            </div>
            <span className="go mono">{about.openCta}</span>
          </a>
          <a className="contact-row" href={`mailto:${profile.email}`}>
            <div className="label">
              <span className="icon"><MailIcon /></span>
              <div className="txt"><strong>{about.emailTitle}</strong><span>{profile.email}</span></div>
            </div>
            <span className="go mono">{about.writeCta}</span>
          </a>
          <a className="contact-row" href={profile.linkedin} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><LinkedInIcon /></span>
              <div className="txt"><strong>{about.linkedinTitle}</strong><span>{profile.linkedinLabel}</span></div>
            </div>
            <span className="go mono">{about.viewProfileCta}</span>
          </a>
          <a className="contact-row" href={profile.github} target="_blank" rel="noopener">
            <div className="label">
              <span className="icon"><GitHubIcon /></span>
              <div className="txt"><strong>{about.githubTitle}</strong><span>{profile.githubLabel}</span></div>
            </div>
            <span className="go mono">{about.viewCodeCta}</span>
          </a>
          <a className="contact-row" href={profile.cv} download>
            <div className="label">
              <span className="icon"><DownloadIcon /></span>
              <div className="txt"><strong>{about.cvTitle}</strong><span>{about.cvNote}</span></div>
            </div>
            <span className="go mono">{about.downloadCta}</span>
          </a>
        </div>
      </Reveal>

      <Reveal className="factbox">
        <div className="fact-row"><span>{about.factAvailableLabel}</span><span>{about.factAvailableValue}</span></div>
        <div className="fact-row"><span>{about.factDomainsLabel}</span><span>{about.factDomainsValue}</span></div>
        <div className="fact-row"><span>{about.factInterestLabel}</span><span>{about.factInterestValue}</span></div>
        <div className="fact-row"><span>{about.factLocationLabel}</span><span>{profile.location}</span></div>
        <div className="fact-row"><span>{about.factLanguagesLabel}</span><span>{profile.languages}</span></div>
      </Reveal>
    </div>
  );
}
