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
            <div className="container hero-content">
                <h1 className="hero-title">
                    Трансформируйте свою инфраструктуру с <span className="text-primary">DevOpsPro</span>
                </h1>
                <p className="hero-subtitle">
                    Профессиональные услуги DevOps для масштабируемости, безопасности и надежности вашего бизнеса
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
                    Узнать больше
                </button>
            </div>
        </section>
    );
};

export default Hero;
