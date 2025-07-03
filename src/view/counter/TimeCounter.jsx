import "../../styles/view/TimeCounterStyle.css"
import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";

const emojisFloating = ['🥞', '🍯', '🍓', '🥞'];
const emojisConfetti = ['🎉', '🎊', '🥞', '🍯', '🍓', '✨'];

export default function TimeCounter() {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00'
  });
  const [pulses, setPulses] = useState({
    days: false, hours: false, minutes: false, seconds: false
  });
  const [expired, setExpired] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

 useEffect(() => {
    // Cambia según tu herramienta (CRA o Vite):
    const openingDateStr = process.env.REACT_APP_OPENING_DATE;
    const hourOpeningDateStr = process.env.REACT_APP_OPENING_HOUR; // si usas CRA
    // const openingDateStr = import.meta.env.VITE_OPENING_DATE; // si usas Vite

    if (!openingDateStr) {
      console.warn('REACT_APP_OPENING_DATE no está definida');
      return;
    }
    // Esperamos formato "DD/MM/YYYY"
    const partes = openingDateStr.split('/');
    if (partes.length !== 3) {
      console.error('Formato inválido en REACT_APP_OPENING_DATE:', openingDateStr);
      return;
    }
    const [diaStr, mesStr, añoStr] = partes;
    const dia = Number(diaStr);
    const mes = Number(mesStr);
    const año = Number(añoStr);
    if (
      Number.isNaN(dia) ||
      Number.isNaN(mes) ||
      Number.isNaN(año) ||
      dia < 1 || dia > 31 ||
      mes < 1 || mes > 12
    ) {
      console.error('Valores inválidos en REACT_APP_OPENING_DATE:', openingDateStr);
      return;
    }
    // JavaScript: meses 0–11
    const fechaObj = new Date(año, mes - 1, dia);
    // Opcional: si necesitas hora específica, p. ej. 10:00:
    fechaObj.setHours(hourOpeningDateStr, 0, 0, 0);

    setTargetDate(fechaObj);
  }, []);
    

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
      .pulse {
        animation: pulse-scale 0.5s ease;
      }
      @keyframes pulse-scale {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
      .confetti-piece {
        position: absolute;
        top: 0%;
        font-size: 2rem;
        pointer-events: none;
        z-index: 1000;
        animation: fall 3s linear forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // useEffect(() => {
  //   const now = new Date();
  //   // Establece la fecha objetivo al 28 de julio del 2025
  //   now.setFullYear(2025, 5, 20);
  //   now.setHours(10, 0, 0, 0);
  //   setTargetDate(now);
  // }, []);

  useEffect(() => {
    if (!targetDate) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setExpired(false);
    updateTime();
    intervalRef.current = setInterval(updateTime, 1000);
    return () => clearInterval(intervalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const updateTime = () => {
    if (!targetDate) return;
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    if (distance <= 0) {
      clearInterval(intervalRef.current);
      setExpired(true);
      setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      triggerConfetti();
      // Redirige después de 2 segundos
      setTimeout(() => {
        navigate("/"); // Cambia "/" por la ruta deseada
      }, 5000);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const newVals = {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };

    setPulses(prev => ({
      days: prev.days || timeLeft.days !== newVals.days,
      hours: prev.hours || timeLeft.hours !== newVals.hours,
      minutes: prev.minutes || timeLeft.minutes !== newVals.minutes,
      seconds: prev.seconds || timeLeft.seconds !== newVals.seconds,
    }));
    setTimeLeft(newVals);

    setTimeout(() => {
      setPulses({ days: false, hours: false, minutes: false, seconds: false });
    }, 500);
  };

  const triggerConfetti = () => {
    const pieces = [];
    for (let i = 0; i < 20; i++) {
      const id = `${Date.now()}-${i}`;
      const left = Math.random() * 100;
      const emoji = emojisConfetti[Math.floor(Math.random() * emojisConfetti.length)];
      pieces.push({ id, left, emoji });
      setTimeout(() => {
        setConfettiPieces(prev => prev.filter(p => p.id !== id));
      }, 3000);
    }
    pieces.forEach((piece, idx) => {
      setTimeout(() => {
        setConfettiPieces(prev => [...prev, piece]);
      }, idx * 200);
    });
  };

  return (
  <section style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="floating-elements">
      {emojisFloating.map((e, idx) => (
        <div key={idx} className="floating-crepe">{e}</div>
      ))}
    </div>

    <div className="countdown-container">
      <div className="countdown-card">
        <div className="countdown-header">
          <div className="crepe-icon">
            <img src="../images/Logo.webp" alt="CrepiVara" className="img-time-counter"/>
          </div>
          <h1 className="countdown-title">¡Gran Apertura!</h1>
          <p className="countdown-subtitle">
            Nuestra deliciosa crepería abrirá muy pronto
          </p>
        </div>

        {!expired ? (
          <div className="countdown-display d-flex justify-content-center gap-3">
            {['days', 'hours', 'minutes', 'seconds'].map(unit => (
              <div key={unit} className="time-unit text-center">
                <span className={`time-number${pulses[unit] ? ' pulse' : ''}`}>
                  {timeLeft[unit]}
                </span>
                <h3 className="time-label">
                  {unit === 'days' ? 'Días' :
                   unit === 'hours' ? 'Horas' :
                   unit === 'minutes' ? 'Minutos' :
                   'Segundos'}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="expired-message text-center">
            <i className="fas fa-party-horn me-2"></i>
            ¡Ya estamos abiertos! ¡Ven a disfrutar nuestras deliciosas crepes!
            <i className="fas fa-party-horn ms-2"></i>
          </div>
        )}

        <div className="countdown-message mt-3">
          <p className="countdown-text">
            ¡Prepárate para disfrutar de las crepes más deliciosas de la ciudad! 
            Tendremos sabores únicos, ingredientes frescos y mucho amor en cada creación.
          </p>
        </div>
      </div>
    </div>

    {/* Sección del Mapa Estilizada */}
    <div className="map-section container">
      <div className="map-decorative-elements">
        <div className="floating-location">📍</div>
        <div className="floating-location">🗺️</div>
        <div className="floating-location">📍</div>
      </div>
      
      <div className="map-container">
        <div className="map-header">
          <h2 className="map-title">
            <span className="map-icon">📍</span>
            Encuéntranos aquí
          </h2>
          <p className="map-subtitle">
            Te esperamos en nuestra ubicación para que disfrutes la mejor experiencia
          </p>
        </div>

        <div className="map-frame-container">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.40875251958144!2d-83.78714960743129!3d10.217956979851799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1751584859811!5m2!1ses-419!2scr"
            allowFullScreen=""
            loading="lazy"
            title="Mapa de CrepiVara"
          ></iframe>
        </div>

        <div className="map-info">
          <div className="map-address">
            <div className="address-text">
              <i className="fas fa-map-marker-alt address-icon"></i>
              CrepiVara - Crepería Gourmet
            </div>
            <p className="address-details">
              Avenida 13, Guapiles, Costa Rica<br/>
              Puente las Iguanas
            </p>
          </div>

          <div className="map-actions">
            <a 
              href="https://maps.app.goo.gl/q942tWVBvJCwfJqe6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-btn"
            >
              <i className="fas fa-directions"></i>
              Cómo llegar
            </a>
            <a 
              href="tel:+50612345678" 
              className="map-btn map-btn-secondary"
            >
              <i className="fas fa-phone"></i>
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </div>

    {confettiPieces.map(piece => (
      <div
        key={piece.id}
        className="confetti-piece"
        style={{ left: `${piece.left}%` }}
      >
        {piece.emoji}
      </div>
    ))}
  </section>
);
}
