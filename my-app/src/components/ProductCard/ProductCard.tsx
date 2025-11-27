// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import './ProductCard.css';

interface ProductProps {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  bonuses?: number;
  isEnding?: boolean; 
  labels?: string[]; 
  deliveryText?: string; 
  
  specs?: { label: string; value: string }[];
  creditText?: string;
}

const ProductCard: React.FC<ProductProps> = ({ 
  image, title, rating, reviews, price, oldPrice, discount, bonuses, isEnding, labels, deliveryText, specs, creditText
}) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <div className="pc-labels">
          {discount && <div className="label-sale">Вигода {discount}₴</div>}
          {labels?.includes('black') && <div className="label-black">Чорна П'ятниця</div>}
          {labels?.includes('promo-bank') && (
             <div className="label-round-promo">-10%<br/><span style={{fontSize:'8px'}}>ПриватБанк</span></div>
          )}
        </div>

        <div className="pc-actions-top">
          <button className="icon-btn">♡</button>
          <button className="icon-btn">⚖️</button>
        </div>

        <div className="pc-image">
          <img src={image} alt={title} />
          <div className="pc-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {isEnding ? (
            <div className="status-text warning">Товару лишилось мало</div>
        ) : (
            <div className="status-text success">Товару ще багато</div>
        )}
        
        <h3 className="pc-title">
           {labels?.includes('krash') && <span className="icon-crown">👑 Кращ</span>}
           {title}
        </h3>

        <div className="pc-rating">
          <span className="stars">★ {rating}</span>
          <span className="reviews">💬 {reviews}</span>
        </div>

        {deliveryText && (
          <div className="pc-delivery">
              <span className="blue-tag">● {deliveryText}</span>
          </div>
        )}

        <div className="pc-footer">
          <div className="pc-prices">
            {oldPrice && (
              <div className="price-old-row">
                  <span className="price-old">{oldPrice.toLocaleString()} ₴</span>
                  {discount && <span className="discount-tag">-{discount} ₴</span>}
              </div>
            )}
            <div className="price-current">{price.toLocaleString()} ₴</div>
            {bonuses && <div className="bonus-text">+{bonuses} ₴ на бонусний рахунок</div>}
          </div>

          <button className="btn-buy">
            🛒
          </button>
        </div>

        <div className="pc-hover-content">
           {creditText && (
             <div className="credit-block">
               <span className="icon-pie">🍕</span> {creditText}
             </div>
           )}

           {specs && (
             <div className="specs-list">
               {specs.map((spec, idx) => (
                 <div key={idx} className="spec-row">
                   <span className="spec-label">{spec.label}:</span>
                   <span className="spec-value">{spec.value}</span>
                 </div>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;