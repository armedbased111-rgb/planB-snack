import { motion } from 'framer-motion'
import { forwardRef, useState } from 'react'

const Card = forwardRef(({ 
  children, 
  className = '',
  hover = true,
  ...props 
}, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles = 'glass border border-white/10 rounded-2xl transition-all duration-300 relative overflow-hidden'
  const hoverStyles = hover ? 'hover:border-primary/50 hover:glow-green' : ''

  const handleMouseMove = (e) => {
    if (!hover) return
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      whileHover={hover ? { 
        y: -8,
        scale: 1.02,
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
      } : {}}
      style={{ transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {isHovered && hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card

