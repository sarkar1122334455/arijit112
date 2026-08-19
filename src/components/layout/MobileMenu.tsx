"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Entrepreneurship", href: "#entrepreneurship" },
  { name: "Contact", href: "#contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    
    // Add small delay to let menu close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-bg-primary sm:hidden"
        >
          {/* Header area for Close Button */}
          <div className="flex h-20 items-center justify-end px-6">
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6">
            <ul className="flex flex-col items-center space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-heading text-4xl font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              className="mt-8"
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="px-8 py-3 rounded-full bg-accent text-bg-primary font-medium transition-transform hover:scale-105 active:scale-95 inline-block"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
