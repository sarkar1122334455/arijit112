'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineText = "BUILDING ACROSS SOFTWARE, AI, AND ENGINEERING.";
  const headlineWords = headlineText.split(" ");

  const headlineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const headlineChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const }
    }
  };

  const centerNode = { cx: 250, cy: 250, label: 'ARIJIT' };
  const surroundingNodes = [
    { cx: 250, cy: 70, label: 'DEVELOPMENT', delay: 0 },
    { cx: 405.8, cy: 160, label: 'AI/ML', delay: 0.5 },
    { cx: 405.8, cy: 340, label: 'CYBERSECURITY', delay: 1 },
    { cx: 250, cy: 430, label: 'ENGINEERING', delay: 1.5 },
    { cx: 94.2, cy: 340, label: 'RESEARCH', delay: 2 },
    { cx: 94.2, cy: 160, label: 'DSA', delay: 2.5 },
  ];

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center relative overflow-hidden bg-bg-primary pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 opacity-0" />
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-bg-primary pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        
        {/* Left Column - Text */}
        <div className="flex flex-col space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs md:text-sm tracking-[0.2em] text-accent uppercase"
          >
            ECE STUDENT · DEVELOPER · RESEARCHER
          </motion.div>

          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-text-primary"
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={headlineChild}
                className="inline-block mr-3 md:mr-4 mb-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl font-sans"
          >
            Electronics &amp; Communication Engineering student at Guru Nanak Institute of Technology, Kolkata. Working across software development, AI/ML, cybersecurity, and engineering problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Link 
              href="#work" 
              className="inline-flex justify-center items-center px-8 py-3.5 bg-accent text-bg-primary font-medium rounded-md hover:bg-accent-muted transition-colors duration-300 shadow-sm"
            >
              Explore My Work
            </Link>
            <Link 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-3.5 border border-border text-text-primary font-medium rounded-md hover:border-accent hover:text-accent transition-colors duration-300 bg-bg-secondary/50 backdrop-blur-sm"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-2"
          >
            <Link 
              href="/resume.pdf" 
              className="inline-flex items-center text-sm font-medium text-text-tertiary hover:text-accent transition-colors group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume <span className="ml-1.5 transition-transform group-hover:translate-y-0.5">↓</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Visual Node Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="relative w-full aspect-square max-w-[400px] lg:max-w-[500px] mx-auto flex items-center justify-center"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
            {/* Connection Lines */}
            {surroundingNodes.map((node, i) => (
              <motion.line
                key={`line-${i}`}
                x1={centerNode.cx}
                y1={centerNode.cy}
                x2={node.cx}
                y2={node.cy}
                className="stroke-border"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: "easeOut" }}
              />
            ))}

            {/* Surrounding Nodes */}
            {surroundingNodes.map((node, i) => (
              <motion.g
                key={`node-${i}`}
                animate={prefersReducedMotion ? {} : {
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
                className="group cursor-pointer"
              >
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="5"
                  className="fill-text-secondary group-hover:fill-accent transition-colors duration-300"
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="12"
                  fill="transparent"
                />
                <text
                  x={node.cx}
                  y={node.cy + 24}
                  textAnchor="middle"
                  className="font-mono tracking-widest fill-text-tertiary group-hover:fill-accent transition-colors duration-300"
                  style={{ fontSize: '11px' }}
                >
                  {node.label}
                </text>
              </motion.g>
            ))}

            {/* Center Node */}
            <motion.g
              animate={prefersReducedMotion ? {} : {
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group cursor-pointer"
            >
              <circle
                cx={centerNode.cx}
                cy={centerNode.cy}
                r="8"
                className="fill-accent transition-colors duration-300"
              />
              <circle
                cx={centerNode.cx}
                cy={centerNode.cy}
                r="18"
                fill="none"
                className="stroke-accent stroke-opacity-30 group-hover:stroke-opacity-70 group-hover:r-20 transition-all duration-300"
                strokeWidth="1"
              />
              <text
                x={centerNode.cx}
                y={centerNode.cy + 32}
                textAnchor="middle"
                className="font-mono tracking-widest font-bold fill-text-primary group-hover:fill-accent transition-colors duration-300"
                style={{ fontSize: '13px' }}
              >
                {centerNode.label}
              </text>
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
