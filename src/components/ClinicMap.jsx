import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ADDRESS = 'Amores 942, Col. del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX';
const query = encodeURIComponent(ADDRESS);

const links = [
  { label: 'Google Maps', href: `https://www.google.com/maps/dir/?api=1&destination=${query}` },
  { label: 'Waze', href: `https://waze.com/ul?q=${query}&navigate=yes` },
  { label: 'Apple Maps', href: `https://maps.apple.com/?daddr=${query}` },
];

const ClinicMap = () => {
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copia la dirección:', ADDRESS);
    }
  };

  return (
    <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 mb-12 items-stretch">
      <div className="relative min-h-[320px] md:min-h-[420px] rounded-2xl overflow-hidden shadow-lg border border-pastel-pink-secondary bg-pastel-pink-tertiary">
        {loaded ? (
          <iframe
            title="Mapa del consultorio de la Dra. Leslie Ordaz Huerta en Amores 942, Col. del Valle"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-pink-300"
          >
            <span className="w-16 h-16 rounded-full bg-gradient-to-br from-pastel-pink-primary to-pastel-pink-secondary flex items-center justify-center">
              <MapPin className="text-white" size={32} />
            </span>
            <span className="font-bold text-lg">Ver mapa del consultorio</span>
            <span className="text-sm text-gray-600 px-6 text-center">{ADDRESS}</span>
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-pastel-pink-secondary p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Cómo llegar?</h3>
        <address className="not-italic text-gray-600 mb-6 leading-relaxed">{ADDRESS}</address>
        <div className="space-y-3 mt-auto">
          <Button asChild className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-6">
            <a href={links[0].href} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2" size={20} /> Cómo llegar
            </a>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            {links.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center rounded-xl border-2 border-pastel-pink-primary px-3 py-3 text-sm font-semibold text-gray-800 hover:bg-pastel-pink-tertiary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={copy}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Dirección copiada' : 'Copiar dirección'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicMap;
