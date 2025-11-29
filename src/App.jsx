import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import { services } from './data/services';
import './App.css';

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <div id="services" className="services-container">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

