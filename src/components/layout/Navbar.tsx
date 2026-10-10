"use client";

import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ThemeToggle";

const navLinks = [
  { name: "Projects", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const desktopLinks = navLinks.filter((l) => l.name !== "Contact");

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const listRef = useRef<HTMLUListElement>(null);

  // Scroll state + progress
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(y > 60);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      if (y < 120) setActiveSection("");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sliding highlight follows hovered link, falls back to active link
  const target = hovered ?? activeSection;
  useEffect(() => {
    const update = () => {
      const el = listRef.current?.querySelector<HTMLElement>(`[data-id="${target}"]`);
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
      } else {
        setIndicator((prev) => ({ ...prev, visible: false }));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [target, isScrolled]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        aria-hidden
        className="fixed top-0 left-0 z-[60] h-[2px] bg-accent origin-left"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500 ease-out pt-4">
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? "max-w-5xl rounded-full border border-border bg-bg-secondary/70 backdrop-blur-xl shadow-lg shadow-black/10 px-4 sm:px-6 py-2.5"
              : "max-w-7xl rounded-none border border-transparent bg-transparent px-2 sm:px-6 py-3"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, "#top")}
            className="group flex items-center gap-2 font-heading text-lg font-bold tracking-[0.25em] text-text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="transition-colors group-hover:text-accent">ARIJIT</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <ul
              ref={listRef}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center"
            >
              {/* Sliding highlight */}
              <span
                aria-hidden
                className="absolute inset-y-0 rounded-full bg-accent/10 border border-accent/20 transition-all duration-300 ease-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.visible ? 1 : 0,
                }}
              />
              {desktopLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={link.name} data-id={id} onMouseEnter={() => setHovered(id)} className="relative z-10">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={`block px-4 py-2 font-sans text-sm font-medium transition-colors ${
                        isActive || hovered === id
                          ? "text-text-primary"
                          : "text-text-secondary"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-5 w-px bg-border" />

            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-medium text-bg-primary shadow-md shadow-accent/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95"
            >
              Contact
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="group flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-bg-secondary/50 transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open menu"
            >
              <span className="block h-[1.5px] w-4 bg-text-primary transition-all group-hover:w-5" />
              <span className="block h-[1.5px] w-5 bg-text-primary" />
              <span className="block h-[1.5px] w-3 bg-text-primary transition-all group-hover:w-5" />
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