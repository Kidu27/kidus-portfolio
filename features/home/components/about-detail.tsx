"use client";

import { Text } from "rizzui/typography";
import Container from "@/components/ui/Container";
import {
  Calendar,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import React from "react";
import {
  CertificationItem,
  EducationItem,
  TimelineItemProps,
  TimelineSectionProps,
  WorkItem,
} from "@/types/about.type";
import { useRouter } from "next/navigation";

// -------------------------
// Component
// -------------------------

const AboutDetail: React.FC = () => {
  const router = useRouter();
  const experiences: WorkItem[] = [
    {
      type: "work",
      title: "Mobile App Developer",
      period: "March 2025 – Present",
      company: "EagleLion System Technology",
      location: "Addis Ababa, Ethiopia",
      achievements: [
        "Developed and maintained cross-platform mobile applications using React Native for fintech and enterprise solutions",
        "Implemented responsive UI components and smooth navigation optimized for both Android and iOS devices",
        "Integrated RESTful APIs and handled secure data flows in collaboration with backend teams",
        "Improved application performance through optimized state management and component lifecycle handling",
      ],
    },
    {
      type: "work",
      title: "Mobile App Developer",
      period: "July 2023 – Feb 2024",
      company: "Olla App Development",
      location: "Addis Ababa, Ethiopia",
      achievements: [
        "Built and maintained a production-grade mobile application using React Native",
        "Implemented location-based features and dynamic UI updates for real-time user interaction",
        "Worked closely with designers and backend developers to translate requirements into functional mobile features",
        "Participated in code reviews and agile development cycles to ensure quality and timely delivery",
      ],
    },
  ];

  const education: EducationItem[] = [
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      period: "September 2011 – July 2023",
      institution: "Unity University",
      achievement: "Graduated with distinction",
      skills: [],
    },
  ];

  const certifications: CertificationItem[] = [
    {
      type: "certification",
      title: "Advanced NodeJS: Level Up Your NodeJS Skill",
      period: "2024",
      institution: "Udemy",
      skills: ["Advanced Node.js", "Performance Optimization", "Security"],
    },
    {
      type: "certification",
      title: "Full Stack Website Development",
      period: "2023",
      institution: "Udemy ",
      skills: ["Full-stack Development", "Web Development", "Database Design"],
    },
    {
      type: "certification",
      title: "Programming Fundamentals",
      period: "2024",
      institution: "Udemy ",
      skills: ["Full-stack Development", "Web Development", "Database Design"],
    },
  ];

  const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => (
    <div className="flex group">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center mr-4">
        <div
          className={`w-0.5 h-6 bg-gray-300 ${isLast ? "" : "flex-grow"}`}
        ></div>
        <div className="w-3 h-3 rounded-full bg-gray-400 border-2 border-white shadow-sm group-hover:bg-gray-600 transition-colors"></div>
        <div
          className={`w-0.5 bg-gray-300 ${isLast ? "h-6" : "flex-grow"}`}
        ></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
            <div className="flex items-start gap-2">
              {item.type === "work" && (
                <Briefcase
                  size={18}
                  className="text-gray-600 mt-1 flex-shrink-0"
                />
              )}
              {item.type === "education" && (
                <GraduationCap
                  size={18}
                  className="text-gray-600 mt-1 flex-shrink-0"
                />
              )}
              {item.type === "certification" && (
                <Award size={18} className="text-gray-600 mt-1 flex-shrink-0" />
              )}
              <div>
                <Text className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </Text>
                <div className="flex items-center gap-4 mt-1 flex-wrap">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar size={14} />
                    <Text className="text-sm">{item.period}</Text>
                  </div>
                  {("company" in item || "institution" in item) && (
                    <Text className="text-gray-700 text-sm font-medium">
                      {"company" in item ? item.company : item.institution}
                    </Text>
                  )}
                  {"location" in item && item.location && (
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin size={14} />
                      <Text className="text-sm">{item.location}</Text>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement or Skills */}
          {"achievement" in item && item.achievement && (
            <div className="mb-3">
              <Text className="text-gray-700 font-medium text-sm">
                {item.achievement}
              </Text>
            </div>
          )}

          {/* Achievements List */}
          {"achievements" in item &&
            item.achievements &&
            item.achievements.length > 0 && (
              <ul className="space-y-2">
                {item.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                    <Text className="text-gray-600 text-sm leading-relaxed">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            )}

          {/* Skills */}
          {"skills" in item && item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const TimelineSection: React.FC<TimelineSectionProps> = ({
    title,
    items,
    icon,
  }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <Text className="text-2xl font-bold text-gray-900">{title}</Text>
      </div>
      <div className="space-y-1">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Container className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        {/* Page Header */}
        <div className="text-center mb-12">
          <Text className="text-4xl font-bold text-gray-900 mb-4">
            My Journey
          </Text>
          <Text className="text-gray-600 text-lg max-w-2xl mx-auto">
            A timeline of my professional development, education, and
            achievements in web development
          </Text>
        </div>

        {/* Timeline Sections */}
        <div className="space-y-12">
          <TimelineSection
            title="Work Experience"
            items={experiences}
            icon={<Briefcase className="text-gray-600" size={24} />}
          />
          <TimelineSection
            title="Education"
            items={education}
            icon={<GraduationCap className="text-gray-600" size={24} />}
          />
          <TimelineSection
            title="Certifications"
            items={certifications}
            icon={<Award className="text-gray-600" size={24} />}
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutDetail;
