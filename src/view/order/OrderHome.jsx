import { useEffect, useState } from 'react'
import "../../styles/view/OrderHomeStyle.css"
import CardOrder from '../../components/cards/CardOrder'
import CheckoutSection from '../../components/CheckoutSection';

export default function OrderHome() {

    const products = JSON.parse(localStorage.getItem('carrito')) || [];
    const [cartItems, setCartItems] = useState(products);

    useEffect(() => {
    const interval = setInterval(() => {
        const storedProducts = JSON.parse(localStorage.getItem('carrito')) || [];
        // Solo actualiza si hay diferencia con el estado actual
        if (JSON.stringify(storedProducts) !== JSON.stringify(cartItems)) {
            setCartItems(storedProducts);
        }
    }, 500); // chequea cada 500ms

    return () => clearInterval(interval); // limpiar al desmontar componente
}, [cartItems]);

    const subtotal = cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);

  return (
    <>
      <div className="container-fluid">

        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">

                <div className="orders-header text-center mb-5 mt-5">
                    <h1 className="orders-title">
                        <i className="fas fa-shopping-bag me-3"></i>
                        Mis Órdenes
                    </h1>
                    <p className="orders-subtitle">Revisa y procede con el pago de tus productos seleccionados</p>
                </div>   
            </div>

            <div className="col-12 col-lg-10 col-xl-8 cards-container">
                <div className="orders-list">

                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <CardOrder 
                                key={index}
                                imageUrl={item.imagen}
                                name={item.nombre}
                                unitPrice={item.precio}
                                initialQuantity={item.cantidad}
                                onRemove={() => {
                                    const updatedCart = cartItems.filter((_, i) => i !== index);
                                    setCartItems(updatedCart);
                                    localStorage.setItem('carrito', JSON.stringify(updatedCart));
                                }}
                            />
                        ))
                    ) : (
                        <div className="text-center">
                            <h2 className="text-muted">No hay productos en tu carrito</h2>
                            <p className="text-muted">Agrega productos para verlos aquí.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className='chceckout-section'>
            <CheckoutSection
                subtotal={subtotal}
                deliveryFee={0}
                onOrder={() => {
                    alert('¡Pedido realizado con éxito!');
                    localStorage.removeItem('carrito');
                    setCartItems([]);
                }}
            />
        </div>
    </div>
    </>
  )
}