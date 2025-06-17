import React, { useState, useEffect, useRef } from 'react';
import '../../styles/view/MainMenuStyle.css';

const categories = [
  { key: 'all', label: 'Todas', iconClass: 'fas fa-th-large' },
  { key: 'dulces', label: 'Dulces', iconClass: 'fas fa-ice-cream' },
  { key: 'saladas', label: 'Saladas', iconClass: 'fas fa-cheese' },
  { key: 'especiales', label: 'Especiales', iconClass: 'fas fa-star' },
  { key: 'bebidas', label: 'Bebidas', iconClass: 'fas fa-coffee' },
];

const menuItemsData = [
  {
    id: 1,
    category: 'dulces',
    name: 'Crepe Nutella & Fresas',
    rating: 4.9,
    price: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=150&h=150&fit=crop&crop=center',
    description: 'Deliciosa crepe rellena con Nutella cremosa y fresas frescas, decorada con azúcar glass y crema batida. Un clásico irresistible.',
    tags: ['Popular', 'Vegetariano'],
    badge: 'Popular',
  },
  {
    id: 2,
    category: 'dulces',
    name: 'Crepe Dulce de Leche',
    rating: 4.8,
    price: 7.50,
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=150&h=150&fit=crop&crop=center',
    description: 'Crepe tradicional bañada en dulce de leche argentino, acompañada de nueces y un toque de canela. Sabor casero auténtico.',
    tags: ['Vegetariano'],
    badge: null,
  },
  {
    id: 3,
    category: 'saladas',
    name: 'Crepe Jamón y Queso',
    rating: 4.7,
    price: 9.00,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&h=150&fit=crop&crop=center',
    description: 'Crepe salada rellena con jamón serrano, queso gruyere derretido y espinacas frescas. Acompañada de ensalada verde.',
    tags: ['Proteína'],
    badge: null,
  },
  {
    id: 4,
    category: 'saladas',
    name: 'Crepe Salmón Ahumado',
    rating: 4.9,
    price: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1580013759032-c96505e24cff?w=150&h=150&fit=crop&crop=center',
    description: 'Crepe gourmet con salmón ahumado, queso crema, alcaparras y eneldo fresco. Una experiencia culinaria sofisticada.',
    tags: ['Gourmet', 'Proteína'],
    badge: null,
  },
  {
    id: 5,
    category: 'especiales',
    name: 'Crepe Flambé Grand Marnier',
    rating: 5.0,
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=center',
    description: 'Espectacular crepe flameada con Grand Marnier, servida con helado de vainilla y frutos rojos. ¡Un show culinario!',
    tags: ['Nuevo', 'Espectáculo', 'Premium'],
    badge: 'Nuevo',
  },
  {
    id: 6,
    category: 'especiales',
    name: 'Crepe Vegana Deluxe',
    rating: 4.6,
    price: 10.50,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop&crop=center',
    description: 'Crepe vegana con aguacate, tomates cherry, champiñones salteados y queso vegano. Nutritiva y deliciosa.',
    tags: ['Vegana', 'Saludable'],
    badge: null,
  },
  {
    id: 7,
    category: 'bebidas',
    name: 'Café Especial de la Casa',
    rating: 4.8,
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&h=150&fit=crop&crop=center',
    description: 'Mezcla exclusiva de granos arábica tostados artesanalmente, servido con crema batida y un toque de canela.',
    tags: ['Artesanal', 'Caliente'],
    badge: null,
  },
  {
    id: 8,
    category: 'bebidas',
    name: 'Smoothie de Frutos Rojos',
    rating: 4.7,
    price: 6.00,
    imageUrl: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=150&h=150&fit=crop&crop=center',
    description: 'Refrescante smoothie con fresas, frambuesas, arándanos y yogurt natural. Rico en antioxidantes y vitaminas.',
    tags: ['Saludable', 'Frío', 'Vegetariano'],
    badge: null,
  },
];

export default function MainMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Para animar la entrada con IntersectionObserver:
  const containerRef = useRef(null);
  // Para manejar estado de "agregado" temporal por cada item
  const [addedMap, setAddedMap] = useState({}); // { [id]: boolean }

  // Filtrar items según categoría
  const filteredItems = menuItemsData.filter(item =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  // Efecto para IntersectionObserver: aplicar animación de entrada
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.menu-item-wrapper');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el); // opcional: dejar de observar tras la animación
        }
      });
    }, observerOptions);

    items.forEach(itemEl => {
      // Estilo inicial
      itemEl.style.opacity = '0';
      itemEl.style.transform = 'translateY(30px)';
      itemEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(itemEl);
    });

    // Cleanup: desconectar observer
    return () => {
      observer.disconnect();
    };
  }, [filteredItems]); // re-ejecutar cuando cambie filteredItems para observar los nuevos elementos

  // Handler al hacer click en "Agregar al Carrito"
  const handleAddToCart = (id) => {
    // Marcar como agregado temporalmente
    setAddedMap(prev => ({ ...prev, [id]: true }));
    // Después de 1.5s, revertir
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <section className="menu-section">
      <div className="container">
        <h1 className="section-title">Nuestro Menú</h1>
        <p className="section-subtitle">
          Descubre nuestras deliciosas crepes artesanales, preparadas con ingredientes frescos y de la más alta calidad
        </p>

        {/* Navegación de categorías */}
        <div className="category-nav text-center">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`btn category-btn ${selectedCategory === cat.key ? 'active' : ''}`}
              data-category={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              type="button"
            >
              <i className={`${cat.iconClass} me-2`}></i>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Contenedor de items */}
        <div className="row" id="menu-container" ref={containerRef}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`col-lg-6 col-md-12 menu-category ${item.category} menu-item-wrapper`}
              data-category={item.category}
            >
              <div className="menu-card">
                {item.badge && (
                  <div className={`${item.badge.toLowerCase() === 'nuevo' ? 'popular-badge' : 'popular-badge'}`}>
                    {item.badge}
                  </div>
                )}
                <div className="menu-item-header d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="menu-item-name">{item.name}</h3>
                    <div className="rating">
                      {/* Renderizar estrellas según rating (entero/fractional) */}
                      {Array.from({ length: 5 }, (_, i) => {
                        const starIndex = i + 1;
                        if (item.rating >= starIndex) {
                          return <i key={i} className="fas fa-star"></i>;
                        } else if (item.rating >= starIndex - 0.5) {
                          return <i key={i} className="fas fa-star-half-alt"></i>;
                        } else {
                          return <i key={i} className="far fa-star"></i>;
                        }
                      })}
                      <span className="ms-1">({item.rating.toFixed(1)})</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="menu-item-price">${item.price.toFixed(2)}</div>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="menu-image"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={`menu-tag ${tag.toLowerCase()}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="btn order-btn"
                  type="button"
                  onClick={() => handleAddToCart(item.id)}
                  style={addedMap[item.id] ? { background: 'var(--success-1)' } : {}}
                >
                  <i className={`fas ${addedMap[item.id] ? 'fa-check' : 'fa-shopping-cart'} me-2`}></i>
                  {addedMap[item.id] ? '¡Agregado!' : 'Agregar al Carrito'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
