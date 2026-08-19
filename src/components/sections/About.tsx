'use client'

import { motion } from 'motion/react'

export default function About() {
  const milestones = [
    { icon: '🎓', label: 'Electronics & Communication Engineering' },
    { icon: '⚡', label: 'Software Development' },
    { icon: '🧠', label: 'Machine Learning' },
    { icon: '📄', label: 'Research & Publication' },
    { icon: '🚀', label: 'Entrepreneurship' },
    { icon: '🤝', label: 'B2B Sales & Sales Engineering' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="block font-mono text-sm text-accent uppercase tracking-widest mb-6"
          >
            ABOUT
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="heading-lg font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary max-w-4xl"
          >
            The intersection is the interesting part.
          </motion.h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Narrative (60%) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="lg:w-[60%] space-y-8 font-sans body-lg text-lg text-text-secondary"
          >
            <motion.p variants={itemVariants}>
              I started in Electronics & Communication Engineering — understanding circuits, signals, and systems at a fundamental level. But I kept asking a question that engineering courses don&apos;t answer: what happens after the engineering?
            </motion.p>
            <motion.p variants={itemVariants}>
              That question pulled me into software development, then machine learning, then research. I published a paper. I built applications that solve real problems. And then I started building something else entirely — a business. A real one, where people pay real money for a product.
            </motion.p>
            <motion.p variants={itemVariants}>
              Each step taught me something the previous one couldn&apos;t. Engineering taught me rigor. Software taught me building. ML taught me thinking in systems. Research taught me depth. Entrepreneurship taught me customers.
            </motion.p>
            <motion.p variants={itemVariants}>
              Now I&apos;m exploring where all of this converges: sales engineering, B2B sales, and technical product roles — positions where understanding both the technology and the customer isn&apos;t optional. <span className="font-bold text-accent">It&apos;s the job.</span>
            </motion.p>
          </motion.div>

          {/* Right Column: Evolution Timeline (40%) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="lg:w-[40%] relative pt-4"
          >
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent via-border to-transparent opacity-50"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-center gap-6"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[7px] w-2 h-2 rounded-full bg-accent ring-4 ring-bg-primary"></div>
                  
                  {/* Content */}
                  <div className="pl-8 flex items-center gap-4">
                    <span className="text-2xl" aria-hidden="true">
                      {milestone.icon}
                    </span>
                    <span className="font-sans text-base text-text-primary">
                      {milestone.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
