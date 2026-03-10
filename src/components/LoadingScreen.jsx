import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen — "La Matriz & La Flor"
 *
 * Secuencia de animación:
 *   0.00s → 1.90s  · Silueta del útero se dibuja (pathLength)
 *   1.55s → 2.25s  · Trompas de Falopio se trazan simultáneamente
 *   2.20s → 2.65s  · Fimbrias aparecen (filamentos delicados)
 *   1.85s          · Detalle del orificio cervical externo
 *   2.30s → 3.10s  · Flor florece desde el centro de la matriz (spring)
 *   2.70s          · Nombre y especialidad aparecen
 *   3.50s          · Pantalla desaparece → onComplete()
 *
 * Props:
 *   onComplete {function} — Se llama cuando el exit animation termina
 *   logoSrc    {string}   — (Opcional) Ruta a tu imagen, ej: "/logo-leslie.png"
 *                           Si se provee, reemplaza la flor SVG con la imagen.
 */

const VISIBLE_MS  = 3500;
const EXIT_MS     = 650;
const PETAL_ANGLES = [0, 60, 120, 180, 240, 300];

/* ─── Paleta de marca ────────────────────────────── */
const ROSE_GOLD = '#D09BAD';   /* mauve rosa   — trazo principal, pétalos */
const DEEP_ROSE = '#6E506F';   /* ciruela      — disco central, texto     */
const SOFT_PINK = '#E9C3D2';   /* mauve claro  — acentos, fimbrias, halo  */

/* ─── Coordenadas de la composición (viewBox 0 0 200 180) ──
   Útero: fundus arriba (y≈53), cuello abajo (y≈150)
   Astas: esquina izquierda (63, 68) y derecha (137, 68)
   Flor:  centro del cuerpo uterino (100, 78)
   ─────────────────────────────────────────────────────── */

/**
 * Path del útero — trazo continuo, sentido antihorario.
 *
 * Proporciones inspiradas en anatomía real:
 *   · Fondo (fundus) más ancho en la parte superior (~74px)
 *   · Istmo notablemente estrecho (~20px) — constrición anatómica
 *   · Cuello (cérvix) cilíndrico, estrecho (~14px)
 *   · Orificio externo como punto único al final
 */
const UTERUS_PATH = `
  M 100 150
  C 103 146, 106 141, 107 136
  C 109 129, 110 121, 110 115
  C 112 108, 120 100, 128 91
  C 134 83, 138 75, 137 68
  C 136 61, 128 56, 117 55
  C 109 54, 104 53, 100 53
  C 96  53, 91  54, 83  55
  C 72  56, 64  61, 63  68
  C 62  75, 66  83, 72  91
  C 80 100, 88 108, 90 115
  C 90 121, 91 129, 93 136
  C 94 141, 97 146, 100 150 Z
`;

