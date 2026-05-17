'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-heading font-bold mb-10">
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="glass-card tech-corners p-7">
            <h3 className="text-xl font-heading font-bold text-white mb-3">Background</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Electronics & Telecommunication Engineering student with professional experience
              in AI-driven production systems. Currently completing a 6-month industry internship
              at Applied AI Consulting, building multi-agent AI workflows and production backends
              while maintaining a 9.02 CGPA.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="glass-card tech-corners p-7">
            <h3 className="text-xl font-heading font-bold text-white mb-3">What I Build</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              I work across the entire stack — from agentic AI systems and LLM integrations
              to mobile apps (React Native), full-stack backends (FastAPI, Node.js), and
              even racing drones. Every project ships production-ready, not as a side experiment.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="glass-card tech-corners p-7">
            <h3 className="text-xl font-heading font-bold text-white mb-3">Engineering Philosophy</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              Security thinking is baked into everything I build. Like a certain genius billionaire
              — I design, I build, I test, I iterate. From the first line of code to deployment,
              every system is engineered to be production-grade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
