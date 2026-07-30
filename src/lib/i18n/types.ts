export type Locale = "fr" | "en";

export type NavItem = { n: string; label: string; href: string };

export type SkillModule = {
  idx: string;
  title: string;
  sub: string;
  tags: string[];
};

export type ProjectStatus = { label: string; kind: "live" | "progress" | "neutral" };
export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  flagship?: boolean;
  browserUrl: string;
  previewClass: string;
  mockup: "fidapp" | "erd" | "pos" | "video" | "geo" | "table-bi" | "table-gestipro";
  status: ProjectStatus;
  ptag: string;
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  note?: string;
};

export type ExperienceItem = {
  logo: string;
  date: string;
  title: string;
  org: string;
  desc: string;
};

export type EducationItem = {
  date: string;
  title: string;
  org: string;
  desc: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  languages: string;
  bio: string;
  email: string;
  whatsapp: string;
  whatsappHref: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  cv: string;
};

export type Content = {
  nav: NavItem[];
  skillsModules: SkillModule[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: string[];
  profile: Profile;
  ui: {
    sidebar: {
      shortRole: string;
      downloadCv: string;
      openMenu: string;
    };
    home: {
      eyebrow: string;
      h1Before: string;
      h1Highlight: string;
      h1After: string;
      h1Line2: string;
      h1Line3: string;
      lead: string;
      ctaProjects: string;
      ctaAbout: string;
      schematic: {
        ariaLabel: string;
        coordClient: string;
        coordBi: string;
        client: string;
        clientSub1: string;
        clientSub2: string;
        api: string;
        apiSub1: string;
        apiSub2: string;
        apiSub3: string;
        db: string;
        dbSub1: string;
        dbSub2: string;
        bi: string;
        biSub1: string;
        biSub2: string;
      };
  },
    about: {
      pageTag: string;
      h1: string;
      sub: string;
      contactTag: string;
      whatsappTitle: string;
      whatsappNote: string;
      openCta: string;
      emailTitle: string;
      writeCta: string;
      linkedinTitle: string;
      viewProfileCta: string;
      githubTitle: string;
      viewCodeCta: string;
      cvTitle: string;
      cvNote: string;
      downloadCta: string;
      factAvailableLabel: string;
      factAvailableValue: string;
      factDomainsLabel: string;
      factDomainsValue: string;
      factInterestLabel: string;
      factInterestValue: string;
      factLocationLabel: string;
      factLanguagesLabel: string;
    };
    services: {
      pageTag: string;
      h1: string;
      lead: string;
      benefits: { title: string; desc: string }[];
      outcomePrefix: string;
      outcomeStrong: string;
    };
    skills: {
      pageTag: string;
      h1: string;
      lead: string;
    };
    projects: {
      pageTag: string;
      h1: string;
      lead: string;
    };
    experience: {
      pageTag: string;
      h1: string;
    };
    education: {
      pageTag: string;
      h1: string;
      certTitle: string;
    };
  };
};
