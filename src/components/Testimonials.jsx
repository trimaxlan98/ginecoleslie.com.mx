import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="testimonios" className="py-20 bg-gradient-to-br from-pastel-pink-light/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experiencias de Pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lo que dicen nuestras pacientes sobre su atención y cuidado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-pastel-pink-secondary hover:shadow-xl hover:border-pastel-pink-primary transition-all duration-300 relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 text-pastel-pink-tertiary w-16 h-16 opacity-50 group-hover:scale-110 transition-transform" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="text-pastel-pink-primary fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 line-clamp-4">
                    "{item.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <span className="text-sm text-pastel-pink-primary font-medium">{item.treatment}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;