import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Embarazo',
      question: '¿Cuándo debo agendar mi primera cita de control prenatal?',
      answer: 'Lo ideal es agendar tu primera cita tan pronto como confirmes tu embarazo mediante una prueba. Esto suele ser entre la semana 6 y 8 de gestación para iniciar con los cuidados necesarios y vitaminas.',
    },
    {
      category: 'Servicios',
      question: '¿Cada cuánto tiempo debo realizarme el Papanicolaou?',
      answer: 'Se recomienda realizar el Papanicolaou una vez al año para mujeres que ya han iniciado su vida sexual o mayores de 21 años, como medida preventiva principal contra el cáncer cervicouterino.',
    },
    {
      category: 'Procedimientos',
      question: '¿En qué consiste una colposcopía?',
      answer: 'Es un procedimiento donde utilizamos un microscopio especial (colposcopio) para examinar de cerca el cuello uterino, la vagina y la vulva en busca de signos de enfermedades. Es un estudio indoloro y rápido.',
    },
    {
      category: 'Cuidados',
      question: '¿Qué métodos anticonceptivos ofrecen?',
      answer: 'Ofrecemos asesoría y colocación de diversos métodos: DIU (cobre y hormonal), implantes subdérmicos, pastillas anticonceptivas, parches, anillos vaginales y anticoncepción de emergencia. El método se elige personalizadamente.',
    },
    {
      category: 'Embarazo',
      question: '¿Atienden partos humanizados?',
      answer: 'Sí, promovemos el parto humanizado respetando los tiempos naturales del cuerpo, las decisiones de la madre y fomentando el contacto piel con piel inmediato con el bebé, siempre priorizando la seguridad de ambos.',
    },
    {
      category: 'Servicios',
      question: '¿Qué incluye una consulta ginecológica de rutina?',
      answer: 'Incluye historia clínica completa, revisión mamaria, exploración pélvica, toma de Papanicolaou (si corresponde), ultrasonido pélvico o transvaginal básico para revisar útero y ovarios, y resolución de dudas.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Encuentra respuestas a las dudas más comunes de nuestras pacientes.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar preguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-pastel-pink-secondary focus:outline-none focus:ring-2 focus:ring-pastel-pink-primary focus:border-transparent text-gray-800"
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg transition-colors ${openIndex === index ? 'border-pastel-pink-primary bg-pastel-pink-light/30' : 'border-gray-200 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-semibold pr-8 ${openIndex === index ? 'text-pastel-pink-primary' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-pastel-pink-primary' : 'text-gray-400'}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                      <span className="inline-block px-3 py-1 bg-pastel-pink-tertiary text-pastel-pink-primary text-xs rounded-full mb-3 font-medium">
                        {faq.category}
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500 py-8">No se encontraron resultados para tu búsqueda.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;