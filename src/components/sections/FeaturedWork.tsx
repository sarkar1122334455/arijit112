'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { projects, Project } from '@/data/projects'

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
            FEATURED PROJECTS
          </span>
          <h2 className="heading-lg font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0
            const num = (index + 1).toString().padStart(2, '0')
            
            return (
              <motion.div
                key={project.slug}
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
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-accent/40 bg-bg-secondary text-accent">
                      {project.category}
                    </span>
                    <span className={`font-mono text-xs px-3 py-1 rounded-full border ${
                      project.status === 'Ongoing' 
                        ? 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400' 
                        : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="heading-md font-heading text-2xl md:text-3xl text-text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="body-lg text-lg text-text-secondary">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech: string, i: number) => (
                      <span 
                        key={i} 
                        className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-bg-secondary text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
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
        </div>
      </div>
    </section>
  )
}
