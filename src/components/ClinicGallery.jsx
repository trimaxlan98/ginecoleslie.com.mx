import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Todas', 'Recepción', 'Consultorio', 'Exploración y ultrasonido'];

const images = [
  { src: '/consultorio/sala-de-espera.webp', category: 'Recepción', alt: 'Sala de espera con sillones, obra de arte y pantalla informativa', title: 'Sala de espera' },
  { src: '/consultorio/consultorio-escritorio-1.webp', category: 'Consultorio', alt: 'Escritorio de consulta con sillas para las pacientes y repisas iluminadas', title: 'Área de consulta' },
  { src: '/consultorio/consultorio-escritorio-2.webp', category: 'Consultorio', alt: 'Vista lateral del escritorio de consulta de la doctora', title: 'Escritorio de la doctora' },
  { src: '/consultorio/exploracion-ultrasonido-1.webp', category: 'Exploración y ultrasonido', alt: 'Sala de exploración con camilla y equipo de ultrasonido', title: 'Sala de exploración' },
  { src: '/consultorio/exploracion-ultrasonido-2.webp', category: 'Exploración y ultrasonido', alt: 'Camilla de exploración y ultrasonido desde otro ángulo', title: 'Ultrasonido' },
  { src: '/consultorio/sala-exploracion-camilla.webp', category: 'Exploración y ultrasonido', alt: 'Camilla de exploración con pantalla de ultrasonido al fondo', title: 'Camilla de exploración' },
  { src: '/consultorio/sala-exploracion-pantalla.webp', category: 'Exploración y ultrasonido', alt: 'Pantalla de ultrasonido para que la paciente vea el estudio', title: 'Pantalla de ultrasonido' },
];

const ClinicGallery = () => {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState('Todas');
  const [selected, setSelected] = useState(null); // índice dentro de filteredImages
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  const filteredImages = filter === 'Todas' ? images : images.filter((img) => img.category === filter);
  const current = selected !== null ? filteredImages[selected] : null;

  const close = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus();
  }, []);
  const go = useCallback(
    (dir) => setSelected((i) => (i === null ? i : (i + dir + filteredImages.length) % filteredImages.length)),
    [filteredImages.length]
  );

  useEffect(() => {
    if (selected === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, close, go]);

  const open = (index, el) => {
    triggerRef.current = el;
    setSelected(index);
  };

  const fade = reduce ? { duration: 0 } : { duration: 0.2, ease: [0.23, 1, 0.32, 1] };

  return (
    <section id="galeria" className="py-20 bg-white" aria-labelledby="galeria-titulo">
      <div className="container mx-auto px-4">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="galeria-titulo" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            NUESTRAS INSTALACIONES
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Un espacio cálido, privado y equipado con ultrasonido para que te sientas en confianza desde que llegas.
          </p>

          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar fotos del consultorio">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 ${
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

        <motion.ul layout={!reduce} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.li
                layout={!reduce}
                initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
                transition={fade}
                key={img.src}
              >
                <button
                  type="button"
                  onClick={(e) => open(index, e.currentTarget)}
                  aria-label={`Ampliar foto: ${img.title}`}
                  className="relative block w-full aspect-[3/4] rounded-xl overflow-hidden group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width="960"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-8 text-left text-sm font-medium text-white">
                    {img.title}
                  </span>
                  <span className="absolute inset-0 bg-pastel-pink-primary/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center" aria-hidden="true">
                    <Maximize2 className="text-white w-8 h-8" />
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Galería del consultorio: ${current.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Cerrar galería"
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              onClick={close}
            >
              <X size={32} />
            </button>
            {filteredImages.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Foto anterior"
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white p-2 bg-black/30 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  type="button"
                  aria-label="Foto siguiente"
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white p-2 bg-black/30 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white pointer-events-none">
              <p className="text-lg font-medium">{current.title}</p>
              <p className="text-sm text-gray-300">
                {current.category} · {selected + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicGallery;
