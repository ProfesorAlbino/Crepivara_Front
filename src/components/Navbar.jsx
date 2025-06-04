import React, { useState } from 'react'
import '../styles/components/NavbarStyle.css'
import DarkMode from './DarkMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <img 
                src="../images/Logo.webp" 
                alt="logo" 
                className="navbar-brand-logo" 
            />
            <a className="navbar-brand" href="/">Crepivara</a>
            <div className="d-flex align-items-center">
                <DarkMode />
                <button 
                    className="navbar-toggler ms-2" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#inicio" onClick={handleNavClick}>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#especialidades" onClick={handleNavClick}>Especialidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#menu" onClick={handleNavClick}>Menú</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nosotros" onClick={handleNavClick}>Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto" onClick={handleNavClick}>Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
