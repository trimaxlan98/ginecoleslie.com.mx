import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import heroImage from '@/assets/Leslie_Hero.jpeg';

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
      className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{ background: 'linear-gradient(145deg, #FEFAFA 0%, #FAF0F5 45%, #F5EBF2 100%)' }}
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
          background: 'radial-gradient(ellipse at 40% 40%, #D09BAD 0%, #FFE0F0 50%, transparent 78%)',
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
          background: 'radial-gradient(ellipse at 60% 60%, #E9C3D2 0%, #FFE8F2 55%, transparent 78%)',
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
            stroke="#6E506F"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* ── Main grid ── */}
      <div className="container mx-auto px-4 relative z-10 py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Tag line / Doctor Name */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-4 mb-4 lg:mb-5"
            >
              <div
                className="h-px w-8 hidden sm:block"
                style={{ background: 'linear-gradient(to right, transparent, #D09BAD)' }}
              />
              <span
                style={{
                  color: '#6E506F',
                  letterSpacing: '0.12em',
                  fontSize: 'clamp(11px, 1.4vw, 14px)',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                }}
              >
                Dra. Leslie Alejandra Ordaz Huerta
              </span>
              <div
                className="h-px w-8 hidden sm:block"
                style={{ background: 'linear-gradient(to left, transparent, #D09BAD)' }}
              />
            </motion.div>

            {/* Specialty as H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-slate-800 mb-4 lg:mb-5 leading-[1.1] sm:leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.2rem)', letterSpacing: '-0.02em' }}
            >
              Ginecología <br className="hidden sm:block" />
              <span style={{ color: '#6E506F' }}>& Obstetricia</span>
            </motion.h1>

            {/* Organic divider */}
            <motion.div
              variants={itemVariants}
              className="my-4 lg:my-6 mx-auto lg:mx-0"
              style={{ width: '70%', maxWidth: '340px' }}
            >
              <svg height="6" viewBox="0 0 320 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 4 Q 40 1, 80 4 Q 120 7, 160 4 Q 200 1, 240 4 Q 280 7, 320 4"
                  stroke="url(#dividerGrad)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="dividerGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#D09BAD" stopOpacity="0" />
                    <stop offset="30%" stopColor="#D09BAD" stopOpacity="1" />
                    <stop offset="70%" stopColor="#D09BAD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#D09BAD" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', lineHeight: '1.65' }}
            >
              Atención médica integral y especializada para la mujer, con formación en la 
              Universidad Veracruzana y amplia experiencia clínica.
            </motion.p>

            {/* CTA section with integrated Promo */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start space-y-8 lg:space-y-10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-4 sm:px-0">
                <motion.button
                  onClick={handleAppointment}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(110, 80, 111, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  animate={{ 
                    boxShadow: ['0 6px 15px rgba(110, 80, 111, 0.2)', '0 6px 30px rgba(110, 80, 111, 0.35)', '0 6px 15px rgba(110, 80, 111, 0.2)']
                  }}
                  transition={{ 
                    type: 'spring', stiffness: 380, damping: 12,
                    boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                  }}
                  className="btn-bloom w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 text-white font-bold rounded-full text-base lg:text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #D09BAD 0%, #6E506F 60%, #5A3D6B 100%)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <Calendar size={22} strokeWidth={2} />
                  Agendar Cita Ahora
                </motion.button>

                <a
                  href="/#sobre"
                  className="text-base font-semibold transition-colors flex items-center gap-2 group"
                  style={{ color: '#6E506F', letterSpacing: '0.04em' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Conocer más <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Enhanced Commercial Promo Badge */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="relative group w-full max-w-sm lg:max-w-md px-4 sm:px-0"
              >
                <div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#D09BAD] via-[#C9857B] to-[#6E506F] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
                />
                <div
                  className="relative px-6 py-5 bg-white/95 backdrop-blur-sm rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left"
                  style={{
                    border: '1px solid rgba(208,155,173,0.3)',
                    boxShadow: '0 10px 30px rgba(110,80,111,0.08)',
                  }}
                >
                  <p
                    className="font-bold text-slate-400 uppercase tracking-widest mb-1.5"
                    style={{ fontSize: '11px' }}
                  >
                    ¡Si es tu primera vez con nosotros!
                  </p>
                  <p
                    className="font-bold leading-tight text-[#5A4060]"
                    style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}
                  >
                    Al agendar tu <span className="text-[#D09BAD]">Primer Consulta</span>
                  </p>
                  <p
                    className="font-bold leading-tight text-[#5A4060] mt-1.5"
                    style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}
                  >
                    La segunda es <span className="px-3 py-1 bg-[#FEF3F2] text-[#C9857B] font-black rounded-lg border border-[#FADBD8] inline-block shadow-md text-2xl sm:text-3xl ml-1">Gratis</span> ✨
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-none mb-4 lg:mb-0"
          >
            {/* Organic glow halo */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse at 50% 55%, #D09BAD, transparent 68%)',
                filter: 'blur(32px)',
                opacity: 0.5,
                transform: 'translate(12px, 12px) scale(1.05)',
                borderRadius: '58% 42% 48% 52% / 54% 48% 52% 46%',
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
              <img
                src={heroImage}
                alt="Dra. Leslie Alejandra Ordaz Huerta - Ginecología"
                className="w-full object-cover object-top"
                style={{ height: 'clamp(260px, 45vw, 500px)' }}
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="absolute -bottom-2 -left-2 z-20 flex items-center gap-2.5 px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-xl border"
              style={{
                borderColor: 'rgba(224,176,176,0.35)',
                boxShadow: '0 8px 25px rgba(110,80,111,0.15)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base"
                style={{ background: 'linear-gradient(135deg, #D09BAD, #6E506F)' }}
              >
                ✦
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-700 leading-tight uppercase tracking-wide">Amplia</p>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">experiencia</p>
              </div>
            </motion.div>
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
