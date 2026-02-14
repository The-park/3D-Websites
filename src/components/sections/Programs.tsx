"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const programs = [
  { 
    title: 'Full Stack Development', 
    desc: 'Master frontend and backend with modern frameworks, APIs, and cloud deployment.',
    icon: '💻',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'AI / ML Engineering', 
    desc: 'Build intelligent systems with machine learning, deep learning, and MLOps fundamentals.',
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Cloud Architecture', 
    desc: 'Design scalable cloud solutions with AWS, Azure, and modern DevOps practices.',
    icon: '☁️',
    gradient: 'from-cyan-500 to-blue-500'
  },
]

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-darkest via-primary-dark to-primary-darkest" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 id="programs-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Industry-relevant skills with hands-on projects and real-world applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`text-5xl mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${program.gradient} bg-opacity-10`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">{program.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{program.desc}</p>
                <a href="#register" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all">
                  Explore Program
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
