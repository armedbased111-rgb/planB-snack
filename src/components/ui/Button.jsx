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
    primary: 'bg-primary text-black hover:bg-primary/90 focus:ring-primary glow-green hover:glow-green-strong hover:scale-110',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary glow-green hover:glow-green-strong hover:scale-110',
    outline: 'glass border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary focus:ring-primary hover:glow-green',
    ghost: 'bg-transparent text-white/80 hover:bg-white/10 hover:text-primary focus:ring-primary',
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
          ? '0 0 30px rgba(34, 197, 94, 0.6)' 
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

