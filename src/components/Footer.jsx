import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>DevOps<span className="text-primary">Pro</span></h3>
                        <p>Профессиональные услуги DevOps для вашего бизнеса. Масштабируемость, безопасность, надежность.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Контакты</h4>
                        <p>Email: info@devopspro.com</p>
                        <p>Tel: +7 (999) 000-00-00</p>
                        <p>Москва, Деловой Центр</p>
                    </div>
                    <div className="footer-col">
                        <h4>Услуги</h4>
                        <ul>
                            <li>Cloud Management</li>
                            <li>CI/CD Engineering</li>
                            <li>DevSecOps</li>
                            <li>Kubernetes</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DevOpsPro. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
