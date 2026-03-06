import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesList = [
  { path: '/prenatal-care', name: 'Control Prenatal' },
  { path: '/birth', name: 'Parto Humanizado' },
  { path: '/cesarean', name: 'Cesárea Segura' },
  { path: '/preventive-gynecology', name: 'Ginecología Preventiva' },
  { path: '/colposcopy', name: 'Colposcopía' },
  { path: '/womens-health', name: 'Salud de la Mujer' }
];

const ServiceNavigation = () => {
  const location = useLocation();
  const currentIndex = servicesList.findIndex(s => s.path === location.pathname);

  if (currentIndex === -1) return null;

  const prevService = currentIndex > 0 ? servicesList[currentIndex - 1] : null;
  const nextService = currentIndex < servicesList.length - 1 ? servicesList[currentIndex + 1] : null;

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="w-full md:w-1/3 flex justify-start">
            {prevService && (
              <Link to={prevService.path} className="group flex flex-col items-start">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1 flex items-center">
                  <ArrowLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Anterior
                </span>
                <span className="text-pastel-pink-primary font-bold group-hover:text-pastel-pink-secondary transition-colors">
                  {prevService.name}
                </span>
              </Link>
            )}
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <Button asChild variant="outline" className="border-pastel-pink-tertiary text-pastel-pink-primary hover:bg-pastel-pink-light hover:text-pastel-pink-secondary rounded-full px-6">
              <Link to="/#servicios">
                <Grid size={18} className="mr-2" /> Ver todos los servicios
              </Link>
            </Button>
          </div>

          <div className="w-full md:w-1/3 flex justify-end text-right">
            {nextService && (
              <Link to={nextService.path} className="group flex flex-col items-end">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1 flex items-center">
                  Siguiente <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-pastel-pink-primary font-bold group-hover:text-pastel-pink-secondary transition-colors">
                  {nextService.name}
                </span>
              </Link>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;