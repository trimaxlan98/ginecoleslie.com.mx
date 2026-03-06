import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Button } from '@/components/ui/button';

const PrenatalCarePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contacto-form');
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const benefits = [
    "Detección temprana de complicaciones", "Monitoreo del desarrollo fetal", "Asesoría nutricional personalizada",
    "Control de peso y presión arterial", "Preparación física y emocional para el parto", "Resolución de dudas en cada etapa"
  ];

  return (
    <>
      <Helmet>
        <title>Control Prenatal CDMX y Satélite | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Control prenatal integral por la Dra. Leslie Alejandra Ordaz Huerta en CDMX y Satélite. Cuidamos de ti y de tu bebé en cada etapa del embarazo." />
        <meta name="keywords" content="control prenatal CDMX, obstetra Satélite, ginecóloga embarazo, ultrasonido estructural, Dra. Leslie Alejandra Ordaz Huerta" />
        <link rel="canonical" href="https://tusitio.com/prenatal-care" />
        <meta property="og:title" content="Control Prenatal | Dra. Leslie Alejandra Ordaz Huerta" />
        <meta property="og:description" content="Atención médica integral durante tu embarazo." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalSpecialty",
              "name": "Control Prenatal",
              "medicalSpecialty": "Obstetricia",
              "provider": {
                "@type": "Physician",
                "name": "Dra. Leslie Alejandra Ordaz Huerta",
                "jobTitle": "Especialista en Ginecología y Obstetricia"
              }
            }
          `}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="min-h-screen">
        <section className="relative bg-pastel-pink-light/30 py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-block px-4 py-1.5 bg-pastel-pink-tertiary text-pastel-pink-primary rounded-full text-sm font-semibold mb-6">
                  Atención Obstétrica Especializada
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Control Prenatal Integral
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Cuidamos de ti y del desarrollo de tu bebé en cada etapa del embarazo. La Dra. Leslie Alejandra Ordaz Huerta te brinda un seguimiento médico continuo para un embarazo seguro.
                </p>
                <Button onClick={handleAppointment} className="bg-pastel-pink-primary hover:bg-pastel-pink-secondary text-white px-8 py-6 rounded-full text-lg shadow-lg">
                  <Calendar className="mr-2" size={20} /> Agendar Primera Cita
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1687466855438-782e0ef9fea5" alt="Ultrasonido Control Prenatal Dra. Leslie Alejandra" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-pastel-pink-light rounded-full flex items-center justify-center">
                    <Heart className="text-pastel-pink-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Cuidado Seguro</p>
                    <p className="text-gray-500 text-sm">Para ti y tu bebé</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿En qué consiste el Control Prenatal?</h2>
                <p className="text-gray-600 mb-6">El control prenatal es una serie de visitas programadas a la Dra. Leslie Alejandra para vigilar la evolución del embarazo, preparar a la madre para el parto y detectar a tiempo posibles complicaciones.</p>
                <p className="text-gray-600 mb-8">Nuestras consultas incluyen ultrasonido para escuchar los latidos de tu bebé, revisión de signos vitales, control de peso, prescripción de vitaminas y solicitud de laboratorios.</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios del Monitoreo</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="text-pastel-pink-primary mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Atención</h3>
                <div className="space-y-6">
                  {[
                    { title: "Primer Trimestre (Semanas 1-13)", desc: "Confirmación, ultrasonido temprano, estudios de laboratorio iniciales y prescripción de ácido fólico." },
                    { title: "Segundo Trimestre (Semanas 14-27)", desc: "Ultrasonido estructural, monitoreo de crecimiento, revisión anatómica detallada del bebé." },
                    { title: "Tercer Trimestre (Semanas 28-40)", desc: "Monitoreo de posición fetal, preparación para el parto, vigilancia de líquido amniótico y placenta." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-pastel-pink-primary text-white flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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

export default PrenatalCarePage;