import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAppointment = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#F5E6E8] pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-200 to-rose-100 blur-3xl opacity-40"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-rose-200 to-pink-100 blur-3xl opacity-30"
        />
        {/* Subtle geometric lines */}
        <svg className="absolute top-20 left-10 opacity-20" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FFB6D9" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-rose-400"></div>
              <span className="text-rose-600 font-medium tracking-wider uppercase text-sm">Especialista Médica</span>
              <div className="h-[2px] w-12 bg-rose-400 lg:hidden"></div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight"
            >
              Dra. Leslie Alejandra Ordaz Huerta
            </motion.h1>

            <motion.div variants={itemVariants} className="h-[1px] w-3/4 mx-auto lg:mx-0 bg-gradient-to-r from-rose-200 via-pink-200 to-transparent my-6"></motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-light text-slate-700 mb-6"
            >
              Ginecología y Obstetricia
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Atención médica integral y especializada para la mujer, con formación en la Universidad Veracruzana y amplia experiencia clínica. Tu salud en manos expertas.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={handleAppointment}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-7 text-lg font-semibold rounded-full shadow-lg hover:shadow-rose-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2" size={24} />
                Agendar Cita
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative mx-auto max-w-md lg:max-w-none"
          >
            <div className="relative">
              {/* Elegant frame styling */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-rose-200 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10 opacity-60"></div>
              <div className="absolute inset-0 border-2 border-rose-100 rounded-[2.5rem] transform -translate-x-4 -translate-y-4 -z-10"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img
                  src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                  alt="Dra. Leslie Alejandra Ordaz Huerta - Ginecología"
                  className="w-full h-auto object-cover aspect-[3/4] lg:aspect-auto lg:h-[600px] transform hover:scale-105 transition-transform duration-700 ease-out object-top"
                />
              </div>

              {/* Decorative floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-rose-50 z-20"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Años de</p>
                  <p className="text-xs text-slate-500">Experiencia Clínica</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;