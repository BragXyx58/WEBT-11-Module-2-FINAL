import React from 'react';
import './ProductCard.css';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { 
    code, image, title, rating, reviews, price, oldPrice, discount, bonuses, isEnding, labels, deliveryText, specs, creditText
  } = product;

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        
        <div className="pc-code">Код: {code}</div>

        <div className="pc-labels">
          {discount && <div className="label-sale">ЗНИЖКА {discount}₴</div>}
          {labels?.includes('black') && <div className="label-black">ЧОРНА П'ЯТНИЦЯ</div>}
          {labels?.includes('krash') && <div className="label-krash">КРАЩ</div>}
          {labels?.includes('promo-bank') && (
             <div className="label-round-promo">-5%<br/><span>Приват</span></div>
          )}
        </div>

        <div className="pc-actions-top">
          <button className="icon-btn" title="В обране">♡</button>
          <button className="icon-btn" title="Порівняти">⚖️</button>
        </div>

        <div className="pc-image">
          <img 
            src={image} 
            alt={title} 
            onError={(e) => {e.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image'}}
          />
        </div>

        <div className="pc-specs-preview">
           {specs && specs.slice(0, 3).map((s, i) => (
               <span key={i}>{s.value}{i < (specs.length > 3 ? 2 : specs.length -1) ? ' / ' : ''}</span>
           ))}
        </div>

        <h3 className="pc-title" title={title}>
           {title}
        </h3>

        <div className="pc-rating-row">
          <div className="stars">
            {'★'.repeat(Math.round(rating))}
            <span style={{color:'#ddd'}}>{'★'.repeat(5 - Math.round(rating))}</span>
          </div>
          <span className="reviews">{reviews} відгуків</span>
        </div>

        <div className="pc-status-row">
            {isEnding ? (
                <span className="status-text warning">Закінчується</span>
            ) : (
                <span className="status-text success">В наявності</span>
            )}
            {deliveryText && <span className="delivery-text">🚚 {deliveryText}</span>}
        </div>

        <div className="pc-footer">
          <div className="pc-prices">
            {oldPrice && (
              <div className="price-old-wrapper">
                  <span className="price-old">{oldPrice.toLocaleString()} ₴</span>
              </div>
            )}
            <div className="price-current">{price.toLocaleString()} ₴</div>

            <div className="price-extras">
                {creditText && <span className="credit-tag">🏦 {creditText}</span>}
                {bonuses && <span className="bonus-tag">+{bonuses} ₴</span>}
            </div>
          </div>

          <button className="btn-buy" onClick={() => onAddToCart(product)}>
            <span className="icon-cart-buy">🛒</span>
          </button>
        </div>

        <div className="pc-hover-content">
           {specs && (
             <div className="specs-list">
               {specs.map((spec, idx) => (
                 <div key={idx} className="spec-row">
                   <span className="spec-label">{spec.label}</span>
                   <span className="spec-dots"></span>
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