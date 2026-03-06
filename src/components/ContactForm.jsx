import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo lo más pronto posible.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contacto-form" className="py-20 bg-gradient-to-b from-white to-pastel-pink-light/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Envíanos un Mensaje
          </h2>
          <p className="text-lg text-gray-600">
            Si tienes dudas o deseas solicitar información detallada sobre nuestros servicios, llena el siguiente formulario.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl border-pastel-pink-tertiary">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre completo</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pastel-pink-primary focus:ring-2 focus:ring-pastel-pink-primary/20 outline-none transition-colors text-gray-900 bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pastel-pink-primary focus:ring-2 focus:ring-pastel-pink-primary/20 outline-none transition-colors text-gray-900 bg-white"
                      placeholder="Tu número telefónico"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pastel-pink-primary focus:ring-2 focus:ring-pastel-pink-primary/20 outline-none transition-colors text-gray-900 bg-white"
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Servicio de interés</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pastel-pink-primary focus:ring-2 focus:ring-pastel-pink-primary/20 outline-none transition-colors text-gray-900 bg-white appearance-none"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="consulta">Consulta de Primera Vez</option>
                      <option value="prenatal">Control Prenatal</option>
                      <option value="papanicolau">Papanicolaou / Colposcopía</option>
                      <option value="cirugia">Cirugía Ginecológica</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje o duda</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pastel-pink-primary focus:ring-2 focus:ring-pastel-pink-primary/20 outline-none transition-colors text-gray-900 bg-white resize-none"
                    placeholder="Escribe aquí tu mensaje..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-pastel-pink-primary hover:bg-pastel-pink-secondary text-white py-6 text-lg rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 animate-spin" size={20} /> Enviando...</>
                  ) : (
                    <><Send className="mr-2" size={20} /> Enviar Mensaje</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;