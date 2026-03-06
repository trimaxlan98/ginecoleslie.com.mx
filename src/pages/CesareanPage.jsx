import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Activity, ShieldCheck, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Button } from '@/components/ui/button';

const CesareanPage = () => {
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contacto-form');
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Cesárea Segura CDMX | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Atención de parto por cesárea con los más altos estándares de seguridad y tecnología médica. Agenda tu cita con la Dra. Leslie Alejandra." />
        <meta name="keywords" content="cesárea segura CDMX, ginecóloga cirujana, operación cesárea Satélite, Dra. Leslie Alejandra Ordaz Huerta" />
        <link rel="canonical" href="https://tusitio.com/cesarean" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="min-h-screen">
        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-pastel-pink-light/40 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-pastel-pink-primary font-bold tracking-wider uppercase text-sm mb-4 block">Procedimiento Quirúrgico</span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Cesárea Segura y Cuidada
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  La Dra. Leslie Alejandra realiza este procedimiento quirúrgico con técnica depurada, minimizando riesgos y optimizando tu recuperación.
                </p>
                <Button onClick={handleAppointment} className="bg-pastel-pink-primary hover:bg-pastel-pink-secondary text-white px-8 py-6 rounded-full text-lg shadow-lg">
                  <Calendar className="mr-2" size={20} /> Agendar Valoración
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <img src="https://images.unsplash.com/photo-1556107136-7fdcc475b472" alt="Quirófano Cesárea" className="rounded-2xl shadow-xl w-full" loading="lazy" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cuándo está indicada una cesárea?</h2>
                <p className="text-gray-600 mb-4">Es un procedimiento que salva vidas. Se recomienda cuando el parto vaginal representa un riesgo para la madre o el bebé.</p>
                <ul className="space-y-4 mt-6">
                  {['Posición anómala del bebé', 'Sufrimiento fetal agudo', 'Embarazo múltiple de alto riesgo', 'Placenta previa o desprendimiento', 'Cesáreas previas (según valoración)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <ShieldCheck className="text-pastel-pink-primary" size={20} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Preparación", desc: "Evaluación preoperatoria completa y laboratorios." },
                { icon: Activity, title: "Procedimiento", desc: "Duración aproximada de 45-60 min bajo anestesia regional." },
                { icon: ShieldCheck, title: "Recuperación", desc: "Vigilancia estrecha y apoyo temprano para la lactancia." }
              ].map((step, idx) => (
                <div key={idx} className="text-center p-6 border border-gray-100 rounded-2xl hover:border-pastel-pink-primary transition-colors">
                  <div className="w-16 h-16 mx-auto bg-pastel-pink-light rounded-full flex items-center justify-center mb-4">
                    <step.icon className="text-pastel-pink-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ServiceNavigation />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default CesareanPage;