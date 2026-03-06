import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Baby, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceNavigation from '@/components/ServiceNavigation';
import { Button } from '@/components/ui/button';

const BirthPage = () => {
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
        <title>Atención de Parto CDMX | Dra. Leslie Alejandra Ordaz Huerta</title>
        <meta name="description" content="Atención de parto vaginal humanizado y respetado con la Dra. Leslie Alejandra Ordaz Huerta. Recibe a tu bebé en un entorno seguro en CDMX o Satélite." />
        <meta name="keywords" content="parto humanizado CDMX, atención de parto Satélite, ginecóloga parto, Dra. Leslie Alejandra Ordaz Huerta, nacimiento respetado" />
        <link rel="canonical" href="https://tusitio.com/birth" />
        <meta property="og:title" content="Parto Humanizado | Dra. Leslie Alejandra Ordaz Huerta" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalSpecialty",
              "name": "Atención de Parto",
              "provider": {
                "@type": "Physician",
                "name": "Dra. Leslie Alejandra Ordaz Huerta"
              }
            }
          `}
        </script>
      </Helmet>

      <Header />
      <Breadcrumbs />
      
      <main className="min-h-screen">
        <section className="relative bg-gradient-to-r from-pastel-pink-light/50 to-white py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Atención de Parto Humanizado
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La Dra. Leslie Alejandra te acompaña en el nacimiento de tu bebé respetando tus decisiones y los tiempos naturales de tu cuerpo, garantizando siempre la máxima seguridad médica.
                </p>
                <Button onClick={handleAppointment} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full text-lg">
                  <Calendar className="mr-2" size={20} /> Solicitar Información
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <img src="https://images.unsplash.com/photo-1543594722-b309814dad6a" alt="Embarazada Parto" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Un nacimiento respetado y seguro</h2>
              <p className="text-gray-600">Creemos firmemente en el empoderamiento de la mujer durante el trabajo de parto. Proveemos un ambiente de calma, opciones de alivio del dolor y fomento del vínculo inmediato.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Heart, title: "Apego Inmediato", desc: "Contacto piel con piel continuo al nacer, favoreciendo la lactancia y el vínculo emocional." },
                { icon: Baby, title: "Corte Tardío del Cordón", desc: "Esperamos a que el cordón deje de latir para asegurar una mejor reserva de hierro para el bebé." },
                { icon: CheckCircle2, title: "Libertad de Movimiento", desc: "Apoyo para adoptar posturas que favorezcan el descenso del bebé durante el trabajo de parto." },
                { icon: CheckCircle2, title: "Manejo del Dolor", desc: "Opciones farmacológicas y no farmacológicas según tus preferencias bajo cuidado médico." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="text-pastel-pink-primary mb-4 w-10 h-10" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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

export default BirthPage;