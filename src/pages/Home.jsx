import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, MapPin, ChefHat } from 'lucide-react'
import Testimonials from '../components/Testimonials'
import Section from '../components/ui/Section'
import Particles from '../components/Particles'
import ParallaxSection from '../components/ParallaxSection'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <Particles count={30} />
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-dark/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-display font-bold mb-6"
          >
            <span className="text-white">Bienvenue au</span>
            <motion.span 
              className="block text-gradient mt-2"
              animate={{
                textShadow: [
                  "0 0 20px rgba(164, 23, 18, 0.5)",
                  "0 0 40px rgba(209, 168, 74, 0.8)",
                  "0 0 20px rgba(164, 23, 18, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Plan B
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-body"
          >
            Votre snack pizzeria de quartier. Des produits frais, une ambiance conviviale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/menu"
              className="group relative inline-flex items-center gap-2 bg-red-dark text-white px-8 py-4 rounded-full font-display font-bold hover:scale-110 transition-all glow-red-strong overflow-hidden"
            >
              <span className="relative z-10">Découvrir le menu</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 glass border border-gold/30 text-white px-8 py-4 rounded-full font-body font-semibold hover:border-gold hover:bg-parchment/10 transition-all hover:scale-105"
            >
              Nous contacter
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <ParallaxSection speed={0.3} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Pourquoi Plan B ?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">
              Une expérience culinaire simple et authentique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'Produits frais',
                description: 'Des ingrédients sélectionnés avec soin pour une qualité irréprochable',
              },
              {
                icon: Clock,
                title: 'Service rapide',
                description: 'Préparation rapide pour satisfaire votre faim en un temps record',
              },
              {
                icon: MapPin,
                title: 'Au cœur de la ville',
                description: 'Un emplacement idéal pour une pause déjeuner ou un dîner entre amis',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl glass border border-gold/30 hover:border-gold/50 hover:glow-gold transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-dark/0 via-gold/10 to-red-dark/0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-red-dark/20 rounded-full mb-4 group-hover:bg-red-dark/30 transition-all"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-red-dark" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70 font-body">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <Section 
        title="Ce que disent nos clients"
        subtitle="Découvrez les avis de nos clients satisfaits"
        className=""
      >
        <Testimonials />
      </Section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-dark/20 via-gold/10 to-red-dark/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,23,18,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Prêt à découvrir nos saveurs ?
            </h2>
            <p className="text-xl mb-8 text-white/80 font-body">
              Venez nous rendre visite ou consultez notre menu en ligne
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 glass border border-gold/50 text-white px-8 py-4 rounded-full font-display font-bold hover:bg-parchment/20 hover:border-gold hover:glow-gold transition-all hover:scale-110"
            >
              Voir le menu complet
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

