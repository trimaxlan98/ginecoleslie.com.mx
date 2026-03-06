import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

/* Flower of Life watermark geometry */
const FOL_R = 38;
const FOL_CX = 120;
const FOL_CY = 120;
const folCircles = [
  { x: FOL_CX,                    y: FOL_CY },
  { x: FOL_CX + FOL_R,            y: FOL_CY },
  { x: FOL_CX + FOL_R * 0.5,     y: FOL_CY - FOL_R * 0.866 },
  { x: FOL_CX - FOL_R * 0.5,     y: FOL_CY - FOL_R * 0.866 },
  { x: FOL_CX - FOL_R,            y: FOL_CY },
  { x: FOL_CX - FOL_R * 0.5,     y: FOL_CY + FOL_R * 0.866 },
  { x: FOL_CX + FOL_R * 0.5,     y: FOL_CY + FOL_R * 0.866 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
};

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAppointment = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contacto-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById('contacto-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(145deg, #FEFAFA 0%, #FFF5F8 45%, #FAF0F2 100%)' }}
    >
      {/* ── Organic animated background blobs ── */}
      <motion.div
        animate={{
          borderRadius: [
            '62% 38% 46% 54% / 60% 44% 56% 40%',
            '42% 58% 56% 44% / 50% 66% 34% 50%',
            '62% 38% 46% 54% / 60% 44% 56% 40%',
          ],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[12%] -right-[6%] w-[520px] h-[520px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, #FFB6D9 0%, #FFE0F0 50%, transparent 78%)',
          filter: 'blur(52px)',
          opacity: 0.42,
        }}
      />
      <motion.div
        animate={{
          borderRadius: [
            '45% 55% 65% 35% / 55% 45% 55% 45%',
            '65% 35% 45% 55% / 35% 65% 45% 55%',
            '45% 55% 65% 35% / 55% 45% 55% 45%',
          ],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-[12%] -left-[6%] w-[420px] h-[420px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 60%, #FFC9E3 0%, #FFE8F2 55%, transparent 78%)',
          filter: 'blur(46px)',
          opacity: 0.34,
        }}
      />
      {/* Tertiary accent — center top */}
      <div
        className="absolute top-[5%] left-[30%] w-[280px] h-[180px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(224,176,176,0.25), transparent 70%)',
          filter: 'blur(30px)',
          borderRadius: '55% 45% 40% 60% / 45% 55% 60% 40%',
        }}
      />

      {/* ── Flower of Life watermark ── */}
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        className="absolute top-12 right-6 pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        {folCircles.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={FOL_R}
            stroke="#C9857B"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* ── Main grid ── */}
      <div className="container mx-auto px-4 relative z-10 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Tag line */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-7"
            >
              <div
                className="h-px w-10"
                style={{ background: 'linear-gradient(to right, transparent, #E0B0B0)' }}
              />
              <span
                style={{
                  color: '#C9857B',
                  letterSpacing: '0.22em',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}
              >
                Especialista Médica
              </span>
              <div
                className="h-px w-10 lg:hidden"
                style={{ background: 'linear-gradient(to left, transparent, #E0B0B0)' }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-slate-800 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', letterSpacing: '0.025em' }}
            >
              Dra. Leslie Alejandra
              <br />
              <span style={{ color: '#C9857B' }}>Ordaz Huerta</span>
            </motion.h1>

            {/* Organic divider */}
            <motion.div
              variants={itemVariants}
              className="my-6 mx-auto lg:mx-0"
              style={{ width: '72%', maxWidth: '320px' }}
            >
              <svg height="8" viewBox="0 0 320 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 4 Q 40 1, 80 4 Q 120 7, 160 4 Q 200 1, 240 4 Q 280 7, 320 4"
                  stroke="url(#dividerGrad)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="dividerGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFB6D9" stopOpacity="0" />
                    <stop offset="30%" stopColor="#E0B0B0" stopOpacity="1" />
                    <stop offset="70%" stopColor="#FFB6D9" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFB6D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Specialty */}
            <motion.h2
              variants={itemVariants}
              className="font-light text-slate-600 mb-6"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)', letterSpacing: '0.06em' }}
            >
              Ginecología y Obstetricia
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: '1.75' }}
            >
              Atención médica integral y especializada para la mujer, con formación en la
              Universidad Veracruzana y amplia experiencia clínica.{' '}
              <em style={{ color: '#C9857B', fontStyle: 'normal' }}>Tu salud en manos expertas.</em>
            </motion.p>

            {/* CTA button */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                onClick={handleAppointment}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 380, damping: 12 }}
                className="btn-bloom w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 text-white font-medium rounded-full text-base"
                style={{
                  background: 'linear-gradient(135deg, #E0B0B0 0%, #C9857B 60%, #d4706a 100%)',
                  boxShadow: '0 6px 28px rgba(201, 133, 123, 0.38)',
                  letterSpacing: '0.04em',
                }}
              >
                <Calendar size={20} strokeWidth={1.8} />
                Agendar Cita
              </motion.button>

              <a
                href="/#sobre"
                className="text-sm font-medium transition-colors"
                style={{ color: '#C9857B', letterSpacing: '0.06em' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conocer más →
              </a>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative mx-auto max-w-md lg:max-w-none"
          >
            {/* Organic glow halo */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse at 50% 55%, #FFB6D9, transparent 68%)',
                filter: 'blur(32px)',
                opacity: 0.55,
                transform: 'translate(16px, 16px) scale(1.05)',
                borderRadius: '58% 42% 48% 52% / 54% 48% 52% 46%',
              }}
            />
            {/* Secondary decorative ring */}
            <div
              className="absolute inset-0 -z-10 border pointer-events-none"
              style={{
                borderColor: 'rgba(224, 176, 176, 0.3)',
                borderRadius: '50% 50% 46% 54% / 52% 46% 54% 48%',
                transform: 'translate(-14px, -14px) scale(1.06)',
              }}
            />

            {/* Photo frame — organic shape */}
            <div
              className="relative overflow-hidden shadow-2xl bg-white border-2"
              style={{
                borderRadius: '58% 42% 48% 52% / 54% 48% 52% 46%',
                borderColor: 'rgba(255,255,255,0.9)',
              }}
            >
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(201,133,123,0.22) 100%)',
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                alt="Dra. Leslie Alejandra Ordaz Huerta - Ginecología"
                className="w-full object-cover object-top"
                style={{ height: 'clamp(360px, 50vw, 580px)' }}
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.1, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-5 -left-4 z-20 flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-2xl border"
              style={{
                borderColor: 'rgba(224,176,176,0.4)',
                boxShadow: '0 8px 24px rgba(201,133,123,0.18)',
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #E0B0B0, #C9857B)' }}
              >
                10+
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-700" style={{ letterSpacing: '0.04em' }}>
                  Años de
                </p>
                <p className="text-xs text-slate-400">Experiencia Clínica</p>
              </div>
            </motion.div>

            {/* Petal accent — top right of image */}
            <motion.div
              animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-14 h-14 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, #FFB6D9, #FFC9E3)',
                borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
                opacity: 0.7,
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* ── Organic section divider (wave) ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '64px' }}
        >
          <path
            d="M0 32 Q 180 62, 360 38 Q 540 14, 720 36 Q 900 58, 1080 34 Q 1260 10, 1440 40 L1440 64 L0 64 Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
