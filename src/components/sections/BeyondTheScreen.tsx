'use client'

import { motion } from 'motion/react'

const interests = [
  "Photography",
  "Video Editing",
  "Technology",
  "Entrepreneurship",
  "Product Building"
]

export default function BeyondTheScreen() {
  return (
    <section id="beyond" className="py-24 w-full border-t border-border/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-accent mb-6">
            BEYOND THE CODE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-text-primary tracking-tight">
            Not just a screen person.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-x-6 gap-y-4"
        >
          {interests.map((interest, index) => (
            <div key={index} className="flex items-center">
              <div className="group relative cursor-default">
                <span className="text-xl md:text-2xl font-heading text-text-tertiary transition-colors duration-300 group-hover:text-text-primary">
                  {interest}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
              {index < interests.length - 1 && (
                <span className="hidden md:block w-[1px] h-6 bg-border ml-6" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
