"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0e0d]/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/#home" className="group">
          <span className="text-xl font-black tracking-tight">
            <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{"<"}</span>
            <span className="gradient-text">Kidus</span>
            <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{" />"}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/4 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-primary text-[#0f0e0d] hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0f0e0d]/95 backdrop-blur-xl border-b border-border/50">
          <Container className="py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold rounded-full bg-primary text-[#0f0e0d] text-center hover:bg-primary/90 transition-all duration-200"
            >
              Contact
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
