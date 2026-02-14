"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const mentors = [
  { name: 'Rajesh Kumar', title: 'Senior Software Engineer', company: 'Google', avatar: '👨‍💻' },
  { name: 'Priya Sharma', title: 'Data Science Lead', company: 'Microsoft', avatar: '👩‍💻' },
  { name: 'Arjun Patel', title: 'Cloud Architect', company: 'Amazon', avatar: '👨‍💻' },
  { name: 'Sneha Reddy', title: 'ML Engineer', company: 'Meta', avatar: '👩‍💻' },
]

export default function Mentors() {
  return (
    <section aria-labelledby="mentors-heading" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark to-transparent opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 id="mentors-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Learn from <span className="gradient-text">Industry Experts</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Our instructors bring real-world experience from leading tech companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, i) => (
              <motion.article
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
                  {mentor.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                <p className="text-zinc-400 text-sm mb-1">{mentor.title}</p>
                <p className="text-zinc-500 text-xs">{mentor.company}</p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
