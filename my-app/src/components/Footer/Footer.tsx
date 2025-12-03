import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h4 className="footer-title">Компанія</h4>
          <ul className="footer-links">
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Магазини</a></li>
            <li><a href="#">Робота в COMFY</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Допомога</h4>
          <ul className="footer-links">
            <li><a href="#">Доставка та оплата</a></li>
            <li><a href="#">Кредит</a></li>
            <li><a href="#">Гарантія</a></li>
            <li><a href="#">Повернення товару</a></li>
            <li><a href="#">Сервісні центри</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Покупцеві</h4>
          <ul className="footer-links">
            <li><a href="#">Акції</a></li>
            <li><a href="#">COMFY Blog</a></li>
            <li><a href="#">Подарункові картки</a></li>
            <li><a href="#">Програма лояльності</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
            <h4 className="footer-title">Контакти</h4>
            <div className="phone-hotline">0 800 303 505</div>
            <div className="work-hours">з 08:00 до 21:00 (без вихідних)</div>
            <div className="footer-socials">
                <span>Ми в соцмережах:</span>
                <div className="social-icons">
                    <a href="#" style={{color: '#3b5998'}}>FB</a>
                    <a href="#" style={{color: '#c13584'}}>Inst</a>
                    <a href="#" style={{color: '#0088cc'}}>Tg</a>
                    <a href="#" style={{color: '#ff0000'}}>YT</a>
                </div>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
          <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'12px', color:'#797878'}}>
            <p>© 2025 COMFY - Інтернет-магазин побутової техніки та електроніки</p>
            <div className="payment-icons" style={{display:'flex', gap:'10px'}}>
                 <span>Visa</span><span>Mastercard</span><span>Google Pay</span><span>Apple Pay</span>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;