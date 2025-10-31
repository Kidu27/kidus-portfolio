// ProjectsSection.tsx
"use client";

import Image from "next/image";
import { Button } from "rizzui/button";
import { Text } from "rizzui/typography";
import { MoreHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <Container className="py-12">
        <div className="mb-10 text-center">
          <div className="relative inline-block mb-4">
            <h2 className="text-3xl font-bold text-gray-900 relative z-10">
              Selected Projects
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary/20 rounded-full"></div>
          </div>
          <Text className="text-gray-600 mt-1 max-w-2xl mx-auto">
            A curated set of interfaces and experiments. Monochrome previews,
            full case studies on request.
          </Text>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-start mt-8">
          <Link href="/projects">
            <Button
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <MoreHorizontal
                size={18}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
              See more
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
