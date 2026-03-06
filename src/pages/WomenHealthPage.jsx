import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WomenHealthPage = () => {
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
        <title>Salud Integral de la Mujer | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Atención médica integral para la mujer con la Dra. Leslie Alejandra: climaterio, menopausia, trastornos menstruales e infecciones en CDMX." />
        <meta name="keywords" content="salud integral mujer, ginecóloga menopausia, ovarios poliquísticos CDMX, Dra. Leslie Alejandra Ordaz Huerta" />
        <link rel="canonical" href="https://tusitio.com/womens-health" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        <section className="relative py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Salud Integral en Todas las Etapas</h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Desde la adolescencia hasta la plenitud, la Dra. Leslie Alejandra te acompaña en tu desarrollo hormonal y físico brindándote diagnósticos precisos.
                </p>
                <Button onClick={handleAppointment} className="bg-gradient-to-r from-pastel-pink-primary to-pastel-pink-secondary hover:opacity-90 text-white px-8 py-6 rounded-full text-lg shadow-lg">
                  <Calendar className="mr-2" size={20} /> Agendar Cita de Valoración
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1">
                <img src="https://images.unsplash.com/photo-1694011224702-4f9c680378c5" alt="Clínica Salud Mujer Dra Leslie Alejandra" className="rounded-[2rem] shadow-xl w-full aspect-square md:aspect-[4/5] object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Atención Especializada En:</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Trastornos Menstruales", desc: "Sangrados abundantes, dolor pélvico severo (dismenorrea), o ciclos irregulares.", icon: Activity },
                { title: "Infecciones Vaginales", desc: "Diagnóstico y tratamiento certero de vulvovaginitis recurrentes o resistentes.", icon: Sparkles },
                { title: "Climaterio y Menopausia", desc: "Terapia de reemplazo hormonal y manejo de síntomas para una transición plena.", icon: Activity },
                { title: "Síndrome de Ovario Poliquístico", desc: "Manejo integral del SOP para mejorar síntomas metabólicos y reproductivos.", icon: Sparkles }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-pastel-pink-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-pastel-pink-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
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

export default WomenHealthPage;