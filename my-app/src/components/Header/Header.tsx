// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';

interface HeaderProps {
    cartCount: number;
    onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="header-wrapper">
      <div className="top-notification-bar">
        <div className="container">
          <span>Знижки на Чорну П'ятницю до -50% | Оплата Частинами від 15 платежів</span>
        </div>
      </div>

      <div className="top-utils-bar">
         <div className="container top-utils-bar__content" style={{display:'flex', justifyContent:'space-between'}}>
             <div className="top-utils-left" style={{display:'flex', gap:'20px'}}><span>УКР</span><span>Київ</span></div>
             <nav className="top-utils-right" style={{display:'flex', gap:'15px'}}>
                 <a href="#">Акції</a><a href="#">Магазини</a><a href="#">Доставка</a>
             </nav>
         </div>
      </div>

      <div className="header-main">
        <div className="container header__content">
          <div className="header__logo">
             <img src="src/assets/comfy-logo-header.svg" alt="Comfy Logo" style={{height: '40px'}} />
          </div>

          <button className="header__catalog-btn">
            <span className="icon-grid">::</span>
            Каталог
          </button>

          <div className="header__search">
            <input type="text" placeholder="Пошук товарів" /> 
            <button className="header__search-btn">
              Знайти 🔍
            </button>
          </div>

          <nav className="header__nav">
            <div className="nav__item">
              <div className="icon-placeholder">👤</div>
              <span>Увійти</span>
            </div>
            <div className="nav__item">
              <div className="icon-placeholder">♡</div>
              <span>Обране</span>
            </div>
            <div className="nav__item cart" onClick={onOpenCart}>
              <button className="cart-btn" style={{position: 'relative'}}>
                <span className="icon-cart">🛒</span>
                <span>Кошик</span>
                {cartCount > 0 && (
                    <span className="cart-badge" style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        backgroundColor: '#ff671f',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>
                        {cartCount}
                    </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;