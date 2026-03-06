import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCard = ({ title, description, image, href, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={href} className="block h-full">
        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-none bg-white">
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-6 flex flex-col h-[calc(100%-14rem)]">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pastel-pink-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {description}
            </p>
            <div className="flex items-center text-pastel-pink-primary font-semibold group-hover:text-pastel-pink-secondary transition-colors mt-auto">
              Ver detalles <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;