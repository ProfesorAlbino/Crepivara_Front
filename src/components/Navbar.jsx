import React, { useState } from 'react'
import '../styles/components/NavbarStyle.css'
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <Link to="/" className="navbar-brand d-flex align-items-center">
        <img
          src="../images/Logo.webp"
          alt="logo"
          className="navbar-brand-logo"
        />
        <span className="navbar-brand-title">CrepyVara</span>
      </Link>
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
                        <Link className="nav-link" to="/" onClick={handleNavClick}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#especialidades" onClick={handleNavClick}>Especialidades</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu" onClick={handleNavClick}>Menú</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus" onClick={handleNavClick}>Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#contacto" onClick={handleNavClick}>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders" onClick={handleNavClick}>Órdenes</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
