import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-white/10 glass-strong">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Plan B</h3>
            <p className="text-white/70">
              Votre snack pizzeria de quartier. Des produits frais et une ambiance conviviale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/70 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/70 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-white/70 hover:text-primary transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>123 Rue de la Ville, 75000 Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>Lun-Dim: 11h - 23h</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="text-white/70 hover:text-primary transition-colors hover:scale-110" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-primary transition-colors hover:scale-110" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Plan B. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

