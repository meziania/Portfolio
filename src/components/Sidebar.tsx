"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, DownloadIcon } from "./Icons";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <span className="sidebar-avatar" style={{ width: 28, height: 28 }}>
            <Image src="/profile.png" alt={profile.name} width={28} height={28} />
          </span>
          ABDERRAHMANE
        </div>
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`scrim${open ? " show" : ""}`} onClick={() => setOpen(false)} />

      <aside className={`sidebar${open ? " open" : ""}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <Image src="/profile.png" alt={profile.name} width={52} height={52} />
          </div>
          <div className="info">
            <strong>Abderrahmane</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <span className="n mono">{item.n}</span>{item.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <a href={profile.cv} className="btn btn-ghost" download style={{ justifyContent: "center", fontSize: "0.75rem", padding: "11px 16px" }}>
            <DownloadIcon size={15} /> Télécharger le CV
          </a>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
          <span className="coords mono">CASABLANCA, MA · 33.5731° N, 7.5898° W</span>
        </div>
      </aside>
    </>
  );
}
