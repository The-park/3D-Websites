"use client"
import { useEffect } from 'react'
import { initSmoothScroll } from '@/lib/scroll'

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!reduce.matches) initSmoothScroll()
  }, [])
  return null
}
