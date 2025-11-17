import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie D.',
      rating: 5,
      text: 'Excellent snack ! Les pizzas sont délicieuses et le service est rapide. Je recommande vivement !',
      date: 'Il y a 2 semaines',
    },
    {
      id: 2,
      name: 'Thomas L.',
      rating: 5,
      text: 'Un de mes endroits préférés pour déjeuner. Les burgers sont top et les prix sont raisonnables.',
      date: 'Il y a 1 mois',
    },
    {
      id: 3,
      name: 'Sophie M.',
      rating: 5,
      text: 'Ambiance conviviale et produits frais. Le Plan B est devenu une habitude pour mes pauses déjeuner.',
      date: 'Il y a 3 semaines',
    },
    {
      id: 4,
      name: 'Pierre K.',
      rating: 5,
      text: 'Service impeccable et qualité au rendez-vous. Les pizzas sont vraiment excellentes !',
      date: 'Il y a 2 mois',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glass border border-gold/30 p-6 rounded-2xl hover:border-gold/50 hover:glow-gold transition-all"
        >
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-gold text-gold" />
            ))}
          </div>
          <p className="text-white/80 mb-4 italic font-body">"{testimonial.text}"</p>
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-white">{testimonial.name}</span>
            <span className="text-sm text-white/50 font-body">{testimonial.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Testimonials

