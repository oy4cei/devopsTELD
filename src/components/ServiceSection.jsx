import React, { useEffect, useRef, useState } from 'react';
import './ServiceSection.css';

const ServiceSection = ({ service, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={service.id}
            className={`service-section ${isVisible ? 'visible' : ''} ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
            <div className="container">
                <div className="service-header">
                    <h2 className="service-title">{service.title}</h2>
                    {service.techStack.length > 0 && (
                        <div className="tech-stack">
                            {service.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="subsections-grid">
                    {service.subSections.map((subSection, idx) => (
                        <div key={idx} className="subsection-card">
                            <h3 className="subsection-title">{subSection.title}</h3>
                            <ul className="subsection-items">
                                {subSection.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="subsection-item">
                                        <span className="item-icon">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
