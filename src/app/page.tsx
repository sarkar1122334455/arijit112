import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        <div className="section-divider" />
        <FeaturedWork />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Education />

        <div className="section-divider" />
        <Achievements />

        <div className="section-divider" />
        <Interests />

        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
