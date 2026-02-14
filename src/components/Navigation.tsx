"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = ['programs', 'about', 'mentors', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Instructors', href: '#mentors' },
    { name: 'Contact', href: '#contact' },
  ]

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-blue-600"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            AENEXZ
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === link.href.replace('#', '') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                data-cursor-hover
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-orange-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton
              href="#register"
              className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/30 transition-all duration-300"
            >
              Enroll Now
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-800 relative w-8 h-8"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="absolute left-0 top-2 w-8 h-0.5 bg-slate-800"
              animate={{ 
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 6 : 0
              }}
            />
            <motion.span
              className="absolute left-0 top-4 w-8 h-0.5 bg-slate-800"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <motion.span
              className="absolute left-0 top-6 w-8 h-0.5 bg-slate-800"
              animate={{ 
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -6 : 0
              }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0F] flex flex-col items-center justify-center md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={linkVariants}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-bold text-white mb-6 hover:gradient-text transition-all"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#register"
              variants={linkVariants}
              custom={navLinks.length}
              onClick={() => setMobileOpen(false)}
              className="mt-8 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
