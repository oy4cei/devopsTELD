import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content-wrapper">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Transform Your Infrastructure with <span className="text-primary">DevOpsPro</span>
                        </h1>
                        <p className="hero-subtitle">
                            Professional DevOps services for scalability, security, and reliability of your business
                        </p>
                        <div className="hero-features">
                            <div className="feature-item">
                                <div className="feature-icon">☁️</div>
                                <span>Cloud Native</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🔒</div>
                                <span>Security First</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <span>High Performance</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🚀</div>
                                <span>CI/CD Excellence</span>
                            </div>
                        </div>
                        <button className="btn btn-large" onClick={scrollToServices}>
                            Learn More
                        </button>
                    </div>
                    <div className="hero-illustration">
                        <img src="/images/hero-illustration.png" alt="DevOps Infrastructure" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
