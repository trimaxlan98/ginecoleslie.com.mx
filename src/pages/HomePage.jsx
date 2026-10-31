import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutDoctor from '@/components/AboutDoctor';
import WhyChooseDr from '@/components/WhyChooseDr';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import HealthBlog from '@/components/HealthBlog';
import ClinicGallery from '@/components/ClinicGallery';
import Credentials from '@/components/Credentials';
import AttentionSchedule from '@/components/AttentionSchedule';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Locations from '@/components/Locations';
import SocialLinks from '@/components/SocialLinks';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Leslie Alejandra Ordaz Huerta - Ginecóloga y Obstetra en CDMX</title>
        <meta 
          name="description" 
          content="Dra. Leslie Alejandra Ordaz Huerta, especialista en ginecología y obstetricia. Atención médica en CDMX. Control prenatal, colposcopía y salud integral." 
        />
        <meta name="keywords" content="ginecóloga CDMX, obstetra CDMX, Dra. Leslie Alejandra Ordaz Huerta, control prenatal, colposcopía, ginecólogo de confianza" />
        <link rel="canonical" href="https://tusitio.com/" />
        <meta property="og:title" content="Dra. Leslie Alejandra Ordaz Huerta | Ginecología" />
        <meta property="og:description" content="Especialista en Ginecología y Obstetricia en CDMX." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dra. Leslie Alejandra Ordaz Huerta",
              "medicalSpecialty": ["Ginecología", "Obstetricia"],
              "description": "Médico especialista en ginecología, obstetricia y colposcopía.",
              "telephone": "+525585650449",
              "openingHours": "08:00-13:00",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Amores 942, Col. del Valle Centro",
                "addressLocality": "Benito Juárez, Ciudad de México",
                "postalCode": "03100",
                "addressRegion": "CDMX",
                "addressCountry": "MX"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <AboutDoctor />
          <Services />
          <WhyChooseDr />
          <Testimonials />
          <HealthBlog />
          <ClinicGallery />
          <Credentials />
          <AttentionSchedule />
          <FAQ />
          <ContactForm />
          <Locations />
          <SocialLinks />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HomePage;