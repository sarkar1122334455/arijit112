'use client';

import { motion } from 'motion/react';

const learnings = [
  {
    id: '01',
    title: 'Customer Interaction',
    description: 'Reading people, not just data.',
  },
  {
    id: '02',
    title: 'Pricing & Sales',
    description: 'Finding the number that works for both sides.',
  },
  {
    id: '03',
    title: 'Marketing',
    description: 'Reaching students with zero budget.',
  },
  {
    id: '04',
    title: 'Operations',
    description: 'Managing inventory, logistics, and cash flow.',
  },
  {
    id: '05',
    title: 'Team Coordination',
    description: 'Working with people, not just code.',
  },
  {
    id: '06',
    title: 'Feedback Loops',
    description: 'Iterating based on what customers actually say.',
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

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-start gap-12"
        >
          <div className="flex-1">
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm text-accent uppercase tracking-widest mb-6"
            >
              Entrepreneurship
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-8"
            >
              Building something people will actually pay for.
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <h3 className="font-heading text-xl text-text-primary">Taraa — Handcrafted Bracelets</h3>
            </motion.div>
          </div>
          
          <div className="flex-1 max-w-2xl font-sans text-lg text-text-secondary space-y-6 md:pt-16">
            <motion.p variants={itemVariants}>
              Before I tried selling software, I tried selling bracelets. To college students. In person. With no brand, no marketing budget, and no safety net.
            </motion.p>
            <motion.p variants={itemVariants}>
              Taraa taught me things code never could: how to price a product, read a customer&apos;s hesitation, handle inventory, coordinate a team, and iterate based on real feedback from real people spending real money.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learnings.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="bg-bg-tertiary p-8 border border-border rounded-lg hover:border-accent/50 transition-colors shadow-xs"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-sm text-accent">
                  {item.id}
                </span>
                <h4 className="font-heading text-lg font-bold text-text-primary">
                  {item.title}
                </h4>
              </div>
              <p className="font-sans text-sm text-text-tertiary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
