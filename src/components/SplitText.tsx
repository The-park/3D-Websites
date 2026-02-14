"use client"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  type?: 'chars' | 'words' | 'lines'
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'chars'
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const splitContent = () => {
    if (type === 'words') {
      return children.split(' ').map((word, i) => ({ content: word + ' ', key: i }))
    }
    if (type === 'lines') {
      return children.split('\n').map((line, i) => ({ content: line, key: i }))
    }
    // chars
    return children.split('').map((char, i) => ({ content: char === ' ' ? '\u00A0' : char, key: i }))
  }

  const items = splitContent()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -90
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{ perspective: 1000 }}
    >
      {items.map((item) => (
        <motion.span
          key={item.key}
          variants={itemVariants}
          className="inline-block origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item.content}
        </motion.span>
      ))}
    </motion.div>
  )
}
