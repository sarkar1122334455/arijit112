"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Entrepreneurship", href: "#entrepreneurship" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = navLinks.map(link => link.href.substring(1));
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-secondary/80 backdrop-blur-xl border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, "#top")}
            className="font-heading text-xl font-bold tracking-widest text-text-primary hover:text-accent transition-colors"
          >
            ARIJIT
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navLinks.filter(link => link.name !== "Contact").map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-sans text-sm font-medium transition-colors hover:text-text-primary ${
                      activeSection === link.href.substring(1)
                        ? "text-text-primary font-semibold"
                        : "text-text-secondary"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-bg-primary font-medium text-sm transition-transform hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Open menu"
            >
              <span className="w-6 h-[1px] bg-text-primary transition-all duration-300 block"></span>
              <span className="w-6 h-[1px] bg-text-primary transition-all duration-300 block"></span>
              <span className="w-6 h-[1px] bg-text-primary transition-all duration-300 block"></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
