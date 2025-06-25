import React, { useEffect, useState } from 'react'
import { getProducts } from '../../service/Products'
import CardMenu from '../../components/cards/CardMenu';
import "../../styles/view/MainMenuStyle.css"; // Asegúrate de tener el CSS adecuado

export default function MainMenu() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
        console.log("Products fetched successfully");
        console.log(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
    <div className="main-menu-header">
      <div className="title-container">
        <h1 className="main-title">
          <span className="title-accent">Nuestro</span>
          <span className="title-main">Menú</span>
        </h1>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
        <p className="title-subtitle">Descubre sabores únicos creados con pasión</p>
      </div>
    </div>

    <div className="row">

     {products.map((product, index) => (
        <div className="col-12 col-md-3 mt-3" key={index}>
          <CardMenu 
            nombre={product.name} 
            descripcion={product.description} 
            precio={product.price} 
            imagenes={product.images} 
            ingredientes={product.ingredients} 
            disponible={product.available}
            className="mt-3 mb-3"
          />
        </div>
      ))}

      </div>
    </>
    
  )
}
