import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const AttentionSchedule = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contacto-form');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const element = document.getElementById('contacto-form');
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const schedules = [
    {
      location: "Consultorio Amores",
      address: "Amores 942, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX.",
      color: "bg-blue-50 border-blue-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Agenda tu Consulta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Para brindarte la mejor atención y adaptarnos a tus necesidades, todas las consultas se manejan de forma personalizada previa cita.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-2xl mx-auto">
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
            >
              <Card className={`h-full border-2 ${schedule.color}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{schedule.location}</h3>
                  <div className="flex items-center text-gray-600 mb-8">
                    <MapPin size={18} className="mr-2 text-pastel-pink-primary" />
                    <span>{schedule.address}</span>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="bg-pastel-pink-tertiary p-2 rounded-full flex-shrink-0">
                        <Calendar className="text-pastel-pink-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Lunes a Viernes, 8:00 a 13:00 hrs</p>
                        <p className="text-gray-600">Consulta previa cita. Contáctanos por WhatsApp o llama al consultorio para agendar.</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleContact}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-6"
                  >
                    <Phone className="mr-2" size={20} />
                    Agendar cita
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-center text-yellow-800 text-sm"
        >
          <p><strong>Nota:</strong> Ante una emergencia, acude al servicio de urgencias más cercano.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AttentionSchedule;