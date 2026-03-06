import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, FileCheck, Stethoscope, Microscope, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const Credentials = () => {
  const specialties = [{
    name: "Ginecología Integral",
    icon: Stethoscope
  }, {
    name: "Obstetricia Avanzada",
    icon: Stethoscope
  }, {
    name: "Ginecología Preventiva",
    icon: ShieldCheck
  }, {
    name: "Colposcopía y VPH",
    icon: Microscope
  }];
  return <section className="py-24 bg-gradient-to-br from-white via-pastel-pink-light/20 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <span className="text-pastel-pink-primary font-bold tracking-wider uppercase text-sm mb-4 block">Experiencia y Profesionalismo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credenciales Médicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Formación académica rigurosa y actualización médica continua al servicio de tu salud.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Timeline / Academic Journey */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <GraduationCap className="text-pastel-pink-primary mr-3" size={28} />
              Formación y Trayectoria
            </h3>
            
            <div className="relative border-l-2 border-pastel-pink-primary pl-8 space-y-10 py-2">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="relative">
                <span className="absolute -left-[43px] top-1 w-5 h-5 bg-white border-4 border-pastel-pink-primary rounded-full shadow-md"></span>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pastel-pink-tertiary/50">
                  <h4 className="text-xl font-bold text-gray-900">Médico Ginecólogo y Obstetra</h4>
                  <p className="text-pastel-pink-primary font-bold mb-2">Universidad Veracruzana</p>
                  <p className="text-gray-600">Formación integral como Médico y especialización rigurosa en Ginecología y Obstetricia con alto sentido ético y humanista.</p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="relative">
                <span className="absolute -left-[43px] top-1 w-5 h-5 bg-white border-4 border-pastel-pink-primary rounded-full shadow-md"></span>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pastel-pink-tertiary/50">
                  <h4 className="text-xl font-bold text-gray-900">Alta Especialidad en Colposcopía</h4>
                  <p className="text-pastel-pink-primary font-bold mb-2">Certificación Nacional</p>
                  <p className="text-gray-600">Especialización en la prevención, diagnóstico y tratamiento de lesiones premalignas del tracto genital inferior.</p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} className="relative">
                <span className="absolute -left-[43px] top-1 w-5 h-5 bg-white border-4 border-pastel-pink-primary rounded-full shadow-md"></span>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-pastel-pink-tertiary/50">
                  <h4 className="text-xl font-bold text-gray-900">Experiencia Institucional</h4>
                  <p className="text-pastel-pink-primary font-bold mb-2">Médico Staff IMSS & Práctica Privada</p>
                  <p className="text-gray-600">Más de una década brindando atención médica, realizando procedimientos quirúrgicos y consultoría especializada.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cards & Images */}
          <div className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="rounded-3xl overflow-hidden shadow-2xl relative h-64">
              <img src="https://images.unsplash.com/photo-1565647946321-a146ac24a220" alt="Equipamiento Médico Certificado" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-xl flex items-center"><Award className="mr-2 text-pastel-pink-primary" /> Certificaciones Activas</p>
                  <p className="text-sm opacity-90">Consejo Mexicano de Ginecología y Obstetricia</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-pastel-pink-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pastel-pink-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileCheck className="text-pastel-pink-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Cédula Profesional</h4>
                  <p className="text-xs text-gray-500 mt-1">Nacional y Estatal</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-pastel-pink-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pastel-pink-light rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="text-pastel-pink-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Membresías</h4>
                  <p className="text-xs text-gray-500 mt-1">Colegio Médico de México y AMGO</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {specialties.map((spec, i) => <span key={i} className="px-4 py-2 bg-pastel-pink-light/50 text-pastel-pink-primary rounded-full text-sm font-bold border border-pastel-pink-tertiary flex items-center">
                  <spec.icon size={14} className="mr-2" />
                  {spec.name}
                </span>)}
            </div>

          </div>
        </div>
      </div>
    </section>;
};
export default Credentials;