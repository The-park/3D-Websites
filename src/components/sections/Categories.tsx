"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Technology', icon: '💻', count: '25+' },
  { name: 'Business', icon: '💼', count: '15+' },
  { name: 'Design', icon: '🎨', count: '12+' },
  { name: 'Data Science', icon: '📊', count: '18+' },
  { name: 'Marketing', icon: '📣', count: '10+' },
  { name: 'Cloud & DevOps', icon: '☁️', count: '14+' },
]

export default function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 id="categories-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Browse <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Explore courses across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center cursor-pointer group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">{category.name}</h3>
                <p className="text-zinc-500 text-sm">{category.count} courses</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
