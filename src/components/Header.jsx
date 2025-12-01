import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    DevOps<span className="text-primary">Pro</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li onClick={() => scrollToSection('services')}>Services</li>
                        <li onClick={() => scrollToSection('about')}>About</li>
                        <li onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                    <button className="btn-outline" onClick={() => scrollToSection('contact')}>Get in Touch</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
