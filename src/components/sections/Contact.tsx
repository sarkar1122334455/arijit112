'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const links = [
  { label: 'Email', value: 'sarkararijit112@gmail.com', href: 'mailto:sarkararijit112@gmail.com' },
  { label: 'Phone', value: '+91 79804 72253', href: 'tel:+917980472253' },
  { label: 'LinkedIn', value: 'LinkedIn Profile →', href: 'https://linkedin.com/in/arijit-sarkar-9b6905292/' },
  { label: 'GitHub', value: 'GitHub Profile →', href: 'https://github.com/sarkar1122334455' },
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
            Let&apos;s build<br className="hidden md:block" /> something useful.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl font-sans leading-relaxed">
            Whether it&apos;s a project idea, a technical problem, or just an interesting conversation — I&apos;d love to hear from you.
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
              <Link 
                href={link.href} 
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block"
              >
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
