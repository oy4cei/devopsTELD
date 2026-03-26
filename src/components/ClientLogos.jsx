import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
    const logos = [
        { name: 'TechCo', path: '/images/client_logo_1_1764942802999.png' },
        { name: 'DataSys', path: '/images/client_logo_2_1764942816557.png' },
        { name: 'CloudNet', path: '/images/client_logo_3_1764942848575.png' },
        { name: 'FinanceFlow', path: '/images/client_logo_4_1764942868125.png' },
        { name: 'HealthTech', text: 'HealthTech', icon: '⚕️' },
        { name: 'EnterpriseHub', text: 'EnterpriseHub', icon: '🏢' },
    ];

    // Double the logos for infinite scroll effect
    const allLogos = [...logos, ...logos];

    return (
        <section className="logos-section">
            <div className="container">
                <p className="logos-label">Trusted by innovative companies worldwide</p>
            </div>
            <div className="logos-track-wrapper">
                <div className="logos-track">
                    {allLogos.map((logo, index) => (
                        <div key={index} className="logo-item">
                            {logo.path ? (
                                <img src={logo.path} alt={logo.name} className="logo-img" />
                            ) : (
                                <div className="logo-text-item">
                                    <span className="logo-icon-emoji">{logo.icon}</span>
                                    <span className="logo-name">{logo.text}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
