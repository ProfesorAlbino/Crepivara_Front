import React, { useState } from "react";
import { Eye,  EyeOff} from 'lucide-react';// Importamos los iconos
import "../../styles/view/RegisterStyle.css";
import { register } from "../../js/AuthService.js";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  // Estado para mostrar/ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false || contraseña !== confirmarContraseña) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setError("");
    try {
      const response = await register({ nombre, apellido, correo, contraseña });
      if (response.success) {
        window.location.href = "/login";
      }
    } catch (err) {
      setError(err.message);
    }
    setValidated(true);
  };

  return (
    <div className="container align-items-center d-flex justify-content-center mt-5">
      <div className="register-container">
        <div className="register-header">
          <h1>Crear cuenta</h1>
          <p className="text-muted">Complete el formulario para registrarse</p>
        </div>

        <form 
          className={`needs-validation ${validated ? "was-validated" : ""}`} 
          onSubmit={handleSubmit} 
          noValidate
        >
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <div className="invalid-feedback">Este campo es obligatorio.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
              <div className="invalid-feedback">Este campo es obligatorio.</div>
            </div>
          </div>

          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <div className="form-text">Nunca compartiremos su correo con nadie más.</div>
            <div className="invalid-feedback">Por favor, ingrese un correo válido.</div>
          </div>

          {/* Campo de contraseña con icono */}
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="invalid-feedback">
              La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.
            </div>
          </div>

          {/* Campo de confirmar contraseña con icono */}
          <div className="mb-3 position-relative">
            <label htmlFor="confirm-password" className="form-label">Confirmar contraseña</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirm-password"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <div className="invalid-feedback">
              {contraseña !== confirmarContraseña ? "Las contraseñas no coinciden." : "Este campo es obligatorio."}
            </div>
          </div>

          <div className="password-requirements">
            <h6>La contraseña debe contener:</h6>
            <ul>
              <li>Al menos 8 caracteres</li>
              <li>Una letra mayúscula</li>
              <li>Una letra minúscula</li>
              <li>Un número</li>
              <li>Un carácter especial (@$!%*?&)</li>
            </ul>
          </div>

          <button type="submit" className="btn btn-primary">Crear cuenta</button>

          <div className="login-link">
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
          </div>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}