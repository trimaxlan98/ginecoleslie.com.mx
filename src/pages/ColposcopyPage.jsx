import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColposcopyPage = () => {
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
        <title>Colposcopía CDMX | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Estudio de colposcopía para diagnóstico detallado de VPH y lesiones en el cuello uterino. Alta especialidad con la Dra. Leslie Alejandra." />
        <meta name="keywords" content="colposcopía CDMX, diagnóstico VPH, lesiones cuello uterino, Dra. Leslie Alejandra Ordaz Huerta, ginecóloga colposcopista" />
        <link rel="canonical" href="https://tusitio.com/colposcopy" />
      </Helmet>

      <Header />
      <Breadcrumbs />
      <main className="min-h-screen">
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-pastel-pink-light to-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Stethoscope className="text-pastel-pink-primary" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Estudio de Colposcopía</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                La Dra. Leslie Alejandra, con alta especialidad en Colposcopía, realiza este estudio indoloro crucial para la detección de VPH y lesiones precancerosas con la máxima tecnología.
              </p>
              <Button onClick={handleAppointment} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg shadow-lg">
                <Calendar className="mr-2" size={20} /> Agendar Colposcopía
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">¿Cómo prepararse?</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3"><span className="text-pastel-pink-primary font-bold">•</span> No estar menstruando (preferible mitad del ciclo).</li>
                    <li className="flex gap-3"><span className="text-pastel-pink-primary font-bold">•</span> Evitar relaciones sexuales 48 horas previas.</li>
                    <li className="flex gap-3"><span className="text-pastel-pink-primary font-bold">•</span> No usar duchas vaginales, cremas u óvulos.</li>
                    <li className="flex gap-3"><span className="text-pastel-pink-primary font-bold">•</span> Puedes acudir aseada de forma normal externa.</li>
                  </ul>
                  <div className="mt-8 p-6 bg-pastel-pink-light rounded-xl">
                    <h3 className="font-bold mb-2 text-gray-900">Durante el procedimiento</h3>
                    <p className="text-sm text-gray-700">Se aplican soluciones especiales que resaltan zonas sospechosas. Si es necesario, en el mismo momento se puede tomar una biopsia para estudio patológico.</p>
                  </div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1580281657702-257584239a55" alt="Equipamiento médico Colposcopía" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" loading="lazy" />
                </div>
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

export default ColposcopyPage;