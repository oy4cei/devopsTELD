import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        {
            icon: '🚀',
            number: '500+',
            label: 'Projects Delivered',
            description: 'Successfully completed'
        },
        {
            icon: '⏱️',
            number: '99.9%',
            label: 'Uptime Guarantee',
            description: 'Enterprise-grade reliability'
        },
        {
            icon: '👥',
            number: '200+',
            label: 'Happy Clients',
            description: 'Worldwide partnerships'
        },
        {
            icon: '🏆',
            number: '10+',
            label: 'Years Experience',
            description: 'DevOps excellence'
        }
    ];

    return (
        <section className="stats-section">
            <div className="stats-background"></div>
            <div className="container">
                <div className="stats-header">
                    <h2 className="stats-title">Proven Track Record</h2>
                    <p className="stats-subtitle">
                        Numbers that demonstrate our commitment to excellence
                    </p>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-description">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
