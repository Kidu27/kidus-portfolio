"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Bersufekad Adane",
    role: "Mobile App Lead",
    company: "EagleLion System Technology",
    content:
      "Kidus delivered an exceptional mobile application that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
  },
  {
    id: 2,
    name: "Bekalu Sisay",
    role: "Mobile App Developer",
    company: "EagleLion System Technology",
    content:
      "Kidus is an exceptional mobile app developer with outstanding React Native skills. His ability to deliver high-quality, scalable solutions is impressive. Working with him has been a great experience.",
  },
  {
    id: 3,
    name: "Eyob Adugna",
    role: "Startup Founder",
    company: "Olla App Development",
    content:
      "Working with Kidus was a game-changer for our startup. He built a robust mobile application that scaled perfectly with our growth.",
  },
  {
    id: 4,
    name: "Yohanes Degu",
    role: "Mobile App Developer",
    company: "EagleLion System Technology",
    content:
      "Working with Kidus was an absolute pleasure. His clean code structure and deep understanding of frontend best practices made collaboration seamless. He consistently delivered high-quality results.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setPaused(true); };
  const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setPaused(true); };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(168,85,247,0.06),transparent)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            What People{" "}
            <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 overflow-hidden">
            {/* Background quote */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-primary/5" />

            <div className="relative z-10">
              <Quote className="w-8 h-8 text-primary/40 mb-6" />
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role} · {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
