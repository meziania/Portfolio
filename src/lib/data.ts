export const nav = [
  { n: "00", label: "Accueil", href: "/" },
  { n: "01", label: "À propos", href: "/about" },
  { n: "02", label: "Services", href: "/services" },
  { n: "03", label: "Skills", href: "/skills" },
  { n: "04", label: "Projects", href: "/projects" },
  { n: "05", label: "Experience", href: "/experience" },
  { n: "06", label: "Education", href: "/education" },
];

export const skillsModules = [
  {
    idx: "M1",
    title: "Frontend Web",
    sub: "UI → STATE → PWA",
    tags: ["React 18/19", "Next.js 14", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "React Router", "TanStack Query", "PWA", "HTML5 / CSS3"],
  },
  {
    idx: "M2",
    title: "Backend, APIs & Sécurité",
    sub: "SERVER → AUTH → HARDENING",
    tags: ["Node.js / Express 5", "Django / DRF", "FastAPI", "Laravel / PHP", ".NET 8", "Java", "Prisma", "JWT / NextAuth", "Zod", "bcrypt / Helmet", "Row-Level Security", "WebRTC", "Celery / Redis"],
  },
  {
    idx: "M3",
    title: "Data, BI & ERP/CRM",
    sub: "MODELING → ETL → REPORTING",
    tags: ["Power BI / DAX", "Power Pivot", "Dynamics 365 BC (ERP/CRM)", "AL", "n8n", "ETL/ELT", "SQL Server", "T-SQL", "Python (Pandas)", "Data Profiling", "REST APIs"],
  },
  {
    idx: "M4",
    title: "Systems & Infrastructure",
    sub: "DATABASES → TOOLS → DEPLOY",
    tags: ["PostgreSQL", "Oracle DB", "MySQL / MariaDB", "MongoDB · Firestore", "Git · Scrum · UML", "Vercel"],
  },
  {
    idx: "M5",
    title: "Desktop & Automatisation",
    sub: "SCRIPT → GUI → DEPLOY",
    tags: ["Python", "PyQt5", "SQLite", "SQLAlchemy", "Matplotlib", "ReportLab", "PyInstaller"],
  },
];

