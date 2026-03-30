import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Shield } from 'lucide-react';

const AboutDoctor = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Experiencia Clínica',
      description: 'Años de experiencia brindando atención médica de calidad',
    },
    {
      icon: Users,
      title: 'Personal IMSS',
      description: 'Médico staff del Instituto Mexicano del Seguro Social',
    },
    {
      icon: Shield,
      title: 'Clínicas de Prestigio',
      description: 'Atención privada en las mejores clínicas de México',
    },
    {
      icon: Heart,
      title: 'Cuidado Integral',
      description: 'Enfoque holístico en la salud de la mujer',
    },
  ];

  return (
    <section
      id="sobre"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FEFAFA 0%, #FFF5F8 55%, #FAF0F2 100%)' }}
    >
      {/* Organic background accent */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,182,217,0.35), transparent 68%)',
          borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(224,176,176,0.28), transparent 68%)',
          borderRadius: '45% 55% 40% 60% / 55% 45% 65% 35%',
          filter: 'blur(32px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image — organic liquid frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="relative"
          >
            {/* Glow behind frame */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse at 45% 50%, #FFB6D9, transparent 65%)',
                filter: 'blur(28px)',
                opacity: 0.5,
                transform: 'translate(18px, 18px) scale(1.08)',
                borderRadius: '56% 44% 50% 50% / 52% 46% 54% 48%',
              }}
            />
            {/* Organic border ring */}
            <div
              className="absolute inset-0 border -z-10"
              style={{
                borderColor: 'rgba(224,176,176,0.35)',
                borderRadius: '48% 52% 56% 44% / 54% 42% 58% 46%',
                transform: 'translate(-16px, -16px) scale(1.07)',
              }}
            />

            {/* Photo — liquid frame */}
            <div
              className="relative overflow-hidden shadow-xl border-2"
              style={{
                borderRadius: '56% 44% 50% 50% / 52% 46% 54% 48%',
                borderColor: 'rgba(255,255,255,0.85)',
              }}
            >
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(201,133,123,0.18) 100%)',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                alt="Dra. Leslie Ordaz Huerta, especialista en ginecología y obstetricia"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <p
              className="mb-4"
              style={{
                color: '#C9857B',
                letterSpacing: '0.22em',
                fontSize: '11px',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}
            >
              Sobre la doctora
            </p>
            <h2
              className="font-bold text-slate-800 mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '0.04em' }}
            >
              Dra. Leslie Ordaz Huerta
            </h2>
            <p className="text-slate-500 mb-5 leading-relaxed" style={{ fontSize: '1.04rem' }}>
              ¿Buscas una consulta donde puedas hablar con total libertad? Mi práctica médica se
              basa en la confianza mutua y el respeto absoluto a tu individualidad. Creo firmemente
              que la ginecología debe ser un territorio libre de prejuicios, donde ninguna pregunta
              sea pequeña y cada inquietud sea validada.
            </p>
            <p className="text-slate-500 mb-9 leading-relaxed" style={{ fontSize: '1.04rem' }}>
              Me especializo en brindar atención integral con un enfoque actualizado, considerando
              el manejo conservador como una herramienta fundamental. Mi objetivo es asegurarme de
              que te vayas de la consulta sintiéndote tranquila, informada y, sobre todo, cuidada.
              Tu bienestar es el centro de mi atención.
            </p>

            {/* Highlights — glass cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card group p-4 cursor-default"
                  style={{ borderRadius: '1.25rem 0.5rem 1.25rem 0.5rem' }}
                >
                  {/* Organic icon container */}
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,182,217,0.4), rgba(224,176,176,0.3))',
                      borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
                    }}
                  >
                    <item.icon size={20} style={{ color: '#C9857B' }} />
                  </div>
                  <h3
                    className="font-semibold text-slate-700 mb-1"
                    style={{ fontSize: '0.88rem', letterSpacing: '0.02em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-snug" style={{ fontSize: '0.78rem' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
