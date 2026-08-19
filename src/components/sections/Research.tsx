'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const steps = [
  "Problem Identification",
  "Literature Review",
  "Model Development",
  "Application",
  "Publication"
]

export default function Research() {
  return (
    <section id="research" className="py-24 w-full">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
            RESEARCH
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary tracking-tight">
            From hypothesis to publication.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border bg-bg-secondary rounded-lg p-8 md:p-12 mb-16"
        >
          <div className="inline-block border border-accent/30 text-accent font-mono text-xs px-3 py-1 rounded-full mb-6">
            Researcher & First Author
          </div>
          <h3 className="text-2xl md:text-3xl font-heading text-text-primary mb-4">
            A Multi-Hazard Weather and Disaster Prediction Mobile Application
          </h3>
          <p className="text-text-tertiary text-sm md:text-base mb-2 font-sans">
            International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)
          </p>
          <p className="text-text-secondary text-sm md:text-base mb-6 font-sans">
            Vol. 5, Issue 9 &middot; June 2025
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
            <Link 
              href="https://doi.org/10.48175/IJARSCT-28265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-mono text-sm hover:underline"
            >
              DOI: 10.48175/IJARSCT-28265
            </Link>
            
            <Link
              href="https://doi.org/10.48175/IJARSCT-28265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-bg-tertiary border border-border text-text-primary font-sans text-sm rounded-md hover:bg-border transition-colors sm:ml-auto"
            >
              Read Publication &rarr;
            </Link>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />
          <div className="md:hidden absolute left-[11px] top-0 h-full w-[1px] bg-border z-0" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex md:flex-col items-center md:justify-center gap-4 md:gap-6 bg-bg-primary md:px-2"
              >
                <div className="w-6 h-6 rounded-full bg-bg-primary border-2 border-accent flex-shrink-0" />
                <span className="font-mono text-xs md:text-sm text-text-secondary text-left md:text-center max-w-[120px]">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
