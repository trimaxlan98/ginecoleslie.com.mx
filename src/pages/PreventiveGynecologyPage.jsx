import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { motion } from 'framer-motion';
import { Calendar, Search, Shield, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreventiveGynecologyPage = () => {
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
        <title>Ginecología Preventiva CDMX | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Check-up ginecológico anual, papanicolaou, y detección temprana con la Dra. Leslie Alejandra Ordaz Huerta. Protege tu salud femenina." />
        <meta name="keywords" content="check up ginecológico, papanicolaou CDMX, ginecóloga Satélite, prevención salud mujer, Dra. Leslie Alejandra" />
        <link rel="canonical" href="https://tusitio.com/preventive-gynecology" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ginecología Preventiva</h1>
              <p className="text-lg text-gray-600 mb-8">El chequeo anual es tu mejor herramienta. La Dra. Leslie Alejandra te ayuda a detectar anomalías a tiempo para mantener tu salud integral.</p>
              <Button onClick={handleAppointment} className="bg-pastel-pink-primary hover:bg-pastel-pink-secondary px-8 py-6 rounded-full text-lg text-white shadow-md">
                <Calendar className="mr-2" size={20} /> Agendar Check-up
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
              <img src="https://images.unsplash.com/photo-1677272272629-67d6edf3ea81" alt="Consulta Ginecológica Preventiva" className="rounded-3xl shadow-xl w-full object-cover aspect-video" loading="lazy" />
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Servicios Preventivos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Search, title: "Papanicolaou", desc: "Detección oportuna de células anormales en el cuello uterino para prevenir cáncer cervical." },
                { icon: HeartPulse, title: "Exploración Mamaria", desc: "Revisión clínica y orientación para autoexploración en prevención de patologías de mama." },
                { icon: Shield, title: "Anticoncepción", desc: "Asesoría médica para elegir el método de planificación familiar ideal para tu estilo de vida." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="w-16 h-16 bg-pastel-pink-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-pastel-pink-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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

export default PreventiveGynecologyPage;