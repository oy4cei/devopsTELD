import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    {service.subSections.map((subSection, idx) => {
                        // Extract subsection number (e.g., "1.1" from "1.1 Cloud Architecture & Design")
                        const subsectionNumber = subSection.title.split(' ')[0];
                        const detailPath = `/services/${service.id}/${subsectionNumber}`;

                        return (
                            <div key={idx} className="subsection-card">
                                <Link to={detailPath} className="subsection-link">
                                    <h3 className="subsection-title">{subSection.title}</h3>
                                </Link>
                                <ul className="subsection-items">
                                    {subSection.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="subsection-item">
                                            <span className="item-icon">▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
