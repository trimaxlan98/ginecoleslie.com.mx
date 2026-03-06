import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Control Prenatal',
      description: 'Seguimiento completo del embarazo con monitoreo constante de la salud materna y fetal para un desarrollo óptimo.',
      image: 'https://images.unsplash.com/photo-1687466855438-782e0ef9fea5',
      href: '/prenatal-care',
    },
    {
      title: 'Atención del Parto',
      description: 'Acompañamiento profesional durante el parto vaginal, garantizando seguridad, respeto y bienestar integral.',
      image: 'https://images.unsplash.com/photo-1543594722-b309814dad6a',
      href: '/birth',
    },
    {
      title: 'Cesárea Segura',
      description: 'Procedimiento quirúrgico realizado con la más alta tecnología, cuidado especializado y recuperación asistida.',
      image: 'https://images.unsplash.com/photo-1556107136-7fdcc475b472',
      href: '/cesarean',
    },
    {
      title: 'Ginecología Preventiva',
      description: 'Exámenes de rutina, Papanicolaou, mastografías y detección temprana para el cuidado de tu salud.',
      image: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3',
      href: '/preventive-gynecology',
    },
    {
      title: 'Colposcopía',
      description: 'Estudio especializado y detallado del cuello uterino para un diagnóstico preciso y prevención oportuna.',
      image: 'https://images.unsplash.com/photo-1580281657702-257584239a55',
      href: '/colposcopy',
    },
    {
      title: 'Salud Integral de la Mujer',
      description: 'Atención médica completa en todas las etapas de la vida, desde la adolescencia hasta la menopausia.',
      image: 'https://images.unsplash.com/photo-1694011224702-4f9c680378c5',
      href: '/womens-health',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-pastel-pink-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Especialidades Médicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atención médica especializada en ginecología y obstetricia con los más altos estándares de calidad y calidez humana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;