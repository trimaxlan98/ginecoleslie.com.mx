import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import LoadingScreen from '@/components/LoadingScreen';
import HomePage from '@/pages/HomePage';
import PrenatalCarePage from '@/pages/PrenatalCarePage';
import BirthPage from '@/pages/BirthPage';
import CesareanPage from '@/pages/CesareanPage';
import PreventiveGynecologyPage from '@/pages/PreventiveGynecologyPage';
import ColposcopyPage from '@/pages/ColposcopyPage';
import WomenHealthPage from '@/pages/WomenHealthPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onComplete={() => setIsLoading(false)}
          // logoSrc="/logo-leslie.png"  ← descomenta cuando tengas el logo listo
        />
      )}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prenatal-care" element={<PrenatalCarePage />} />
          <Route path="/birth" element={<BirthPage />} />
          <Route path="/cesarean" element={<CesareanPage />} />
          <Route path="/preventive-gynecology" element={<PreventiveGynecologyPage />} />
          <Route path="/colposcopy" element={<ColposcopyPage />} />
          <Route path="/womens-health" element={<WomenHealthPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;