'use client'

import { motion } from 'motion/react'

const milestones = [
  {
    period: 'Foundation',
    title: 'Electronics & Communication Engineering',
    desc: 'Understanding systems at the fundamental level — circuits, signals, and the physics of technology.'
  },
  {
    period: 'Building',
    title: 'Software Development',
    desc: 'React Native, Node.js, Next.js, MongoDB — learning to build products from architecture to deployment.'
  },
  {
    period: 'Systems',
    title: 'Machine Learning',
    desc: 'TensorFlow, Keras, LSTM, Random Forest — training models to find patterns in complex data.'
  },
  {
    period: 'Depth',
    title: 'Research & Publication',
    desc: 'First-author research paper published in IJARSCT. Translating academic work into real applications.'
  },
  {
    period: 'Business',
    title: 'Entrepreneurship — Taraa',
    desc: 'Building and selling a physical product. Learning pricing, marketing, customer interaction, and operations.'
  },
  {
    period: 'Direction',
    title: 'B2B Sales & Sales Engineering',
    desc: 'Where technology understanding meets business value. The convergence of everything before it.'
  }
]

export default function Journey() {
  return (
    <section id="experience" className="py-24 w-full">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
            JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary tracking-tight mb-6">
            Deliberately building breadth.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-sans leading-relaxed">
            Every step was intentional. Engineering for depth. Software for building. Machine learning for systems thinking. Research for rigor. Entrepreneurship for customers. Sales engineering to connect it all.
          </p>
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
