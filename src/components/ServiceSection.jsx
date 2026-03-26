import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServiceSection.css';

const serviceGroups = [
    {
        id: 'cloud-infra',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
        ),
        title: 'Cloud & Infrastructure',
        description: 'Design, build, and manage robust cloud architectures across AWS, Azure, and GCP with IaC automation and hybrid networking.',
        services: ['cloud-management', 'iac', 'networking'],
        techs: ['AWS', 'Azure', 'GCP', 'Terraform', 'VPN'],
    },
    {
        id: 'containers-platform',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
        ),
        title: 'Containers & Platform',
        description: 'Kubernetes orchestration, container best practices, and internal developer platforms that accelerate your team\'s velocity.',
        services: ['containers', 'platform'],
        techs: ['Kubernetes', 'Docker', 'EKS', 'AKS', 'GKE'],
    },
    {
        id: 'security-compliance',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        ),
        title: 'Security & Compliance',
        description: 'DevSecOps practices, compliance audit preparation (PCI DSS, SOC 2, HIPAA), and cloud database management with enterprise-grade security.',
        services: ['security', 'databases'],
        techs: ['PCI DSS', 'SOC 2', 'HIPAA', 'Wiz', 'Trivy'],
    },
    {
        id: 'delivery-ops',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        title: 'Delivery & Operations',
        description: 'CI/CD engineering, monitoring & observability, FinOps cost optimization, SRE support — everything for seamless software delivery.',
        services: ['cicd', 'monitoring', 'finops', 'support', 'consulting'],
        techs: ['GitHub Actions', 'ArgoCD', 'Grafana', 'Datadog'],
    },
];

const ServiceSection = ({ services }) => {
    const [activeGroup, setActiveGroup] = useState(null);
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

    const toggleGroup = (id) => {
        setActiveGroup(activeGroup === id ? null : id);
    };

    const getServicesForGroup = (group) => {
        return services.filter(s => group.services.includes(s.id));
    };

    return (
        <section id="services" className="services-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2>Game-Changing Solutions for <span className="text-accent">Every Challenge</span></h2>
                    <p>
                        Full-cycle DevOps services from cloud architecture to 24/7 operations — 
                        tailored for your business needs.
                    </p>
                </div>

                <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
                    {serviceGroups.map((group, index) => (
                        <div key={group.id} className="service-pillar" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="pillar-card" onClick={() => toggleGroup(group.id)}>
                                <div className="pillar-icon">{group.icon}</div>
                                <h3 className="pillar-title">{group.title}</h3>
                                <p className="pillar-desc">{group.description}</p>
                                <div className="pillar-techs">
                                    {group.techs.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <button className="pillar-toggle">
                                    {activeGroup === group.id ? 'Hide details' : 'View details'}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                         style={{ transform: activeGroup === group.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                                        <polyline points="6 9 12 15 18 9"/>
                                    </svg>
                                </button>
                            </div>

                            {activeGroup === group.id && (
                                <div className="pillar-details">
                                    {getServicesForGroup(group).map(service => (
                                        <div key={service.id} className="detail-block">
                                            <h4 className="detail-title">{service.title.replace(/^\d+\.\s*/, '')}</h4>
                                            <div className="detail-subs">
                                                {service.subSections.map((sub, idx) => {
                                                    const subsectionNumber = sub.title.split(' ')[0];
                                                    return (
                                                        <div key={idx} className="detail-sub">
                                                            <Link to={`/services/${service.id}/${subsectionNumber}`} className="detail-sub-title">
                                                                {sub.title}
                                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                                                </svg>
                                                            </Link>
                                                            <ul className="detail-items">
                                                                {sub.items.map((item, i) => (
                                                                    <li key={i}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
