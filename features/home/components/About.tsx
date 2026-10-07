"use client";

import Container from "@/components/ui/Container";
import { Code2, Smartphone, Database, Shield } from "lucide-react";

const skillGroups = [
  {
    icon: Smartphone,
    label: "Mobile",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    skills: ["React Native", "Flutter", "TypeScript", "Redux"],
  },
  {
    icon: Code2,
    label: "Frontend",
    color: "text-secondary",
    bg: "bg-secondary/10 border-secondary/20",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    icon: Database,
    label: "Backend & DB",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/20",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: Shield,
    label: "Tools & DevOps",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    skills: ["Git", "Docker", "CI/CD", "Prisma", "Xcode"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,rgba(99,102,241,0.06),transparent)]" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-foreground font-semibold">
                Mobile Software Engineer
              </span>{" "}
              with 3+ years of experience specializing in cross-platform mobile
              development and full-stack solutions. I bridge the gap between
              complex backend logic and seamless mobile interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently at{" "}
              <span className="text-primary font-semibold">
                EagleLion System Technology
              </span>
              , I'm spearheading mobile engineering for the{" "}
              <span className="text-foreground font-semibold">CBE SuperApp</span>{" "}
              — an enterprise-scale application for Ethiopia's largest bank,
              handling high-volume transaction processing for millions of users.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise spans{" "}
              <span className="text-foreground font-semibold">
                FinTech architecture
              </span>
              , payment gateway integration, secure data flows, and
              performance-optimized mobile experiences. I'm passionate about
              shipping reliable, scalable products that drive massive user
              engagement.
            </p>

            {/* Certifications */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-semibold">
                Certifications
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Advanced NodeJS: Level Up Your NodeJS Skill — 2024",
                  "Full Stack Website Development — 2023",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map(({ icon: Icon, label, color, bg, skills }) => (
              <div
                key={label}
                className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${bg} border`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <span className="text-sm font-bold text-foreground uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
