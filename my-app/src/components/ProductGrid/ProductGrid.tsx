// src/components/ProductGrid/ProductGrid.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';
import snailBannerImg from '../../assets/snail1.avif'; 

const products = [
    {
    id: 1,
    title: "Смартфон Apple iPhone 14 128Gb Midnight",
    image: "https://content.rozetka.com.ua/goods/images/big/284913536.jpg", 
    rating: 4.9,
    reviews: 432,
    price: 24999,
    oldPrice: 26999,
    discount: 2000,
    bonuses: 250,
    isEnding: false,
    deliveryText: "ДОСТАВИМО за 1₴",
    labels: ['krash', 'promo-bank'],
    creditText: "Частинами від 1 667 ₴/міс",
    specs: [
        { label: "Діагональ дисплея", value: "6.1\"" },
        { label: "Тип екрану", value: "Super Retina XDR" },
        { label: "Модель процесора", value: "Apple A15 Bionic" },
        { label: "Основна камера", value: "12+12 Мп" }
    ]
  },
  {
    id: 2,
    title: "Телевізор Samsung QE55Q8FAAUXUA",
    image: "",
    rating: 5,
    reviews: 15,
    price: 26999,
    oldPrice: 35999,
    discount: 9000,
    bonuses: 270,
    isEnding: false,
    deliveryText: "ДОСТАВИМО за 1₴",
    labels: ['krash'],
    creditText: "Сплачуйте частинами до 24 міс",
    specs: [
        { label: "Діагональ", value: "55\"" },
        { label: "Роздільна здатність", value: "4K Ultra HD" },
        { label: "Smart TV", value: "Tizen" }
    ]
  },
  {
    id: 3,
    title: "Пральна машина Daewoo WMS712T3WB44UA",
    image: "",
    rating: 4.2,
    reviews: 36,
    price: 12222,
    oldPrice: 18999,
    discount: 6777,
    bonuses: 122,
    isEnding: true, 
    labels: ['krash'],
    creditText: "Частинами від 815 ₴/міс",
    specs: [
        { label: "Завантаження", value: "7 кг" },
        { label: "Швидкість віджиму", value: "1200 об/хв" },
        { label: "Клас енергосп.", value: "A+++" }
    ]
  },
  {
    id: 4,
    title: "Сковорода універсальна Tefal C3940432...",
    image: "",
    rating: 4.8,
    reviews: 318,
    price: 599,
    oldPrice: 999,
    discount: 400,
    bonuses: 6,
    isEnding: false,
    deliveryText: "ДОСТАВИМО за 1₴",
    labels: ['krash'],
    creditText: "",
    specs: [
        { label: "Діаметр", value: "24 см" },
        { label: "Матеріал", value: "Алюміній" },
        { label: "Покриття", value: "Антипригарне" }
    ]
  },
  {
    id: 5,
    title: "Ноутбук Acer Nitro V 15 ANV15-51",
    image: "",
    rating: 5,
    reviews: 8,
    price: 39999,
    oldPrice: 44999,
    discount: 5000,
    bonuses: 400,
    isEnding: false,
    deliveryText: "ДОСТАВИМО за 1₴",
    labels: ['black'],
    creditText: "",
    specs: []
  },
   {
    id: 6,
    title: "Телевізор JVC OLED 55\"",
    image: "",
    rating: 4.5,
    reviews: 22,
    price: 18999,
    oldPrice: 22000,
    discount: 3001,
    bonuses: 190,
    isEnding: false,
    deliveryText: "ДОСТАВИМО за 1₴",
    labels: ['black'],
    creditText: "",
    specs: []
  }
];

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid">
      <ProductCard {...products[0]} />
      <ProductCard {...products[1]} />
      <div className="promo-snail-card">
  <img 
    src={snailBannerImg} 
    alt="Оплата Частинами" 
    className="snail-full-img"
  />
</div>
      <ProductCard {...products[2]} />
      <ProductCard {...products[3]} />
      <ProductCard {...products[4]} />
      <ProductCard {...products[5]} />
      <ProductCard {...products[0]} title="Навушники Apple AirPods" price={8999} oldPrice={10999} discount={2000} />
      <ProductCard {...products[1]} title="Sony PlayStation 5 Slim" price={21999} oldPrice={24999} discount={3000} />
    </div>
  );
};

export default ProductGrid;