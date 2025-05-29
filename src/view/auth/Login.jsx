import React, { useState } from "react";
import "../../styles/view/LoginStyle.css";
import { login } from "../../js/AuthService.js";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setError("");
    try {
      const response = await login({ mail, password });
      if (response.success) {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err.message);
    }
    setValidated(true);
  };

  return (
    <div className="container-fluid align-items-center d-flex justify-content-center mt-5">
      <div className="login-container">
        <div className="login-header">
          <h1>Iniciar Sesión</h1>
          <p className="text-muted">Ingresa tus credenciales para continuar</p>
        </div>

        <form 
          className={`row g-3 needs-validation ${validated ? "was-validated" : ""}`} 
          onSubmit={handleSubmit} 
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="validationCustomEmail" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustomEmail"
              placeholder="nombre@ejemplo.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <div className="valid-feedback">¡Todo bien!</div>
            <div className="invalid-feedback">Por favor, ingresa un correo válido.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustomPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustomPassword"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="valid-feedback">¡Todo bien!</div>
            <div className="invalid-feedback">La contraseña es obligatoria.</div>
          </div>

          <div className="mb-3 d-flex justify-content-end">
            <a href="/" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>

          <div className="register-link">
            ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
          </div>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
