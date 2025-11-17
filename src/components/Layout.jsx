import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollToTopButton from './ScrollToTopButton'
import ScrollProgress from './ScrollProgress'
import CursorEffect from './CursorEffect'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative z-20">
      <CursorEffect />
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-1 relative z-20"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ 
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout

