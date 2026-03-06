import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROSE_GOLD = '#E0B0B0';
const DEEP_ROSE = '#C9857B';

const r = 32;
const cx = 110;
const cy = 110;

const circlePositions = [
  { x: cx,           y: cy,                  delay: 0    },
  { x: cx + r,       y: cy,                  delay: 0.13 },
  { x: cx + r * 0.5, y: cy - r * 0.866,      delay: 0.26 },
  { x: cx - r * 0.5, y: cy - r * 0.866,      delay: 0.39 },
  { x: cx - r,       y: cy,                  delay: 0.52 },
  { x: cx - r * 0.5, y: cy + r * 0.866,      delay: 0.65 },
  { x: cx + r * 0.5, y: cy + r * 0.866,      delay: 0.78 },
];

// Uterus/matrix symbol — body fits inside central circle, tubes extend into second ring
const UTERUS_PATH = `
  M 110 88
  C 121 88, 130 95, 130 106
  C 130 116, 124 122, 118 125
  C 115 127, 110 128, 110 128
  C 110 128, 105 127, 102 125
  C 96 122, 90 116, 90 106
  C 90 95, 99 88, 110 88 Z
  M 118 125 L 120 133
  M 102 125 L 100 133
  M 110 128 L 110 134
  M 130 106 C 134 103, 139 104, 141 102 C 142 101, 143 103, 142 104
  M 90 106 C 86 103, 81 104, 79 102 C 78 101, 77 103, 78 104
`;

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hide = setTimeout(() => setIsVisible(false), 3000);
    const done = setTimeout(onComplete, 3650);
    return () => {
      clearTimeout(hide);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          style={{ backgroundColor: '#FEFAFA' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
        >
          {/* SVG — Flower of Life + Uterus symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer guide ring — very subtle dashed */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={r * 2}
                fill="none"
                stroke={ROSE_GOLD}
                strokeWidth="0.45"
                strokeDasharray="2.5 5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.28 }}
                transition={{ delay: 1.3, duration: 0.9 }}
              />

              {/* Flower of Life — 7 circles drawing in */}
              {circlePositions.map((c, i) => (
                <motion.circle
                  key={i}
                  cx={c.x}
                  cy={c.y}
                  r={r}
                  fill="none"
                  stroke={ROSE_GOLD}
                  strokeWidth="0.8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: i === 0 ? 0.55 : 0.62 }}
                  transition={{
                    pathLength: { duration: 0.85, delay: c.delay, ease: 'easeInOut' },
                    opacity: { duration: 0.4, delay: c.delay },
                  }}
                />
              ))}

              {/* Uterus / matrix central symbol */}
              <motion.path
                d={UTERUS_PATH}
                stroke={DEEP_ROSE}
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.15, delay: 1.05, ease: 'easeInOut' }}
              />

              {/* Subtle inner fill on uterus body — appears after draw */}
              <motion.path
                d="M 110 88 C 121 88, 130 95, 130 106 C 130 116, 124 122, 118 125 C 115 127, 110 128, 110 128 C 110 128, 105 127, 102 125 C 96 122, 90 116, 90 106 C 90 95, 99 88, 110 88 Z"
                fill={ROSE_GOLD}
                fillOpacity="0"
                initial={{ fillOpacity: 0 }}
                animate={{ fillOpacity: 0.12 }}
                transition={{ delay: 2.0, duration: 0.7 }}
              />
            </svg>
          </motion.div>

          {/* Name & specialty */}
          <motion.div
            className="text-center mt-1"
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.7 }}
          >
            <p
              style={{
                color: DEEP_ROSE,
                letterSpacing: '0.32em',
                fontSize: '9.5px',
                textTransform: 'uppercase',
                fontWeight: '500',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Dra. Leslie Alejandra
            </p>
            <p
              style={{
                color: ROSE_GOLD,
                letterSpacing: '0.18em',
                fontSize: '8.5px',
                marginTop: '5px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Ginecología &amp; Obstetricia
            </p>
          </motion.div>

          {/* Progress line */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ width: '100px', height: '1px', backgroundColor: 'rgba(224,176,176,0.2)' }}
          >
            <motion.div
              style={{ height: '1px', backgroundColor: ROSE_GOLD, originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.6, delay: 0.3, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
