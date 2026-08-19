'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const links = [
  { label: 'Email', value: 'hello@arijitsarkar.com', href: 'mailto:hello@arijitsarkar.com' },
  { label: 'LinkedIn', value: 'LinkedIn Profile →', href: '#' },
  { label: 'GitHub', value: 'GitHub Profile →', href: '#' },
  { label: 'Resume', value: 'Download Resume ↓', href: '#' }
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 w-full relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading text-text-primary tracking-tighter mb-8 leading-tight">
            Let's build<br className="hidden md:block" /> something useful.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl font-sans leading-relaxed">
            Whether it's a technical problem, a product idea, a sales opportunity, or an interesting conversation about technology and business — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0"
        >
          {links.map((link, index) => (
            <div key={index} className="flex flex-col md:flex-row flex-1">
              <Link href={link.href} className="group block">
                <div className="font-mono text-xs text-text-tertiary mb-3 uppercase tracking-wider">
                  {link.label}
                </div>
                <div className="text-lg font-sans text-text-primary transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                  {link.value}
                </div>
              </Link>
              {index < links.length - 1 && (
                <div className="hidden md:block w-[1px] self-stretch bg-border mx-8" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
