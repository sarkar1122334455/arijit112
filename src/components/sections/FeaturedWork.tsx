'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function FeaturedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="work" className="py-24 md:py-32 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="mb-20 md:mb-32"
        >
          <span className="block font-mono text-sm text-accent uppercase tracking-widest mb-6">
            FEATURED WORK
          </span>
          <h2 className="heading-lg font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary">
            Things I&apos;ve built and researched.
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project: any, index: number) => {
            const isEven = index % 2 === 0
            const num = (index + 1).toString().padStart(2, '0')
            
            return (
              <motion.div
                key={project.slug || index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={itemVariants}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-10 md:gap-16 lg:gap-24`}
              >
                {/* Large Project Number */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <span className="font-mono font-bold text-[clamp(4rem,10vw,6rem)] leading-none text-text-tertiary/30">
                    {num}
                  </span>
                </div>
                
                {/* Project Content */}
                <div className="w-full md:w-2/3 space-y-6">
                  <h3 className="heading-md font-heading text-2xl md:text-3xl text-text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="body-lg text-lg text-text-secondary">
                    {project.problem || project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies?.map((tech: string, i: number) => (
                      <span 
                        key={i} 
                        className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-bg-secondary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.publication && (
                      <span className="font-mono text-xs px-3 py-1 rounded-full border border-accent bg-bg-secondary text-accent">
                        DOI: {project.publication.doi}
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      href={`/case-study/${project.slug}`}
                      className="inline-flex items-center text-accent hover:text-accent-muted font-sans font-medium transition-colors"
                    >
                      View Case Study <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Teaser Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={itemVariants}
            className="mt-32 p-8 md:p-12 border border-dashed border-border rounded-2xl bg-bg-secondary/40 flex flex-col items-center text-center relative overflow-hidden"
          >
            <h3 className="heading-sm font-heading text-xl md:text-2xl text-text-primary mb-2">
              More work in progress.
            </h3>
            <p className="body-sm text-sm md:text-base text-text-secondary mb-8">
              Currently building. Stay tuned.
            </p>
            
            {/* Animated Progress Bar */}
            <div className="w-full max-w-xs h-[2px] bg-border rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent"
                animate={{
                  width: ['0%', '60%', '0%']
                }}
                transition={{
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
