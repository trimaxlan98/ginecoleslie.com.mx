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
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #FEFAFA 0%, #FFF0F5 40%, #FAF0F2 100%)' }}
    >
      {/* Organic blobs — reveal the glass effect on cards */}
      <div
        className="absolute top-16 right-8 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #FFB6D9, transparent 68%)',
          borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
          filter: 'blur(34px)',
          opacity: 0.28,
        }}
      />
      <div
        className="absolute bottom-12 left-10 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #FFC9E3, transparent 68%)',
          borderRadius: '45% 55% 40% 60% / 55% 45% 65% 35%',
          filter: 'blur(28px)',
          opacity: 0.24,
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
            Lo que ofrezco
          </p>
          <h2
            className="font-bold text-slate-800 mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '0.04em' }}
          >
            Especialidades Médicas
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Atención médica especializada en ginecología y obstetricia con los más altos
            estándares de calidad y calidez humana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
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