"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(99,102,241,0.06),transparent)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
              Selected <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 flex-shrink-0"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((project, i) => (
            <Link key={i} href={`/projects/${project.slug}`}>
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Arrow icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
