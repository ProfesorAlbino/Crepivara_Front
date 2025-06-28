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
  const [numTable, setNumTable] = useState(0);
  const [name, setName] = useState('');

  const handleOrder = () => {
    setIsProcessing(true);

    const whatsappText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_NUMBER}?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsProcessing(false);
      onOrder();
      alert('¡Pedido realizado con éxito!');
    }, 2000);
  };

  const generateWhatsAppMessage = () => {
  const cart = JSON.parse(localStorage.getItem('carrito') || '[]');

  const productLines = cart
    .map(item => `• ${item.nombre}: ₡${item.precio.toLocaleString()} ${item.cantidad || 1} unidad(es)`)
    .join('\n');

  const total = cart.reduce((sum, item) => sum + item.precio * (item.cantidad || 1), 0);

  // 4. Compone el mensaje final
  return encodeURIComponent(
    'Hola, mi nombre es ' + name + '.\n\n' +
    `Nuevo Pedido*\n\n` +
    `${productLines}\n\n` +
    `*Total:* ₡${total.toLocaleString()}\n` +
    `*Mesa:* ${numTable}\n\n` +
    `¡Muchas gracias!`
  );
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

                <div className="name-input mt-3">
                  <label htmlFor="name" className="form-label">Ingrese su Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del cliente"
                    required
                    autoFocus
                  />
                </div>

                <div className="table-number-input mt-3">
                  <label htmlFor="tableNumber" className="form-label">Ingrese el número de Mesa</label>
                  <input
                    type="number"
                    id="tableNumber"
                    className="form-control"
                    value={numTable}
                    onChange={(e) => setNumTable(Number(e.target.value))}
                    min="0"
                    placeholder="Número de mesa"
                    required
                  />
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
