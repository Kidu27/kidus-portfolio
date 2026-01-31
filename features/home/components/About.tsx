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
                Mobile App Developer{" "}
              </span>
              who transforms complex ideas into modern, high-performing mobile
              applications and scalable web solutions. I specialize in React Native,
              React, and Node.js, delivering reliable, user-centric products for
              fintech and enterprise systems.
            </Text>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
              {[
                "React Native",
                "React.js",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Node.js",
                "Express",
                "Flutter",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "RESTful APIs",
              ].map((skill) => (
                <Button
                  key={skill}
                  variant="outline"
                  className="rounded-full text-gray-700 border-gray-300 bg-gray-100"
                >
                  {skill}
                </Button>
              ))}
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
                <span>Collaborated with cross-functional teams on fintech projects</span>
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
