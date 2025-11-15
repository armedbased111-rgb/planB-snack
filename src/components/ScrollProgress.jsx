import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/20">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-primary to-secondary"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      <div
        className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-primary to-transparent opacity-50"
        style={{ left: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress

