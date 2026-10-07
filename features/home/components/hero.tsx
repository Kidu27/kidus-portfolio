"use client";

import { Mail, ArrowDown, Download, Sparkles } from "lucide-react";
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
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(168,85,247,0.08),transparent)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary/90 font-medium">
              Available for new opportunities
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-in-up tracking-tight">
            <span className="text-foreground">Kidus</span>{" "}
            <span className="gradient-text">Yared</span>
          </h1>

          {/* Typewriter role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6 animate-fade-in delay-200">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
              {displayed}
              <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in delay-300">
            3+ years building{" "}
            <span className="text-foreground font-semibold">enterprise-grade mobile apps</span>{" "}
            and{" "}
            <span className="text-foreground font-semibold">full-stack systems</span>{" "}
            for FinTech. Shipped products used by millions at{" "}
            <span className="text-primary font-semibold">CBE</span> &{" "}
            <span className="text-primary font-semibold">Dashen Bank</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-400">
            <Link href="/#contact">
              <button className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
              </button>
            </Link>
            <Link href="/#projects">
              <button className="group px-8 py-4 rounded-full font-semibold border border-border text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                View My Work
              </button>
            </Link>
            <a
              href="https://kidus-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group px-8 py-4 rounded-full font-semibold border border-border text-muted-foreground hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in delay-500">
            {[
              { value: "3+", label: "Years Exp." },
              { value: "10+", label: "Projects" },
              { value: "2", label: "Banks Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
