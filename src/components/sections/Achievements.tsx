'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const achievements = [
  {
    tag: 'Internship',
    title: 'Indian Oil Corporation Limited (IOCL)',
    description: 'One-month industrial internship at the Budge Budge Bottling Plant.',
    link: null,
  },
  {
    tag: 'Research · First Author',
    title: 'A Multi-Hazard Weather and Disaster Prediction Mobile Application',
    description: 'Published in IJARSCT, Volume 5, Issue 9, June 2025.',
    link: 'https://doi.org/10.48175/IJARSCT-28265',
  },
  {
    tag: 'Award',
    title: 'JIS Innovation Award',
    description: 'Guru Nanak Institute of Technology, Academic Year 2024–2025.',
    link: null,
  },
  {
    tag: 'Certification · Score: 93/100',
    title: 'NPTEL Java Certification',
    description: 'Scored 93/100 in the NPTEL Java certification exam.',
    link: null,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
            ACHIEVEMENTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary tracking-tight">
            Milestones and recognition.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-bg-secondary border border-border rounded-lg p-8"
            >
              <div className="inline-block border border-accent/30 text-accent font-mono text-xs px-3 py-1 rounded-full mb-4">
                {item.tag}
              </div>
              <h3 className="font-heading text-xl text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {item.description}
              </p>
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent font-mono text-sm hover:underline"
                >
                  View DOI &rarr;
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
