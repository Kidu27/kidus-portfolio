"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";

export default function AllProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0f0e0d]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.1),transparent)] pointer-events-none" />

      <Container className="relative z-10 py-10 md:py-16">
        {/* Back */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-xl">
            A full collection of my work across FinTech, mobile, and full-stack development.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <Link key={i} href={`/projects/${project.slug}`}>
              <div className="group grid md:grid-cols-5 gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* Image */}
                <div className="md:col-span-2 relative h-48 md:h-full min-h-[160px] rounded-xl overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {!project.links?.github && (
                      <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground/60">
                        <Lock className="w-3 h-3" /> Private
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom line */}
                <div className="md:col-span-5 h-px bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -mb-6 -mx-6 rounded-b-2xl" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
