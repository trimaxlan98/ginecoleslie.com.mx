import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Control Prenatal', href: '/prenatal-care' },
    { name: 'Parto Humanizado', href: '/birth' },
    { name: 'Cesárea Segura', href: '/cesarean' },
    { name: 'Ginecología Preventiva', href: '/preventive-gynecology' },
    { name: 'Colposcopía', href: '/colposcopy' },
    { name: 'Salud de la Mujer', href: '/womens-health' },
  ];

  const handleNavClick = (e, href) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'py-3 shadow-sm'
          : 'py-5'
      }`}
      style={{
        background: isScrolled
          ? 'rgba(254, 250, 250, 0.88)'
          : 'rgba(254, 250, 250, 0.82)',
        backdropFilter: 'blur(18px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
        borderBottom: isScrolled ? '1px solid rgba(224,176,176,0.18)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={(e) => handleNavClick(e, '/#inicio')} className="flex items-center space-x-3 group">
            {/* Organic logo mark */}
            <div
              className="w-11 h-11 flex items-center justify-center shadow-md transition-shadow duration-300 group-hover:shadow-lg border-2 border-white flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #E0B0B0, #C9857B)',
                borderRadius: '62% 38% 55% 45% / 50% 62% 38% 50%',
              }}
            >
              <span className="text-white font-serif font-bold text-base" style={{ letterSpacing: '0.05em' }}>LA</span>
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-slate-700 transition-colors duration-200 group-hover:text-[#C9857B] leading-tight"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', letterSpacing: '0.03em' }}
              >
                Dra. Leslie Alejandra
              </span>
              <span
                className="font-normal text-slate-400"
                style={{ fontSize: '10.5px', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Ordaz Huerta · Ginecóloga
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="/#inicio" onClick={(e) => handleNavClick(e, '/#inicio')} style={{ letterSpacing: '0.03em', fontSize: '0.9rem' }} className={`px-4 py-2 font-medium transition-colors ${location.pathname === '/' && !location.hash ? 'text-[#C9857B]' : 'text-slate-600 hover:text-[#C9857B]'}`}>Inicio</a>
            <a href="/#sobre" onClick={(e) => handleNavClick(e, '/#sobre')} style={{ letterSpacing: '0.03em', fontSize: '0.9rem' }} className="px-4 py-2 text-slate-600 hover:text-[#C9857B] font-medium transition-colors">Dra. Leslie</a>

            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button style={{ letterSpacing: '0.03em', fontSize: '0.9rem' }} className={`flex items-center px-4 py-2 font-medium transition-colors ${location.pathname !== '/' ? 'text-[#C9857B]' : 'text-slate-600 hover:text-[#C9857B]'}`}>
                Servicios <ChevronDown size={15} className="ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 rounded-2xl shadow-xl py-2 overflow-hidden border"
                    style={{
                      background: 'rgba(254,250,250,0.92)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      borderColor: 'rgba(224,176,176,0.25)',
                    }}
                  >
                    {serviceLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.href}
                        onClick={() => setIsServicesOpen(false)}
                        className={`block px-6 py-3 text-sm transition-colors ${location.pathname === link.href ? 'bg-pastel-pink-light text-pastel-pink-primary font-bold' : 'text-gray-700 hover:bg-pastel-pink-light hover:text-pastel-pink-primary'}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="/#testimonios" onClick={(e) => handleNavClick(e, '/#testimonios')} style={{ letterSpacing: '0.03em', fontSize: '0.9rem' }} className="px-4 py-2 text-slate-600 hover:text-[#C9857B] font-medium transition-colors">Testimonios</a>
            <a href="/#contacto-form" onClick={(e) => handleNavClick(e, '/#contacto-form')} style={{ letterSpacing: '0.03em', fontSize: '0.9rem' }} className="px-4 py-2 text-slate-600 hover:text-[#C9857B] font-medium transition-colors">Contacto</a>
            
            <a
              href="/#contacto-form"
              onClick={(e) => handleNavClick(e, '/#contacto-form')}
              className="btn-bloom ml-4 px-6 py-2.5 text-white rounded-full font-medium shadow-md transition-all"
              style={{
                background: 'linear-gradient(135deg, #E0B0B0 0%, #C9857B 60%, #d4706a 100%)',
                letterSpacing: '0.04em',
                fontSize: '0.88rem',
              }}
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pastel-pink-primary transition-colors bg-gray-50 rounded-full"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100 mt-4 -mx-4 px-4 shadow-inner"
            >
              <div className="py-4 space-y-1">
                <a href="/#inicio" onClick={(e) => handleNavClick(e, '/#inicio')} className="block px-4 py-3 text-gray-700 hover:bg-pastel-pink-light hover:text-pastel-pink-primary rounded-lg font-medium">Inicio</a>
                <a href="/#sobre" onClick={(e) => handleNavClick(e, '/#sobre')} className="block px-4 py-3 text-gray-700 hover:bg-pastel-pink-light hover:text-pastel-pink-primary rounded-lg font-medium">Dra. Leslie Alejandra</a>
                
                <div className="py-2 px-4 font-bold text-gray-900 border-b border-gray-100 mb-2 mt-2">Nuestros Servicios</div>
                {serviceLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2.5 pl-8 rounded-lg text-sm ${location.pathname === link.href ? 'bg-pastel-pink-light text-pastel-pink-primary font-bold' : 'text-gray-600 hover:bg-pastel-pink-light hover:text-pastel-pink-primary'}`}
                  >
                    • {link.name}
                  </Link>
                ))}
                
                <a href="/#testimonios" onClick={(e) => handleNavClick(e, '/#testimonios')} className="block px-4 py-3 text-gray-700 hover:bg-pastel-pink-light hover:text-pastel-pink-primary rounded-lg font-medium mt-2 border-t border-gray-100">Testimonios</a>
                <a href="/#contacto-form" onClick={(e) => handleNavClick(e, '/#contacto-form')} className="block px-4 py-3 text-gray-700 hover:bg-pastel-pink-light hover:text-pastel-pink-primary rounded-lg font-medium">Contacto</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;