import { Eye, Mail } from "lucide-react";
import { Button } from "rizzui/button";
import { Text } from "rizzui/typography";
import TechCircle from "./tech-stack-circle";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home">
      <div className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent -z-10"></div>

        <Container className="py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit mx-auto lg:mx-0">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <Text className="text-sm md:text-base text-primary font-medium">
                  Creative Mobile APP Developer
                </Text>
              </div>
              <Text className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Kidus Yared
              </Text>
              <Text
                as="p"
                className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl"
              >
                Results-driven Fullstack Developer with 2 years of professional
                experience specializing in high-performance React Native mobile
                applications and scalable GoLang backends. Proven ability to
                deliver robust, quantifiable solutions for major financial and
                enterprise projects, ensuring system stability and high-quality
                user experience. Seeking to leverage expertise in the full
                application lifecycle within a challenging, remote-friendly tech
                startup environment.
              </Text>
              <div className="flex  items-center justify-center lg:justify-start gap-3 md:gap-4">
                <Link href={"/#contact"}>
                  <Button
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    rounded="pill"
                  >
                    <Mail className="w-4 h-4" />
                    Get in touch
                  </Button>
                </Link>
                <Link href={"/#projects"}>
                  <Button
                    className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    rounded="pill"
                  >
                    <Eye className="w-4 h-4" />
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/hero-img.jpg"
                alt="Hero"
                fill
                className="object-contain grayscale"
                style={{ transform: "rotate(5deg)", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
