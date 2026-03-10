import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen — "La Matriz y el Loto"
 *
 * SVG trazado sobre el logo oficial (favicon.png / logo-dra-leslie.png).
 * Paleta del logo: #6e506f (ciruela) · #d09bad (mauve) · #e9c3d2 (claro)
 *
 * Anatomía representada (fiel al logo .ai):
 *   · Útero + cérvix/vagina  — cuerpo estilizado en forma de V con canal cervical
 *   · Trompas de Falopio     — scroll en S elegante, terminan en ovarios
 *   · Loto de 5 pétalos      — emerge del fundus hacia arriba:
 *                              1 pétalo central (alto) · 2 internos · 2 alas externas
 *
 * Secuencia animada:
 *   0.0 s → 2.1 s   Útero + cérvix se trazan (pathLength)
 *   1.8 s → 2.6 s   Trompas se extienden simultáneamente
 *   2.5 s → 2.8 s   Ovarios aparecen (spring)
 *   2.3 s → 3.1 s   Pétalos del loto florecen (stagger spring, centro→alas)
 *   3.1 s           Nombre y especialidad aparecen
 *   4.2 s           Pantalla se desvanece
 */

const VISIBLE_MS = 4200;
const EXIT_MS    = 700;

/* ── Paleta exacta del logo ── */
const P  = '#6e506f';   /* ciruela  — contornos, detalles */
const M  = '#d09bad';   /* mauve    — rellenos principales */
const ML = '#e9c3d2';   /* claro    — pétalos laterales, cavidad */

/* ════════════════════════════════════════════════════════════
   GEOMETRÍA SVG  —  viewBox "0 0 200 205"

   Coordenadas clave:
     Loto base (fundus):   (100, 110)
     Útero más ancho:       x 73–127  y ≈ 118
     Cérvix tip:           (100, 174)
     Ovario derecho:       (158, 127)
     Ovario izquierdo:     (42,  127)
   ════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────
   ÚTERO COMPLETO + CÉRVIX
   Trazado horario desde la punta del cérvix hacia arriba,
   cruza el fundus y baja por el otro lado cerrando el path.
   La forma superior se abre en dos astas que dan lugar a
   las trompas; la inferior se estrecha en el canal cervical.
   ────────────────────────────────────────────────────────── */
const UTERUS_PATH = `
  M 100 173
  C 97 164, 95.5 155, 97.5 149
  C 99 144.5, 96 140.5, 89.5 136.5
  C 83 132.5, 74.5 124.5, 73 115.5
  C 71.5 107, 76.5 101, 84 99.5
  C 90.5 98.5, 96 102.5, 98.5 107.5
  C 99.5 110.5, 99.8 114, 100 115.5
  C 100.2 114, 100.5 110.5, 101.5 107.5
  C 104 102.5, 109.5 98.5, 116 99.5
  C 123.5 101, 128.5 107, 127 115.5
  C 125.5 124.5, 117 132.5, 110.5 136.5
  C 104 140.5, 101 144.5, 102.5 149
  C 104.5 155, 103 164, 100 173 Z
`;

/* ──────────────────────────────────────────────────────────
   CAVIDAD UTERINA INTERIOR
   Forma de almendra que representa el espacio interno del útero.
   Se rellena con el tono más claro dando profundidad al ícono.
   ────────────────────────────────────────────────────────── */
const CAVITY_PATH = `
  M 100 148
  C 95 143, 89 136, 89 126
  C 89 117, 94 113.5, 100 113.5
  C 106 113.5, 111 117, 111 126
  C 111 136, 105 143, 100 148 Z
`;

/* ──────────────────────────────────────────────────────────
   TROMPAS DE FALOPIO
   Salen de los astas/lados del útero, curvan hacia arriba-afuera,
   hacen un scroll en S (como en el logo) y terminan en los ovarios.
   ────────────────────────────────────────────────────────── */
const TUBE_RIGHT = `M 118 115 C 135 103, 154 99, 164 107 C 171 113, 171 123, 166 128 C 162 132, 156 132, 154 127`;
const TUBE_LEFT  = `M 82  115 C 65  103, 46  99, 36  107 C 29  113, 29  123, 34  128 C 38  132, 44  132, 46  127`;

