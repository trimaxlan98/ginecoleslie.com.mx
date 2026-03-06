import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone } from 'lucide-react';
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
      location: "Consultorio CDMX (Roma Norte)",
      address: "Av. Cuauhtémoc 123, Consultorio 402",
      hours: [
        { days: "Lunes y Miércoles", time: "10:00 - 14:00 hrs" },
        { days: "Viernes", time: "16:00 - 20:00 hrs" }
      ],
      color: "bg-blue-50 border-blue-100"
    },
    {
      location: "Consultorio Satélite",
      address: "Circuito Médicos 45, Cd. Satélite",
      hours: [
        { days: "Martes y Jueves", time: "15:00 - 20:00 hrs" },
        { days: "Sábados", time: "09:00 - 14:00 hrs" }
      ],
      color: "bg-pastel-pink-light border-pastel-pink-tertiary"
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
            Horarios de Atención
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planifica tu visita eligiendo el horario y ubicación más conveniente para ti. Las consultas son previa cita.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={`h-full border-2 ${schedule.color}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{schedule.location}</h3>
                  <div className="flex items-center text-gray-600 mb-8">
                    <MapPin size={18} className="mr-2 text-pastel-pink-primary" />
                    <span>{schedule.address}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {schedule.hours.map((h, i) => (
                      <div key={i} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="bg-pastel-pink-tertiary p-2 rounded-full">
                          <Clock className="text-pastel-pink-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{h.days}</p>
                          <p className="text-gray-600">{h.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={handleContact}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-6"
                  >
                    <Phone className="mr-2" size={20} />
                    Agendar en {schedule.location.split(' ')[1]}
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
          <p><strong>Nota:</strong> En caso de urgencias obstétricas, las pacientes registradas cuentan con un número de atención 24/7 proporcionado durante su consulta.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AttentionSchedule;