import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, Loader2 } from 'lucide-react'
import Alert from '../components/ui/Alert'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState({ show: false, type: 'success', message: '' })

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Veuillez corriger les erreurs dans le formulaire',
      })
      return
    }

    setIsSubmitting(true)
    
    // Simulation d'envoi (remplacer par un vrai appel API)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simule un appel API
      
      setAlert({
        show: true,
        type: 'success',
        message: 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.',
      })
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer plus tard.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Alert
        show={alert.show}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ ...alert, show: false })}
      />
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-dark/20 via-gold/10 to-red-dark/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,23,18,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 font-body"
          >
            Nous sommes là pour répondre à vos questions
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-white">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-dark/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-red-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">Adresse</h3>
                    <p className="text-white/70 font-body">6 Rue des Aqueducs<br />42300 Roanne</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-dark/20 rounded-full flex items-center justify-center">
                    <Phone className="text-red-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">Téléphone</h3>
                    <p className="text-white/70 font-body">04 26 54 37 41<br />07 58 04 73 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-dark/20 rounded-full flex items-center justify-center">
                    <Mail className="text-red-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/70 font-body">contact@planb-snack.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-dark/20 rounded-full flex items-center justify-center">
                    <Clock className="text-red-dark" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-1">Horaires</h3>
                    <p className="text-white/70 font-body">
                      Lundi - Dimanche<br />
                      11:00-14:00 / 17:00-00:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map interactive */}
              <div className="mt-8 rounded-2xl overflow-hidden glass border border-gold/20">
                <iframe
                  src="https://www.google.com/maps?q=6+Rue+des+Aqueducs,+42300+Roanne&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-96"
                  title="Localisation Plan B - 6 Rue des Aqueducs, 42300 Roanne"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-white">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-medium text-white/80 mb-2">
                    Nom <span className="text-red-dark">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg glass border transition-all outline-none text-white placeholder-white/50 font-body ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gold/20 focus:ring-2 focus:ring-red-dark focus:border-red-dark'
                    }`}
                    placeholder="Votre nom"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-white/80 mb-2">
                    Email <span className="text-red-dark">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg glass border transition-all outline-none text-white placeholder-white/50 font-body ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gold/20 focus:ring-2 focus:ring-red-dark focus:border-red-dark'
                    }`}
                    placeholder="votre@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-white/80 mb-2">
                    Message <span className="text-red-dark">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg glass border transition-all outline-none resize-none text-white placeholder-white/50 font-body ${
                      errors.message
                        ? 'border-red-500/50 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : 'border-gold/20 focus:ring-2 focus:ring-red-dark focus:border-red-dark'
                    }`}
                    placeholder="Votre message..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                  <p className={`mt-1 text-xs font-body ${formData.message.length >= 450 ? 'text-red-dark' : 'text-white/50'}`}>
                    {formData.message.length}/500 caractères
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-dark text-white px-8 py-4 rounded-full font-display font-bold hover:bg-red-dark/90 transition-all hover:scale-110 glow-red hover:glow-red-strong flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

