import React, {useState, useEffect} from 'react'
import "../../styles/components/cards/CardOrderStyle.css";
import { Plus, Minus, Trash } from 'lucide-react';


export default function CardOrder({
  imageUrl,
  name,
  unitPrice,
  initialQuantity = 1,
  onRemove = () => {}
}) {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [removed, setRemoved] = useState(false)

  const totalPrice = quantity * unitPrice

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev))

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = carrito.findIndex(p => p.nombre === name);

    if (index >= 0) {
      carrito[index].cantidad = quantity;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [quantity, name]);

  const handleRemove = () => {
      setRemoved(true)
      onRemove()
  }

  return (
    <div
      className={`cart-card mb-3 ${removed ? 'removed' : ''}`}
      style={{ transition: 'transform 0.3s, opacity 0.3s' }}
    >
      <div className="card-content p-3">
        <div className="row g-2 g-md-0 align-items-center">

          {/* Imagen del producto */}
          <div className="col-6 col-sm-2 col-md-3">
            <img
              src={imageUrl}
              alt={name}
              className="cart-card-img img-fluid"
            />
          </div>

          {/* Información del producto */}
          <div className="col-6 col-sm-10 col-md-5">
            <div className="crepe-name fw-bold text-truncate">{name}</div>
            <div className="crepe-price">₡{unitPrice.toLocaleString()}</div>
            <div className="total-price">Total: ₡{totalPrice.toLocaleString()}</div>
          </div>

          {/* Controles de cantidad */}
          <div className="col-6 col-sm-4 col-md-2">
            <div className="quantity-controls d-flex align-items-center justify-content-between">
              <button
                className="quantity-btn"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <h3 className="quantity-number">{quantity}</h3>
              <button
                className="quantity-btn"
                onClick={increaseQuantity}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Botón eliminar */}
          <div className="col-6 col-sm-2 col-md-1 text-center">
            <button
              className="remove-btn"
              onClick={handleRemove}
            >
              <Trash size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
