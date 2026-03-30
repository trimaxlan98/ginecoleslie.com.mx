import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:bg-blue-500',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/gineco.aleslie?igsh=NmcwY2NxbXdxYmZ3',
      color: 'hover:bg-pink-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 bg-pink-500 ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;