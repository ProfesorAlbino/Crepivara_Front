import React from "react";
import "../styles/view/HomeStyle.css";
import { Link } from "react-router-dom";
import WaveDivider1 from "../components/wave/WaveDivider1";

export default function Home() {
  return (
    <>
      <section id="home" className="hero container-fluid">
        <div className="container-fluid">
          <div className="hero-content fade-in">
            <h1>CrepyVara</h1>
            <p>
              Deliciosas crepas artesanales hechas con amor…
            </p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary" id="ver-menu">
                Ver Menú
              </Link>
              <a href="#reservas" className="btn btn-secondary">
                Hacer Reserva
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="resto" className="container-fluid py-5">
        {/* … resto de tu contenido … */}
      </section>
    </>
  );
}
