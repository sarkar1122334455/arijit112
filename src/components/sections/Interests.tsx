'use client';

import { motion } from 'motion/react';

const subjectsOfInterest = [
  'VLSI Design',
  'Control Systems',
  'Satellite Communication',
  'Data Structures and Algorithms',
  'Dynamic Programming',
  'B2B Sales',
  'Sales Engineering',
];

const relevantCoursework = [
  'Control Systems',
  'VLSI Design',
  'Signals and Systems',
  'Network Theory',
  'EM Theory',
  'Digital Signal Processing',
  'Microprocessors and Microcontrollers',
  'Basic Electronics',
  'Engineering Physics',
  'Mathematics',
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

export default function Interests() {
  return (
    <section id="interests" className="py-24 md:py-32 bg-bg-secondary">
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
            INTERESTS &amp; COURSEWORK
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
          >
            Areas of focus.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="font-mono text-sm text-accent uppercase tracking-widest mb-6"
          >
            Subjects of Interest
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {subjectsOfInterest.map((item, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-bg-tertiary border border-border rounded-full text-sm font-sans text-text-primary"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-mono text-sm text-accent uppercase tracking-widest mb-6"
          >
            Relevant Coursework
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {relevantCoursework.map((item, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-bg-tertiary border border-border rounded-full text-sm font-sans text-text-primary"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
