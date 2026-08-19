'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-border py-8">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-heading font-medium tracking-wide text-text-primary">
            ARIJIT SARKAR
          </span>
          <span className="text-sm font-sans text-text-tertiary">
            &copy; 2025 &middot; Designed & built by Arijit Sarkar
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm font-sans text-text-secondary hover:text-accent transition-colors">
            GitHub
          </Link>
          <span className="text-border">&middot;</span>
          <Link href="#" className="text-sm font-sans text-text-secondary hover:text-accent transition-colors">
            LinkedIn
          </Link>
          <span className="text-border">&middot;</span>
          <Link href="mailto:hello@arijitsarkar.com" className="text-sm font-sans text-text-secondary hover:text-accent transition-colors">
            Email
          </Link>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-300"
          aria-label="Back to top"
        >
          &uarr;
        </button>
      </div>
    </footer>
  )
}
