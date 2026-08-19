'use client';

import { motion } from 'motion/react';

const capabilities = [
  {
    id: '01',
    title: 'Technical Discovery',
    description: 'Understanding what the customer actually needs, not just what they say they want.',
  },
  {
    id: '02',
    title: 'Problem Solving',
    description: 'Breaking complex technical challenges into clear, actionable solutions.',
  },
  {
    id: '03',
    title: 'Product Demonstration',
    description: 'Showing how technology solves specific problems, not just listing features.',
  },
  {
    id: '04',
    title: 'Technical Communication',
    description: 'Explaining complex systems in language that resonates with different audiences.',
  },
  {
    id: '05',
    title: 'Solution Architecture',
    description: 'Designing how products fit into a customer\'s existing technical landscape.',
  },
  {
    id: '06',
    title: 'Customer Understanding',
    description: 'Seeing the product through the customer\'s eyes, constraints, and goals.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TechMeetsBusiness() {
  return (
    <section id="sales-engineering" className="py-24 md:py-32 bg-bg-primary">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-accent uppercase tracking-widest mb-6"
          >
            Career Direction
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-8 md:mb-12"
          >
            Where Technology Meets Business.
          </motion.h2>
          
          <div className="max-w-2xl font-sans text-lg text-text-secondary space-y-6">
            <motion.p variants={itemVariants}>
              Most engineers optimize for code. Most salespeople optimize for closing. Sales engineers optimize for understanding — translating complex technical capabilities into business outcomes that customers care about.
            </motion.p>
            <motion.p variants={itemVariants}>
              That&apos;s the space I&apos;m building toward.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12 mb-16"
        >
          {capabilities.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="flex gap-6 group hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-accent"
            >
              <span className="font-mono text-sm text-accent shrink-0 pt-1">
                {item.id}
              </span>
              <div>
                <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-sm text-text-tertiary italic border-t border-border pt-8 max-w-3xl"
        >
          These are capabilities I&apos;m actively developing through my engineering, research, and entrepreneurship experience — not claimed professional sales experience.
        </motion.p>
      </div>
    </section>
  );
}
