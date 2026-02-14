"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Online Courses', value: '80+', color: 'text-blue-500' },
  { label: 'Expert Instructors', value: '50+', color: 'text-purple-500' },
  { label: 'Certification Rate', value: '100%', color: 'text-cyan-500' },
  { label: 'Active Learners', value: '9k+', color: 'text-pink-500' },
]

export default function KPIStats() {
  return (
    <section aria-labelledby="kpi-heading" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark to-transparent opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 id="kpi-heading" className="sr-only">Key Performance Indicators</h2>
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-5xl md:text-6xl font-bold mb-3 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
