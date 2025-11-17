import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Section = forwardRef(({ 
  children, 
  title,
  subtitle,
  className = '',
  ...props 
}, ref) => {
  return (
    <section ref={ref} className={`py-20 ${className}`} {...props}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl font-display font-bold mb-4 text-white">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
})

Section.displayName = 'Section'

export default Section

