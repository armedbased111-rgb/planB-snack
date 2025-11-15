import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Alert = ({ 
  type = 'success', 
  message, 
  onClose,
  duration = 5000,
  show = true 
}) => {
  const [isVisible, setIsVisible] = useState(show)

  useEffect(() => {
    setIsVisible(show)
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        if (onClose) onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [show, duration, onClose])

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertCircle,
  }

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  }

  const Icon = icons[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 border rounded-lg p-4 shadow-lg ${colors[type]} max-w-md w-full mx-4`}
        >
          <div className="flex items-center gap-3">
            <Icon size={24} className="flex-shrink-0" />
            <p className="flex-1 font-medium">{message}</p>
            {onClose && (
              <button
                onClick={() => {
                  setIsVisible(false)
                  onClose()
                }}
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Alert

