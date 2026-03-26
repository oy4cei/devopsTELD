import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="6" fill="var(--primary-color)"/>
                            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="logo-text">DevOps<span className="logo-accent">Pro</span></span>
                </div>

                <button 
                    className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul>
                        <li onClick={() => scrollToSection('services')}>Services</li>
                        <li onClick={() => scrollToSection('case-studies')}>Case Studies</li>
                        <li onClick={() => scrollToSection('team')}>Team</li>
                        <li onClick={() => scrollToSection('about')}>About</li>
                    </ul>
                    <button className="btn btn-accent header-cta" onClick={() => scrollToSection('contact')}>
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
