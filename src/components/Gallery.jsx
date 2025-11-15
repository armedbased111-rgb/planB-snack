import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Images simulées - à remplacer par de vraies images
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800', alt: 'Pizza Margherita' },
    { id: 2, src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800', alt: 'Pizza au fromage' },
    { id: 3, src: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800', alt: 'Burger' },
    { id: 4, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', alt: 'Pizza végétarienne' },
    { id: 5, src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', alt: 'Burger gourmet' },
    { id: 6, src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800', alt: 'Snacks variés' },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default GalleryGrid