export type Project = {
  id: string;
  flagship?: boolean;
  browserUrl: string;
  previewClass: string;
  mockup: "fidapp" | "erd" | "pos" | "video" | "geo" | "table-bi" | "table-gestipro";
  status: { label: string; kind: "live" | "progress" | "neutral" };
  ptag: string;
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    id: "fidapp",
    flagship: true,
    browserUrl: "fidapp-client.vercel.app",
    previewClass: "preview-01",
    mockup: "fidapp",
    status: { label: "EN PRODUCTION — 4 APPS LIVE", kind: "live" },
    ptag: "FULL-STACK · SAAS · FLAGSHIP PROJECT",
    title: "FidApp — Fidélité digitale par QR code",
    description: "SaaS de fidélité digitale pour commerces marocains (restaurants, cafés, coiffeurs, salons de beauté, boulangeries) : le client scanne un QR code et cumule des visites, sans application à télécharger. Architecture en monorepo avec 4 applications : un client PWA, un dashboard commerçant, un panel d'administration, et une API REST. Système anti-fraude par codes QR à rotation avec expiration (TTL), authentification par téléphone, et pages marketing par secteur pour le SEO.",
    tags: ["React 19", "Vite", "Node.js / Express 5", "PostgreSQL", "Prisma", "JWT", "QR Code", "PWA", "Tailwind CSS 4"],
    links: [
      { label: "API →", href: "https://github.com/FidelyApp1/fidapp-backend" },
      { label: "App client →", href: "https://fidapp-client.vercel.app" },
      { label: "Dashboard commerçant →", href: "https://fidapp-dashboard.vercel.app" },
      { label: "Admin →", href: "https://fidapp-admin.vercel.app" },
    ],
  },
  {
    id: "fgt",
    browserUrl: "food-group-trading · Dynamics 365",
    previewClass: "preview-02",
    mockup: "erd",
    status: { label: "MISSION CLIENT — INTERNE", kind: "neutral" },
    ptag: "DATA · BI · ERP/CRM REVERSE-ENGINEERING",
    title: "Reconstruction d'un entrepôt de données ERP/CRM",
    description: "Chez Food Group Trading, structuration et documentation de 77 tables ERP/CRM (Ventes, Achats, Stock, CRM, Logistique, RH, Finance) sans documentation existante. Pipelines ETL n8n consolidant SQL Server, Excel, scraping HTML et API REST, transformations T-SQL et dashboards Power BI/DAX sur Microsoft Dynamics 365 Business Central.",
    tags: ["n8n", "SQL Server", "Power BI / DAX", "Dynamics 365 BC (ERP/CRM)", "T-SQL", "CRM"],
  },
  {
    id: "2r",
    browserUrl: "2R Parts Auto Accessoires · Desktop",
    previewClass: "preview-03",
    mockup: "pos",
    status: { label: "LIVRÉ & UTILISÉ EN PRODUCTION", kind: "live" },
    ptag: "FREELANCE · DESKTOP APP",
    title: "Application de gestion — 2R Parts Auto Accessoires",
    description: "Application desktop développée de zéro en freelance pour un distributeur de pièces auto : point de vente (POS), gestion de stock, suivi du crédit client, gestion fournisseurs, génération de factures PDF, reporting financier et sauvegardes automatisées.",
    tags: ["Python", "PyQt5", "SQLite", "SQLAlchemy", "ReportLab", "PyInstaller"],
  },
  {
    id: "jobgate",
    browserUrl: "jobgate.ma · Recruitment Platform",
    previewClass: "preview-04",
    mockup: "video",
    status: { label: "MISSION CLIENT — INTERNE", kind: "neutral" },
    ptag: "FULL-STACK · RECRUITMENT PLATFORM",
    title: "Studio d'entretien vidéo — JobGate",
    description: "Développement backend Django/DRF pour une plateforme de recrutement web : studio d'entretien vidéo intégré via WebRTC (enregistrement, contrôle qualité), authentification multi-fournisseurs, gestion des offres/candidatures et tâches asynchrones Celery/Redis.",
    tags: ["Django / DRF", "WebRTC", "PostgreSQL", "Celery", "Redis"],
  },
  {
    id: "timetrack",
    browserUrl: "timetrack-pro · PFE 2026",
    previewClass: "preview-05",
    mockup: "geo",
    status: { label: "PROJET ACADÉMIQUE", kind: "neutral" },
    ptag: "FULL-STACK · SAAS",
    title: "TimeTrack Pro",
    description: "Plateforme SaaS B2B de pointage des employés par géolocalisation (geofencing GPS/Haversine) et QR codes dynamiques, avec dashboards analytiques RH/employés. Projet de fin d'année audité en jury, avec diagrammes UML et volet financier.",
    tags: ["Next.js", "React", "TypeScript", "Firebase / Firestore", "Tailwind CSS"],
    note: "Code disponible sur demande",
  },
  {
    id: "hospital-bi",
    browserUrl: "profiling_excel.py · BI Toolkit",
    previewClass: "preview-06",
    mockup: "table-bi",
    status: { label: "PROJET ACADÉMIQUE", kind: "neutral" },
    ptag: "DATA · BI PORTFOLIO PROJECT",
    title: "Outil de data profiling — Gestion hospitalière",
    description: "Outil Python réutilisable de profiling de données (profiling_excel.py) détectant automatiquement les anomalies dans des sources Excel brutes, avec reporting consolidé pour un projet BI de gestion hospitalière.",
    tags: ["Python", "Pandas", "Data Profiling", "BI Reporting"],
  },
  {
    id: "gestipro",
    browserUrl: "gestipro · en développement",
    previewClass: "preview-07",
    mockup: "table-gestipro",
    status: { label: "EN DÉVELOPPEMENT", kind: "progress" },
    ptag: "FULL-STACK · SAAS — EN COURS",
    title: "GestiPro",
    description: "Plateforme SaaS multi-tenant destinée aux commerces marocains (restaurants, dépôts, boutiques) pour la gestion des opérations courantes.",
    tags: ["Next.js 14", "Supabase", "Vercel"],
    note: "Repo privé pour l'instant",
  },
];

