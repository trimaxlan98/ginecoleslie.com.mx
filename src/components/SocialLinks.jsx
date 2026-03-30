import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import doctoraliaLogo from '@/assets/logo-doctoralia.png';


const socialLinks = [
  {
    name: 'Instagram',
    Icon: () => <Instagram size={24} />,
    url: 'https://www.instagram.com/gineco.aleslie?igsh=NmcwY2NxbXdxYmZ3',
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    hover: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-500',
  },
  {
    name: 'Doctoralia',
    Icon: () => <img src={doctoraliaLogo} alt="Doctoralia" width={28} height={28} style={{ objectFit: 'contain' }} />,
    url: 'https://www.doctoralia.com.mx/leslie-alejandra-ordaz-huerta/ginecologo/ciudad-de-mexico',
    bg: 'bg-[#00A99D]',
    hover: 'hover:bg-[#008c82]',
  },
  {
    name: 'LinkedIn',
    Icon: () => <Linkedin size={24} />,
    url: 'https://www.linkedin.com/in/leslie-alejandra-ordaz-huerta-72233736a',
    bg: 'bg-[#0A66C2]',
    hover: 'hover:bg-[#084e96]',
  },
];

const SocialLinks = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Síguenos en Redes Sociales
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Mantente informada sobre salud femenina y actualizaciones médicas
        </p>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.1, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 ${social.bg} ${social.hover} rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-150`}
              aria-label={social.name}
            >
              <social.Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialLinks;