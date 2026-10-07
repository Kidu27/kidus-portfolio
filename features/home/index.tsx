import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialCarousel from "./components/TestimonialCarousel";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f]">
      <Header />
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <TestimonialCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
