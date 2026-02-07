import React from "react";
import Link from "next/link";
import { Text } from "rizzui/typography";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/ui/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      {
        name: "GitHub",
        href: "https://github.com/Kidu27",
        icon: Github,
        username: "@Kidu27",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kidus-yared-a36562355/",
        icon: Linkedin,
        username: "kidus-yared-a36562355/",
      },
      {
        name: "Email",
        href: "mailto:kidusyared455@gmail.com",
        icon: Mail,
        username: "kidusyared455@gmail.com",
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-transparent to-gray-800"></div>
      </div>

      <Container className="relative py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Text className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {"<Kidus />"}
              </Text>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full mt-2"></div>
            </div>

            <Text className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Full-Stack Developer crafting digital experiences with modern
              technologies. Passionate about building scalable, responsive
              applications that make an impact.
            </Text>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <MapPin className="w-4 h-4" />
              <Text className="text-sm">Addis Ababa, Ethiopia · GMT+3</Text>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 max-w-fit"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <Text className="text-white text-sm font-medium group-hover:text-primary transition-colors duration-200">
                        {social.name}
                      </Text>
                      <Text className="text-gray-400 text-xs">
                        {social.username}
                      </Text>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-primary transition-colors duration-200 ml-2" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </Text>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-200"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <Text className="text-lg font-semibold mb-4 text-white">
              Availability
            </Text>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <Text className="text-white text-sm font-medium">
                    Open for work
                  </Text>
                  <Text className="text-gray-400 text-xs">
                    Freelance & Full-time
                  </Text>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-primary">
                <Text className="text-white text-sm font-medium mb-1">
                  Let's connect!
                </Text>
                <Text className="text-gray-300 text-xs">
                  Currently available for new projects and collaborations.
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm">
            <Text>© {currentYear} Kidus Yared. All rights reserved.</Text>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <Text>Built with Next.js & Tailwind CSS</Text>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Gradient Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full"></div>
      </Container>
    </footer>
  );
};

export default Footer;
