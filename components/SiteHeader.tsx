'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { site } from '@/app/site'
import { navItems } from './data'

function isLightTheme() {
  const theme = document.documentElement.dataset.theme
  return theme ? theme === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches
}

export default function SiteHeader() {
  const [isLight, setIsLight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButton = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    menu.current?.querySelector('a')?.focus()

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [menuOpen])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: light)')
    const update = () => setIsLight(isLightTheme())
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const sections = ['home', ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null)

    let frame = 0
    function updateLocation() {
      frame = 0
      const readingLine = window.innerHeight * 0.26
      const atBottom = window.scrollY > 0
        && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      const section = atBottom ? sections.at(-1) : sections.findLast(
        (candidate) => candidate.getBoundingClientRect().top <= readingLine,
      )
      setActiveSection(section?.id ?? 'home')
    }

    function queueUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateLocation)
    }

    queueUpdate()
    window.addEventListener('scroll', queueUpdate, { passive: true })
    window.addEventListener('resize', queueUpdate)

    return () => {
      window.removeEventListener('scroll', queueUpdate)
      window.removeEventListener('resize', queueUpdate)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  function toggleTheme() {
    const nextTheme = isLightTheme() ? 'dark' : 'light'
    document.documentElement.dataset.theme = nextTheme
    setIsLight(nextTheme === 'light')
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      // The theme can still be used when storage is unavailable.
    }
  }

  return (
    <header className="site-header" ref={header} onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="shell header-inner">
        <a href="#home" className="brand-link" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/ak-mark.svg" width={39} height={39} alt="" />
          <span>{site.name}</span>
        </a>
        <nav className="site-nav" id="site-nav" ref={menu} data-open={menuOpen} aria-label="Main navigation">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={'#' + id}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <button className="icon-button theme-button" type="button" onClick={toggleTheme}
            aria-label="Light theme" aria-pressed={isLight} title={isLight ? 'Use dark theme' : 'Use light theme'}>
            <Sun className="theme-sun" size={19} aria-hidden="true" />
            <Moon className="theme-moon" size={19} aria-hidden="true" />
          </button>
          <button className="icon-button menu-button" type="button" ref={menuButton}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
