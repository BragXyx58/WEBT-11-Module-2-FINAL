import React, { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import TopCategories from './components/TopCategories/TopCategories';
import ProductControls from './components/ProductControls/ProductControls';
import Sidebar from './components/Sidebar/Sidebar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Footer from './components/Footer/Footer';
import CartModal from './components/CartModal/CartModal';
import { Product } from './types';
import './index.css';

const initialProducts: Product[] = [
  {
    id: 1,
    code: "2849135",
    title: "Смартфон Apple iPhone 15 Pro 128GB Black Titanium",
    image: "/src/assets/iphone-15-pro.webp", 
    rating: 4.9,
    reviews: 432,
    price: 46999,
    oldPrice: 52999,
    discount: 6000,
    bonuses: 470,
    isEnding: false,
    deliveryText: "Завтра",
    labels: ['krash', 'promo-bank'],
    brand: "Apple",
    category: "Смартфони та телефони",
    creditText: "15 х 3134 ₴",
    specs: [
        { label: "Екран", value: "6.1\" OLED" },
        { label: "Процесор", value: "A17 Pro" },
        { label: "Камера", value: "48+12+12 Мп" }
    ]
  },
  {
    id: 2,
    code: "4676571",
    title: "Телевізор Samsung QE55Q80C (2024)",
    image: "/src/assets/samsung-tv-55.webp",
    rating: 5,
    reviews: 15,
    price: 32999,
    oldPrice: 41999,
    discount: 9000,
    bonuses: 330,
    isEnding: false,
    deliveryText: "Завтра",
    labels: ['krash'],
    brand: "Samsung",
    category: "Телевізори та мультимедіа",
    creditText: "20 х 1650 ₴",
    specs: [
        { label: "Діагональ", value: "55\"" },
        { label: "Smart TV", value: "Tizen" }
    ]
  },
  {
    id: 3,
    code: "3626245",
    title: "Пральна машина Bosch WAN28262UA",
    image: "/src/assets/bosch-washer.webp",
    rating: 4.8,
    reviews: 86,
    price: 18999,
    oldPrice: 22999,
    discount: 4000,
    bonuses: 190,
    isEnding: true,
    labels: ['black'],
    brand: "Bosch",
    category: "Техніка для дому",
    creditText: "10 х 1900 ₴",
    specs: [
        { label: "Завантаження", value: "8 кг" },
        { label: "Віджим", value: "1400 об/хв" }
    ]
  },
  {
    id: 4,
    code: "1665972",
    title: "Сковорода Tefal Unlimited 24 см",
    image: "/src/assets/tefal-pan.webp",
    rating: 4.7,
    reviews: 318,
    price: 1299,
    oldPrice: 1999,
    discount: 700,
    bonuses: 13,
    isEnding: false,
    deliveryText: "Сьогодні",
    labels: ['krash'],
    brand: "Tefal",
    category: "Посуд",
    specs: [
        { label: "Діаметр", value: "24 см" },
        { label: "Покриття", value: "Titanium" }
    ]
  },
  {
    id: 5,
    code: "4686259",
    title: "Ноутбук Acer Nitro V 15 ANV15-51-57H9",
    image: "/src/assets/acer-nitro.webp",
    rating: 5,
    reviews: 8,
    price: 39999,
    oldPrice: 44999,
    discount: 5000,
    bonuses: 400,
    isEnding: false,
    deliveryText: "Завтра",
    labels: ['black'],
    brand: "Acer",
    category: "Ноутбуки, планшети та ПК",
    creditText: "10 х 4000 ₴",
    specs: [
       { label: "CPU", value: "i5-13420H" },
       { label: "GPU", value: "RTX 4050" },
       { label: "RAM", value: "16 ГБ" }
    ]
  },
   {
    id: 6,
    code: "3806132",
    title: "Ігрова консоль Sony PlayStation 5 Slim",
    image: "/src/assets/ps5-slim.webp",
    rating: 5,
    reviews: 550,
    price: 21999,
    oldPrice: 24999,
    discount: 3000,
    bonuses: 220,
    isEnding: false,
    deliveryText: "Сьогодні",
    brand: "Sony",
    category: "Ігрові консолі та геймінг",
    labels: ['krash', 'black'],
    creditText: "15 х 1466 ₴",
    specs: [
       { label: "Пам'ять", value: "1TB SSD" },
       { label: "Геймпад", value: "1 шт" }
    ]
  },
  {
    id: 7,
    code: "2849206",
    title: "Навушники Apple AirPods Pro 2 USB-C",
    image: "/src/assets/airpods-pro.webp",
    rating: 4.9,
    reviews: 120,
    price: 8999,
    oldPrice: 10999,
    discount: 2000,
    bonuses: 90,
    isEnding: false,
    brand: "Apple",
    category: "Аудіо, фото та відео",
    labels: ['krash'],
    creditText: "5 х 1800 ₴",
    specs: [
       { label: "Тип", value: "Вакуумні" },
       { label: "Шумодав", value: "Активний" }
    ]
  },
  {
    id: 8,
    code: "5321441",
    title: "Стайлер Dyson Airwrap Complete Long",
    image: "/src/assets/dyson-airwrap.webp",
    rating: 5,
    reviews: 45,
    price: 26999,
    oldPrice: 29999,
    discount: 3000,
    bonuses: 270,
    isEnding: false,
    brand: "Dyson",
    category: "Краса і здоров'я",
    labels: ['krash'],
    creditText: "10 х 2700 ₴",
    specs: [
       { label: "Потужність", value: "1300 Вт" },
       { label: "Насадки", value: "6 шт" }
    ]
  },
  {
    id: 9,
    code: "6541238",
    title: "Робот-пилосос Xiaomi Robot Vacuum S10",
    image: "/src/assets/xiaomi-robot.webp",
    rating: 4.6,
    reviews: 210,
    price: 8999,
    oldPrice: 10999,
    discount: 2000,
    bonuses: 90,
    isEnding: false,
    brand: "Xiaomi",
    category: "Техніка для дому",
    labels: ['black'],
    creditText: "12 х 750 ₴",
    specs: [
       { label: "Тип", value: "Сухе + вологе" },
       { label: "Навігація", value: "LDS" }
    ]
  },
  {
    id: 10,
    code: "7412589",
    title: "Кавомашина Philips Series 2200",
    image: "/src/assets/philips-coffee.webp",
    rating: 4.8,
    reviews: 330,
    price: 13999,
    oldPrice: 18999,
    discount: 5000,
    bonuses: 140,
    isEnding: false,
    brand: "Philips",
    category: "Техніка для кухні",
    labels: ['promo-bank'],
    creditText: "10 х 1400 ₴",
    specs: [
       { label: "Тип", value: "Автомат" },
       { label: "Капучінатор", value: "Ручний" }
    ]
  },
  {
    id: 11,
    code: "9632587",
    title: "Apple Watch SE 2 40mm Midnight",
    image: "/src/assets/apple-watch.webp",
    rating: 4.9,
    reviews: 88,
    price: 10499,
    oldPrice: 11999,
    discount: 1500,
    bonuses: 105,
    isEnding: false,
    brand: "Apple",
    category: "Смарт-годинники та гаджети",
    labels: [],
    creditText: "6 х 1750 ₴",
    specs: [
       { label: "Корпус", value: "Алюміній" },
       { label: "Захист", value: "WR50" }
    ]
  },
  {
    id: 12,
    code: "1234567",
    title: "УМБ Baseus Bipow 20000mAh 20W",
    image: "/src/assets/baseus-powerbank.webp",
    rating: 4.8,
    reviews: 650,
    price: 1299,
    oldPrice: 1699,
    discount: 400,
    bonuses: 13,
    brand: "Baseus",
    category: "Смартфони та телефони",
    labels: ['krash'],
    specs: [
       { label: "Ємність", value: "20000 mAh" },
       { label: "Вихід", value: "USB-C, USB-A" }
    ]
  },
  {
    id: 13,
    code: "9876543",
    title: "Холодильник LG GW-B509",
    image: "/src/assets/lg-fridge.webp",
    rating: 4.7,
    reviews: 42,
    price: 24999,
    oldPrice: 31999,
    discount: 7000,
    bonuses: 250,
    brand: "LG",
    category: "Техніка для кухні",
    labels: ['black', 'promo-bank'],
    creditText: "20 х 1250 ₴",
    specs: [
       { label: "Висота", value: "203 см" },
       { label: "No Frost", value: "Так" }
    ]
  },
  {
    id: 14,
    code: "4567891",
    title: "Мікрохвильова піч Samsung ME88",
    image: "/src/assets/samsung-microwave.webp",
    rating: 4.6,
    reviews: 156,
    price: 4599,
    oldPrice: 5599,
    discount: 1000,
    bonuses: 46,
    brand: "Samsung",
    category: "Техніка для кухні",
    labels: [],
    creditText: "4 х 1150 ₴",
    specs: [
       { label: "Об'єм", value: "23 л" },
       { label: "Потужність", value: "800 Вт" }
    ]
  },
  {
    id: 15,
    code: "3216549",
    title: "Миша Logitech G102 Lightsync",
    image: "/src/assets/logitech-mouse.webp",
    rating: 4.9,
    reviews: 890,
    price: 999,
    oldPrice: 1399,
    discount: 400,
    bonuses: 10,
    brand: "Logitech",
    category: "Ігрові консолі та геймінг",
    labels: ['krash'],
    specs: [
       { label: "DPI", value: "8000" },
       { label: "Підсвітка", value: "RGB" }
    ]
  }
];

function App() {
  const [products] = useState<Product[]>(initialProducts);
  

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });


  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const toggleCartModal = () => setIsCartOpen(!isCartOpen);



  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (product.price < priceRange.min || product.price > priceRange.max) return false;
      if (selectedBrands.length > 0 && product.brand && !selectedBrands.includes(product.brand)) return false;
      return true;
    });
  }, [products, selectedBrands, priceRange]);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
    );
  };
  const updatePrice = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.length} onOpenCart={toggleCartModal} />
      <main>
        <HeroBanner />
        <TopCategories />
        <ProductControls productCount={filteredProducts.length} />
        <div className="container main-layout">
           <div className="sidebar-col">
              <Sidebar 
                selectedBrands={selectedBrands} 
                onToggleBrand={toggleBrand}
                onApplyPrice={updatePrice}
              />
           </div>
           <div className="content-col">
              <ProductGrid 
                 products={filteredProducts} 
                 onAddToCart={addToCart} 
              />
           </div>
        </div>
      </main>
      <Footer />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={toggleCartModal} 
        items={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;