const LoadingScreen = ({ onComplete, logoSrc }) => {
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
            /* Fondo blanco seda con gradiente radial muy sutil */
            background:
              'radial-gradient(ellipse at 50% 42%, #f9f0f4 0%, #f4edec 60%, #f0e8ed 100%)',
          }}
        >

          {/* ══════════════════════════════════════════════════════
              SVG — Coordinate space: 200 × 180 (user units)
              Rendered at: 230 × 207 px
              ══════════════════════════════════════════════════════ */}
          <svg
            width="230"
            height="207"
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Gradiente para los pétalos: punta más oscura, base más clara */}
              <linearGradient id="petalGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%"   stopColor={ROSE_GOLD} stopOpacity="0.85" />
                <stop offset="100%" stopColor={SOFT_PINK} stopOpacity="0.95" />
              </linearGradient>

              {/* Relleno interior del útero — solo una insinuación de color */}
              <linearGradient id="uterusBodyFill" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%"   stopColor={SOFT_PINK} stopOpacity="0.09" />
                <stop offset="100%" stopColor={ROSE_GOLD} stopOpacity="0.03" />
              </linearGradient>

              {/* Halo radial detrás de la flor */}
              <radialGradient id="flowerHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor={SOFT_PINK} stopOpacity="0.40" />
                <stop offset="100%" stopColor={SOFT_PINK} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ── Anillo guía exterior (muy sutil) ── */}
            <circle
              cx="100"
              cy="102"
              r="75"
              stroke={SOFT_PINK}
              strokeWidth="0.35"
              strokeDasharray="2 7"
              opacity="0.22"
            />

            {/* ────────────────────────────────────────────────────
                ÚTERO — La Matriz
                Path único y continuo para un trazo fluido y elegante.
                Se dibuja de abajo (orificio externo) hacia arriba
                por el lado derecho, cruza el fundus, baja por la
                izquierda y cierra en el punto de inicio.
                ──────────────────────────────────────────────────── */}
            <motion.path
              d={UTERUS_PATH}
              stroke={ROSE_GOLD}
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#uterusBodyFill)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1.9,
                  ease: [0.37, 0, 0.63, 1], // curva suave, acelera al inicio y final
                },
                opacity: { duration: 0.2 },
              }}
            />

            {/* ── Detalle del orificio cervical externo ──
                Pequeña "U" que sugiere la entrada del cuello uterino */}
            <motion.path
              d="M 96.5 147 C 97.5 143, 100 141.5, 100 141.5 C 100 141.5, 102.5 143, 103.5 147"
              stroke={SOFT_PINK}
              strokeWidth="1.0"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.75 }}
              transition={{
                pathLength: { duration: 0.40, delay: 1.85, ease: 'easeOut' },
                opacity:    { duration: 0.15, delay: 1.85 },
              }}
            />

            {/* ────────────────────────────────────────────────────
                TROMPA IZQUIERDA — desde el asta izquierda (63, 68)
                ──────────────────────────────────────────────────── */}
            <motion.path
              d="M 63 68 C 54 66, 44 64, 36 58 C 31 54, 27 52, 24 51"
              stroke={ROSE_GOLD}
              strokeWidth="1.55"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.72, delay: 1.55, ease: 'easeOut' },
                opacity:    { duration: 0.20, delay: 1.55 },
              }}
            />

            {/* Fimbrias izquierdas — 3 filamentos delicados */}
            <motion.path
              d="M 24 51 C 21 49, 20 47, 22 46
                 M 24 51 C 22 53, 20 53, 19 52
                 M 24 51 C 23 55, 21 56, 20 55"
              stroke={SOFT_PINK}
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                pathLength: { duration: 0.42, delay: 2.22, ease: 'easeOut' },
                opacity:    { duration: 0.18, delay: 2.22 },
              }}
            />

            {/* ────────────────────────────────────────────────────
                TROMPA DERECHA — desde el asta derecha (137, 68)
                ──────────────────────────────────────────────────── */}
            <motion.path
              d="M 137 68 C 146 66, 156 64, 164 58 C 169 54, 173 52, 176 51"
              stroke={ROSE_GOLD}
              strokeWidth="1.55"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 0.72, delay: 1.55, ease: 'easeOut' },
                opacity:    { duration: 0.20, delay: 1.55 },
              }}
            />

            {/* Fimbrias derechas */}
            <motion.path
              d="M 176 51 C 179 49, 180 47, 178 46
                 M 176 51 C 178 53, 180 53, 181 52
                 M 176 51 C 177 55, 179 56, 180 55"
              stroke={SOFT_PINK}
              strokeWidth="1.1"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                pathLength: { duration: 0.42, delay: 2.22, ease: 'easeOut' },
                opacity:    { duration: 0.18, delay: 2.22 },
              }}
            />

            {/* ══════════════════════════════════════════════════════
                LA FLOR — florece desde el centro de la matriz (100, 78)

                Si tienes el logo como imagen, sustituye todo el bloque
                <motion.g> por este <motion.image>:

                  <motion.image
                    href="/logo-leslie.png"
                    x="74" y="52" width="52" height="52"
                    preserveAspectRatio="xMidYMid meet"
                    initial={{ opacity: 0, scale: 0.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      scale:   { duration: 0.85, delay: 2.3, ease: [0.34, 1.56, 0.64, 1] },
                      opacity: { duration: 0.30, delay: 2.3 },
                    }}
                    style={{ transformOrigin: '100px 78px' }}
                  />
                ══════════════════════════════════════════════════════ */}

            {/* Halo de luz detrás de la flor */}
            <motion.ellipse
              cx="100" cy="78" rx="24" ry="24"
              fill="url(#flowerHalo)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, delay: 2.28 }}
              style={{ transformOrigin: '100px 78px' }}
            />

            {/* Grupo de la flor — escala con spring desde el centro */}
            {!logoSrc && (
              <motion.g
                initial={{ scale: 0.04, opacity: 0 }}
                animate={{ scale: 1,    opacity: 1 }}
                transition={{
                  scale:   { duration: 0.82, delay: 2.30, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { duration: 0.28, delay: 2.30 },
                }}
                style={{ transformOrigin: '100px 78px' }}
              >
                {/*
                  6 pétalos — forma de pétalo apuntando hacia arriba:
                  M 100 78  → parte desde el centro
                  curva a la izquierda subiendo hasta (100, 63)
                  curva a la derecha volviendo al centro
                  Cada pétalo rota alrededor del centro (100, 78)
                */}
                {PETAL_ANGLES.map((angle, i) => (
                  <motion.path
                    key={i}
                    d="M 100 78 C 96.5 72, 95.5 65, 100 60 C 104.5 65, 103.5 72, 100 78 Z"
                    fill={i % 2 === 0 ? SOFT_PINK : ROSE_GOLD}
                    transform={`rotate(${angle}, 100, 78)`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i % 2 === 0 ? 0.90 : 0.75 }}
                    transition={{ delay: 2.30 + i * 0.065, duration: 0.32 }}
                  />
                ))}

                {/* Estambres — 6 puntos en anillo interior */}
                {PETAL_ANGLES.map((angle, i) => (
                  <motion.circle
                    key={`s${i}`}
                    cx={100 + Math.sin((angle * Math.PI) / 180) * 7.8}
                    cy={78  - Math.cos((angle * Math.PI) / 180) * 7.8}
                    r="1.3"
                    fill={ROSE_GOLD}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.88 }}
                    transition={{ delay: 2.60 + i * 0.04, duration: 0.25 }}
                  />
                ))}

                {/* Disco central */}
                <circle cx="100" cy="78" r="5.8" fill={DEEP_ROSE} opacity="0.95" />
                <circle cx="100" cy="78" r="3.2" fill="white"     opacity="0.72" />
              </motion.g>
            )}

            {/* Flor con imagen personalizada (logoSrc) */}
            {logoSrc && (
              <motion.image
                href={logoSrc}
                x="74" y="52" width="52" height="52"
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0, scale: 0.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  scale:   { duration: 0.85, delay: 2.3, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { duration: 0.30, delay: 2.3 },
                }}
                style={{ transformOrigin: '100px 78px' }}
              />
            )}
          </svg>

          {/* ── Nombre y especialidad ── */}
          <motion.div
            className="text-center"
            style={{ marginTop: '4px' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.70, duration: 0.70 }}
          >
            <p style={{
              color: DEEP_ROSE,
              letterSpacing: '0.32em',
              fontSize: '9.5px',
              textTransform: 'uppercase',
              fontWeight: '500',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Dra. Leslie Alejandra
            </p>
            <p style={{
              color: ROSE_GOLD,
              letterSpacing: '0.18em',
              fontSize: '8.5px',
              marginTop: '5px',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              Ginecología &amp; Obstetricia
            </p>
          </motion.div>

          {/* ── Barra de progreso ── */}
          <div style={{
            width: '96px',
            height: '1px',
            backgroundColor: `${ROSE_GOLD}28`,
            marginTop: '20px',
            position: 'relative',
            borderRadius: '1px',
          }}>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: ROSE_GOLD,
                borderRadius: '1px',
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.0, delay: 0.35, ease: 'easeInOut' }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
