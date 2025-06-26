import React from 'react'
import "../../styles/view/OrderHomeStyle.css"

export default function OrderHome() {
  return (
    <>
      <div className="container-fluid orders-container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">

                <div className="orders-header text-center mb-5">
                    <h1 className="orders-title">
                        <i className="fas fa-shopping-bag me-3"></i>
                        Mis Órdenes
                    </h1>
                    <p className="orders-subtitle">Revisa y procede con el pago de tus productos seleccionados</p>
                </div>

                <div className="orders-list">

                    <div className="order-card">
                        <div className="row align-items-center">
                            <div className="col-md-2 col-sm-3">
                                <div className="product-image">
                                    <img src="https://via.placeholder.com/120x120/7c3aed/ffffff?text=Producto" alt="Producto 1" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <div className="product-info">
                                    <h5 className="product-name">Auriculares Inalámbricos Premium</h5>
                                    <p className="product-description">Auriculares de alta calidad con cancelación de ruido activa y hasta 30 horas de batería. Perfectos para música y llamadas.</p>
                                    <div className="product-meta">
                                        <span className="badge product-category">Electrónicos</span>
                                        <span className="product-sku">SKU: AUR-001</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="quantity-control">
                                    <button className="btn-quantity" onclick="decreaseQuantity(1)">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span className="quantity-display" id="qty-1">2</span>
                                    <button className="btn-quantity" onclick="increaseQuantity(1)">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="price-section">
                                    <div className="unit-price">$149.99 c/u</div>
                                    <div className="total-price">$299.98</div>
                                    <button className="btn-remove" onclick="removeItem(1)">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-card">
                        <div className="row align-items-center">
                            <div className="col-md-2 col-sm-3">
                                <div className="product-image">
                                    <img src="https://via.placeholder.com/120x120/6b21a8/ffffff?text=Libro" alt="Producto 2" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <div className="product-info">
                                    <h5 className="product-name">Curso de Programación Avanzada</h5>
                                    <p className="product-description">Curso completo de desarrollo web moderno con JavaScript, React y Node.js. Incluye certificación y soporte 24/7.</p>
                                    <div className="product-meta">
                                        <span className="badge product-category">Educación</span>
                                        <span className="product-sku">SKU: EDU-002</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="quantity-control">
                                    <button className="btn-quantity" onclick="decreaseQuantity(2)">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span className="quantity-display" id="qty-2">1</span>
                                    <button className="btn-quantity" onclick="increaseQuantity(2)">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="price-section">
                                    <div className="unit-price">$89.99 c/u</div>
                                    <div className="total-price">$89.99</div>
                                    <button className="btn-remove" onclick="removeItem(2)">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-card">
                        <div className="row align-items-center">
                            <div className="col-md-2 col-sm-3">
                                <div className="product-image">
                                    <img src="https://via.placeholder.com/120x120/e879f9/ffffff?text=Ropa" alt="Producto 3" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5">
                                <div className="product-info">
                                    <h5 className="product-name">Camiseta Premium Orgánica</h5>
                                    <p className="product-description">Camiseta de algodón 100% orgánico, diseño minimalista y corte moderno. Disponible en varios colores y tallas.</p>
                                    <div className="product-meta">
                                        <span className="badge product-category">Ropa</span>
                                        <span className="product-sku">SKU: ROW-003</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="quantity-control">
                                    <button className="btn-quantity" onclick="decreaseQuantity(3)">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <span className="quantity-display" id="qty-3">3</span>
                                    <button className="btn-quantity" onclick="increaseQuantity(3)">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <div className="price-section">
                                    <div className="unit-price">$24.99 c/u</div>
                                    <div className="total-price">$74.97</div>
                                    <button className="btn-remove" onclick="removeItem(3)">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-summary">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="promo-code">
                                <h6>¿Tienes un código promocional?</h6>
                                <div className="input-group">
                                    <input type="text" className="form-control promo-input" placeholder="Ingresa tu código"/>
                                    <button className="btn btn-promo" type="button">
                                        <i className="fas fa-tag me-2"></i>Aplicar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="summary-card">
                                <h6 className="summary-title">Resumen del Pedido</h6>
                                <div className="summary-line">
                                    <span>Subtotal (6 artículos):</span>
                                    <span>$464.94</span>
                                </div>
                                <div className="summary-line">
                                    <span>Envío:</span>
                                    <span className="text-success">Gratis</span>
                                </div>
                                <div className="summary-line">
                                    <span>Impuestos:</span>
                                    <span>$55.79</span>
                                </div>
                                <hr className="summary-divider"/>
                                <div className="summary-total">
                                    <span>Total:</span>
                                    <span>$520.73</span>
                                </div>
                                <button className="btn btn-checkout w-100">
                                    <i className="fas fa-credit-card me-2"></i>
                                    Proceder al Pago
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
