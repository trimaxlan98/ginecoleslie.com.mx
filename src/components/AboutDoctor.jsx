import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Shield } from 'lucide-react';

const AboutDoctor = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Experiencia Clínica',
      description: 'Años de experiencia brindando atención médica de calidad',
    },
    {
      icon: Users,
      title: 'Personal IMSS',
      description: 'Médico staff del Instituto Mexicano del Seguro Social',
    },
    {
      icon: Shield,
      title: 'Clínicas de Prestigio',
      description: 'Atención privada en las mejores clínicas de México',
    },
    {
      icon: Heart,
      title: 'Cuidado Integral',
      description: 'Enfoque holístico en la salud de la mujer',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-pastel-pink-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                alt="Dra. Leslie Ordaz Huerta, especialista en ginecología y obstetricia"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pastel-pink-secondary rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre la Dra. Leslie Ordaz Huerta
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con una sólida formación académica y años de experiencia clínica, la Dra. Leslie Ordaz Huerta 
              se ha destacado por brindar atención médica de la más alta calidad en el campo de la ginecología 
              y obstetricia.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Como médico staff del IMSS y con consulta privada en clínicas de prestigio, ofrece un servicio 
              integral que combina experiencia profesional, tecnología de vanguardia y un trato humano y 
              personalizado para cada paciente.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-pastel-pink-tertiary border border-pastel-pink-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <item.icon className="text-pastel-pink-primary mb-2" size={28} />
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;