import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ScrollProgress from "@/components/ScrollProgress";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/meziania/portfolio"),
  title: {
    default: "Abderrahmane Meziani — Software Engineer & Full-Stack Developer",
    template: "%s · Abderrahmane Meziani",
  },
  description:
    "Développeur logiciel full-stack spécialisé en applications web sécurisées (Next.js, Django, FastAPI), avec une expertise complémentaire en ingénierie des données et BI.",
  authors: [{ name: "Abderrahmane Meziani" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Abderrahmane Meziani — Software Engineer & Full-Stack Developer",
    description:
      "Applications web full-stack sécurisées, de la base de données à l'interface — avec une expertise complémentaire en data engineering & BI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abderrahmane Meziani — Software Engineer & Full-Stack Developer",
    description:
      "Applications web full-stack sécurisées — avec une expertise complémentaire en data engineering & BI.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230B1626'/%3E%3Ccircle cx='16' cy='16' r='6' fill='%23E8A33D'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1626",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abderrahmane Meziani",
  jobTitle: "Software Engineer — Développeur Full-Stack, Systèmes Sécurisés & Data Engineering",
  email: "mailto:a.meziani.dev@gmail.com",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "EMSI — École Marocaine des Sciences de l'Ingénieur" },
    { "@type": "EducationalOrganization", name: "OFPPT — ISTA NTIC2" },
  ],
  worksFor: { "@type": "Organization", name: "Food Group Trading" },
  address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressRegion: "Casablanca-Settat", addressCountry: "MA" },
  knowsLanguage: ["ar", "fr", "en"],
  sameAs: ["https://github.com/meziania", "https://www.linkedin.com/in/abderrahmane-meziani-929b8a26b/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "personal",
    email: "a.meziani.dev@gmail.com",
    telephone: "+212699254247",
    availableLanguage: ["ar", "fr", "en"],
  },
  url: "https://github.com/meziania/portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${grotesk.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <div className="shell">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
