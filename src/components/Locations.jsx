import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Locations = () => {
  const locations = [
    {
      city: 'Centro Médico del Valle',
      address: 'Amores 942, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX.',
      mapsUrl: 'https://maps.app.goo.gl/yuxXvV3J9V54EJ47A?g_st=aw',
    },
    {
      city: 'Grupo Médico Roma Sur',
      address: 'Av. Baja California 210-Desp. 402, Roma Sur, Miguel Hidalgo, 06760 Ciudad de México, CDMX.',
      mapsUrl: 'https://maps.app.goo.gl/NQddegZnaCNaPk4F9',
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
            La Dra. Leslie Ordaz Huerta cuenta con consulta privada en dos ubicaciones estratégicas
            dentro de la Ciudad de México para brindarte atención especializada cerca de ti.
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
              <Card className="h-full flex flex-col bg-pastel-pink-tertiary border-pastel-pink-secondary hover:shadow-xl hover:border-pastel-pink-primary transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pastel-pink-primary to-pastel-pink-secondary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-white" size={26} />
                  </div>
                  <CardTitle className="text-gray-800 text-lg leading-snug">
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </CardDescription>
                  {location.mapsUrl && (
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80 active:scale-95"
                      style={{
                        background: 'linear-gradient(135deg, #D09BAD 0%, #6E506F 100%)',
                        color: '#fff',
                        boxShadow: '0 3px 12px rgba(110,80,111,0.25)',
                      }}
                    >
                      <Navigation size={14} strokeWidth={2} />
                      Cómo llegar
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
            Contáctanos por WhatsApp para conocer horarios disponibles y ubicación específica de cada consultorio
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