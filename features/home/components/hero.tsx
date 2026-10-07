"use client";

import { Mail, ArrowDown, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Mobile Engineer",
  "React Native Expert",
  "FinTech Developer",
  "Full-Stack Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0e0d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(232,197,71,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_85%_85%,rgba(196,168,130,0.05),transparent)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(232,197,71,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.8) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Location line — subtle, human, not AI-badge */}
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8 animate-fade-in">
            Addis Ababa, Ethiopia · Remote Ready
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-in-up tracking-tight leading-none">
            <span className="text-foreground">Kidus</span>{" "}
            <span className="gradient-text">Yared</span>
          </h1>

          {/* Typewriter */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6 animate-fade-in delay-200">
            <span className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              {displayed}
              <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse align-middle" />
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in delay-300">
            3+ years building enterprise mobile apps and full-stack systems for FinTech.
            Shipped products at{" "}
            <span className="text-foreground font-semibold">CBE</span> &{" "}
            <span className="text-foreground font-semibold">Dashen Bank</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in delay-400">
            <Link href="/#contact">
              <button className="group relative px-8 py-4 rounded-full font-semibold text-[#0f0e0d] overflow-hidden transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
              </button>
            </Link>
            <Link href="/#projects">
              <button className="px-8 py-4 rounded-full font-semibold border border-border text-foreground hover:border-primary/60 hover:bg-primary/8 transition-all duration-300 hover:scale-105">
                View My Work
              </button>
            </Link>
            <a href="/Kidus_Yared_Resume.pdf" download>
              <button className="px-8 py-4 rounded-full font-semibold border border-border text-muted-foreground hover:border-secondary/50 hover:text-secondary transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto animate-fade-in delay-500">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "2", label: "Banks Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
