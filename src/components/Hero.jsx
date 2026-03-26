import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [countersVisible, setCountersVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setCountersVisible(true);
            },
            { threshold: 0.5 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { number: '500+', label: 'Projects Delivered' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '200+', label: 'Happy Clients' },
        { number: '10+', label: 'Years Experience' },
    ];

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-grid-pattern"></div>
                <div className="hero-gradient"></div>
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>
            </div>

            <div className="container hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Enterprise DevOps Solutions
                    </div>

                    <h1 className="hero-title">
                        Your Trusted Partner for{' '}
                        <span className="title-accent">DevOps</span>{' '}
                        Excellence
                    </h1>

                    <p className="hero-subtitle">
                        We design, build, and manage cloud-native infrastructure 
                        that scales with your business. From CI/CD pipelines to 
                        Kubernetes orchestration — guaranteed delivery.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-accent btn-large" onClick={() => scrollToSection('contact')}>
                            Get Started
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"/>
                                <polyline points="12 5 19 12 12 19"/>
                            </svg>
                        </button>
                        <button className="btn btn-outline btn-large" onClick={() => scrollToSection('services')}>
                            Explore Services
                        </button>
                    </div>
                </div>

                <div className="hero-stats" ref={statsRef}>
                    {stats.map((stat, i) => (
                        <div key={i} className={`hero-stat ${countersVisible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <span className="hero-stat-number">{stat.number}</span>
                            <span className="hero-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
