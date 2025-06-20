import "../../styles/view/TimeCounterStyle.css"
import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const now = new Date();
    // Establece la fecha objetivo al 28 de julio del 2025
    now.setFullYear(2025, 5, 28);
    now.setHours(10, 0, 0, 0);
    setTargetDate(now);
  }, []);

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
      }, 2000);
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
            <div className="crepe-icon"><img src="../images/Logo.webp" alt="CrepiVara"/></div>
            <h1 className="countdown-title">¡Gran Apertura!</h1>
            <p className="countdown-subtitle">Nuestra deliciosa crepería abrirá muy pronto</p>
          </div>

          {!expired ? (
            <div className="countdown-display" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {['days', 'hours', 'minutes', 'seconds'].map(unit => (
                <div key={unit} className="time-unit">
                  <span className={`time-number${pulses[unit] ? ' pulse' : ''}`}>
                    {timeLeft[unit]}
                  </span>
                  <span className="time-label">{unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="expired-message">
              <i className="fas fa-party-horn me-2"></i>
              ¡Ya estamos abiertos! ¡Ven a disfrutar nuestras deliciosas crepes!
              <i className="fas fa-party-horn ms-2"></i>
            </div>
          )}

          <div className="countdown-message">
            <p className="countdown-text">
              ¡Prepárate para disfrutar de las crepes más deliciosas de la ciudad! 
              Tendremos sabores únicos, ingredientes frescos y mucho amor en cada creación.
            </p>
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
