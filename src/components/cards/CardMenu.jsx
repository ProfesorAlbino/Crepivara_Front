import React, { useState } from 'react';
import "../../styles/components/cards/CardMenuStyle.css"; // Asegúrate de tener el CSS adecuado

const CardMenu = ({ 
  nombre, 
  descripcion, 
  precio, 
  imagenes = [], 
  ingredientes = [], 
  disponible = true 
}) => {
  const [imagenActual, setImagenActual] = useState(0);

  const cambiarImagen = (indice) => {
    setImagenActual(indice);
  };

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="menu-card">
      <div className="card h-100">
        {/* Header con imagen */}
        <div className="card-img-container position-relative">
          {imagenes.length > 0 && (
            <>
              <img
                src={imagenes[imagenActual].image_url
}
                className="card-img-top img-card-menu"
                alt={imagenes[imagenActual].alt_text|| 'Imagen del producto'}
              />
              {imagenes.length > 1 && (
                <>
                  <button
                    className="btn-nav btn-nav-prev"
                    onClick={anteriorImagen}
                    type="button"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button
                    className="btn-nav btn-nav-next"
                    onClick={siguienteImagen}
                    type="button"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  <div className="image-indicators">
                    {imagenes.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === imagenActual ? 'active' : ''}`}
                        onClick={() => cambiarImagen(index)}
                        type="button"
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
          
          {/* Badge de disponibilidad */}
          <div className="availability-badge">
            <span className={`badge ${disponible ? 'badge-available' : 'badge-unavailable'}`}>
              {disponible ? 'Disponible' : 'No Disponible'}
            </span>
          </div>
        </div>

        {/* Cuerpo de la card */}
        <div className="card-body d-flex flex-column">
          {/* Título y precio */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title mb-0">{nombre}</h5>
            <span className="price-tag">₡{precio}</span>
          </div>

          {/* Descripción */}
          <p className="card-text description mb-3">{descripcion}</p>

          {/* Ingredientes */}
{ingredientes.length > 0 && (
  <div className="ingredients-section mb-3">
    <h6 className="ingredients-title fw-bold">Ingredientes:</h6>
    <div className="ingredients-list gap-2">
      {ingredientes.map((ing, i) => (
        <span
          key={i}
          className="ingredient-tag"
        >
          {ing.name}
        </span>
      ))}
    </div>
  </div>
)}

          {/* Botón de acción */}
          <div className="mt-auto">
            <button 
              className={`btn btn-action w-100 ${!disponible ? 'disabled' : ''}`}
              disabled={!disponible}
            >
              {disponible ? 'Agregar al Carrito' : 'No Disponible'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;