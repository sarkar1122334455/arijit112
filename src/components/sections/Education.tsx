'use client'

import { motion } from 'motion/react'

const milestones = [
  {
    period: '2023 – Present',
    title: 'B.Tech in Electronics & Communication Engineering',
    desc: 'Guru Nanak Institute of Technology, Kolkata (MAKAUT)'
  },
  {
    period: '2023',
    title: 'Higher Secondary',
    desc: 'A.K. Ghosh Memorial School (WBCHSE)'
  },
  {
    period: '2021',
    title: 'Secondary',
    desc: 'A.K. Ghosh Memorial School (WBBSE)'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 w-full">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
            EDUCATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary tracking-tight mb-6">
            Academic background.
          </h2>
        </motion.div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
          
          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-bg-primary" />
                
                <div className="font-mono text-xs text-accent mb-2">
                  {milestone.period}
                </div>
                <h3 className="text-xl md:text-2xl font-heading text-text-primary mb-2">
                  {milestone.title}
                </h3>
                <p className="text-text-tertiary text-sm md:text-base font-sans max-w-xl leading-relaxed">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
