import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { services } from '../data/services';
import { bestPractices } from '../data/bestPractices';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServiceDetail.css';

function ServiceDetail() {
    const { serviceId, subsectionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId, subsectionId]);

    const service = services.find(s => s.id === serviceId);
    const practiceData = bestPractices[`${serviceId}-${subsectionId}`];

    if (!service || !practiceData) {
        return (
            <div className="service-detail">
                <Header />
                <div className="detail-container">
                    <h1>Service not found</h1>
                    <Link to="/" className="back-button">← Back to Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const subsection = service.subSections.find(s => s.title.startsWith(subsectionId));

    return (
        <div className="service-detail">
            <Header />
            <div className="detail-container">
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span> / </span>
                    <Link to="/#services">{service.title}</Link>
                    <span> / </span>
                    <span>{subsection?.title || subsectionId}</span>
                </div>

                <h1 className="detail-title">{subsection?.title || practiceData.title}</h1>
                <p className="detail-subtitle">{practiceData.subtitle}</p>

                <section className="detail-section">
                    <h2>Overview</h2>
                    <p>{practiceData.overview}</p>
                </section>

                <section className="detail-section">
                    <h2>Key Principles</h2>
                    <ul className="principles-list">
                        {practiceData.principles.map((principle, index) => (
                            <li key={index}>
                                <strong>{principle.title}:</strong> {principle.description}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="detail-section">
                    <h2>Tools & Technologies</h2>
                    <div className="tools-grid">
                        {practiceData.tools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <h3>{tool.name}</h3>
                                <p className="tool-category">{tool.category}</p>
                                <p>{tool.description}</p>
                                {tool.bestFor && <p className="tool-best-for"><strong>Best for:</strong> {tool.bestFor}</p>}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="detail-section">
                    <h2>Implementation Strategy</h2>
                    <div className="implementation-steps">
                        {practiceData.implementation.map((step, index) => (
                            <div key={index} className="implementation-step">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <h3>{step.phase}</h3>
                                    <p>{step.description}</p>
                                    <ul>
                                        {step.actions.map((action, actionIndex) => (
                                            <li key={actionIndex}>{action}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="detail-section">
                    <h2>Common Challenges & Solutions</h2>
                    <div className="challenges-list">
                        {practiceData.challenges.map((challenge, index) => (
                            <div key={index} className="challenge-card">
                                <h3>⚠️ {challenge.challenge}</h3>
                                <p className="solution"><strong>Solution:</strong> {challenge.solution}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="detail-section">
                    <h2>Industry Standards & Frameworks</h2>
                    <ul className="standards-list">
                        {practiceData.standards.map((standard, index) => (
                            <li key={index}>
                                <strong>{standard.name}:</strong> {standard.description}
                            </li>
                        ))}
                    </ul>
                </section>

                {practiceData.examples && (
                    <section className="detail-section">
                        <h2>Real-World Examples</h2>
                        <div className="examples-list">
                            {practiceData.examples.map((example, index) => (
                                <div key={index} className="example-card">
                                    <h3>{example.company}</h3>
                                    <p className="example-scenario"><strong>Scenario:</strong> {example.scenario}</p>
                                    <p className="example-solution"><strong>Solution:</strong> {example.solution}</p>
                                    <p className="example-result"><strong>Result:</strong> {example.result}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="navigation-buttons">
                    <button onClick={() => navigate('/')} className="back-button">
                        ← Back to All Services
                    </button>
                    <Link to="/#contact" className="contact-button">
                        Get Expert Help →
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ServiceDetail;
