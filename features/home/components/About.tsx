"use client";

import { Button } from "rizzui/button";
import { Text } from "rizzui/typography";
import { Star, Users2, Award, MoreHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function About() {
  return (
    <section id="about">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* About Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <Text className="text-2xl font-bold text-gray-900">About</Text>
            </div>

            {/* Description */}
            <Text className="text-gray-600 leading-relaxed mb-5">
              I’m a{" "}
              <span className="font-semibold text-gray-900">
                Software Engineer{" "}
              </span>
              who bridges the gap between complex backend logic and seamless
              mobile interfaces. With 2+ years of experience in the Fintech
              sector, I specialize in building secure, scalable Node.js/Python
              backends and high-performance React Native applications. I focus
              on writing clean, maintainable code that powers reliable
              enterprise solutions
            </Text>

            {/* Skills Grid */}
            {/* Grouped Skills */}
            <div className="space-y-4 mb-6">
              <div>
                <Text className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Backend & Data
                </Text>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "Python",
                    "PostgreSQL",
                    "MySQL",
                    "MongoDB",
                    "RESTful APIs",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Text className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Mobile & Frontend
                </Text>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "React.js",
                    "TypeScript",
                    "Next.js",
                    "Flutter",
                    "Tailwind CSS",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* See More */}

            {/* See More Button */}
            <div className="flex justify-start mt-8">
              <Link
                href={"/about"}
                className="rounded-full border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg group px-3 py-1"
              >
                <MoreHorizontal
                  size={18}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
                See more
              </Link>
            </div>
          </div>

          {/* Highlights Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Star className="text-gray-600" size={18} />
                <span>Developed 4+ production-ready mobile applications</span>
              </li>
              <li className="flex items-center gap-3">
                <Users2 className="text-gray-600" size={18} />
                <span>
                  Collaborated with cross-functional teams on fintech projects
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="text-gray-600" size={18} />
                <span>Specialized in React Native & enterprise solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
