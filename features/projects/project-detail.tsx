"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";
import Container from "@/components/ui/Container";

type ProjectDetailProps = {
  project: {
    title: string;
    subtitle?: string;
    img: string;
    description: string;
    details?: string[];
    tags: string[];
    links?: { live?: string; github?: string };
  };
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0f0e0d]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.1),transparent)] pointer-events-none" />

      <Container className="relative z-10 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">

          {/* Back */}
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to projects</span>
          </button>

          {/* Hero image */}
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-border/50 mb-10">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:left-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 mb-6">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
              Overview
            </h2>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Details */}
          {project.details && project.details.length > 0 && (
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 mb-6">
              <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                Key Contributions
              </h2>
              <ul className="space-y-3">
                {project.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            {!project.links?.github && (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/30 text-muted-foreground text-sm cursor-not-allowed">
                <Lock className="w-4 h-4" />
                Private Repository (NDA)
              </div>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
}
