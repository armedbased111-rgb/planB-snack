import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Désactiver sur mobile/tablette
    const checkDesktop = () => {
      const desktop = window.matchMedia('(pointer: fine)').matches && window.innerWidth > 768
      setIsDesktop(desktop)
      return desktop
    }
    
    const isDesktopNow = checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    if (!isDesktopNow) return
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkDesktop)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isDesktop) return null

  return (
    <>
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      {/* Cursor glow */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-32 h-32 rounded-full bg-primary/10 pointer-events-none z-50 blur-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            scale: 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </>
  )
}

export default CursorEffect

