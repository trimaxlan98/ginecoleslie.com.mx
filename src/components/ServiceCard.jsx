import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────
   ServiceCard — Paleta exclusiva de marca
   #6e506f  ciruela   · #d09bad  mauve · #e9c3d2  claro · #f4edec crema

   Anatomía (440px):
   ┌──────────────────────────────┐
   │  barra acento animada  (3px) │  ← brand-card-accent
   │  [imagen  ─ 42%]             │    con overlay mauve suave
   ├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤  ← plat-divider
   │  [contenido ─ 58%]           │
   │   icono · número · título    │
   │   descripción · CTA          │
   └──────────────────────────────┘
   ──────────────────────────────────────────────────────────── */

const P  = '#6e506f';
const M  = '#d09bad';
const ML = '#e9c3d2';
const BG = '#f4edec';

const ServiceCard = ({ title, description, image, href, index, icon }) => {
  const cardNum = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -5 }}
    >
      <Link to={href} className="block group" aria-label={`Ver servicio: ${title}`}>
        <div className="brand-card" style={{ height: '440px', display: 'flex', flexDirection: 'column' }}>

          {/* ── Barra acento animada ── */}
          <div className="brand-card-accent flex-none" />

          {/* ── ZONA IMAGEN (42%) ── */}
          <div
            className="relative flex-none overflow-hidden"
            style={{ height: '42%' }}
          >
            <img
              src={`${image}?w=640&q=78`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ filter: 'brightness(0.75) saturate(0.9)' }}
            />

            {/* Overlay mauve de marca — cálido y cohesivo */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(185deg, ${P}50 0%, ${P}C0 100%)`,
              }}
            />

            {/* Número de tarjeta — Playfair italic */}
            <span
              className="absolute top-4 right-5 select-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.06em',
                lineHeight: 1,
              }}
            >
              {cardNum}
            </span>

            {/* Línea divisora de marca al pie de la imagen */}
            <div
              className="absolute bottom-0 left-0 right-0 plat-divider opacity-60 group-hover:opacity-100 transition-opacity duration-400"
            />
          </div>

          {/* ── ZONA CONTENIDO (58%) ── */}
          <div
            className="flex flex-col flex-1 p-6"
            style={{ background: '#ffffff' }}
          >
            {/* Icono — paleta de marca */}
            <div
              className="plat-icon mb-3.5 flex-none"
              style={{ width: 38, height: 38 }}
            >
              {icon}
            </div>

            {/* Título — Playfair Display, ciruela */}
            <h3
              className="plat-card-title mb-2.5 leading-snug flex-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              {title}
            </h3>

            {/* Descripción — Open Sans, mauve medio */}
            <p
              className="flex-1 leading-relaxed line-clamp-3"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '0.82rem',
                color: `${P}99`,
                lineHeight: 1.72,
              }}
            >
              {description}
            </p>

            {/* CTA row */}
            <div
              className="flex items-center gap-2 pt-4 mt-2 flex-none"
              style={{ borderTop: `1px solid ${ML}80` }}
            >
              <span
                className="transition-all duration-300 ease-out group-hover:tracking-widest"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: M,
                }}
              >
                Descubrir
              </span>
              <ArrowRight
                size={11}
                className="transition-transform duration-300 ease-out group-hover:translate-x-2 flex-shrink-0"
                style={{ color: P }}
              />
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
