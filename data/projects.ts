export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  tags: string[];
  description: string;
  details?: string[];
  links?: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    slug: "cbe-superapp",
    title: "CBE SuperApp",
    subtitle: "Enterprise Mobile Banking · React Native",
    img: "/projects/cbe.png",
    tags: ["React Native", "Node.js", "FinTech", "TypeScript"],
    description:
      "Enterprise-scale mobile banking super-app for the Commercial Bank of Ethiopia — the country's largest bank — handling high-volume transaction processing for millions of users.",
    details: [
      "Architected comprehensive financial modules: wallet management, loan services, budgeting tools, and virtual card management.",
      "Integrated robust payment gateways and IPS (Integrated Payment Systems) alongside in-app e-commerce.",
      "Built secure, real-time in-app chat and advanced notification systems.",
      "Ensured strict compliance with banking security standards through optimized session management and encrypted data flows.",
    ],
  },
  {
    slug: "dashen-superapp",
    title: "Dashen Super App — Edl Feature",
    subtitle: "Gamified FinTech · React Native",
    img: "/projects/dashen.webp",
    tags: ["React Native", "REST API", "Animations", "FinTech"],
    description:
      "Gamified prize-winning feature integrated within the digital ecosystem of Dashen Bank, Ethiopia's third-largest commercial bank.",
    details: [
      "Developed interactive and highly engaging mobile UI components for the 'Dashen Edl' prize-winning game.",
      "Integrated secure backend APIs to handle real-time user participation, entry tracking, and reward distribution.",
      "Optimized animations and component rendering for a smooth, lag-free experience across thousands of concurrent users.",
    ],
  },
  {
    slug: "etswitch-portal",
    title: "EtSwitch Agency Banking Portal",
    subtitle: "FinTech Web Portal · React & Node.js",
    img: "/projects/etswitch.png",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    description:
      "Mission-critical web-based fintech portal for managing agency banking operations and services at a national scale.",
    details: [
      "Built and enhanced React web portal features for agent management, transaction processing, and operational workflows.",
      "Optimized session management, reporting interfaces, and security protocols for sensitive financial data access.",
      "Managed complex PostgreSQL queries to ensure fast retrieval of transaction logs for auditing purposes.",
    ],
  },
  {
    slug: "olla-app",
    title: "Olla — Restaurant Discovery App",
    subtitle: "Location-Based Lifestyle · React Native",
    img: "/projects/olla.png",
    tags: ["React Native", "Geolocation", "Node.js", "Real-time"],
    description:
      "Production-grade, location-based lifestyle and restaurant discovery application with real-time data synchronization.",
    details: [
      "Engineered complex geolocation logic, distance filtering, and real-time data synchronization.",
      "Bridged mobile frontend and server-side logic, translating complex business requirements into scalable code.",
      "Participated in agile code reviews, enforcing strict coding standards and performance optimization techniques.",
    ],
  },
  {
    slug: "hageregna",
    title: "Hageregna",
    subtitle: "Community Platform · Full-Stack",
    img: "/projects/hageregna.png",
    tags: ["React Native", "Node.js", "MongoDB"],
    description: "A community-driven platform connecting Ethiopians.",
    details: [],
  },
  {
    slug: "abronet",
    title: "Abronet",
    subtitle: "Digital Services · Full-Stack",
    img: "/projects/abronet.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "Digital services platform with robust backend architecture.",
    details: [],
  },
];
