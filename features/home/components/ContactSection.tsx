"use client";

import React, { useState } from "react";
import { Send, MapPin, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import emailjs from "@emailjs/browser";
import Link from "next/link";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "kidusyared455@gmail.com",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        }
      );
      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const socials = [
    { icon: Mail, label: "Email", value: "kidusyared455@gmail.com", href: "mailto:kidusyared455@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "kidus-yared-a36562355", href: "https://linkedin.com/in/kidus-yared-a36562355/" },
    { icon: Github, label: "GitHub", value: "Kidu27", href: "https://github.com/Kidu27" },
    { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia · GMT+3", href: null },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgba(6,182,212,0.06),transparent)]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Open to freelance, contract, and full-time opportunities. Let's build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-400/10 border border-green-400/20 text-green-400 text-sm">
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-sm">
                Something went wrong. Please email me directly at kidusyared455@gmail.com
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            {socials.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                {href ? (
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                      <p className="text-foreground font-medium text-sm truncate">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
                  </Link>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                      <p className="text-foreground font-medium text-sm">{value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Availability card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-foreground">Available for work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently open to freelance, contract, and full-time remote opportunities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
