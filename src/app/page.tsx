import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Skills from "@/components/sections/Skills";
import TechMeetsBusiness from "@/components/sections/TechMeetsBusiness";
import Entrepreneurship from "@/components/sections/Entrepreneurship";
import Research from "@/components/sections/Research";
import Journey from "@/components/sections/Journey";
import BeyondTheScreen from "@/components/sections/BeyondTheScreen";
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
        <TechMeetsBusiness />

        <div className="section-divider" />
        <Journey />

        <div className="section-divider" />
        <Research />

        <div className="section-divider" />
        <Entrepreneurship />

        <div className="section-divider" />
        <BeyondTheScreen />

        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
