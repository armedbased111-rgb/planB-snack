import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Menu' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
            Plan B
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'text-primary font-semibold bg-primary/10 glow-green'
                    : 'text-white/80 hover:text-primary hover:bg-white/5'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2 glass-strong rounded-lg p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'text-primary font-semibold bg-primary/20 border border-primary/30'
                    : 'text-white/80 hover:text-primary hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header

