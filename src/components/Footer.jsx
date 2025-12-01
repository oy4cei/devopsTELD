import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>DevOps<span className="text-primary">Pro</span></h3>
                        <p>Professional DevOps services for your business. Scalability, Security, Reliability.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>Email: info@devopspro.com</p>
                        <p>Budapest, Belgian Beer Café</p>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li>Cloud Management</li>
                            <li>CI/CD Engineering</li>
                            <li>DevSecOps</li>
                            <li>Kubernetes</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevOpsPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
