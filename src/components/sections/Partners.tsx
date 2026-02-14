"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Meta', logo: 'FB' },
  { name: 'Amazon', logo: 'AWS' },
  { name: 'Google', logo: 'GG' },
  { name: 'Oracle', logo: 'OR' },
  { name: 'Unity', logo: 'UN' },
]

export default function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 id="partners-heading" className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Trusted</span> by Industry Leaders
            </h2>
            <p className="text-xl text-zinc-400">
              Our certification partners and hiring companies
            </p>
          </div>
          
          <div className="glass rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-bold text-lg backdrop-blur-sm border border-white/10" aria-label={partner.name}>
                    {partner.logo}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
