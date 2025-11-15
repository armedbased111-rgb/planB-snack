import { motion } from 'framer-motion'
import GalleryGrid from '../components/Gallery'
import Section from '../components/ui/Section'

const Gallery = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Galerie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80"
          >
            Découvrez nos créations
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <Section className="py-20">
        <GalleryGrid />
      </Section>
    </div>
  )
}

export default Gallery

