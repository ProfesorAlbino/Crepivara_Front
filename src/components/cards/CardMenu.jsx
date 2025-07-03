import React, { useState } from "react";
import "../../styles/components/cards/CardMenuStyle.css"; // Asegúrate de tener el CSS adecuado
import { ArrowRight, ArrowLeft } from "lucide-react";

const CardMenu = ({
  nombre,
  descripcion,
  precio,
  imagenes = [],
  ingredientes = [],
  disponible = true,
  categoria,
  id,
}) => {
  const [imagenActual, setImagenActual] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const cambiarImagen = (indice) => {
    setImagenActual(indice);
  };

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  //Agregar al carrito (localStorage)
const agregarAlCarrito = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar que esté disponible
  if (!disponible) {
    return;
  }

  // Buscar si el producto ya está en el carrito
  const idx = carrito.findIndex(p => p.nombre === nombre);

  if (idx >= 0) {
    // Si ya existe, aumentar la cantidad
    carrito[idx].cantidad += 1;
  } else {
    // Si no existe, crear uno nuevo con cantidad inicial 1
    const producto = {
      nombre,
      descripcion,
      precio,
      imagen: imagenes[imagenActual],
      ingredientes,
      disponible,
      categoria,
      cantidad: 1,
      id
    };
    carrito.push(producto);
  }

  // Guardar de nuevo en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  setAgregado(true);
  setTimeout(() => {
    setAgregado(false);
  }, 2000);
};

  return (
    <div className="menu-card">
      <div className="card h-100">
        {/* Header con imagen */}
        <div className="card-img-container position-relative">
          {imagenes.length > 0 && (
            <>
              <img
                src={imagenes[imagenActual]}
                className="card-img-top img-card-menu"
                alt={imagenes[imagenActual].alt_text || "Imagen del producto"}
              />
              {imagenes.length > 1 && (
                <>
                  <button
                    className="btn-nav btn-nav-prev"
                    onClick={anteriorImagen}
                    type="button"
                  >
                    <i className="bi bi-chevron-left">
                      <ArrowLeft />
                    </i>
                  </button>
                  <button
                    className="btn-nav btn-nav-next"
                    onClick={siguienteImagen}
                    type="button"
                  >
                    <i className="bi bi-chevron-right">
                      <ArrowRight />
                    </i>
                  </button>
                  <div className="image-indicators">
                    {imagenes.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${
                          index === imagenActual ? "active" : ""
                        }`}
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
            <span
              className={`badge ${
                disponible ? "badge-available" : "badge-unavailable"
              }`}
            >
              {disponible ? "Disponible" : "No Disponible"}
            </span>
          </div>
        </div>

        {/* Cuerpo de la card */}
        <div className="card-body d-flex flex-column">
          {/* Título y precio */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title mb-0">{nombre}</h5>
            <h3 className="price-tag">₡{precio}</h3>
          </div>

          <div className="category-tag  mb-3">
            <h3 className="badge badge-category">{categoria}</h3>
          </div>

          {/* Descripción */}
          <p className="card-text description mb-3">{descripcion}</p>

          {/* Ingredientes */}
{ingredientes.length > 0 && (
  <div className="ingredients-section mb-4">
    <h6 className="ingredients-title fw-bold mb-3">Ingredientes:</h6>

    {/* Usamos row-cols-auto para que cada “badge” ocupe justo el espacio necesario */}
    <div className="row row-cols-auto g-2">
      {ingredientes.map((ing, i) => (
        <div key={i} className="col">
          {/* Badge de Bootstrap para destacar cada ingrediente */}
          <span className="badge bg-secondary text-light px-3 py-2">
            {ing}
          </span>
        </div>
      ))}
    </div>
  </div>
)}

          {/* Botón de acción */}
         <div className="mt-auto">
      <button
  onClick={agregarAlCarrito}
  type="button"
  className={`btn btn-action w-100 ${
    !disponible ? "disabled" : ""
  } ${agregado ? "agregado" : ""}`}
  disabled={!disponible}
>
  {disponible
    ? agregado
      ? "Orden Agregada"
      : "Agregar a la Orden"
    : "No Disponible"}
</button>
    </div>


        </div>
      </div>
    </div>
  );
};

export default CardMenu;
