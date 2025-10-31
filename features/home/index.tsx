import About from "./components/About";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/hero";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialCarousel from "./components/TestimonialCarousel";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <TestimonialCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
