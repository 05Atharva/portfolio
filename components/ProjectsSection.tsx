'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects, filterTags } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === activeFilter));

  return (
    <section id="projects" className="py-28 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-5"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 mb-10"
        >
          From mobile apps and AI systems to drones and security platforms — here&apos;s what I&apos;ve built.
        </motion.p>

        {/* Filter Tags */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 mb-12">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2.5 rounded-lg font-heading text-base font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-arc-blue text-white shadow-lg shadow-arc-blue/20'
                  : 'bg-stark-card text-gray-400 hover:text-white hover:bg-stark-card-hover border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (idx % 6) * 0.08, duration: 0.4 }}
              className="glass-card tilt-card glow-border tech-corners p-7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-heading font-bold text-white">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 text-xs rounded-full bg-arc-gold/15 text-arc-gold-light font-medium">Featured</span>
                    )}
                  </div>
                  <p className="text-sm text-arc-blue-light font-medium">{project.subtitle}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg text-gray-500 hover:text-arc-blue-light hover:bg-arc-blue/10 transition-all"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <p className="text-base text-gray-400 mb-5 leading-relaxed">{project.description}</p>

              <div className="mb-5 flex-1">
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-arc-blue-light mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 text-xs rounded-full bg-arc-blue/10 text-arc-blue-light">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded bg-stark-surface text-gray-500">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
