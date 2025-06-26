import React from "react";
import "../styles/view/HomeStyle.css";
import { Link } from "react-router-dom";

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

      <div className="container-fluid wave1">
        {/* Elimina xmlns y xmlns:xlink */}
        <svg viewBox="0 0 1910 211">
          <path fill="var(--background-color-1)" d="M 0 0 C 64 0 64 119 128 119 L 128 119 L 128 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 127 119 C 200.5 119 200.5 86 274 86 L 274 86 L 274 0 L 127 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 273 86 C 375.5 86 375.5 168 478 168 L 478 168 L 478 0 L 273 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 477 168 C 551.5 168 551.5 29 626 29 L 626 29 L 626 0 L 477 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 625 29 C 684.5 29 684.5 111 744 111 L 744 111 L 744 0 L 625 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 743 111 C 797.5 111 797.5 17 852 17 L 852 17 L 852 0 L 743 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 851 17 C 916.5 17 916.5 197 982 197 L 982 197 L 982 0 L 851 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 981 197 C 1033 197 1033 86 1085 86 L 1085 86 L 1085 0 L 981 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1084 86 C 1138.5 86 1138.5 145 1193 145 L 1193 145 L 1193 0 L 1084 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1192 145 C 1216.5 145 1216.5 110 1241 110 L 1241 110 L 1241 0 L 1192 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1240 110 C 1315 110 1315 32 1390 32 L 1390 32 L 1390 0 L 1240 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1389 32 C 1456 32 1456 109 1523 109 L 1523 109 L 1523 0 L 1389 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1522 109 C 1630 109 1630 187 1738 187 L 1738 187 L 1738 0 L 1522 0 Z" strokeWidth="0"></path>
          <path fill="var(--background-color-1)" d="M 1737 187 C 1823.5 187 1823.5 0 1910 0 L 1910 0 L 1910 0 L 1737 0 Z" strokeWidth="0"></path>
        </svg>
      </div>

      <section className="container-fluid py-5 destacados-section">

        <div className="floating-element">
            <i className="fas fa-cookie-bite" style={{ fontSize: "3rem", color: "var(--accent-1)" }}></i>
        </div>
        <div className="floating-element">
            <i className="fas fa-heart" style={{ fontSize: "2.5rem", color: "var(--featured-1)" }}></i>
        </div>
        <div className="floating-element">
            <i className="fas fa-star" style={{ fontSize: "2rem", color: "var(--accent-2)" }}></i>
        </div>
        
        <div className="container">

            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="destacados-title display-4">Nuestros Destacados</h2>
                    <p className="destacados-subtitle lead">Las crepes más populares de nuestra crepería, preparadas con ingredientes frescos y mucho amor</p>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="destacado-card">
                        <div className="destacado-icon">
                            <i className="fas fa-crown"></i>
                        </div>
                        <h4>Crepe Nutella Premium</h4>
                        <p>Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.</p>
                        <div className="destacado-precio">₡3,500</div>
                        <button className="btn destacado-btn">Ordenar Ahora</button>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="destacado-card">
                        <div className="destacado-icon">
                            <i className="fas fa-fire"></i>
                        </div>
                        <h4>Crepe Especial de la Casa</h4>
                        <p>Nuestra receta secreta con jamón, queso, champiñones frescos, espinaca y salsa especial. ¡Un favorito absoluto!</p>
                        <div className="destacado-precio">₡4,200</div>
                        <button className="btn destacado-btn">Ordenar Ahora</button>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="destacado-card">
                        <div className="destacado-icon">
                            <i className="fas fa-leaf"></i>
                        </div>
                        <h4>Crepe Vegetariana Gourmet</h4>
                        <p>Crepe integral con verduras asadas, queso de cabra, aguacate, tomates cherry y vinagreta de hierbas frescas.</p>
                        <div className="destacado-precio">₡3,800</div>
                        <button className="btn destacado-btn">Ordenar Ahora</button>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 fade-in-up">
                    <div className="destacado-card">
                        <div className="destacado-icon">
                            <i className="fas fa-ice-cream"></i>
                        </div>
                        <h4>Crepe Dulce Tropical</h4>
                        <p>Explosión de sabores tropicales con mango, piña, coco rallado, helado de vainilla y salsa de maracuyá.</p>
                        <div className="destacado-precio">₡3,200</div>
                        <button className="btn destacado-btn">Ordenar Ahora</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 text-center">
                    <button
                        className="btn btn-lg px-5 py-3"
                        style={{
                            background: "linear-gradient(135deg, var(--featured-1), var(--accent-1))",
                            border: "none",
                            borderRadius: "30px",
                            color: "white",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}
                    >
                        <i className="fas fa-utensils me-2"></i>
                        Ver Menú Completo
                    </button>
                </div>
            </div>
        </div>
    </section>


    <div className="container-fluid wave2">
  <svg viewBox="0 0 1536 200">
    <path
      fill="var(--background-color-2"
      d="M 0 0 C 99.5 0 99.5 28 199 28 L 199 28 L 199 0 L 0 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 198 28 C 300 28 300 120 402 120 L 402 120 L 402 0 L 198 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 401 120 C 509 120 509 202 617 202 L 617 202 L 617 0 L 401 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 616 202 C 672.5 202 672.5 94 729 94 L 729 94 L 729 0 L 616 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 728 94 C 781 94 781 174 834 174 L 834 174 L 834 0 L 728 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 833 174 C 881 174 881 110 929 110 L 929 110 L 929 0 L 833 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 928 110 C 963 110 963 149 998 149 L 998 149 L 998 0 L 928 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 997 149 C 1073 149 1073 203 1149 203 L 1149 203 L 1149 0 L 997 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 1148 203 C 1218.5 203 1218.5 110 1289 110 L 1289 110 L 1289 0 L 1148 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 1288 110 C 1342 110 1342 167 1396 167 L 1396 167 L 1396 0 L 1288 0 Z"
      strokeWidth="0"
    ></path>
    <path
      fill="var(--background-color-2"
      d="M 1395 167 C 1460.5 167 1460.5 0 1526 0 L 1526 0 L 1526 0 L 1395 0 Z"
      strokeWidth="0"
    ></path>
  </svg>
</div>
    </>
  );
}
