import React from 'react';
import './ProductControls.css';

interface ProductControlsProps {
    productCount: number;
}

const ProductControls: React.FC<ProductControlsProps> = ({ productCount }) => {
  return (
    <div className="product-controls-wrapper">
        <div className="container product-controls">
            <div className="pc-left">
                <h1 className="pc-title">Чорна п'ятниця 2025</h1>
                <div className="pc-subtitle">
                    <span className="pc-count">{productCount} товарів</span>
                </div>
            </div>

            <div className="pc-right">
                <div className="price-toggle">
                    <button className="pt-btn active">Повна ціна</button>
                    <button className="pt-btn">Ціна в місяць</button>
                </div>

                <div className="sort-dropdown">
                    <span className="icon-sort">⇅</span>
                    <span>За популярністю</span>
                </div>

                <div className="view-switcher">
                    <button className="view-btn active">
                        <span className="icon-grid-view">▦</span>
                    </button>
                    <button className="view-btn">
                         <span className="icon-list-view">☰</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductControls;