"use client";

import React from "react";
import Image from "next/image";
import { Text } from "rizzui/typography";
import { Button } from "rizzui/button";
import { MoreHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Master HTTP Logging in Node.js: A Guide to Morgan Middleware",
      date: "Mar 12, 2025",
      readTime: "6 min read",
      image: "/http-loging-blog.png",
      imageAlt: "HTTP logging in Node.js blog cover",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7277964300453871616/",
    },
    {
      title: "𝗛𝗼𝘄 𝗥𝗲𝗮𝗱𝗶𝗻𝗴 𝗖𝗼𝗱𝗲 𝗠𝗮𝗱𝗲 𝗠𝗲 𝗮 𝗕𝗲𝘁𝘁𝗲𝗿 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 🧠💻",
      date: "Feb 1, 2025",
      readTime: "8 min read",
      image: "/code-reading.png",
      imageAlt: "Code reading article cover",
      link: "https://www.linkedin.com/posts/bekalusisay_codingtips-softwaredevelopment-learnbyreading-activity-7325421739272773633-CATw",
    },
    {
      title:
        "𝗧𝗵𝗲 𝟭 𝗛𝗮𝗯𝗶𝘁 𝗧𝗵𝗮𝘁’𝘀 𝗠𝗮𝗸𝗶𝗻𝗴 𝗠𝗲 𝗮 𝗕𝗲𝘁𝘁𝗲𝗿 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 — 𝗖𝗮𝗻 𝗬𝗼𝘂 𝗚𝘂𝗲𝘀𝘀 𝗜𝘁? 🤔💡",
      date: "Jan 10, 2025",
      readTime: "5 min read",
      image: "/one-habit.png",
      imageAlt: "Developer habits blog cover",
      link: "https://www.linkedin.com/posts/bekalusisay_developerhabits-consistencyiskey-growthmindset-activity-7323995055873040384-aF0T",
    },
  ];

  return (
    <section id="blog" className="relative overflow-hidden">
      <Container className="py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10">
              From the Blog ✍️
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary/30 rounded-full"></div>
          </div>
          <Text className="text-gray-600 max-w-2xl mx-auto text-base">
            My thoughts on Node.js, front-end craft, and the habits that make us
            better developers.
          </Text>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 "
            >
              {/* Image */}
              <div className="relative w-full h-44 sm:h-56 overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-40 sm:h-44">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read Button */}
                <div className="mt-4">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-105 text-sm font-medium group">
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Read on LinkedIn
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More */}
        <div className="flex justify-center mt-12">
          <Link
            href="https://www.linkedin.com/in/bekalusisay/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg group px-6 py-2"
            >
              <MoreHorizontal
                size={18}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
              See more on LinkedIn
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
