import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
    const logos = [
        { name: 'TechCo', path: '/images/client_logo_1_1764942802999.png' },
        { name: 'DataSys', path: '/images/client_logo_2_1764942816557.png' },
        { name: 'CloudNet', path: '/images/client_logo_3_1764942848575.png' },
        { name: 'FinanceFlow', path: '/images/client_logo_4_1764942868125.png' },
        { name: 'HealthTech', text: 'HealthTech', icon: '⚕️' },
        { name: 'EnterpriseHub', text: 'EnterpriseHub', icon: '🏢' }
    ];

    return (
        <section className="clients-section">
            <div className="container">
                <div className="clients-header">
                    <h2 className="clients-title">Trusted by Industry Leaders</h2>
                    <p className="clients-subtitle">
                        Partnering with innovative companies worldwide
                    </p>
                </div>
                <div className="clients-grid">
                    {logos.map((logo, index) => (
                        <div key={index} className="client-logo-card">
                            {logo.path ? (
                                <img src={logo.path} alt={logo.name} className="client-logo-img" />
                            ) : (
                                <div className="client-logo-text">
                                    {logo.icon && <span className="client-icon">{logo.icon}</span>}
                                    <span className="client-name">{logo.text}</span>
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
