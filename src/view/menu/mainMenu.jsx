import React, { useState, useMemo } from 'react';
import CardMenu from '../../components/cards/CardMenu';
import "../../styles/view/MainMenuStyle.css"; // Asegúrate de tener el CSS adecuado
import { ReceiptText, Candy, PartyPopper, Vegan, Activity  } from 'lucide-react';

// Define tus productos aquí para mantener las rutas y clases existentes
const PRODUCTS = [
  {
    id: 1,
    nombre: "Banavara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: "3,500",
    imagenes: ["/images/menuImages/crepas/Banavara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "todos",
  },
  {
    id: 2,
    nombre: "BerryVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: "3,500",
    imagenes: ["/images/menuImages/crepas/Berryvara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "dulces",
  },
  {
    id: 3,
    nombre: "CafeCrepiVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: "3,500",
    imagenes: ["/images/menuImages/crepas/Cafecrepivara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: false,
    categoria: "salados", // ajusta según corresponda
  },
  {
    id: 4,
    nombre: "CafeVara",
    descripcion: "Deliciosa crepe rellena con Nutella auténtica, plátano fresco y fresas, decorada con azúcar glass y crema batida.",
    precio: "3,500",
    imagenes: ["/images/menuImages/crepas/Cafevara.webp"],
    ingredientes: ["Nutella", "Plátano", "Fresas"],
    disponible: true,
    categoria: "especiales", // ajusta según corresponda
  }
];

const CATEGORIES = [
  { key: 'todos', label: 'Todos', icon: <ReceiptText /> },
  { key: 'dulces', label: 'Dulces', icon: <Candy /> },
  { key: 'salados', label: 'Salados', icon: <ReceiptText /> },
  { key: 'especiales', label: 'Especiales', icon: <PartyPopper /> },
  { key: 'veganos', label: 'Veganos', icon: <Vegan /> },
  { key: 'fitness', label: 'Fitness', icon: <Activity /> },
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
                        <span className="btn-text">{label}</span>
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
              className="mt-3 mb-3"
            />
          </div>
        ))}
      </div>
    </>
  );
}
