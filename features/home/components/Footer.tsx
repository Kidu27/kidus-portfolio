import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.05),transparent)]" />

      <Container className="relative py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/#home">
              <span className="text-xl font-black">
                <span className="text-muted-foreground">{"<"}</span>
                <span className="gradient-text">Kidus</span>
                <span className="text-muted-foreground">{" />"}</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Mobile Software Engineer specializing in React Native & FinTech.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["/#home", "/#about", "/#experience", "/#projects", "/#testimonials", "/#contact"].map((href) => {
              const label = href.replace("/#", "").replace(/^\w/, (c) => c.toUpperCase());
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/Kidu27", icon: Github },
              { href: "https://linkedin.com/in/kidus-yared-a36562355/", icon: Linkedin },
              { href: "mailto:kidusyared455@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Kidus Yared. All rights reserved.</span>
          <span>Built with Next.js & Tailwind CSS · Addis Ababa, Ethiopia</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
