import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-red-dark text-white hover:bg-red-dark/90 focus:ring-red-dark glow-red hover:glow-red-strong hover:scale-110 font-display',
    secondary: 'bg-gold text-wood-dark hover:bg-gold/90 focus:ring-gold glow-gold hover:glow-gold hover:scale-110 font-display',
    outline: 'glass border-2 border-gold/50 text-gold hover:bg-parchment/10 hover:border-gold focus:ring-gold hover:glow-gold font-body',
    ghost: 'bg-transparent text-white/80 hover:bg-white/10 hover:text-red-dark focus:ring-red-dark font-body',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }
  
  return (
    <motion.button
      ref={ref}
      whileHover={{ 
        scale: variant === 'primary' ? 1.1 : 1.05,
        boxShadow: variant === 'primary' 
          ? '0 0 30px rgba(164, 23, 18, 0.6)' 
          : variant === 'secondary'
          ? '0 0 30px rgba(209, 168, 74, 0.6)'
          : undefined,
      }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} relative overflow-hidden group`}
      {...props}
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button

