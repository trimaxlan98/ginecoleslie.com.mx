import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames = {
  '/prenatal-care': 'Control Prenatal',
  '/birth': 'Parto Humanizado',
  '/cesarean': 'Cesárea Segura',
  '/preventive-gynecology': 'Ginecología Preventiva',
  '/colposcopy': 'Colposcopía',
  '/womens-health': 'Salud de la Mujer',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageName = routeNames[currentPath];

  if (!pageName || currentPath === '/') return null;

  return (
    <nav className="bg-pastel-pink-light/30 py-3 border-b border-pastel-pink-tertiary/50 mt-20 md:mt-24">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="flex items-center hover:text-pastel-pink-primary transition-colors">
              <Home size={14} className="mr-1" />
              Inicio
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-gray-400" />
          </li>
          <li>
            <Link to="/#servicios" className="hover:text-pastel-pink-primary transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-gray-400" />
          </li>
          <li className="text-pastel-pink-primary font-medium" aria-current="page">
            {pageName}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;