/* ──────────────────────────────────────────────────────────
   LOTO DE 5 PÉTALOS
   Todos parten del fundus (100, 110).

   Disposición (fiel al logo):
     ①  Centro       — el más alto y estrecho, apunta recto arriba
     ②③ Internos     — par simétrico ~28° hacia cada lado
     ④⑤ Alas         — par ancho casi horizontal, como alas extendidas
   ────────────────────────────────────────────────────────── */

/* ① Pétalo central — más alto, vientre más ancho */
const PETAL_C  = `M 100 110 C 84 95, 81 66, 100 45 C 119 66, 116 95, 100 110 Z`;
const VEIN_C   = `M 100 110 L 100 45`;

/* ② Pétalo interno izquierdo — más grueso */
const PETAL_IL = `M 100 110 C 87 98, 73 76, 71 55 C 84 63, 97 88, 100 110 Z`;
const VEIN_IL  = `M 100 110 L 71 55`;

/* ③ Pétalo interno derecho (espejo) */
const PETAL_IR = `M 100 110 C 113 98, 127 76, 129 55 C 116 63, 103 88, 100 110 Z`;
const VEIN_IR  = `M 100 110 L 129 55`;

/* ④ Ala izquierda — ancha, más gruesa verticalmente */
const PETAL_OL = `M 100 110 C 83 115, 59 114, 41 107 C 54 91, 79 101, 100 110 Z`;
const VEIN_OL  = `M 100 110 L 44 97`;

/* ⑤ Ala derecha (espejo) */
const PETAL_OR = `M 100 110 C 117 115, 141 114, 159 107 C 146 91, 121 101, 100 110 Z`;
const VEIN_OR  = `M 100 110 L 156 97`;

/* Config de cada pétalo para el stagger */
const PETALS = [
  { path: PETAL_C,  vein: VEIN_C,  fill: M,  delay: 2.28 },  /* centro primero */
  { path: PETAL_IL, vein: VEIN_IL, fill: M,  delay: 2.38 },
  { path: PETAL_IR, vein: VEIN_IR, fill: M,  delay: 2.38 },
  { path: PETAL_OL, vein: VEIN_OL, fill: ML, delay: 2.48 },  /* alas al final */
  { path: PETAL_OR, vein: VEIN_OR, fill: ML, delay: 2.48 },
];

/* ════════════════════════════════════════════════════════════
   COMPONENTE
   ════════════════════════════════════════════════════════════ */
