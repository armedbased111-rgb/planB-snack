import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedText = ({ 
  text, 
  className = '',
  delay = 0,
  stagger = 0.05 
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: 'easeOut',
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default AnimatedText

