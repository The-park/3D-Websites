"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!ref.current) return
    gsap.from(ref.current, {
      y: 32,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' }
    })
  }, [])
  return <div ref={ref}>{children}</div>
}
