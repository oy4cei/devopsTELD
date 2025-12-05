import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceSection from '../components/ServiceSection';
import ClientLogos from '../components/ClientLogos';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { services } from '../data/services';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <div id="services" className="services-container">
                {services.map((service, index) => (
                    <ServiceSection key={service.id} service={service} index={index} />
                ))}
            </div>
            <ClientLogos />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;
