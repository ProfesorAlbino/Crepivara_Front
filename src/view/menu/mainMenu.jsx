import React, { useEffect, useState } from 'react'
import { getProducts } from '../../service/Products'
import CardMenu from '../../components/cards/CardMenu';

export default function MainMenu() {

  const imagenes = ["https://i.blogs.es/b45e35/como-hacer-masa-para-crepas-3-/1366_2000.jpg", "https://cdn7.kiwilimon.com/recetaimagen/13571/960x640/6052.png.jpg"];
  const ingredientes = ["arina", "huevo", "leche", "sal", "azucar"];

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
