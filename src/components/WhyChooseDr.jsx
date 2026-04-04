import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartPulse, Microscope, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import whyLargeImage from '@/assets/Leslie_porque_leslie_grande.jpeg';
import babyUltrasoundImage from '@/assets/bebe_ultrasonido.jpeg';

const WhyChooseDr = () => {
  const reasons = [
    {
      icon: Award,
      title: "Experiencia y Trayectoria",
      description: "Más de 10 años de experiencia clínica en instituciones públicas (IMSS) y práctica privada, garantizando diagnósticos certeros y tratamientos efectivos."
    },
    {
      icon: HeartPulse,
      title: "Atención Empática",
      description: "Cuidado personalizado, respetuoso y cálido. Tu bienestar físico y emocional es nuestra principal prioridad en cada consulta."
    },
    {
      icon: Microscope,
      title: "Tecnología Moderna",
      description: "Equipamiento de vanguardia para colposcopías, ultrasonidos y procedimientos mínimamente invasivos con los más altos estándares."
    },
    {
      icon: ShieldCheck,
      title: "Compromiso Integral",
      description: "Acompañamiento en todas las etapas de la vida de la mujer, desde la adolescencia hasta la plenitud, con enfoque preventivo."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pastel-pink-light/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir a la Dra. Leslie Alejandra?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atención médica de excelencia, basada en la evidencia científica y el respeto por tus decisiones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={whyLargeImage} 
                alt="Dra. Leslie Alejandra Ordaz Huerta en consulta" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink-primary/40 to-transparent mix-blend-multiply"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <img 
                src={babyUltrasoundImage} 
                alt="Ultrasonido de bebé" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
              >
                <Card className="h-full border-none shadow-lg bg-white group overflow-hidden relative" style={{ transition: 'box-shadow 200ms ease-out' }} onMouseEnter={e => e.currentTarget.style.boxShadow='0 20px 40px rgba(110,80,111,0.12)'} onMouseLeave={e => e.currentTarget.style.boxShadow=''}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-pastel-pink-light rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-150 transition-transform duration-200"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-pastel-pink-primary to-pastel-pink-secondary rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-200 shadow-md">
                      <reason.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pastel-pink-primary transition-colors duration-150">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDr;