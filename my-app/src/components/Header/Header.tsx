import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div className="top-notification-bar">
        <div className="container">
          <span>Знижки на Чорну П'ятницю до -50% | Оплата Частинами від 15 платежів</span>
        </div>
      </div>

      <div className="top-utils-bar">
        <div className="container top-utils-bar__content">
          <div className="top-utils-left">
            <div className="lang-switcher">
              <span className="lang-active">УКР</span>
            </div>
            <div className="location-selector">
              <span className="icon-pin">📍</span> 
              <span>Київ</span>
            </div>
          </div>

          <nav className="top-utils-right">
            <a href="#">Акції</a>
            <a href="#">Подарункові картки</a>
            <a href="#">Магазини</a>
            <a href="#">Доставка</a>
            <a href="#">Повернення</a>
            <a href="#">Trade-In</a>
            <a href="#">COMFY допомагає</a>
            <a href="#" className="help-link">
              <span className="icon-phone">📞</span>
              Допомога
            </a>
          </nav>
        </div>
      </div>

      <div className="header-main">
        <div className="container header__content">
          <div className="header__logo">
            <img src="src/assets/comfy-logo-header.svg" alt="Comfy Logo" style={{height: '40px', backgroundColor: '#ffffffff'}} />
          </div>

          <button className="header__catalog-btn">
            <span className="icon-grid">::</span>
            Каталог
          </button>

          <div className="header__search">
            <input type="text" placeholder="зарядна ста" /> 
            <button className="header__mic-btn">🎤</button>
            <button className="header__search-btn">
              Знайти
              <span className="icon-search">🔍</span>
            </button>
          </div>

          <nav className="header__nav">
            <div className="nav__item">
              <div className="icon-placeholder">👤</div>
              <span>Увійти</span>
            </div>
            <div className="nav__item">
              <div className="icon-placeholder">⚖️</div>
              <span>Порівняння</span>
            </div>
            <div className="nav__item">
              <div className="icon-placeholder">♡</div>
              <span>Обране</span>
            </div>
            <div className="nav__item">
              <div className="icon-placeholder">🔔</div>
              <span>Повідомлення</span>
            </div>
            <div className="nav__item cart">
              <button className="cart-btn">
                <span className="icon-cart">🛒</span>
                <span>Кошик</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;