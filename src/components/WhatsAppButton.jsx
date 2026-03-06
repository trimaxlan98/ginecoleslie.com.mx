import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '525512345678'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hola Dra. Leslie Alejandra Ordaz Huerta, me gustaría agendar una consulta.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mb-3 px-4 py-3 bg-white rounded-2xl shadow-xl border border-pastel-pink-tertiary hidden sm:block relative"
      >
        <p className="text-sm text-gray-800 font-bold mb-1">¿Necesitas una cita?</p>
        <p className="text-xs text-gray-500">Atención: Lun-Vie 10am-8pm</p>
        {/* Arrow pointer */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-pastel-pink-tertiary transform rotate-45"></div>
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Floating pulse effect */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        ></motion.div>
        
        <MessageCircle className="text-white relative z-10" size={32} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;