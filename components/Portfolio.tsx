'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { navItems } from './data';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AchievementsSection from './AchievementsSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Background Layers */}
      <div className="gradient-mesh" />
      <div className="hud-grid" />

      {/* Floating Mini Reactors */}
      <div className="mini-reactors">
        <div className="mini-reactor" />
        <div className="mini-reactor" />
        <div className="mini-reactor" />
        <div className="mini-reactor" />
        <div className="mini-reactor" />
        <div className="mini-reactor" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-stark-bg/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center h-16">
            <motion.button
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => scrollToSection('home')}
            >
              <Terminal className="text-arc-blue" size={22} />
              <span className="font-heading font-bold text-lg text-white">
                Atharva<span className="text-arc-blue-light">K</span>
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-arc-blue-light'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-arc-blue to-arc-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stark-card border-t border-white/5"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-6 py-3.5 font-heading text-sm transition-all ${
                  activeSection === item.id
                    ? 'text-arc-blue-light bg-arc-blue/5'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Main Content — NEW ORDER: About → Experience → Projects → Skills → Achievements → Contact */}
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <AchievementsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-stark-bg/50 border-t border-white/5 backdrop-blur">
        <div className="w-full px-8 md:px-16 lg:px-24 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Atharva Kanawade. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Engineered with precision. Shipped with intent.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
