// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/nav/nav';
import ResourcesPage from './components/resource';
import AboutPage from './components/about/about';
import HomePage from './components/home/home';
import TherapistsPage from './components/therapy/therapy';
import FAQPage from './components/faq/faq';
import ContactPage from './components/contact/contact';

import { useEffect } from 'react';
import Services from './components/services/services';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;