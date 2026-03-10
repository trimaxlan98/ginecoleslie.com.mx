import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

/* ────────────────────────────────────────────────────────────
   PALETA EXCLUSIVA DE MARCA
   #6e506f  ciruela profundo — contornos, títulos, detalles
   #d09bad  mauve rosa      — acentos, gradientes
   #e9c3d2  mauve claro     — blobs, fondos suaves
   #f4edec  crema rosada    — fondo sección
   ──────────────────────────────────────────────────────────── */
const P  = '#6e506f';  // ciruela
const M  = '#d09bad';  // mauve
const ML = '#e9c3d2';  // mauve claro
// #f4edec — fondo, usado en style directo

/* ────────────────────────────────────────────────────────────
   SVG ICONS — trazo con paleta de marca
   Gradiente: #e9c3d2 → #d09bad → #6e506f
   ──────────────────────────────────────────────────────────── */

const IconGradDefs = ({ id }) => (
  <defs>
    <linearGradient id={`ig-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stopColor={ML} />
      <stop offset="48%"  stopColor={M}  />
      <stop offset="100%" stopColor={P}  />
    </linearGradient>
  </defs>
);

const PrenatalIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="prenatal" />
    <circle cx="20" cy="23" r="12"  stroke="url(#ig-prenatal)" strokeWidth="1.6" fill="none" />
    <circle cx="20" cy="23" r="5.5" stroke="url(#ig-prenatal)" strokeWidth="1.2" fill="none" opacity="0.6" />
    <circle cx="20" cy="6.5" r="2"   fill="url(#ig-prenatal)" />
    <circle cx="13" cy="9"   r="1.2" fill="url(#ig-prenatal)" opacity="0.5" />
    <circle cx="27" cy="9"   r="1.2" fill="url(#ig-prenatal)" opacity="0.5" />
  </svg>
);

const PartoIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="parto" />
    <path
      d="M20 34 C20 34 5 23 5 14 C5 9 8.5 6 12.5 6 C15.5 6 18 7.5 20 10.5 C22 7.5 24.5 6 27.5 6 C31.5 6 35 9 35 14 C35 23 20 34 20 34Z"
      stroke="url(#ig-parto)" strokeWidth="1.6" fill="none" strokeLinejoin="round"
    />
    <path
      d="M20 17 L21.3 19.8 L24.4 20 L22 22.2 L22.7 25.2 L20 23.6 L17.3 25.2 L18 22.2 L15.6 20 L18.7 19.8Z"
      fill="url(#ig-parto)" opacity="0.75"
    />
  </svg>
);

const CesareaIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="cesarean" />
    <path
      d="M20 3 L35 9 L35 22 C35 30.5 20 37 20 37 C20 37 5 30.5 5 22 L5 9Z"
      stroke="url(#ig-cesarean)" strokeWidth="1.6" fill="none" strokeLinejoin="round"
    />
    <line x1="20" y1="13" x2="20" y2="27" stroke="url(#ig-cesarean)" strokeWidth="2"   strokeLinecap="round" />
    <line x1="13" y1="20" x2="27" y2="20" stroke="url(#ig-cesarean)" strokeWidth="2"   strokeLinecap="round" />
  </svg>
);

const PreventivaIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="preventiva" />
    <circle cx="17" cy="17" r="10.5" stroke="url(#ig-preventiva)" strokeWidth="1.6" fill="none" />
    <line x1="24.5" y1="24.5" x2="35" y2="35" stroke="url(#ig-preventiva)" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 17 L15.5 21 L22.5 13.5"
      stroke="url(#ig-preventiva)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const ColposcopiaIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="colposcopy" />
    <path
      d="M3 20 C3 20 10 8 20 8 C30 8 37 20 37 20 C37 20 30 32 20 32 C10 32 3 20 3 20Z"
      stroke="url(#ig-colposcopy)" strokeWidth="1.6" fill="none"
    />
    <circle cx="20" cy="20" r="7" stroke="url(#ig-colposcopy)" strokeWidth="1.4" fill="none" />
    <circle cx="20" cy="20" r="3" fill="url(#ig-colposcopy)" opacity="0.65" />
    <circle cx="22.5" cy="17.5" r="1.1" fill="rgba(255,255,255,0.7)" />
  </svg>
);

const SaludIcon = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <IconGradDefs id="salud" />
    <circle cx="20" cy="24" r="4.5" stroke="url(#ig-salud)" strokeWidth="1.4" fill="none" />
    <path d="M20 19.5 C17.5 13.5 17.5 7.5 20 5.5 C22.5 7.5 22.5 13.5 20 19.5Z"
          stroke="url(#ig-salud)" strokeWidth="1.3" fill="none" />
    <path d="M15.9 21.5 C9.5 20.5 5 15 5 12 C8 9.5 13.5 12.5 16 19"
          stroke="url(#ig-salud)" strokeWidth="1.3" fill="none" />
    <path d="M24.1 21.5 C30.5 20.5 35 15 35 12 C32 9.5 26.5 12.5 24 19"
          stroke="url(#ig-salud)" strokeWidth="1.3" fill="none" />
    <line x1="20" y1="28.5" x2="20" y2="36" stroke="url(#ig-salud)" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M16.5 33 Q20 30.5 23.5 33" stroke="url(#ig-salud)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   SERVICE DATA
   ──────────────────────────────────────────────────────────── */
const services = [
  {
    title: 'Control Prenatal',
    description: 'Seguimiento completo del embarazo con monitoreo constante de la salud materna y fetal para un desarrollo óptimo.',
    image: 'https://images.unsplash.com/photo-1687466855438-782e0ef9fea5',
    href: '/prenatal-care',
    icon: <PrenatalIcon />,
  },
  {
    title: 'Atención del Parto',
    description: 'Acompañamiento profesional durante el parto vaginal, garantizando seguridad, respeto y bienestar integral.',
    image: 'https://images.unsplash.com/photo-1543594722-b309814dad6a',
    href: '/birth',
    icon: <PartoIcon />,
  },
  {
    title: 'Cesárea Segura',
    description: 'Procedimiento quirúrgico realizado con la más alta tecnología, cuidado especializado y recuperación asistida.',
    image: 'https://images.unsplash.com/photo-1556107136-7fdcc475b472',
    href: '/cesarean',
    icon: <CesareaIcon />,
  },
  {
    title: 'Ginecología Preventiva',
    description: 'Exámenes de rutina, Papanicolaou, mastografías y detección temprana para el cuidado de tu salud.',
    image: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3',
    href: '/preventive-gynecology',
    icon: <PreventivaIcon />,
  },
  {
    title: 'Colposcopía',
    description: 'Estudio especializado y detallado del cuello uterino para un diagnóstico preciso y prevención oportuna.',
    image: 'https://images.unsplash.com/photo-1580281657702-257584239a55',
    href: '/colposcopy',
    icon: <ColposcopiaIcon />,
  },
  {
    title: 'Salud Integral de la Mujer',
    description: 'Atención médica completa en todas las etapas de la vida, desde la adolescencia hasta la menopausia.',
    image: 'https://images.unsplash.com/photo-1694011224702-4f9c680378c5',
    href: '/womens-health',
    icon: <SaludIcon />,
  },
];

/* ────────────────────────────────────────────────────────────
   SECCIÓN PRINCIPAL
   ──────────────────────────────────────────────────────────── */
const Services = () => {
  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #FEFAFA 0%, #f4edec 45%, #faf0f5 100%)',
      }}
    >
      {/* ── Blobs atmósferico — tonos suaves de marca ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-5%', right: '-4%',
          width: '40vw', height: '40vw',
          background: `radial-gradient(circle, ${ML} 0%, transparent 65%)`,
          filter: 'blur(55px)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-5%', left: '-4%',
          width: '34vw', height: '34vw',
          background: `radial-gradient(circle, ${ML} 0%, transparent 65%)`,
          filter: 'blur(48px)',
          opacity: 0.4,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '35%', right: '10%',
          width: '22vw', height: '22vw',
          background: `radial-gradient(circle, ${M}40 0%, transparent 65%)`,
          filter: 'blur(40px)',
          opacity: 0.35,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Eyebrow con líneas flanqueantes */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{
              height: '1px', width: '44px',
              background: `linear-gradient(90deg, transparent, ${M})`,
            }} />
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: M,
            }}>
              Lo que ofrezco
            </p>
            <div style={{
              height: '1px', width: '44px',
              background: `linear-gradient(90deg, ${M}, transparent)`,
            }} />
          </div>

          {/* Título principal — Playfair + sweep de marca */}
          <h2
            className="plat-text-sweep mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '0.025em',
            }}
          >
            Especialidades Médicas
          </h2>

          {/* Joya divisora */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{
              height: '1px', width: '56px',
              background: `linear-gradient(90deg, transparent, ${ML})`,
            }} />
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: `linear-gradient(135deg, ${M}, ${P})`,
              boxShadow: `0 0 8px ${M}90`,
            }} />
            <div style={{
              height: '1px', width: '56px',
              background: `linear-gradient(90deg, ${ML}, transparent)`,
            }} />
          </div>

          {/* Subtítulo */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: '1rem',
            color: `${P}99`,
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.78,
          }}>
            Atención médica especializada en ginecología y obstetricia con los más altos
            estándares de calidad y calidez humana.
          </p>
        </motion.div>

        {/* ── Grid de tarjetas ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {/* ── CTA inferior ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5215512345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 orchid-cta btn-bloom"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              padding: '14px 38px',
              borderRadius: '9999px',
            }}
          >
            Agendar Consulta
            <ArrowRight size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
