// src/components/ProductGrid/ProductGrid.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';
import { Product } from '../../types';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void; 
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
          <ProductCard 
             key={product.id} 
             product={product} 
             onAddToCart={onAddToCart} 
          />
      ))}
      
      {products.length === 0 && (
          <div style={{gridColumn: '1 / -1', padding: '40px', textAlign: 'center', fontSize: '18px', color: '#666'}}>
              Товарів за вибраними фільтрами не знайдено 😔
          </div>
      )}
    </div>
  );
};

export default ProductGrid;