import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DOCTOR_EMAIL = 'leslie.a.oh.gyo@gmail.com';

const serviceLabels = {
  consulta: 'Consulta de Primera Vez',
  prenatal: 'Control Prenatal',
  papanicolau: 'Papanicolaou / Colposcopía',
  cirugia: 'Cirugía Ginecológica',
  otro: 'Otro',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = serviceLabels[formData.service] || formData.service;
    const subject = encodeURIComponent(`Solicitud de cita — ${service}`);
    const body = encodeURIComponent(
`Hola Dra. Leslie,

Mi nombre es ${formData.name} y me gustaría solicitar información sobre: ${service}.

Teléfono de contacto: ${formData.phone}
Correo de respuesta: ${formData.email}

Mensaje:
${formData.message}

Quedo en espera de su respuesta.
Saludos.`
    );
    window.location.href = `mailto:${DOCTOR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contacto-form"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #FFF5F8 0%, #FEFAFA 50%, #FAF0F2 100%)' }}
    >
      {/* Organic blobs */}
      <div
        className="absolute top-10 right-10 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,182,217,0.3), transparent 68%)',
          borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
          filter: 'blur(36px)',
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(224,176,176,0.25), transparent 68%)',
          borderRadius: '45% 55% 40% 60% / 55% 45% 65% 35%',
          filter: 'blur(28px)',
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="mb-3"
            style={{
              color: '#C9857B',
              letterSpacing: '0.22em',
              fontSize: '11px',
              textTransform: 'uppercase',
              fontWeight: '500',
            }}
          >
            Escríbenos
          </p>
          <h2
            className="font-bold text-slate-800 mb-4"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '0.04em' }}
          >
            Envíanos un Mensaje
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1.05rem' }}>
            Si tienes dudas o deseas solicitar información detallada sobre nuestros servicios,
            llena el siguiente formulario.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Card
            className="glass-card border-0"
            style={{ borderRadius: '1.75rem 0.75rem 1.75rem 0.75rem' }}
          >
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
                  className="btn-bloom w-full text-white py-6 text-base font-medium rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #E0B0B0 0%, #C9857B 60%, #d4706a 100%)',
                    letterSpacing: '0.04em',
                  }}
                >
                  <Send className="mr-2" size={20} /> Enviar Mensaje
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