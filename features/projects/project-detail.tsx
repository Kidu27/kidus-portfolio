"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Container from "@/components/ui/Container";

type ProjectDetailProps = {
  project: {
    title: string;
    subtitle?: string;
    img: string;
    description: string;
    details?: string[];
    tags: string[];
    links?: {
      live?: string;
      github?: string;
    };
  };
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-8 sm:left-10 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-md">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-gray-200 text-base sm:text-lg mt-2">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed text-base sm:text-lg">
            {project.description}
          </p>

          {project.details && (
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="pt-8 flex flex-wrap gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
