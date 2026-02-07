export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  tags: string[];
  description: string;
  details?: string[];
  links?: { live: string; github: string };
};

export const projects: Project[] = [
  {
    slug: "cbe-superapp",
    title: "CBE SuperApp",
    subtitle: "Full-Stack • Enterprise Banking Solution", // Changed subtitle
    img: "/projects/cbe.png",
    tags: ["React Native", "Node.js", "Financial Security"], // Added Node.js
    description:
      "Enterprise-scale mobile banking architecture handling high-volume financial transactions.",
    details: [
      "Engineered secure financial modules ensuring compliance with international banking security standards.",
      "Optimized API consumption logic for high-traffic services, reducing mobile data overhead by 25%.",
      "Collaborated on backend-to-frontend data mapping for complex multi-currency transaction histories.",
    ],
  },
  {
    slug: "dashen-superapp",
    title: "Dashen Super App",
    subtitle: "Full-Stack • Digital Savings Platform",
    img: "/projects/dashen.png",
    tags: ["React Native", "API Integration", "Fintech"],
    description:
      "A community-based digital savings platform with real-time financial tracking.",
    details: [
      "Designed real-time payout and contribution logic using secure state management and backend synchronization.",
      "Implemented JWT-based authentication flows and secure local storage for sensitive user data.",
      "Reduced app launch time by 30% through optimized component lifecycle management and efficient data fetching.",
    ],
  },
  {
    slug: "etswitch-portal",
    title: "EtSwitch Agency Banking Portal",
    subtitle: "Backend & Web • Fintech Operations",
    img: "/projects/etswitch.png",
    tags: ["React", "Node.js", "PostgreSQL"], // Emphasize the DB
    description:
      "A mission-critical administrative portal for managing national agency banking operations.",
    details: [
      "Developed the administrative dashboard logic for monitoring real-time agent transactions and operational health.",
      "Architected backend integration strategies to display live financial data and automated reporting systems.",
      "Managed complex PostgreSQL queries to ensure fast retrieval of transaction logs for auditing purposes.",
    ],
  },
];
