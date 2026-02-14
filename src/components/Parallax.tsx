"use client"
import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function Parallax({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const getTransform = () => {
    const distance = 100 * speed
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance])
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance])
    }
  }

  const transform = getTransform()
  const isHorizontal = direction === 'left' || direction === 'right'

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={isHorizontal ? { x: transform } : { y: transform }}
      >
        {children}
      </motion.div>
    </div>
  )
}
