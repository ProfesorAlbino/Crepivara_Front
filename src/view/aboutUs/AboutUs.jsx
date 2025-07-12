import React from 'react'
import "../../styles/view/AboutUsStyle.css"

import { MdHistoryEdu } from "react-icons/md";
import { FaRegStar, FaLeaf, FaMagic } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

import { Link } from 'react-router'

export default function AboutUs() {
  return (
    <section className="about-section py-5">
        <div className="container">
            <div className="row text-center mb-5">
                <div className="col-12">
                    <h1 className="about-title">Acerca de <span className="brand-highlight">CrepiVara</span></h1>
                    <div className="title-divider mx-auto"></div>
                    <p className="about-subtitle">Donde cada crepe cuenta una historia de sabor y tradición</p>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6 mb-4">
                    <div className="about-card h-100">
                        <div className="card-icon">
                            <MdHistoryEdu/>
                        </div>
                        <h3>Nuestra Historia</h3>
                        <p>CrepiVara nació del sueño de compartir la auténtica experiencia de los crepes franceses con nuestra comunidad. Fundada por amantes de la gastronomía, nuestra crepería combina técnicas tradicionales con ingredientes frescos y locales para crear momentos inolvidables en cada bocado.</p>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="about-card h-100">
                        <div className="card-icon">
                            <FaRegStar/>
                        </div>
                        <h3>¿Quiénes Somos?</h3>
<p>En <strong>CrepiVara</strong> nos apasiona crear momentos deliciosos y memorables. Por eso, nos comprometemos a:</p>
<ul>
  <li>🥞 Preparar cada crepa al instante, con ingredientes frescos y de la más alta calidad.</li>
  <li>😊 Ofrecerte un ambiente cálido y acogedor, donde cada visita sea una celebración.</li>
  <li>🌱 Escuchar tus gustos y sugerencias: tu satisfacción es nuestra mejor receta.</li>
  <li>🧼 Mantener impecables estándares de limpieza y seguridad para tu tranquilidad.</li>
  <li>💜 Endulzar tu día, porque una crepa no solo alimenta… ¡también alegra el alma!</li>
</ul>
<p>Gracias por formar parte de la familia <strong>CrepiVara</strong>.<br/>
¡Disfruta cada bocado con una gran sonrisa!</p>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-6 mb-4">
                    <div className="mission-vision-card">
                        <div className="card-header-custom">
                            <i className="fas fa-bullseye"></i>
                            <h3>Nuestra Misión</h3>
                        </div>
                        <div className="card-body-custom">
                            <p>Crear experiencias gastronómicas excepcionales a través de crepes artesanales de la más alta calidad, utilizando ingredientes frescos y técnicas tradicionales, mientras brindamos un servicio cálido y acogedor que haga sentir a cada cliente como en casa.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="mission-vision-card">
                        <div className="card-header-custom">
                            <i className="fas fa-eye"></i>
                            <h3>Nuestra Visión</h3>
                        </div>
                        <div className="card-body-custom">
                            <p>Ser reconocidos como la crepería de referencia en nuestra región, expandiendo la cultura del crepe artesanal y convirtiéndonos en el lugar favorito donde las familias y amigos se reúnen para compartir momentos especiales alrededor de sabores únicos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12">
                    <div className="values-section">
                        <h3 className="text-center mb-4">Nuestros Valores</h3>
                        <div className="row">
                            <div className="col-md-3 col-6 mb-3">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <GiStarsStack/>
                                    </div>
                                    <h5>Calidad</h5>
                                    <p>Ingredientes premium y técnicas perfectas</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <FaLeaf/>
                                    </div>
                                    <h5>Frescura</h5>
                                    <p>Ingredientes frescos y locales siempre</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <MdFamilyRestroom/>
                                    </div>
                                    <h5>Familia</h5>
                                    <p>Un ambiente cálido y acogedor</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mb-3">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <FaMagic/>
                                    </div>
                                    <h5>Tradición</h5>
                                    <p>Respeto por las recetas auténticas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <IoIosTimer /> 
                        </div>
                        <h4>Horarios de Atención</h4>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <span className="day">Lunes - Viernes</span>
                                <span className="time">11:00 AM - 9:00 PM</span>
                            </div>
                            <div className="schedule-item">
                                <span className="day">Sábados</span>
                                <span className="time">11:00 AM - 9:00 PM</span>
                            </div>
                            <div className="schedule-item">
                                <span className="day">Domingos</span>
                                <span className="time">11:00 AM - 9:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <FaMapLocationDot />
                        </div>
                        <h4>Ubicación</h4>
                        <ul className="achievements-list">
                            <li><i className="fas fa-trophy"></i> Mejor Crepería Local 2023</li>
                            <li><i className="fas fa-medal"></i> Premio a la Innovación Gastronómica</li>
                            <li><i className="fas fa-thumbs-up"></i> +1000 reseñas positivas</li>
                            <li><i className="fas fa-heart"></i> Cliente Favorito certificado</li>
                        </ul>
                    </div>
                </div> */}
                <div className="col-lg-4 mb-4">
                    <div className="info-card">
                        <div className="info-icon">
                            <FaHandshakeSimple />
                        </div>
                        <h4>Compromiso Social</h4>
                        <p>En CrepiVara creemos en retribuir a nuestra comunidad. Apoyamos a productores locales, participamos en eventos benéficos y trabajamos para reducir nuestro impacto ambiental a través de prácticas sostenibles.</p>
                        <div className="social-badges">
                            <span className="badge">Eco-Friendly</span>
                            <span className="badge">Comercio Local</span>
                            <span className="badge">Responsabilidad Social</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <div className="cta-section">
                        <h3>¿Listo para vivir la experiencia CrepiVara?</h3>
                        <p>Ven y descubre por qué somos más que una crepería, somos tu nuevo lugar favorito</p>
                        <div className="cta-buttons">
                            <Link to="/menu" className="btn btn-primary-custom me-3">Ver Menú</Link>
                            {/* <a href="#contacto" className="btn btn-outline-custom">Contáctanos</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
