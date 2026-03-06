import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María Fernández',
      treatment: 'Control Prenatal',
      text: 'La Dra. Leslie es una profesional increíble. Llevó todo mi embarazo con muchísima dedicación y me hizo sentir segura en cada consulta.',
      rating: 5,
    },
    {
      name: 'Ana Gómez',
      treatment: 'Ginecología Preventiva',
      text: 'Excelente trato, muy humana y explica todo a la perfección. Las instalaciones están impecables.',
      rating: 5,
    },
    {
      name: 'Laura Sánchez',
      treatment: 'Atención de Parto',
      text: 'Gracias a ella tuve la mejor experiencia en mi parto. Su tranquilidad y profesionalismo me dieron muchísima confianza.',
      rating: 5,
    },
    {
      name: 'Diana Reyes',
      treatment: 'Colposcopía',
      text: 'Iba muy nerviosa, pero la doctora fue súper delicada y me explicó paso a paso el procedimiento.',
      rating: 5,
    },
    {
      name: 'Sofía Martínez',
      treatment: 'Cirugía Ginecológica',
      text: 'Mi recuperación fue muy rápida gracias a su excelente trabajo en quirófano. Totalmente recomendada.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(158deg, #FFF5F8 0%, #FAF0F5 50%, #FFF8FC 100%)' }}
    >
      {/* Organic background blobs — make glass effect visible */}
      <motion.div
        animate={{
          borderRadius: [
            '60% 40% 55% 45% / 50% 60% 40% 50%',
            '42% 58% 44% 56% / 60% 42% 58% 40%',
            '60% 40% 55% 45% / 50% 60% 40% 50%',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 right-16 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #FFB6D9, transparent 70%)',
          filter: 'blur(36px)',
          opacity: 0.32,
        }}
      />
      <motion.div
        animate={{
          borderRadius: [
            '45% 55% 64% 36% / 52% 44% 56% 48%',
            '64% 36% 45% 55% / 38% 62% 48% 52%',
            '45% 55% 64% 36% / 52% 44% 56% 48%',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-10 left-12 w-56 h-56 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #E0B0B0, transparent 70%)',
          filter: 'blur(30px)',
          opacity: 0.26,
        }}
      />
      {/* Center bloom accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,182,217,0.14), transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="mb-3"
            style={{
              color: '#C9857B',
              letterSpacing: '0.22em',
              fontSize: '11px',
              textTransform: 'uppercase',
              fontWeight: '500',
            }}
          >
            Voces de pacientes
          </p>
          <h2
            className="font-bold text-slate-800 mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '0.04em' }}
          >
            Experiencias de Pacientes
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Lo que dicen nuestras pacientes sobre su atención y cuidado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div
                className="glass-card h-full relative overflow-hidden group cursor-default"
                style={{ borderRadius: '1.75rem 0.75rem 1.75rem 0.75rem' }}
              >
                {/* Large Quote watermark */}
                <Quote
                  className="absolute top-4 right-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ color: '#FFB6D9', width: '52px', height: '52px', opacity: 0.45 }}
                />

                {/* Petal accent corner */}
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 pointer-events-none opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse, #FFB6D9, transparent 70%)',
                    borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
                    filter: 'blur(12px)',
                  }}
                />

                <div className="relative z-10 p-7">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        style={{ color: '#E0B0B0', fill: '#E0B0B0' }}
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p
                    className="text-slate-600 italic mb-7 leading-relaxed line-clamp-4"
                    style={{ fontSize: '0.94rem' }}
                  >
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* Organic avatar placeholder */}
                    <div
                      className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-white text-xs font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #E0B0B0, #C9857B)',
                        borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
                      }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-slate-700"
                        style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}
                      >
                        {item.name}
                      </h4>
                      <span
                        className="text-xs font-medium"
                        style={{ color: '#C9857B', letterSpacing: '0.05em' }}
                      >
                        {item.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
