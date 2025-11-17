import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-gold/20 glass-strong">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-gradient">Plan B</h3>
            <p className="text-white/80 font-body">
              Votre snack pizzeria de quartier. Des produits frais et une ambiance conviviale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-red-dark transition-colors font-body">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/70 hover:text-red-dark transition-colors font-body">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/70 hover:text-red-dark transition-colors font-body">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-white/70 hover:text-red-dark transition-colors font-body">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-red-dark transition-colors font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-3 text-white/80 font-body">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-red-dark flex-shrink-0" />
                <span>6 Rue des Aqueducs, 42300 Roanne</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-dark flex-shrink-0" />
                <div className="flex flex-col">
                  <span>04 26 54 37 41</span>
                  <span className="text-sm text-white/60">07 58 04 73 00</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-red-dark flex-shrink-0" />
                <span>Lun-Dim: 11:00-14:00 / 17:00-00:00</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="text-white/70 hover:text-red-dark transition-colors hover:scale-110" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-red-dark transition-colors hover:scale-110" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-white/60 font-body">
          <p>&copy; {new Date().getFullYear()} Plan B. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

