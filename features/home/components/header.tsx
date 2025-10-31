"use client";

import Link from "next/link";
import { Text } from "rizzui/typography";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Blogs", href: "/#blog" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full py-4 bg-muted/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50">
      <Container className="flex items-center justify-between">
        <Text className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
          {`< Kidus />`}
        </Text>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-normal px-4 py-2 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-primary rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl px-6 py-2 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-110"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0 rotate-90"
                  : "opacity-100 rotate-0"
              }`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 rotate-0"
                  : "opacity-0 -rotate-90"
              }`}
            />
          </div>
        </button>
      </Container>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-muted/95 backdrop-blur-md border-t border-gray-200/50 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-normal px-4 py-3 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl px-4 py-3 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-center hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
