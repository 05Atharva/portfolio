'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield, Flag, FileText } from 'lucide-react';
import { certifications, achievements, blogs } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-28 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl font-heading font-bold mb-12"
        >
          Achievements & <span className="gradient-text">Certifications</span>
        </motion.h2>

        {/* Achievements */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="mb-14">
          <h3 className="text-xl font-heading font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-10 h-px bg-gradient-to-r from-arc-gold to-transparent" />
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {achievements.map((a, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -3 }}
                className="glass-card tech-corners p-6 flex flex-col gap-3"
              >
                <Award className="text-arc-gold-light" size={28} />
                <h4 className="font-heading font-semibold text-white text-base leading-tight">{a.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{a.description}</p>
                {'link' in a && a.link && (
                  <a
                    href={a.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-arc-blue-light hover:text-arc-gold-light transition-colors mt-auto"
                  >
                    <FileText size={14} /> View on IEEE Xplore <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mb-14">
          <h3 className="text-xl font-heading font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-10 h-px bg-gradient-to-r from-arc-blue to-transparent" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <Award className="text-arc-blue-light flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h4 className="font-semibold text-white text-base">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Section */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <h3 className="text-xl font-heading font-bold mb-6 text-white flex items-center gap-3">
            <span className="w-10 h-px bg-gradient-to-r from-arc-blue to-arc-gold" />
            From the Blog
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <a
                key={idx}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card tech-corners p-8 group transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-arc-blue/10 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Shield className="text-arc-blue-light" size={24} /> : <Flag className="text-arc-gold-light" size={24} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-1">{blog.subtitle}</p>
                    <h4 className="text-lg font-heading font-semibold text-white mb-2">{blog.title}</h4>
                    <p className="text-base text-gray-400 mb-4">{blog.description}</p>
                    <span className="inline-flex items-center text-base font-medium text-arc-blue-light group-hover:text-arc-gold-light transition-colors">
                      Read More <ExternalLink size={16} className="ml-1.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
