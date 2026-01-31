"use client";

import React, { useState, useEffect } from "react";
import { Text } from "rizzui/typography";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    id: 2,
    name: "Eyob Adugna",
    role: "Startup Founder",
    company: "Olla ",
    content:
      "Working with Kidus was a game-changer for our startup. He built a robust mobile application that scaled perfectly with our growth.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bersufekad Adane",
    role: "Mobile App Lead",
    company: "Eaglelion systems Technology",
    content:
      "Kidus delivered an exceptional mobile application development that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
    rating: 5,
  },
  {
    id: 1,
    name: "Bekalu Sisay",
    role: "Fullstack Developer",
    company: "Tech Solutions",
    content:
      "Kidus is an exceptional mobile app developer with outstanding React Native skills. His attention to detail and ability to deliver high-quality, scalable solutions is impressive. Working with him has been a great experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Yohanes Degu",
    role: "Mobile App Developer",
    company: "Eaglelion Systems Technology",
    content:
      "Working with Kidus was an absolute pleasure. His attention to detail, clean code structure, and deep understanding of frontend best practices made collaboration seamless. He consistently delivered high-quality results and went the extra mile to ensure the project's success.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Show 2 testimonials at a time, use carousel if more than 2
  const itemsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerView;
    return testimonials.slice(startIndex, startIndex + itemsPerView);
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />

      <Container className="py-16 md:py-20 lg:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 relative z-10">
              What Clients Say
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary/30 rounded-full"></div>
          </div>
          <Text className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4 mt-4">
            Don't just take my word for it. Here's what clients and colleagues
            have to say about working with me.
          </Text>
        </div>

        {/* Testimonial Cards Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Cards Grid */}
          <div
            className={`grid gap-6 md:gap-8 ${
              testimonials.length <= 2
                ? "grid-cols-1 max-w-2xl"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/20 transform -scale-x-100" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      ({testimonial.rating}.0)
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <Text className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg line-clamp-4">
                    "{testimonial.content}"
                  </Text>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <Text className="font-semibold text-gray-900 text-base md:text-lg">
                        {testimonial.name}
                      </Text>
                      <Text className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Navigation - Only show if more than 2 testimonials */}
          {testimonials.length > 2 && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl group"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={goToNext}
                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl group"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-8 md:mt-12">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentIndex
                        ? "bg-primary scale-125 shadow-lg"
                        : "bg-gray-300 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentIndex + 1} / {totalSlides}
                </span>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