const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startExit = setTimeout(() => setIsVisible(false), VISIBLE_MS);
    const callDone  = setTimeout(onComplete, VISIBLE_MS + EXIT_MS);
    return () => {
      clearTimeout(startExit);
      clearTimeout(callDone);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'DM Sans, sans-serif',
            background: 'radial-gradient(ellipse at 50% 44%, #faf0f5 0%, #FEFAFA 58%, #f5ebf2 100%)',
          }}
        >

          {/* ══════════════════════════════════════════════════
              SVG PRINCIPAL — 230 × 236 px   viewBox 0 0 200 205
              ══════════════════════════════════════════════════ */}
          <svg
            width="230"
            height="236"
            viewBox="0 0 200 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Relleno del cuerpo uterino */}
              <linearGradient id="ls-body" x1="100" y1="110" x2="100" y2="174" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor={M}  stopOpacity="0.22" />
                <stop offset="100%" stopColor={P}  stopOpacity="0.08" />
              </linearGradient>

              {/* Relleno cavidad interior */}
              <linearGradient id="ls-cavity" x1="100" y1="111" x2="100" y2="148" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor={ML} stopOpacity="0.55" />
                <stop offset="100%" stopColor={M}  stopOpacity="0.20" />
              </linearGradient>

              {/* Halo detrás del loto */}
              <radialGradient id="ls-halo" cx="50%" cy="54%" r="38%">
                <stop offset="0%"   stopColor={ML} stopOpacity="0.35" />
                <stop offset="100%" stopColor={ML} stopOpacity="0"    />
              </radialGradient>
            </defs>

            {/* ── Halo suave detrás del loto ── */}
            <motion.ellipse
              cx="100" cy="110" rx="50" ry="48"
              fill="url(#ls-halo)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.22 }}
              style={{ transformOrigin: '100px 110px' }}
            />

            {/* ────────────────────────────────────────────────
                LOTO — bloom desde el fundus (100, 110)
                Pétalos en stagger: centro → internos → alas
                ──────────────────────────────────────────────── */}
            {PETALS.map((p, i) => (
              <motion.g
                key={`petal-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  scale:   { duration: 0.62, delay: p.delay, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { duration: 0.22, delay: p.delay },
                }}
                style={{ transformOrigin: '100px 110px' }}
              >
                {/* Relleno del pétalo */}
                <path
                  d={p.path}
                  fill={p.fill}
                  fillOpacity="0.82"
                  stroke={P}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {/* Vena interior del pétalo */}
                <path
                  d={p.vein}
                  stroke={P}
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  opacity="0.30"
                />
              </motion.g>
            ))}

            {/* ────────────────────────────────────────────────
                ÚTERO + CÉRVIX — trazo pathLength
                ──────────────────────────────────────────────── */}

            {/* Relleno del cuerpo — fade-in tras el trazo */}
            <motion.path
              d={UTERUS_PATH}
              fill="url(#ls-body)"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />

            {/* Contorno animado */}
            <motion.path
              d={UTERUS_PATH}
              stroke={P}
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2.1, ease: [0.37, 0, 0.63, 1] },
                opacity:    { duration: 0.15 },
              }}
            />

            {/* Cavidad uterina interior */}
            <motion.path
              d={CAVITY_PATH}
              fill="url(#ls-cavity)"
              stroke={P}
              strokeWidth="0.8"
              strokeOpacity="0.35"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                opacity: { duration: 0.45, delay: 1.85 },
                scale:   { duration: 0.45, delay: 1.85, ease: 'easeOut' },
              }}
              style={{ transformOrigin: '100px 129px' }}
            />

            {/* ────────────────────────────────────────────────
                TROMPA DERECHA + OVARIO
                ──────────────────────────────────────────────── */}
            <motion.path
              d={TUBE_RIGHT}
              stroke={P}
              strokeWidth="1.85"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.78, delay: 1.80, ease: 'easeOut' },
                opacity:    { duration: 0.18, delay: 1.80 },
              }}
            />
            <motion.circle
              cx="158" cy="127" r="5.5"
              fill={P}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                scale:   { duration: 0.38, delay: 2.55, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.18, delay: 2.55 },
              }}
              style={{ transformOrigin: '158px 127px' }}
            />

            {/* ────────────────────────────────────────────────
                TROMPA IZQUIERDA + OVARIO
                ──────────────────────────────────────────────── */}
            <motion.path
              d={TUBE_LEFT}
              stroke={P}
              strokeWidth="1.85"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.78, delay: 1.80, ease: 'easeOut' },
                opacity:    { duration: 0.18, delay: 1.80 },
              }}
            />
            <motion.circle
              cx="42" cy="127" r="5.5"
              fill={P}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                scale:   { duration: 0.38, delay: 2.55, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.18, delay: 2.55 },
              }}
              style={{ transformOrigin: '42px 127px' }}
            />

            {/* ── Disco central del loto (corazón del ícono) ── */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                scale:   { duration: 0.42, delay: 3.05, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.20, delay: 3.05 },
              }}
              style={{ transformOrigin: '100px 110px' }}
            >
              <circle cx="100" cy="110" r="7"   fill={P}      opacity="0.96" />
              <circle cx="100" cy="110" r="3.6" fill="white"  opacity="0.70" />
            </motion.g>

          </svg>

          {/* ── Nombre y especialidad ── */}
          <motion.div
            className="text-center"
            style={{ marginTop: '0px' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.10, duration: 0.72 }}
          >
            <p style={{
              color: P,
              letterSpacing: '0.30em',
              fontSize: '9px',
              textTransform: 'uppercase',
              fontWeight: '600',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Dra. Leslie Alejandra
            </p>
            <p style={{
              color: M,
              letterSpacing: '0.16em',
              fontSize: '8.5px',
              marginTop: '5px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Ginecología &amp; Obstetricia
            </p>
          </motion.div>

          {/* ── Barra de progreso ── */}
          <div style={{
            width: '88px',
            height: '1px',
            backgroundColor: `${M}30`,
            marginTop: '18px',
            position: 'relative',
            borderRadius: '1px',
          }}>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(90deg, ${ML}, ${M}, ${P})`,
                borderRadius: '1px',
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.8, delay: 0.25, ease: 'easeInOut' }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
