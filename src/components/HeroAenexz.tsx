"use client"
import { motion } from 'framer-motion'
import Hero3DEducation from './Hero3DEducation'
import Typewriter from './Typewriter'
import MagneticButton from './MagneticButton'

export default function HeroAenexz() {
  const typewriterWords = ['Students', 'Skills', 'Success', 'Stories', 'Startups']

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background pattern lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${600 + i * 30} 0 Q ${400 + i * 20} ${300 + i * 10} ${700 + i * 25} 600`}
              stroke="#94a3b8"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      {/* 3D Education elements */}
      <Hero3DEducation />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div>
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-orange-500 font-semibold text-lg md:text-xl mb-6 italic"
            >
              Unlock Your Potential with Aenexz!
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4"
            >
              We are Creating the
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              <span className="text-slate-800">Amazing </span>
              <Typewriter 
                words={typewriterWords} 
                className="text-blue-600 underline decoration-orange-400 decoration-4 underline-offset-8"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 text-lg md:text-xl mb-4 max-w-xl"
            >
              Learn from expert instructors with our interactive online courses, designed for all skill levels.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl"
            >
              Upgrade your knowledge anytime, anywhere—start your learning journey today!
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticButton
                href="#register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-lg shadow-orange-500/30 transition-all duration-300"
              >
                Register Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right side - space for 3D elements (rendered behind) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-blue-600 py-6"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🖥️', value: '80+', label: 'Online Courses' },
              { icon: '👨‍🏫', value: '50+', label: 'Instructors' },
              { icon: '🎓', value: '100%', label: 'Certification' },
              { icon: '👥', value: '9k+', label: 'Memberships' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/50 flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Rotating badge CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, type: 'spring' }}
        className="absolute right-[45%] top-[40%] hidden lg:block z-20"
      >
        <div className="relative w-24 h-24">
          {/* Rotating text */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[8px] fill-slate-600 font-semibold uppercase tracking-widest">
              <textPath href="#circlePath">
                • Online Course • Online Course • Online Course
              </textPath>
            </text>
          </motion.svg>
          {/* Center button */}
          <a
            href="#courses"
            className="absolute inset-4 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors shadow-lg"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
