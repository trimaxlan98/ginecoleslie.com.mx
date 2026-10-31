import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import ClinicMap from '@/components/ClinicMap';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Locations = () => {
  const locations = [
    {
      city: 'Consultorio Amores',
      clinic: 'Ciudad de México (CDMX)',
      description: 'Consultorio privado con sala de exploración y ultrasonido, en la capital del país.',
      icon: MapPin,
    },
    {
      city: 'IMSS',
      clinic: 'Instituto Mexicano del Seguro Social',
      description: 'Atención como médico staff en unidades del IMSS.',
      icon: MapPin,
    },
  ];

  return (
    <section id="ubicaciones" className="py-20 bg-gradient-to-b from-pastel-pink-light to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ubicaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            La Dra. Leslie Ordaz Huerta atiende en su consultorio de Amores 942, Col. del Valle Centro, Benito Juárez, Ciudad de México, y como médico staff en unidades del IMSS.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Consulta privada con cita previa y participación en el IMSS, para ofrecer opciones accesibles a todas las pacientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-pastel-pink-tertiary border-pastel-pink-secondary hover:shadow-xl hover:border-pastel-pink-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink-primary to-pastel-pink-secondary rounded-full flex items-center justify-center mb-4">
                    <location.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-gray-800">{location.city}</CardTitle>
                  <CardDescription className="text-pastel-pink-primary font-semibold">
                    {location.clinic}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <ClinicMap />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pastel-pink-primary to-pastel-pink-secondary rounded-2xl p-8 text-center text-white"
        >
          <Clock className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Agenda tu Cita</h3>
          <p className="text-white/95 mb-4">
            Contáctanos por WhatsApp para conocer horarios disponibles y ubicación del consultorio
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/95">
            <Phone size={20} />
            <span>Disponible por WhatsApp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;