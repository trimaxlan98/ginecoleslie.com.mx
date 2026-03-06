import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HealthBlog = () => {
  const articles = [
    {
      title: "La importancia del ácido fólico en el primer trimestre",
      category: "Cuidados Prenatales",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed",
      date: "15 Oct 2023",
      readTime: "4 min",
      excerpt: "Descubre por qué esta vitamina es crucial para el desarrollo temprano de tu bebé y cómo incorporarla en tu dieta."
    },
    {
      title: "Mitos y realidades sobre la copa menstrual",
      category: "Salud de la Mujer",
      image: "https://images.unsplash.com/photo-1584308666744-24d5e4a78ec4",
      date: "28 Sep 2023",
      readTime: "5 min",
      excerpt: "Resolvemos las dudas más comunes sobre el uso de la copa menstrual, sus beneficios y cómo elegir la adecuada."
    },
    {
      title: "Señales de alerta durante el embarazo",
      category: "Obstetricia",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
      date: "10 Sep 2023",
      readTime: "6 min",
      excerpt: "Conoce los síntomas que requieren atención médica inmediata durante tu periodo de gestación para tu seguridad."
    }
  ];

  return (
    <section id="blog" className="py-20 bg-pastel-pink-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog de Salud
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artículos informativos y consejos sobre salud femenina, embarazo y bienestar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-none bg-white">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-pastel-pink-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pastel-pink-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center text-pastel-pink-primary font-semibold hover:text-pastel-pink-secondary transition-colors mt-auto">
                    Leer artículo completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-pastel-pink-primary text-pastel-pink-primary font-bold rounded-full hover:bg-pastel-pink-primary hover:text-white transition-colors shadow-sm">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default HealthBlog;