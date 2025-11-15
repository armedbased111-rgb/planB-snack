import { motion } from 'framer-motion'

const LoadingSkeleton = ({ className = '', count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`glass border border-white/10 rounded-2xl ${className}`}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        >
          <div className="h-48 bg-white/5 rounded-t-2xl" />
          <div className="p-6 space-y-3">
            <div className="h-6 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-full" />
            <div className="h-4 bg-white/5 rounded w-5/6" />
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default LoadingSkeleton

