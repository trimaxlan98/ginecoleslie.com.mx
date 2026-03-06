import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, href, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      className="h-full"
    >
      <Link to={href} className="block h-full group">
        <div
          className="relative overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl"
          style={{
            height: '380px',
            borderRadius: '1.75rem 0.75rem 1.75rem 0.75rem',
          }}
        >
          {/* Background image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          />

          {/* Gradient veil — light at top, darker at bottom for readability */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(180deg, rgba(45,20,28,0.05) 0%, rgba(45,20,28,0.18) 45%, rgba(45,20,28,0.72) 100%)',
            }}
          />

          {/* Hover bloom ring */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(ellipse at 50% 100%, rgba(224,176,176,0.22) 0%, transparent 65%)',
            }}
          />

          {/* Glass content panel */}
          <div
            className="glass-dark absolute bottom-0 left-0 right-0 p-6 transition-all duration-300"
            style={{ borderRadius: '0 0 1.75rem 0.75rem' }}
          >
            {/* Petal accent dot */}
            <div
              className="w-5 h-5 mb-3 transition-transform duration-300 group-hover:scale-125"
              style={{
                background: 'linear-gradient(135deg, #E0B0B0, #FFB6D9)',
                borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
              }}
            />

            <h3
              className="font-semibold text-white mb-2 leading-snug"
              style={{ fontSize: '1.1rem', letterSpacing: '0.03em' }}
            >
              {title}
            </h3>
            <p className="text-white/72 text-sm mb-4 leading-relaxed line-clamp-2">
              {description}
            </p>
            <div
              className="flex items-center text-sm font-medium transition-all duration-300 group-hover:gap-2"
              style={{ color: '#E0B0B0', gap: '0.35rem', letterSpacing: '0.04em' }}
            >
              Ver detalles
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
