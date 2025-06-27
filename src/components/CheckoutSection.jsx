import React, { useState } from 'react';
import { ShoppingCart, CreditCard, ArrowRight } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/CheckoutSectionStyle.css';

export default function CheckoutSection({
  subtotal,
  deliveryFee,
  onOrder = () => {}
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const total = subtotal + deliveryFee;

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onOrder();
      alert('¡Pedido realizado con éxito!');
    }, 2000);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="checkout-section">
            <div className="checkout-header">
              <div className="d-flex align-items-center">
                <ShoppingCart size={24} className="me-2" />
                <h4 className="checkout-title mb-0">Resumen del Pedido</h4>
              </div>
            </div>

            <div className="checkout-body">
              <div className="price-breakdown">
                {[
                  ['Subtotal', subtotal],
                  ['Entrega a domicilio', deliveryFee]
                ].map(([label, value]) => (
                  <div className="price-row" key={label}>
                    <h3 className="price-label">{label}</h3>
                    <h3 className="price-value">₡{value.toLocaleString()}</h3>
                  </div>
                ))}

                <div className="price-divider" />

                <div className="price-row total-row">
                  <h3 className="price-label-total">Total a Pagar</h3>
                  <h3 className="price-value-total">
                    ₡{total.toLocaleString()}
                  </h3>
                </div>
              </div>

              <div className="order-button-container">
                <button
                  className={`order-btn ${isProcessing ? 'processing' : ''}`}
                  onClick={handleOrder}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="d-flex align-items-center justify-content-center">
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      >
                        <h3 className="visually-hidden">Procesando...</h3>
                      </div>
                      Procesando Pedido...
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center">
                      <CreditCard size={20} className="me-2" />
                      Solicitar por Whatsapp
                      <ArrowRight size={20} className="ms-2" />
                    </div>
                  )}
                </button>
              </div>

              <div className="checkout-info">
                <div className="info-item">
                  <small className="info-text">
                    🕐 Tiempo estimado de entrega: 25-35 minutos
                  </small>
                </div>
                <div className="info-item">
                  <small className="info-text">
                    💳 Aceptamos efectivo y tarjetas
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
