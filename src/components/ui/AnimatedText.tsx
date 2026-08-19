'use client';

import { motion, useReducedMotion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerDelay?: number;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h1',
  staggerDelay = 0.05,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ marginRight: '0.3em' }}>
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            aria-hidden="true"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
