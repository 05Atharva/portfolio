'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills, additionalTech } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const levelColors: Record<string, string> = {
  EXPERT: 'bg-arc-gold/15 text-arc-gold-light',
  ADVANCED: 'bg-arc-blue/15 text-arc-blue-light',
  STRONG: 'bg-emerald-500/15 text-emerald-400',
  INTERMEDIATE: 'bg-purple-500/15 text-purple-400',
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-5"
        >
          Technical <span className="gradient-text">Arsenal</span>
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 mb-12"
        >
          Tools and technologies I use to build production systems across the full stack.
        </motion.p>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: catIdx * 0.08, duration: 0.4 }}
            >
              <h3 className="text-xl font-heading font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-10 h-px bg-gradient-to-r from-arc-blue to-transparent" />
                {category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {skillList.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="glass-card p-5 flex flex-col gap-3 cursor-default"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-base text-white leading-tight">{skill.name}</h4>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wide whitespace-nowrap ${
                        levelColors[skill.level] || 'bg-gray-500/15 text-gray-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="tag-pill px-2.5 py-1 text-xs rounded bg-stark-surface text-gray-400 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mt-16">
          <h3 className="text-xl font-heading font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-10 h-px bg-gradient-to-r from-arc-gold to-transparent" />
            Additional Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalTech.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tag-pill px-5 py-2.5 rounded-lg bg-stark-card border border-white/5 text-gray-400 font-medium text-base cursor-default hover:text-white hover:border-arc-blue/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
