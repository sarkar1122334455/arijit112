'use client';

import { motion } from 'motion/react';

const skills = [
  {
    id: '01',
    title: 'Engineering & Development',
    subtitle: 'Building full-stack applications from architecture to deployment.',
    tags: [
      'Java',
      'Data Structures & Algorithms',
      'React Native',
      'Node.js',
      'Express.js',
      'Next.js',
      'MongoDB',
      'Firebase',
      'REST APIs',
    ],
  },
  {
    id: '02',
    title: 'Machine Learning & Research',
    subtitle: 'Training models, analyzing data, publishing findings.',
    tags: [
      'Python',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Pandas',
      'Random Forest',
      'LSTM',
      'Bayesian Networks',
    ],
  },
  {
    id: '03',
    title: 'Product & Business',
    subtitle: 'Understanding customers, communicating solutions, building value.',
    tags: [
      'B2B Sales',
      'Sales Engineering',
      'Technical Communication',
      'Product Thinking',
      'Entrepreneurship',
      'Customer Discovery',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-primary">
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
            Capabilities
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight"
          >
            What I bring to the table.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={itemVariants} className="flex flex-col">
              <div className="border-t border-border pt-8 flex flex-col h-full">
                <span className="font-mono text-4xl text-border font-medium mb-6">
                  {skill.id}
                </span>
                <h3 className="font-heading text-xl text-text-primary mb-2">
                  {skill.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary mb-8">
                  {skill.subtitle}
                </p>
                <div className="mt-auto">
                  <p className="font-mono text-sm text-text-tertiary leading-relaxed">
                    {skill.tags.map((tag, index) => (
                      <span key={tag}>
                        {tag}
                        {index < skill.tags.length - 1 && (
                          <span className="mx-2 text-border">•</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
