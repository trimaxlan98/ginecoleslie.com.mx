import React from 'react';
import { motion } from 'framer-motion';

/* Paleta de marca — igual que Services.jsx */
const P  = '#6e506f';
const M  = '#d09bad';
const ML = '#e9c3d2';

const SERVICIOS = [
  'Atención de parto vaginal humanizado',
  'Cesárea humanizada',
  'Toma de biopsia cervical y endometrio',
  'Citología cérvico vaginal',
  'Colocación de dispositivo intrauterino e implante subdérmico',
  'Retiro de dispositivo intrauterino e implante subdérmico',
  'Colposcopía',
  'Histerectomía vaginal',
  'Histerectomía abdominal',
  'Colpocleísis',
  'Aspiración manual endouterina',
  'Diagnóstico de endometriosis y tratamiento',
  'Legrado uterino ginecológico diagnóstico y terapéutico',
  'Miomectomía',
  'Terapia de reemplazo hormonal y no hormonal',
  'Tratamiento de condilomas vulvares, vaginales y perianales',
  'Ultrasonido ginecológico',
  'Ultrasonido obstétrico 3D',
  'Ultrasonido transvaginal',
  'Aplicación de vacuna de VPH',
  'Orientación de educación sexual',
];

const PADECIMIENTOS = [
  'Embarazo de bajo y alto riesgo',
  'Control prenatal',
  'Diabetes Gestacional',
  'Estados hipertensivos inducidos por el embarazo',
  'Sangrado uterino anormal',
  'Pólipos',
  'Amenaza de aborto',
  'Amenaza de parto pretérmino',
  'Infección por virus del papiloma humano',
  'Enfermedad pélvica inflamatoria',
  'Infecciones vaginales y de las vías urinarias',
  'Enfermedades de transmisión sexual',
  'Endometriosis',
  'Síndrome de Ovario poliquístico',
  'Perimenopausia',
  'Menopausia',
  'Síndrome Genitourinario de la Menopausia',
  'Padecimientos ginecológicos endócrinos',
  'Osteoporosis',
  'Anticoncepción',
  'Prolapso de órganos pélvicos',
  'Incontinencia urinaria o mixta',
];

const ListItem = ({ text, delay }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex items-start gap-2.5 py-1.5 border-b last:border-b-0"
    style={{ borderColor: `${ML}60` }}
  >
    <span
      className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full"
      style={{ background: `linear-gradient(135deg, ${M}, ${P})` }}
    />
    <span
      style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '0.875rem',
        color: `${P}cc`,
        lineHeight: 1.55,
      }}
    >
      {text}
    </span>
  </motion.li>
);

const Column = ({ label, items, motionDelay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: motionDelay }}
    className="flex flex-col rounded-3xl overflow-hidden"
    style={{
      border: `1px solid ${ML}80`,
      boxShadow: `0 8px 32px rgba(110,80,111,0.07)`,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)',
    }}
  >
    {/* Column header */}
    <div
      className="px-6 py-4 flex items-center gap-3"
      style={{
        background: `linear-gradient(135deg, ${ML}50 0%, rgba(255,255,255,0) 100%)`,
        borderBottom: `1px solid ${ML}70`,
      }}
    >
      <div
        className="w-1 h-6 rounded-full"
        style={{ background: `linear-gradient(180deg, ${M}, ${P})` }}
      />
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: P,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </h3>
    </div>

    {/* List */}
    <ul className="px-6 py-5 space-y-0.5">
      {items.map((text, i) => (
        <ListItem key={i} text={text} delay={motionDelay + i * 0.03} />
      ))}
    </ul>
  </motion.div>
);

const OtherServices = () => (
  <div className="mt-16 mb-2">
    {/* Sub-heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10"
    >
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <div style={{ height: '1px', width: '44px', background: `linear-gradient(90deg, transparent, ${M})` }} />
        <p style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '10px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: M,
        }}>
          Atención integral
        </p>
        <div style={{ height: '1px', width: '44px', background: `linear-gradient(90deg, ${M}, transparent)` }} />
      </div>

      <h2
        className="plat-text-sweep mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '0.04em',
          color: P,
        }}
      >
        OTROS SERVICIOS Y PADECIMIENTOS
      </h2>

      {/* Divider gem */}
      <div className="flex items-center justify-center gap-3">
        <div style={{ height: '1px', width: '56px', background: `linear-gradient(90deg, transparent, ${ML})` }} />
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: `linear-gradient(135deg, ${M}, ${P})`,
          boxShadow: `0 0 8px ${M}90`,
        }} />
        <div style={{ height: '1px', width: '56px', background: `linear-gradient(90deg, ${ML}, transparent)` }} />
      </div>
    </motion.div>

    {/* Two-column grid */}
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <Column label="Servicios"     items={SERVICIOS}    motionDelay={0.1} />
      <Column label="Padecimientos" items={PADECIMIENTOS} motionDelay={0.2} />
    </div>
  </div>
);

export default OtherServices;
