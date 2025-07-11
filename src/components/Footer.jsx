import React, { Component } from "react";
import { Link } from "react-router";
import {
  Calendar,
  FacebookIcon,
  Instagram,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

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
                    Deliciosas crepes artesanales preparadas con ingredientes
                    frescos y mucho amor. Un sabor único que conquista
                    corazones.
                  </p>
                  <div className="social-links">
                    <a href="/" className="social-link" aria-label="Facebook">
                      <FacebookIcon />
                    </a>
                    <a href="/" className="social-link" aria-label="Instagram">
                      <Instagram />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER}&text=Hola%20CrepiVara,%20quiero%20más%20información%20sobre%20sus%20productos.`}
                      className="social-link"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                    <a href="https://tinyurl.com/34rw9ymr" className="social-link" aria-label="TikTok">
                      <FaTiktok />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="footer-section">
                  <h5 className="section-title">Contáctenos</h5>
                  <div className="contact-info">
                    <div className="contact-item">
                      <MapPinned />
                      <a
                        href="https://maps.app.goo.gl/q942tWVBvJCwfJqe6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>Av. 13, Guapiles, Costa Rica</p>
                      </a>
                    </div>
                    <div className="contact-item">
                      <Phone />
                      <p>+506 {process.env.REACT_APP_NUMBER}</p>
                    </div>
                    <div className="contact-item">
                      <Mail />
                      <p>info@crepivara.com</p>
                    </div>
                    <div className="contact-item">
                      <Calendar />
                      <p>Lun - Dom: 11:00 AM - 8:00 PM</p>
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
                        <li>
                          
                          <a href="#home"> <IoHomeOutline/> Inicio</a>
                        </li>
                        <li>
                          <Link to="/menu">
                          <MdMenuBook/> Menú
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="footer-links">
                        <li>
                          <Link to="/aboutus"> <FaRegStar/> Nosotros</Link>
                        </li>
                        <li>
                          <a href="#recommendations"><AiOutlineLike/> Recomendaciones</a>
                        </li>
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
                    © 2025 <strong>CrepiVara</strong>. Todos los derechos
                    reservados.
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
