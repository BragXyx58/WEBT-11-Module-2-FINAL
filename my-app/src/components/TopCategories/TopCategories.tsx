// src/components/TopCategories/TopCategories.tsx
import React, { useRef } from 'react';
import './TopCategories.css';

const categories = [
  { id: 1, title: "Смартфони та телефони", count: 1850 },
  { id: 2, title: "Ноутбуки, планшети та комп'ютерна техніка", count: 10140 },
  { id: 3, title: "Техніка для кухні", count: 3880 },
  { id: 4, title: "Техніка для дому", count: 1551 },
  { id: 5, title: "Телевізори та мультимедіа", count: 670 },
  { id: 6, title: "Смарт-годинники та гаджети", count: 364 },
  { id: 7, title: "Аудіо, фото та відео", count: 1208 },
  { id: 8, title: "Ігрові консолі та геймінг", count: 399 },
  { id: 9, title: "Краса і здоров'я", count: 1994 },
  { id: 10, title: "Посуд", count: 5147 },
  { id: 11, title: "Побутова хімія", count: 1602 },
  { id: 12, title: "Дім, відпочинок та зоотовари", count: 5835 },
  { id: 13, title: "Інструменти і автотовари", count: 17372 },
  { id: 14, title: "Енергозабезпечення", count: 3 }
];

const TopCategories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="container top-categories-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft}>
         ←
      </button>

      <div className="top-categories" ref={scrollContainerRef}>
        {categories.map((cat) => (
          <div key={cat.id} className="top-category-card">
            <div className="cat-icon-wrapper">
                <div className="cat-badge">{cat.count}</div>
                <div className="cat-icon-placeholder">📱</div> 
            </div>
            <span className="cat-title">{cat.title}</span>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>
        →
      </button>
    </div>
  );
};

export default TopCategories;