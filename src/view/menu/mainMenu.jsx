import React, { useEffect, useState } from 'react'
import { getProducts } from '../../service/Products'
import CardMenu from '../../components/cards/CardMenu';

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
    <div>mainMenu</div>

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
