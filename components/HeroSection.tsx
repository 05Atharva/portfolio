'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Download, X } from 'lucide-react';
import { typewriterRoles, resumes } from './data';

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      {/* Resume Modal */}
      {showResumeModal && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowResumeModal(false)} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-md mx-4 p-6 rounded-2xl bg-stark-card border border-arc-blue/20 shadow-2xl z-[1000]"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-heading font-semibold text-white">Download Resume</h3>
              <button onClick={() => setShowResumeModal(false)} className="text-gray-400 hover:text-white transition">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
              {resumes.map((r, i) => (
                <a key={i} href={r.href} download={r.downloadName} onClick={() => setShowResumeModal(false)}
                  className="flex items-center justify-between p-4 rounded-xl bg-stark-bg hover:bg-stark-card-hover border border-transparent hover:border-arc-blue/20 transition-all group">
                  <div>
                    <p className="font-semibold text-white group-hover:text-arc-blue-light transition">{r.label}</p>
                    <p className="text-sm text-gray-500">{r.subtitle}</p>
                  </div>
                  <Download className="text-gray-500 group-hover:text-arc-blue-light transition" size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-4 text-center">More resume variants coming soon</p>
          </motion.div>
        </motion.div>
      )}

      {/* Hero — pt-24 pushes content below the fixed navbar */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Arc Reactor Background Glow */}
        <div className="arc-reactor" />

        <div className="w-full text-center relative z-10">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="mb-8 flex justify-center"
          >
            <div className="profile-glow w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden" style={{ willChange: 'transform' }}>
              <img src="/profile-opt.jpg" alt="Atharva Kanawade" className="w-full h-full object-cover object-top" style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }} />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-5 text-white"
          >
            Atharva{' '}
            <span className="gradient-text">Kanawade</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-7 h-10"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-heading text-gray-300">
              {displayText}
            </span>
            <span className="typewriter-cursor" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            From multi-agent AI systems and production backends to mobile apps and racing drones —
            I engineer solutions across the full stack. Currently building AI-driven production
            systems at Applied AI Consulting, and always shipping something new.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#projects" className="px-8 py-3.5 bg-gradient-to-r from-arc-blue to-arc-gold text-white rounded-xl font-heading font-semibold text-base hover:shadow-lg hover:shadow-arc-blue/30 transition-all hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3.5 border-2 border-arc-blue/40 text-arc-blue-light rounded-xl font-heading font-semibold text-base hover:bg-arc-blue/10 hover:border-arc-blue/60 transition-all hover:-translate-y-0.5">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center gap-5"
          >
            {[
              { href: 'https://github.com/05Atharva', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/atharvakanawade', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:atharvakanawade@gmail.com', icon: Mail, label: 'Email' },
            ].map((s) => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3.5 rounded-xl bg-stark-card border border-transparent hover:border-arc-blue/30 text-gray-400 hover:text-arc-blue-light transition-all hover:-translate-y-1"
                aria-label={s.label}>
                <s.icon size={24} />
              </a>
            ))}
            <button onClick={() => setShowResumeModal(true)}
              className="p-3.5 rounded-xl bg-stark-card border border-transparent hover:border-arc-gold/30 text-gray-400 hover:text-arc-gold-light transition-all hover:-translate-y-1"
              aria-label="Download Resume">
              <FileText size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
