import { motion } from 'framer-motion'
import { ChefHat, Heart, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: ChefHat,
      title: 'Passion culinaire',
      description: 'Notre équipe est passionnée par la cuisine et met tout en œuvre pour vous offrir des plats savoureux et de qualité.',
    },
    {
      icon: Heart,
      title: 'Produits frais',
      description: 'Nous sélectionnons rigoureusement nos fournisseurs pour garantir la fraîcheur et la qualité de nos ingrédients.',
    },
    {
      icon: Users,
      title: 'Ambiance conviviale',
      description: 'Plan B est plus qu\'un simple snack, c\'est un lieu de rencontre où chacun se sent bienvenu.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-dark/20 via-gold/10 to-red-dark/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,23,18,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            À propos de Plan B
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto font-body"
          >
            Votre snack pizzeria de quartier depuis toujours
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-display font-bold mb-6 text-white">Notre Histoire</h2>
              <div className="space-y-4 text-lg text-white/70 text-left font-body">
                <p>
                  Plan B est né d'une passion simple : offrir à nos clients des produits de qualité
                  dans une ambiance chaleureuse et conviviale. Depuis notre ouverture, nous avons
                  toujours privilégié la fraîcheur des ingrédients et le savoir-faire artisanal.
                </p>
                <p>
                  Que ce soit pour une pause déjeuner rapide, un dîner entre amis ou une soirée
                  en famille, Plan B est là pour vous accueillir. Notre menu varié, allant des
                  pizzas traditionnelles aux snacks gourmands, saura satisfaire tous les appétits.
                </p>
                <p>
                  Nous croyons en une cuisine simple, authentique et généreuse. Chaque plat est
                  préparé avec soin et attention, pour vous offrir une expérience culinaire
                  mémorable à chaque visite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">Nos Valeurs</h2>
            <p className="text-xl text-white/70 font-body">
              Ce qui nous guide au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="parchment border border-gold/30 p-8 rounded-2xl text-center hover:border-gold/50 hover:glow-gold transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-dark/20 rounded-full mb-4 group-hover:bg-red-dark/30 group-hover:scale-110 transition-all">
                  <value.icon className="text-red-dark" size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-red-dark">{value.title}</h3>
                <p className="text-wood-dark/80 font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative parchment border border-gold/30 rounded-3xl p-12 max-w-3xl mx-auto glow-gold"
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-red-dark">Venez nous rendre visite !</h2>
            <p className="text-xl mb-6 text-wood-dark/80 font-body">
              Nous serions ravis de vous accueillir et de partager notre passion avec vous.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-dark border border-red-dark text-white px-8 py-4 rounded-full font-display font-bold hover:bg-red-dark/90 hover:glow-red-strong transition-all hover:scale-110"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

