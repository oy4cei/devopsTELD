import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import ServiceSection from '../components/ServiceSection';
import CaseStudies from '../components/CaseStudies';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { services } from '../data/services';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <ClientLogos />
            <ServiceSection services={services} />
            <CaseStudies />
            <Stats />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;
