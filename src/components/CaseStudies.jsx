import React, { useEffect, useRef, useState } from 'react';
import './CaseStudies.css';

const caseStudies = [
    {
        id: 1,
        industry: 'Fintech',
        title: 'Cloud Migration for a Major European Payment Platform',
        description: 'Migrated 50+ microservices from on-premise to AWS EKS, reducing deployment time from 4 hours to 12 minutes with zero-downtime GitOps pipelines.',
        results: ['99.99% uptime', '85% faster deploys', '40% cost reduction'],
        color: '#0056D2',
    },
    {
        id: 2,
        industry: 'Healthcare',
        title: 'HIPAA-Compliant Infrastructure for Telemedicine Platform',
        description: 'Designed and implemented a fully HIPAA-compliant cloud architecture on Azure, enabling real-time video consultations for 200K+ patients.',
        results: ['HIPAA certified', '200K+ patients', 'Zero breaches'],
        color: '#10b981',
    },
    {
        id: 3,
        industry: 'E-Commerce',
        title: 'Auto-Scaling Infrastructure for Black Friday Traffic',
        description: 'Built auto-scaling Kubernetes infrastructure that handled 15x traffic spikes during peak sales, maintaining sub-200ms response times.',
        results: ['15x traffic handled', '<200ms latency', '$2M revenue protected'],
        color: '#f2617a',
    },
];

const CaseStudies = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="case-studies" className="case-studies-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Our Customers' <span className="text-accent">Success Stories</span></h2>
                    <p>
                        We build lasting partnerships with our clients, delivering measurable impact 
                        through proven DevOps practices.
                    </p>
                </div>

                <div className={`cases-grid ${isVisible ? 'visible' : ''}`}>
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="case-card" style={{ transitionDelay: `${index * 0.15}s` }}>
                            <div className="case-industry" style={{ color: study.color }}>
                                <span className="case-dot" style={{ background: study.color }}></span>
                                {study.industry}
                            </div>
                            <h3 className="case-title">{study.title}</h3>
                            <p className="case-desc">{study.description}</p>
                            <div className="case-results">
                                {study.results.map((result, i) => (
                                    <span key={i} className="case-result">{result}</span>
                                ))}
                            </div>
                            <a href="#contact" className="case-link">
                                View case study
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
