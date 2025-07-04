import React, { useState, useMemo } from 'react';
import CardMenu from '../../components/cards/CardMenu';
import "../../styles/view/MainMenuStyle.css"; // Asegúrate de tener el CSS adecuado
import { ReceiptText, Candy, PartyPopper} from 'lucide-react';

// Define tus productos aquí para mantener las rutas y clases existentes
const PRODUCTS = [
  {
    id: 1,
    nombre: "Banavara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 3500,
    imagenes: ["/images/menuImages/crepas/Banavara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 2,
    nombre: "BerryVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 3500,
    imagenes: ["/images/menuImages/crepas/Berryvara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 3,
    nombre: "CafeCrepiVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 3500,
    imagenes: ["/images/menuImages/crepas/Cafecrepivara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: false,
    categoria: "Bebidas Calientes", // ajusta según corresponda
  },
  {
    id: 4,
    nombre: "CafeVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 3500,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "Bebidas Frías", // ajusta según corresponda
  },
  {
    id: 5,
    nombre: "CAPIBERRY",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 1900,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["2 frutas", "Jarabe", "Topping"],
    disponible: true,
    categoria: "Crepas",
  },
  {
    id: 6,
    nombre: "CREPA SIN FRUTA",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 2400,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Helado", "Topping", "Jarabe"],
    disponible: true,
    categoria: "Crepas",
  },
  {
    id: 7,
    nombre: "TROPICALVARA",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 2900,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Banano", "Fresas", "Helado", "Jarabe"],
    disponible: true,
    categoria: "Crepas",
  },
  {
    id: 8,
    nombre: "CAPIDULZURA",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 3400,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Melocotón", "Fresa", "Helado", "Nutella"],
    disponible: true,
    categoria: "Crepas",
  },
  {
    id: 9,
    nombre: "CAPIOREO",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 4500,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["2 frutas", "Helado", "Oreo", "Jarabe", "Toppin"],
    disponible: true,
    categoria: "Crepas",
  },
  {
    id: 10,
    nombre: "LA CREPIVARA",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: 6400,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["3 frutas", "2 Helados", "Toppin", "Crema Chantylly", "Nutella"],
    disponible: true,
    categoria: "Crepas",
  },
   {
    id: 11,
    nombre: "Batido 1",
    descripcion: "Batido Natural en Agua",
    precio: 1450,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Cas", "Mora", "Piña", "Sandía", "Guanabana", "fresa", "mora"],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 12,
    nombre: "Batido 2",
    descripcion: "Batido en leche",
    precio: 1950,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Mora", "Piña", "Guanabana", "Banano", "Papaya", "fresa", "melon"],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 13,
    nombre: "CHURCHILL",
    descripcion: " Bebida refrescante",
    precio: 3450,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 14,
    nombre: "CAFÉ FRIO",
    descripcion: "Cafe Frio",
    precio: 2200,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 15,
    nombre: "MANGONADAS",
    descripcion: "Mango",
    precio: 2400,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Mango", "Tajin", "Chamoy", "Gomitas"],
    disponible: true,
    categoria: "Bebidas Frías",
  },
  {
    id: 16,
    nombre: "TÉ",
    descripcion: "Te caliente",
    precio: 800,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Calientes",
  },
  {
    id: 17,
    nombre: "CAFÉ NEGRO",
    descripcion: "Cafe caliente",
    precio: 800,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Calientes",
  },
  {
    id: 18,
    nombre: "CAFÉ CON LECHE",
    descripcion: "Cafe caliente",
    precio: 900,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Calientes"
  },
  {
    id: 19,
    nombre: "CHOCOLATE",
    descripcion: "Chocolate caliente",
    precio: 900,
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: [""],
    disponible: true,
    categoria: "Bebidas Calientes"
  }
];

const CATEGORIES = [
  { key: 'todos', label: 'Todos', icon: <ReceiptText /> },
  { key: 'crepas', label: 'Crepas', icon: <Candy /> },
  { key: 'bebidas frías', label: 'Bebidas Frías', icon: <ReceiptText /> },
  { key: 'bebidas calientes', label: 'Bebidas Calientes', icon: <PartyPopper /> }
];

export default function MainMenu() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Filtrar productos basado en la categoría seleccionada
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'todos') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(
      (p) => p.categoria.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

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

      <section className="category-filter-section py-4">
        <div className="container">
          <div className="filter-container">
            <div className="filter-header text-center mb-4">
              <h3 className="filter-title">
                <i className="fas fa-utensils me-2"></i>
                ¿Qué tipo de crepe te apetece?
              </h3>
              <p className="filter-subtitle">
                Selecciona una categoría para ver nuestras deliciosas opciones
              </p>
            </div>

            <div className="category-buttons-container">
              <div className="row g-3 justify-content-center">
                {CATEGORIES.map(({ key, label, icon }) => {
                  const isActive = key === selectedCategory;
                  console.log(key)
                  // Cuenta dinámicamente productos por categoría
                  const count =
                    key === 'todos'
                      ? PRODUCTS.length
                      : PRODUCTS.filter(
                          (p) => p.categoria.toLowerCase() === key
                        ).length;

                        
                  return (
                    <div key={key} className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <button
                        className={`category-btn ${isActive ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(key)}
                        type="button"
                      >
                        <div className="btn-icon">
                          {icon}
                        </div>
                        <p className="btn-text">{label}</p>
                        <div className="btn-count">{count}</div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="current-selection text-center mt-4">
              <div className="selection-indicator">
                <i className="fas fa-filter me-2"></i>
                Mostrando: <span className="current-category">
                  {selectedCategory === 'todos'
                    ? 'Todos los crepes'
                    : CATEGORIES.find(c => c.key === selectedCategory)?.label}
                </span>
                <span className="current-count">({filteredProducts.length} productos)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row container-fluid justify-content-center mt-5 mb-5">
        {filteredProducts.map((item) => (
          <div key={item.id} className="col-12 col-md-3 mt-3">
            <CardMenu
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
              imagenes={item.imagenes}
              ingredientes={item.ingredientes}
              disponible={item.disponible}
              categoria={item.categoria}
              id={item.id}
              className="mt-3 mb-3"
            />
          </div>
        ))}
      </div>

      
    </>
  );
}
