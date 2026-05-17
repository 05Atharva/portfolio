'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, FileText, ChevronDown, Download, X } from 'lucide-react';
import { resumes } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const ContactSection = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      {showResumeModal && (
        <motion.div className="fixed inset-0 z-[999] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowResumeModal(false)} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-md mx-4 p-6 rounded-2xl bg-stark-card border border-arc-blue/20 shadow-2xl z-[1000]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-heading font-semibold text-white">Download Resume</h3>
              <button onClick={() => setShowResumeModal(false)} className="text-gray-400 hover:text-white transition"><X size={20} /></button>
            </div>
            <div className="space-y-3">
              {resumes.map((r, i) => (
                <a key={i} href={r.href} download={r.downloadName} onClick={() => setShowResumeModal(false)} className="flex items-center justify-between p-4 rounded-xl bg-stark-bg hover:bg-stark-card-hover border border-transparent hover:border-arc-blue/20 transition-all group">
                  <div>
                    <p className="font-semibold text-lg text-white group-hover:text-arc-blue-light transition">{r.label}</p>
                    <p className="text-sm text-gray-500">{r.subtitle}</p>
                  </div>
                  <Download className="text-gray-500 group-hover:text-arc-blue-light transition" size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">More resume variants coming soon</p>
          </motion.div>
        </motion.div>
      )}

      <section id="contact" className="py-28 px-8 md:px-16 lg:px-24">
        <div className="w-full text-center">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-heading font-bold mb-5">
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>

          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
            Interested in collaborating on AI systems, full-stack projects, mobile apps, or anything engineering? I&apos;m always open to new opportunities.
          </motion.p>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="mailto:atharvakanawade@gmail.com" className="glass-card tech-corners p-8 group transition-all hover:-translate-y-1">
              <Mail className="text-arc-blue-light mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-heading font-bold text-white mb-2">Email</h3>
              <p className="text-base text-gray-500">atharvakanawade@gmail.com</p>
            </a>

            <a href="https://linkedin.com/in/atharvakanawade" target="_blank" rel="noopener noreferrer" className="glass-card tech-corners p-8 group transition-all hover:-translate-y-1">
              <Linkedin className="text-[#0A66C2] mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-heading font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-base text-gray-500">Connect with me</p>
            </a>

            <a href="https://github.com/05Atharva" target="_blank" rel="noopener noreferrer" className="glass-card tech-corners p-8 group transition-all hover:-translate-y-1">
              <Github className="text-arc-blue-light mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-heading font-bold text-white mb-2">GitHub</h3>
              <p className="text-base text-gray-500">Check out my code</p>
            </a>

            <div className="glass-card tech-corners p-8">
              <MapPin className="text-arc-gold-light mx-auto mb-4" size={32} />
              <h3 className="text-lg font-heading font-bold text-white mb-2">Location</h3>
              <p className="text-base text-gray-500">Pune, India</p>
              {showPhone ? (
                <p className="text-sm text-gray-500 mt-3 flex items-center justify-center gap-1"><Phone size={14} /> +91 975385785</p>
              ) : (
                <button onClick={() => setShowPhone(true)} className="text-sm text-arc-blue-light mt-3 hover:underline flex items-center justify-center gap-1 mx-auto"><Phone size={14} /> Show phone number</button>
              )}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <button onClick={() => setShowResumeModal(true)} className="px-10 py-4 bg-gradient-to-r from-arc-blue to-arc-gold text-white rounded-xl font-heading font-semibold text-lg hover:shadow-lg hover:shadow-arc-blue/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
              <FileText size={22} /> Download Resume <ChevronDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
