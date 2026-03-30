import React from 'react';
import { Heart, MapPin, Phone, Instagram, Linkedin, Clock, Award, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoUrl from '@/assets/logo-dra-leslie.png';
import doctoraliaLogo from '@/assets/logo-doctoralia.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const serviceLinks = [
    { name: 'Control Prenatal', href: '/prenatal-care' },
    { name: 'Parto Humanizado', href: '/birth' },
    { name: 'Cesárea Segura', href: '/cesarean' },
    { name: 'Ginecología Preventiva', href: '/preventive-gynecology' },
    { name: 'Colposcopía', href: '/colposcopy' },
    { name: 'Salud de la Mujer', href: '/womens-health' },
  ];

  return (
    <footer id="contacto" className="bg-gradient-to-br from-gray-50 to-pastel-pink-light/40 pt-16 pb-8 border-t border-pastel-pink-tertiary relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src={logoUrl}
                alt="Dra. Leslie Ordaz — Ginecología y Obstetricia"
                style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Especialista en Ginecología y Obstetricia de la Universidad Veracruzana. Atención médica integral, empática y de calidad.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.doctoralia.com.mx/leslie-alejandra-ordaz-huerta/ginecologo/ciudad-de-mexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#00A99D] hover:text-white hover:bg-[#00A99D] hover:shadow-md transition-[color,background-color,box-shadow] duration-150" aria-label="Doctoralia">
                <img src={doctoraliaLogo} alt="Doctoralia" width={22} height={22} style={{ objectFit: 'contain' }} />
              </a>
              <a href="https://www.instagram.com/gineco.aleslie?igsh=NmcwY2NxbXdxYmZ3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-pastel-pink-primary hover:shadow-md transition-[color,box-shadow] duration-150">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/leslie-alejandra-ordaz-huerta-72233736a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-pastel-pink-primary hover:shadow-md transition-[color,box-shadow] duration-150">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 border-b-2 border-pastel-pink-primary pb-2 inline-block">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="flex flex-col space-y-3">
                <a href="/#inicio" onClick={(e) => handleNavClick(e, '/#inicio')} className="text-sm text-gray-600 hover:text-pastel-pink-primary flex items-center"><ChevronRight size={14} className="mr-1"/> Inicio</a>
                <a href="/#sobre" onClick={(e) => handleNavClick(e, '/#sobre')} className="text-sm text-gray-600 hover:text-pastel-pink-primary flex items-center"><ChevronRight size={14} className="mr-1"/> Dra. Leslie</a>
                <a href="/#testimonios" onClick={(e) => handleNavClick(e, '/#testimonios')} className="text-sm text-gray-600 hover:text-pastel-pink-primary flex items-center"><ChevronRight size={14} className="mr-1"/> Testimonios</a>
                <a href="/#contacto-form" onClick={(e) => handleNavClick(e, '/#contacto-form')} className="text-sm text-gray-600 hover:text-pastel-pink-primary flex items-center"><ChevronRight size={14} className="mr-1"/> Contacto</a>
              </div>
              <div className="flex flex-col space-y-3">
                {serviceLinks.map((link, idx) => (
                  <Link key={idx} to={link.href} className="text-sm text-gray-600 hover:text-pastel-pink-primary flex items-center">
                    <ChevronRight size={14} className="mr-1"/> {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 border-b-2 border-pastel-pink-primary pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3 group">
                <Phone className="text-pastel-pink-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Teléfono / WhatsApp</p>
                  <a href="tel:+525512345678" className="text-sm hover:text-pastel-pink-primary transition-colors">+52 55 1234 5678</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-pastel-pink-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Centro Médico del Valle</p>
                  <p className="text-sm">Amores 942, Col del Valle Centro, Benito Juárez, 03100 CDMX.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="text-pastel-pink-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Grupo Médico Roma Sur</p>
                  <p className="text-sm">Av. Baja California 210-Desp. 402, Roma Sur, 06760 CDMX.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900 border-b-2 border-pastel-pink-primary pb-2 inline-block">Horarios de Atención</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                <span className="font-medium flex items-center">
                  <Clock size={16} className="mr-2 text-pastel-pink-primary"/> Atención
                </span>
                <span className="font-bold text-gray-800 text-right">Previa Cita</span>
              </li>
              <li className="flex flex-col bg-white p-3 rounded-lg shadow-sm text-xs text-gray-500">
                <span>Horarios flexibles adaptados a tus necesidades.</span>
              </li>
              <li className="flex justify-between items-center bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                <span className="font-medium flex items-center text-red-700">
                  <Heart size={16} className="mr-2 text-red-500"/> Urgencias
                </span>
                <span className="text-red-600 font-bold">24/7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Dra. Leslie Alejandra Ordaz Huerta. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-pastel-pink-primary transition-colors text-sm font-medium">
                Aviso de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-pastel-pink-primary transition-colors text-sm font-medium">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;