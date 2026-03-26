import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '500+', label: 'Projects Delivered', desc: 'across 20+ industries' },
        { number: '99.9%', label: 'Uptime SLA', desc: 'enterprise-grade reliability' },
        { number: '200+', label: 'Happy Clients', desc: 'worldwide partnerships' },
        { number: '10+', label: 'Years Experience', desc: 'proven DevOps excellence' },
    ];

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="container">
                <div className={`stats-grid ${isVisible ? 'visible' : ''}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item" style={{ transitionDelay: `${index * 0.12}s` }}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-desc">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
