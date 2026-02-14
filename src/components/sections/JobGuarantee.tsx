"use client"
import Reveal from '@/components/Reveal'
import { motion } from 'framer-motion'

const benefits = [
  { icon: '⏱️', text: '3 Months Real-Time Training' },
  { icon: '💰', text: 'Stipend: ₹5,000 – ₹15,000/month' },
  { icon: '📄', text: 'Offer Letter on Day 1' },
  { icon: '💼', text: 'Package: ₹3 – ₹4 LPA post-internship' },
  { icon: '🎯', text: 'Full Stack, AI/ML, Cloud Skills' },
  { icon: '🎓', text: 'Final-year & Recent Graduates' },
]

export default function JobGuarantee() {
  return (
    <section aria-labelledby="job-heading" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="glass rounded-3xl p-12 md:p-16">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full glass mb-6">
                <span className="text-sm font-semibold gradient-text">LIMITED SEATS AVAILABLE</span>
              </div>
              <h2 id="job-heading" className="text-4xl md:text-5xl font-bold mb-6">
                100% <span className="gradient-text">Job Guarantee</span> Program
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Launch your tech career with our comprehensive training and guaranteed placement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <p className="text-zinc-300">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <a
                href="https://rzp.io/rzp/fWygaXL5"
                className="inline-block px-10 py-4 rounded-full gradient-bg text-white font-bold text-lg hover:glow transition-all duration-300"
              >
                Apply Now →
              </a>
              <p className="mt-4 text-sm text-zinc-500">Join 500+ successful placements</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
