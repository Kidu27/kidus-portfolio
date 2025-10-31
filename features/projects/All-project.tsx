// app/projects/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Text } from "rizzui/typography";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AllProjectsPage() {
  const router = useRouter();
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-4xl font-bold mb-2">All Projects</h1>
        <Text className="text-gray-600 max-w-2xl mx-auto">
          Explore all my featured and client projects in detail.
        </Text>
      </div>

      <div className="grid gap-10 sm:gap-16 grid-cols-1">
        {projects.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`}>
            <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 group cursor-pointer">
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-1">{project.subtitle}</p>
                <Text className="text-gray-700 mt-3">
                  {project.description}
                </Text>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
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
    </Container>
  );
}
