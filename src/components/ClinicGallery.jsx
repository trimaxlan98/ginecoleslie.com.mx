import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const ClinicGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('Todas');

  const categories = ['Todas', 'Consultorio', 'Equipamiento'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a', category: 'Consultorio', alt: 'Interior de consultorio moderno' },
    { src: 'https://images.unsplash.com/photo-1565647946321-a146ac24a220', category: 'Equipamiento', alt: 'Equipamiento médico avanzado' },
    { src: 'https://images.unsplash.com/photo-1660220617553-95cb021c0a5e', category: 'Consultorio', alt: 'Sala de revisión' },
    { src: 'https://images.unsplash.com/photo-1580281657702-257584239a55', category: 'Equipamiento', alt: 'Instrumental médico' },
  ];

  const filteredImages = filter === 'Todas' ? images : images.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Espacios diseñados para tu comodidad y equipados con tecnología de vanguardia.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === cat 
                    ? 'bg-pastel-pink-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-pastel-pink-tertiary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-pastel-pink-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicGallery;