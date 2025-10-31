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
    slug: "dashen-superapp-boch-boch-portal",
    title: "Dashen SuperAPP Boch Boch Portal",
    subtitle: "Web • Bank game portal",
    img: "/projects/dashen.png",
    tags: ["Next.js", "Turbo Repo", "TypeScript"],
    description:
      "Portal for Dashen Bank game, featuring a comprehensive dashboard.",
    details: [
      "Built using Next.js, Turbo Repo, and TypeScript.",
      "Developed features to display prizes, players' activity stats, and more.",
    ],
    // links: {
    //   live: "https://example.com",
    //   github: "https://github.com/example/creative-portfolio",
    // },
  },
  {
    slug: "hageregna-equb",
    title: "Hageregna Equb",
    subtitle: "Fullstack • Community-based rotating savings platform",
    img: "/projects/hageregna.png",
    tags: ["Prisma", "PostgreSQL", "React.js", "Node.js"],
    description:
      "Community-based rotating savings group platform for secure and efficient transactions.",
    details: [
      "Developed using Prisma, PostgreSQL, React.js, and Node.js for secure and efficient transactions.",
      "Integrated cycle-based payout system, improving trust and usability.",
    ],
  },
  {
    slug: "abronet-equb",
    title: "Abronet Equb",
    subtitle: "Backend • Pyramid-style savings group platform",
    img: "/projects/abronet.png",
    tags: ["MongoDB", "React.js", "Node.js"],
    description:
      "Pyramid-style savings group platform for rapid capital collection and distribution.",
    details: [
      "Developed a scalable web application using MongoDB, React.js, and Node.js.",
      "Implemented tier-based contribution system, enhancing user participation.",
    ],
  },
  {
    slug: "delalaye-app",
    title: "Delalaye App",
    subtitle: "Backend • Local services platform",
    img: "/projects/delalaye.png",
    tags: ["MongoDB", "React.js", "Node.js"],
    description:
      "Digital platform connecting service providers with customers for local services.",
    details: [
      "Maintained and updated the app using MongoDB, Node.js, and React.js, ensuring reliable performance.",
      "Improved user interface for better accessibility and engagement.",
    ],
  },
  {
    slug: "directory-listing",
    title: "Directory Listing",
    subtitle: "Web • Categorized information platform",
    img: "/projects/directory.png",
    tags: ["Node.js", "React.js", "MongoDB"],
    description:
      "Platform for categorized information display, enabling efficient search and connection.",
    details: [
      "Built a responsive application with Node.js, MongoDB, and React.js.",
      "Optimized search functionality, reducing query response time by 30%.",
    ],
  },
  {
    slug: "kality-habitat-edir",
    title: "Kality Habitat Edir",
    subtitle: "Fullstack • Mutual support association platform",
    img: "/projects/kality.png",
    tags: ["Next.js", "React.js"],
    description:
      "Mutual support association platform for financial and emotional aid.",
    details: [
      "Created a user-friendly interface using Next.js.",
      "Streamlined contribution tracking, enhancing community engagement.",
    ],
  },
];
