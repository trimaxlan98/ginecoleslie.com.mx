import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.354.625 4.635 1.813 6.646L2.667 29.333l6.885-1.795A13.27 13.27 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 2.4c5.983 0 10.93 4.946 10.93 10.933s-4.947 10.933-10.93 10.933a10.9 10.9 0 0 1-5.558-1.519l-.398-.238-4.086 1.065 1.094-3.964-.262-.41A10.895 10.895 0 0 1 5.07 16c0-5.987 4.946-10.933 10.933-10.933zm-3.23 5.466c-.213 0-.558.08-.85.399-.291.32-1.112 1.085-1.112 2.644 0 1.558 1.138 3.064 1.296 3.276.16.213 2.21 3.508 5.43 4.779 2.668 1.052 3.22.845 3.8.793.58-.053 1.876-.766 2.14-1.506.265-.74.265-1.374.186-1.506-.08-.133-.293-.213-.612-.373-.32-.16-1.876-.926-2.168-1.032-.292-.106-.504-.16-.717.16-.213.32-.823 1.032-.982 1.244-.16.213-.32.24-.612.08-.293-.16-1.236-.455-2.354-1.453-.87-.776-1.457-1.733-1.63-2.026-.16-.293-.017-.452.122-.597.125-.13.293-.32.452-.48.16-.16.213-.266.32-.48.106-.213.053-.4-.026-.56-.08-.16-.704-1.724-.97-2.358-.253-.613-.513-.534-.717-.534z"/>
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = '525512345678';
  const message = encodeURIComponent('Hola Dra. Leslie Alejandra Ordaz Huerta, me gustaría agendar una consulta.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="mb-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-pastel-pink-tertiary hidden sm:block relative"
      >
        <p className="text-sm text-gray-800 font-bold mb-1">¿Necesitas una cita?</p>
        <p className="text-xs text-gray-500">Presencial: Lun a Juev</p>
        <p className="text-xs text-gray-500">En línea: Lun a Dom</p>
        <p className="text-[10px] text-gray-400 italic mt-1.5 border-t border-gray-100 pt-1.5">
          *Restricciones: Válido solo cuando la primera consulta es en línea.
        </p>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-pastel-pink-tertiary transform rotate-45" />
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.08, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] } }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #2ECC71 0%, #25D366 50%, #128C7E 100%)',
          boxShadow: '0 6px 28px rgba(37, 211, 102, 0.4)',
        }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
        <span className="relative z-10">
          <WhatsAppIcon />
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;