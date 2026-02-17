"use client"
import { motion } from 'framer-motion'

export default function HeroAenexz() {
  return (
    <section className="relative min-h-screen bg-[#F8FAFC] overflow-hidden pt-16">
      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #94a3b8 1px, transparent 1px),
              linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Decorative curved lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute right-0 top-0 w-2/3 h-full opacity-[0.03]" viewBox="0 0 800 800" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M ${600 + i * 40} 0 Q ${500 + i * 30} ${400 + i * 20} ${700 + i * 35} 800`}
              stroke="#64748b"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-5 gap-16 items-center min-h-[calc(100vh-280px)]">
          {/* Left content - 3 columns (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FF6B3D] font-semibold text-xl italic"
            >
              Unlock Your Potential with Aenexz!
            </motion.p>

            {/* Main headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#1E293B] text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
              >
                We are Creating the
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#1E293B] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                Amazing Students!
              </motion.h1>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 text-lg leading-relaxed"
              >
                Learn from expert instructors with our interactive online courses, designed for all skill levels.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-slate-600 text-lg leading-relaxed"
              >
                Upgrade your knowledge anytime, anywhere—start your learning journey today!
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#register"
                className="inline-block px-10 py-4 bg-[#FF6B3D] hover:bg-[#ff5722] text-white font-semibold text-lg rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5"
              >
                Register Now
              </a>
            </motion.div>
          </div>

          {/* Right content - 2 columns (40%) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 relative hidden lg:block"
          >
            {/* Yellow circular blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FDB819] rounded-full -z-10" />

            {/* Decorative white curved line */}
            <svg className="absolute top-0 left-0 w-full h-full -z-5" viewBox="0 0 400 500">
              <path
                d="M 50 50 Q 200 150 100 300 T 350 450"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.3"
              />
            </svg>

            {/* Student image placeholder */}
            <div className="relative z-10 flex items-center justify-center h-[500px]">
              <div className="text-8xl">👩‍🎓📚</div>
            </div>

            {/* Rotating "Online Course" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
              className="absolute top-[30%] right-[10%] z-20"
            >
              <div className="relative w-28 h-28">
                {/* Rotating outer text */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 120 120"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    />
                  </defs>
                  <circle cx="60" cy="60" r="45" fill="#1E293B" />
                  <text className="text-[9px] fill-white font-bold uppercase tracking-[0.2em]">
                    <textPath href="#circlePath" startOffset="0">
                      •Online Course•Online Course
                    </textPath>
                  </text>
                </motion.svg>
                
                {/* Center arrow button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#4C7BFF] flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#4C7BFF] to-[#5B8FFF] rounded-t-[40px] py-10 shadow-2xl"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M8 21h8M12 17v4" />
                  </svg>
                ), 
                value: '80+', 
                label: 'Online Courses' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ), 
                value: '50+', 
                label: 'Instructors' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ), 
                value: '100%', 
                label: 'Certification' 
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ), 
                value: '9k+', 
                label: 'Memberships' 
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
