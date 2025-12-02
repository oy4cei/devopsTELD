import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { services } from '../data/services';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <div id="services" className="services-container">
                {services.map((service, index) => (
                    <ServiceSection key={service.id} service={service} index={index} />
                ))}
            </div>
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;
