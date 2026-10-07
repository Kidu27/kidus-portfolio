import Container from "@/components/ui/Container";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Mobile App Developer",
    company: "EagleLion System Technology",
    period: "March 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    current: true,
    highlights: [
      "Spearheading mobile frontend engineering for the CBE SuperApp — enterprise-scale application for Ethiopia's largest bank.",
      "Architected comprehensive financial modules: wallet management, loan services, budgeting tools, and virtual card management.",
      "Integrated robust payment gateways and IPS alongside in-app e-commerce and digital service offerings.",
      "Built secure, real-time in-app chat and advanced notification systems driving user engagement.",
      "Ensured strict compliance with banking security standards through optimized session management and encrypted data flows.",
    ],
    tags: ["React Native", "Node.js", "REST API", "FinTech", "TypeScript"],
  },
  {
    role: "Full Stack Developer",
    company: "Olla App Development",
    period: "July 2023 – Feb 2024",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    current: false,
    highlights: [
      "Built and maintained a production-grade, location-based lifestyle and restaurant discovery application using React Native.",
      "Engineered complex geolocation logic, distance filtering, and real-time data synchronization.",
      "Bridged mobile frontend and server-side logic, translating complex business requirements into scalable code.",
      "Participated in agile code reviews, enforcing strict coding standards and performance optimization techniques.",
    ],
    tags: ["React Native", "Node.js", "Geolocation", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(168,85,247,0.06),transparent)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background hidden md:flex items-center justify-center">
                  {exp.current && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-400/10 text-green-400 border border-green-400/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm sm:justify-end">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm sm:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