export const experience = [
  {
    logo: "FGT",
    date: "JUL 2026 — PRÉSENT",
    title: "Stagiaire Data Engineering, BI & ERP/CRM",
    org: "Food Group Trading · Casablanca-Settat · Sur site",
    desc: "Conception et automatisation de pipelines ETL avec n8n (ERP/CRM, SQL Server, Excel, API, HTML). Construction et maintenance d'un entrepôt de données pour le reporting analytique. Dashboards et KPIs Power BI/DAX. Modélisation des données ERP/CRM de Microsoft Dynamics 365 Business Central.",
  },
  {
    logo: "2R",
    date: "OCT 2025 — NOV 2025",
    title: "Ingénieur logiciel (Freelance)",
    org: "2R Parts Auto Accessoires · Casablanca-Settat · Remote",
    desc: "Développement d'une application desktop de gestion sur-mesure pour un distributeur de pièces auto : POS, stock, crédit client, fournisseurs, facturation PDF, reporting financier et sauvegardes automatisées.",
  },
  {
    logo: "JG",
    date: "JUL 2025 — SEP 2025",
    title: "Stagiaire Ingénierie Logicielle",
    org: "JobGate · Ben Guerir · Hybride",
    desc: "Développement backend (Django/DRF) d'une plateforme de recrutement avec studio d'entretien vidéo intégré (WebRTC), authentification multi-fournisseurs, gestion des offres/candidatures et tâches asynchrones (Celery/Redis).",
  },
  {
    logo: "EP",
    date: "SEP 2023 — JUN 2024",
    title: "Formateur IT",
    org: "École Privée · Casablanca-Settat · Sur site",
    desc: "Conception et animation de formations IT pratiques, supervision d'ateliers en petits groupes, évaluation et suivi des apprenants, installation et maintenance du parc informatique.",
  },
  {
    logo: "DL",
    date: "AVR 2022 — JUL 2022",
    title: "Stagiaire Ingénieur Logiciel",
    org: "DL Software Maroc · Agadir / Rabat-Salé-Kénitra · Hybride",
    desc: "Correction de bugs et amélioration d'interfaces sur des applications existantes. Développement de fonctionnalités en Java et PHP, conception et maintenance de bases de données relationnelles (MySQL).",
  },
];

export const education = [
  {
    date: "SEP 2023 — JUL 2027",
    title: "Ingénieur Génie Informatique — spécialité IIR",
    org: "EMSI (École Marocaine des Sciences de l'Ingénieur), Casablanca",
    desc: "5ᵉ année, spécialisation Ingénierie des Systèmes d'Information & Réseaux. Cursus : Génie logiciel, bases de données & data warehousing, business intelligence, sécurité réseau & applicative, Java EE/Spring Boot, IoT.",
  },
  {
    date: "SEP 2020 — JUL 2022",
    title: "Technicien Spécialisé — Développement Full Stack",
    org: "OFPPT — ISTA NTIC2, Casablanca",
    desc: "Formation en développement web full-stack : front-end, back-end, conception de bases de données et fondamentaux du génie logiciel.",
  },
];

export const certifications = [
  "Scrum Master — CertiProf (2024)",
  "ALX Professional Foundation",
  "Oracle Database — LearnQuest",
  "Python for Web Data — Univ. of Maryland",
  "POO en C++ — EPFL",
  "Soft Skills — ALX Africa",
];

export const profile = {
  name: "Abderrahmane Meziani",
  role: "Ingénieur Logiciel — Développement Digital des Systèmes d'Information",
  location: "Casablanca-Settat, Maroc (remote OK)",
  languages: "AR (natif) · FR (courant) · EN (pro)",
  bio: "Développeur full-stack spécialisé dans le développement digital des systèmes d'information de bout en bout, avec des compétences complémentaires en ingénierie des données/BI et un intérêt marqué pour les systèmes ERP/CRM (Microsoft Dynamics 365 Business Central).",
  email: "a.meziani.dev@gmail.com",
  whatsapp: "+212699254247",
  whatsappHref: "https://wa.me/212699254247",
  github: "https://github.com/meziania",
  githubLabel: "github.com/meziania",
  linkedin: "https://www.linkedin.com/in/abderrahmane-meziani-929b8a26b/",
  linkedinLabel: "linkedin.com/in/abderrahmane-meziani",
  cv: "/CvAnglaisAbderrahmaneMeziani.pdf",
};
