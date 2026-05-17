'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-12"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-arc-blue/40 via-arc-gold/20 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative pl-16 md:pl-20 mb-14 last:mb-0"
            >
              <div className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full bg-arc-blue border-2 border-stark-bg shadow-[0_0_12px_rgba(59,130,246,0.4)]" />

              <div className="glass-card tech-corners p-8 md:p-10 tilt-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-arc-blue/20 to-arc-gold/10 flex-shrink-0">
                      <Briefcase className="text-arc-blue-light" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                      <p className="text-arc-blue-light font-semibold text-base">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-sm px-3 py-1 rounded-full bg-arc-blue/10 text-arc-blue-light">{exp.type}</span>
                        <span className="text-sm text-gray-500">{exp.period}</span>
                        {exp.location && (
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin size={14} /> {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-gray-400 text-base mb-5 leading-relaxed">{exp.description}</p>
                )}

                <div className="mb-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Key Contributions</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-gray-300">
                        <span className="text-arc-blue-light mt-1 flex-shrink-0">▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.focus && (
                  <p className="text-sm text-gray-500 mb-5 italic">Focus: {exp.focus}</p>
                )}

                {'sideProject' in exp && exp.sideProject && (
                  <div className="mt-5 p-6 rounded-xl bg-stark-bg border border-arc-gold/15">
                    <h4 className="text-lg font-heading font-semibold text-arc-gold-light mb-3">
                      🍳 {exp.sideProject.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{exp.sideProject.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.sideProject.highlights.map((h: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-arc-gold-light mt-0.5">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.sideProject.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 text-xs rounded bg-arc-gold/10 text-arc-gold-light">{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-5 pt-5 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-md bg-stark-surface text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
