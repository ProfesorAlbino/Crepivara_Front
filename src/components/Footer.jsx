import React, { Component } from "react";
import "../styles/components/FooterStyle.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <i className="fas fa-cookie-bite"></i>
                            <h3 className="brand-name">CrepiVara</h3>
                        </div>
                        <p className="brand-description">
                            Deliciosas crepes artesanales preparadas con ingredientes frescos y mucho amor. 
                            Un sabor único que conquista corazones.
                        </p>
                        <div className="social-links">
                            <a href="/" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className="social-link" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="/" className="social-link" aria-label="TikTok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="footer-section">
                        <h5 className="section-title">Contáctanos</h5>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Av. Principal #123, San José, Costa Rica</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+506 2222-3333</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>hola@crepivara.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-clock"></i>
                                <span>Lun - Dom: 8:00 AM - 10:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12">
                    <div className="footer-section">
                        <h5 className="section-title">Enlaces Rápidos</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="footer-links">
                                    <li><a href="#inicio">Inicio</a></li>
                                    <li><a href="#menu">Menú</a></li>
                                    <li><a href="#especialidades">Especialidades</a></li>
                                    <li><a href="#promociones">Promociones</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="footer-links">
                                    <li><a href="#nosotros">Nosotros</a></li>
                                    <li><a href="#contacto">Contacto</a></li>
                                    <li><a href="#delivery">Delivery</a></li>
                                    <li><a href="#eventos">Eventos</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="copyright">
                            © 2025 <strong>CrepiVara</strong>. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-legal">
                            <a href="#privacidad">Política de Privacidad</a>
                            <span className="separator">|</span>
                            <a href="#terminos">Términos de Servicio</a>
                            <span className="separator">|</span>
                            <a href="#cookies">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-decoration">
            <div className="decoration-item decoration-1"></div>
            <div className="decoration-item decoration-2"></div>
            <div className="decoration-item decoration-3"></div>
        </div>
    </footer>
      
      </>
    );
  }
}

export default Footer;
