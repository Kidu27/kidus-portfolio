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
    slug: "dashen-superapp",
    title: "Dashen Super App",
    subtitle: "Mobile • Digital savings platform",
    img: "/projects/dashen.png",
    tags: ["React Native", "Financial Services", "Cross-platform"],
    description:
      "Community-based digital savings and financial services mobile platform.",
    details: [
      "Developed and maintained cross-platform mobile features using React Native for Android and iOS.",
      "Implemented secure contribution and payout flows with real-time status updates.",
      "Optimized mobile performance and ensured smooth user interactions across devices.",
    ],
  },
  {
    slug: "cbe-superapp",
    title: "CBE SuperApp",
    subtitle: "Mobile • Enterprise banking application",
    img: "/projects/cbe.png",
    tags: ["React Native", "Financial Services", "Enterprise"],
    description:
      "Enterprise-scale mobile banking and financial services application.",
    details: [
      "Developed React Native components for financial service modules.",
      "Integrated API-driven features for categorized content and services.",
      "Enhanced performance and responsiveness for high-traffic usage.",
    ],
  },
  {
    slug: "etswitch-portal",
    title: "EtSwitch Agency Banking Portal",
    subtitle: "Web • Fintech portal for agency banking",
    img: "/projects/etswitch.png",
    tags: ["React", "RESTful APIs", "Fintech"],
    description:
      "Web-based fintech portal for managing agency banking operations and services.",
    details: [
      "Built and enhanced React web portal features for agent management, transactions, and operational workflows.",
      "Integrated backend APIs to display real-time financial data, reports, and service statuses within the portal.",
      "Improved portal usability, responsiveness, and stability across different browsers and screen resolutions.",
    ],
  },
  {
    slug: "olla-app",
    title: "Olla App",
    subtitle: "Mobile • Location-based restaurant discovery",
    img: "/projects/olla.png",
    tags: ["React Native", "Geolocation", "TypeScript"],
    description:
      "Location-based restaurant discovery marketplace mobile application.",
    details: [
      "Developed a cross-platform mobile app using React Native for discovering nearby restaurants within a defined radius.",
      "Implemented geolocation-based search and distance filtering to enhance user experience.",
      "Designed smooth and responsive mobile UI optimized for real-world usage.",
    ],
  },
];
