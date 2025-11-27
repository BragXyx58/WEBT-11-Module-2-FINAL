import React, { useState } from 'react';
import './Sidebar.css';


const categoriesData = [
  { name: "Смартфони та телефони", count: 1850 },
  { name: "Ноутбуки, планшети та комп'ютерна техніка", count: 10140 },
  { name: "Техніка для кухні", count: 3880 },
  { name: "Техніка для дому", count: 1551 },
  { name: "Телевізори та мультимедіа", count: 670 },
  { name: "Смарт-годинники та гаджети", count: 364 },
  { name: "Аудіо, фото та відео", count: 1208 },
  { name: "Ігрові консолі та геймінг", count: 399 },
  { name: "Краса і здоров'я", count: 1994 },
  { name: "Посуд", count: 5147 },
  { name: "Побутова хімія", count: 1602 },
  { name: "Дім, відпочинок та зоотовари", count: 5835 },
  { name: "Дитячі товари", count: 4837 },
  { name: "Інструменти і автотовари", count: 17372 },
  { name: "Енергозабезпечення", count: 3 },
];

const brandsData = [
  { name: "Samsung", count: 580 },
  { name: "Apple", count: 420 },
  { name: "Lenovo", count: 95 },
  { name: "Xiaomi", count: 226 },
  { name: "Bosch", count: 206 },
  { name: "Philips", count: 366 },
  { name: "Tefal", count: 537 },
  { name: "Asus", count: 189 },
  { name: "LG", count: 108 },
  { name: "Scandilux", count: 13 },
  { name: "Scandix", count: 40 },
  { name: "Scentos", count: 5 },
  { name: "Schauma", count: 20 },
  { name: "Schott Zwiesel", count: 12 },
  { name: "Screechers Wild!", count: 17 },
  { name: "Segway", count: 3 },
  { name: "SELPAK", count: 4 },
  { name: "Semana", count: 6 },
  { name: "Sencor", count: 257 },
  { name: "Sennheiser", count: 13 },
  { name: "Septona", count: 6 },
  { name: "Ses Creative", count: 4 },
  { name: "SETUP", count: 3 },
  { name: "Severin", count: 16 },
  { name: "Shanling", count: 3 },
  { name: "Shark", count: 27 },
  { name: "Sharp", count: 17 },
  { name: "Shinecon", count: 11 },
  { name: "Shivaki", count: 18 },
  { name: "ShowSee", count: 3 },
  { name: "Sibelly", count: 4 },
  { name: "Siemens", count: 34 },
  { name: "Sigikid", count: 13 },
  { name: "Signum", count: 5 },
  { name: "Sihoo", count: 6 },
  { name: "Silan", count: 18 },
  { name: "Silver Stone", count: 3 },
  { name: "Silverlit", count: 13 },
  { name: "Simax", count: 23 },
  { name: "SJCAM", count: 12 },
  { name: "Skarb Matki", count: 21 },
  { name: "SKG", count: 10 },
  { name: "Skullcandy", count: 34 },
  { name: "SkyDolphin", count: 2 },
  { name: "Skyworth", count: 5 },
  { name: "Smart", count: 8 },
  { name: "Smart Clean", count: 2 },
  { name: "Smashers", count: 15 },
  { name: "Smeg", count: 7 },
  { name: "Smile", count: 10 },
  { name: "Smooshzees", count: 3 },
  { name: "Snaige", count: 10 },
  { name: "Sogo", count: 2 },
  { name: "SOHO", count: 201 },
  { name: "Sola", count: 6 },
  { name: "Solar", count: 9 },
  { name: "Somat", count: 20 },
  { name: "Sonett", count: 39 },
  { name: "Sonex", count: 450 },
  { name: "Sonic Prime", count: 4 },
  { name: "Sonifer", count: 27 },
  { name: "Sony", count: 108 },
  { name: "Soocas", count: 2 },
  { name: "Special4You", count: 8 },
  { name: "Speedlink", count: 2 },
  { name: "Spidey", count: 7 },
  { name: "Splito", count: 3 },
  { name: "SQUISHMALLOWS", count: 117 },
  { name: "Star Wars", count: 3 },
  { name: "Stark", count: 43 },
  { name: "Start", count: 8 },
  { name: "SteamOne", count: 10 },
  { name: "SteelSeries", count: 8 },
  { name: "Stikbot", count: 4 },
  { name: "STITCH", count: 2 },
  { name: "Strateg", count: 20 },
  { name: "STUMBLE GUYS", count: 14 },
  { name: "Suitu", count: 2 },
  { name: "Sulong Toys", count: 3 },
  { name: "SunWay", count: 2 },
  { name: "Super Blysk", count: 14 },
  { name: "Super Wings", count: 13 },
  { name: "SUPER10", count: 4 },
  { name: "SuperThings", count: 3 },
  { name: "Sweet Home", count: 27 },
  { name: "Swell", count: 2 },
  { name: "Swiss Diamond", count: 15 },
  { name: "Syoss", count: 24 },
  { name: "Taigexin", count: 2 },
  { name: "Taka Maka", count: 2 },
  { name: "Tavialo", count: 22 },
  { name: "TCL", count: 67 },
  { name: "Technics", count: 4 },
  { name: "TechnoDrive", count: 14 },
  { name: "Teclast", count: 6 },
  { name: "Tega Baby", count: 68 },
  { name: "Tenda", count: 11 },
  { name: "Teo", count: 6 },
  { name: "Teo Bebe", count: 3 },
  { name: "Teploceramic", count: 3 },
  { name: "Tescoma", count: 220 },
  { name: "Tesla", count: 10 },
  { name: "Tesori d'Oriente", count: 34 },
  { name: "Thomas", count: 8 },
  { name: "Thomas&Friends", count: 2 },
  { name: "Thomson", count: 27 },
  { name: "Thronmax", count: 14 },
  { name: "Thule", count: 2 },
  { name: "Tide", count: 6 },
  { name: "Tigres", count: 108 },
  { name: "Tineco", count: 4 },
  { name: "TMNT", count: 19 },
  { name: "Tobar", count: 2 },
  { name: "TOBOT", count: 26 },
  { name: "Tone Factory", count: 4 },
  { name: "Toomies", count: 2 },
  { name: "Toshiba", count: 10 },
  { name: "Total Anime", count: 9 },
  { name: "TP-Link", count: 98 },
  { name: "Trefl", count: 10 },
  { name: "TREX", count: 2 },
  { name: "Trio", count: 6 },
  { name: "Tron", count: 3 },
  { name: "Tronsmart", count: 5 },
  { name: "Trotec", count: 3 },
  { name: "Trunki", count: 7 },
  { name: "Trust", count: 7 },
  { name: "Tucano", count: 3 },
  { name: "Tutis", count: 2 },
  { name: "Tutti Bambini", count: 6 },
  { name: "TVS", count: 9 },
  { name: "TWIX", count: 4 },
  { name: "TX3", count: 8 },
  { name: "TY", count: 2 },
  { name: "UD", count: 7 },
  { name: "UDEN-S", count: 2 },
  { name: "Ufesa", count: 4 },
  { name: "UFO", count: 2 },
  { name: "Ugee", count: 2 },
  { name: "UGREEN", count: 17 },
  { name: "Ultra", count: 6 },
  { name: "Ultra Compact", count: 3 },
  { name: "Ultrasonic", count: 2 },
  { name: "UniBracket", count: 3 },
  { name: "UNO", count: 2 },
  { name: "Urtekram", count: 17 },
  { name: "Valera", count: 27 },
  { name: "Vanish", count: 13 },
  { name: "Varmilo", count: 38 },
  { name: "Vega", count: 3 },
  { name: "VEIKK", count: 7 },
  { name: "Velvet", count: 11 },
  { name: "Ventolux", count: 32 },
  { name: "VERTO", count: 3 },
  { name: "Vertux", count: 12 },
  { name: "Vestfrost", count: 73 },
  { name: "VGN", count: 2 },
  { name: "VIDAL", count: 12 },
  { name: "Viga Toys", count: 40 },
  { name: "Vileda", count: 19 },
  { name: "Vincent", count: 122 },
  { name: "Vintage", count: 8 },
  { name: "Vinzer", count: 90 },
  { name: "VITALS", count: 59 },
  { name: "Vitals aqua", count: 9 },
  { name: "Vitammy", count: 7 },
  { name: "Vitrinor", count: 32 },
  { name: "Viva", count: 17 },
  { name: "Vivotek", count: 2 },
  { name: "Vladi", count: 40 },
  { name: "Vladi Toys", count: 7 },
  { name: "Volteno", count: 4 },
  { name: "Wacom", count: 4 },
  { name: "Wader", count: 11 },
  { name: "Waider", count: 3 },
  { name: "Warner Bro", count: 3 },
  { name: "Wasche Meister", count: 2 },
  { name: "Waschkonig", count: 31 },
  { name: "WASH&FREE", count: 30 },
  { name: "Wash&Go", count: 25 },
  { name: "Weidasi", count: 14 },
  { name: "Weilor", count: 98 },
  { name: "Welldon", count: 2 },
  { name: "Weta Workshop", count: 18 },
  { name: "WetAir", count: 6 },
  { name: "Whirlpool", count: 184 },
  { name: "WILD MANES", count: 6 },
  { name: "Wilfa", count: 11 },
  { name: "Willer", count: 4 },
  { name: "Wilmax", count: 187 },
  { name: "Winning Moves", count: 21 },
  { name: "Winso", count: 5 },
  { name: "Wizarding World", count: 12 },
  { name: "WMF", count: 442 },
  { name: "Woodwick", count: 17 },
  { name: "Woolite", count: 10 },
  { name: "Word of Dream", count: 25 },
  { name: "Works", count: 3 },
  { name: "World of Tanks", count: 12 },
  { name: "World of Warcraft", count: 2 },
  { name: "WOW! Pods", count: 7 },
  { name: "WP Merchandise", count: 22 },
  { name: "Wuesthof", count: 17 },
  { name: "Xbox", count: 11 },
  { name: "XGiMi", count: 14 },
  { name: "XO", count: 49 },
  { name: "XOKO", count: 23 },
  { name: "Xtrfy", count: 18 },
  { name: "XTRIKE ME", count: 8 },
  { name: "Yaber", count: 8 },
  { name: "YENKEE", count: 6 },
  { name: "YES", count: 4 },
  { name: "YES! Fun", count: 4 },
  { name: "Yope", count: 3 },
  { name: "YUNMAI", count: 8 },
  { name: "YVolution", count: 13 },
  { name: "Zalman", count: 2 },
  { name: "Zastelli", count: 24 },
  { name: "Zeegma", count: 3 },
  { name: "ZELBA", count: 3 },
  { name: "Zelmer", count: 2 },
  { name: "Zen", count: 8 },
  { name: "Zewa", count: 5 },
  { name: "Zilan", count: 4 },
  { name: "Zing", count: 10 },
  { name: "Zojirushi", count: 171 },
  { name: "ZooZoo", count: 5 },
  { name: "ZTE", count: 4 },
  { name: "ZUM", count: 11 },
  { name: "ZURU", count: 26 },
  { name: "Peugeot", count: 29 },
  { name: "Philco", count: 9 },
  { name: "Picola", count: 2 },
  { name: "PINK", count: 14 },
  { name: "Pixel Petz", count: 2 },
  { name: "Play Joyin", count: 2 },
  { name: "PlayStation", count: 85 },
  { name: "Poco", count: 18 },
  { name: "Pokemon", count: 23 },
  { name: "PolarB", count: 2 },
  { name: "Polaroid", count: 29 },
  { name: "Polly Pocket", count: 3 },
  { name: "PolyM", count: 10 },
  { name: "Pop Top", count: 4 },
  { name: "Powercraft", count: 6 },
  { name: "PowerPlant", count: 116 },
  { name: "Pride", count: 4 },
  { name: "Prime Technics", count: 59 },
  { name: "ProLogix", count: 10 },
  { name: "Promate", count: 187 },
  { name: "Proove", count: 372 },
  { name: "ProWash", count: 11 },
  { name: "Pugs at Play", count: 7 },
  { name: "Puluz", count: 34 },
  { name: "Purox", count: 6 },
  { name: "PuzzleOk", count: 39 },
  { name: "Pyramida", count: 53 },
  { name: "Pyrex", count: 3 },
  { name: "qbee", count: 28 },
  { name: "Qbox", count: 3192 },
  { name: "Quartz Thermal Technology", count: 4 },
  { name: "QUBE", count: 3657 },
  { name: "Raid", count: 3 },
  { name: "Rainbow High", count: 26 },
  { name: "Rapoo", count: 6 },
  { name: "Ravensburger", count: 2 },
  { name: "RAWM", count: 19 },
  { name: "Razer", count: 30 },
  { name: "realme", count: 11 },
  { name: "RECARO", count: 5 },
  { name: "Remington", count: 127 },
  { name: "Reolink", count: 6 },
  { name: "RESTO", count: 2 },
  { name: "Revell", count: 22 },
  { name: "Revlon", count: 8 },
  { name: "Rexona", count: 6 },
  { name: "Richman", count: 24 },
  { name: "Rick and Morty", count: 2 },
  { name: "Riedel", count: 21 },
  { name: "Ringel", count: 15 },
  { name: "Ritter", count: 16 },
  { name: "RivaCase", count: 7 },
  { name: "Riwa", count: 7 },
  { name: "RMS-NASA", count: 3 },
  { name: "RoboRock", count: 22 },
  { name: "Rolling Square", count: 9 },
  { name: "Roter Kafer", count: 4 },
  { name: "Rotex", count: 97 },
  { name: "Rowenta", count: 155 },
  { name: "Rubik's", count: 4 },
  { name: "Ruijie", count: 3 },
  { name: "Russell Hobbs", count: 94 },
  { name: "Ruta", count: 4 },
  { name: "Ryobi", count: 166 },
  { name: "S&R", count: 13 },
  { name: "Sambro", count: 5 },
  { name: "Same Toy", count: 39 },
  { name: "Samtronic", count: 3 },
  { name: "San Clean", count: 15 },
  { name: "Sano", count: 24 },
  { name: "Santi", count: 2 },
  { name: "Sarma", count: 2 },
  { name: "Sarmix", count: 9 },
  { name: "Saturn", count: 62 },
  { name: "Savex", count: 16 },
  { name: "Savo", count: 2 },
  { name: "SC Johnson", count: 15 },
  { name: "Scale one", count: 5 },
];


brandsData.sort((a, b) => a.name.localeCompare(b.name));


const Sidebar: React.FC = () => {
  const [minPrice, setMinPrice] = useState('8');
  const [maxPrice, setMaxPrice] = useState('699 999');
  const [brandSearch, setBrandSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(true); 
  const [isBrandsExpanded, setIsBrandsExpanded] = useState(false); 
  const filteredCategories = categoriesData.filter(c => 
    c.name.toLowerCase().includes(categorySearch.toLowerCase())
  );
  
  const visibleCategories = (categorySearch || isCategoriesExpanded) 
    ? filteredCategories 
    : filteredCategories.slice(0, 5); 

  const filteredBrands = brandsData.filter(b => 
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const visibleBrands = (brandSearch || isBrandsExpanded) 
    ? filteredBrands 
    : filteredBrands.slice(0, 10); 


  return (
    <aside className="sidebar">
      
      <div className="filter-group no-border">
        <h3 className="filter-title">Ціна</h3>
        <div className="price-inputs">
          <input 
            type="text" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)} 
            className="price-input"
          />
          <span className="price-dash">-</span>
          <input 
            type="text" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
            className="price-input"
          />
        </div>
        <button className="btn-apply">ЗАСТОСУВАТИ</button>
      </div>

      <div className="filter-group">
        <div className="filter-header">
           <h3 className="filter-title">Розділ</h3>
           <span className="arrow-up">^</span>
        </div>
        
        <div className="sidebar-search">
            <input 
              type="text" 
              placeholder="Пошук" 
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
        </div>

        <div className="filter-list">
             {visibleCategories.map((cat, index) => (
                <label key={index} className="checkbox-label category-item">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                    <span className="label-text">{cat.name} <span className="count">{cat.count}</span></span>
                    <span className="arrow-right">›</span>
                </label>
             ))}
            
            {!categorySearch && filteredCategories.length > 5 && (
                <div 
                    className="show-more-link" 
                    onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                    style={{marginTop: '10px'}}
                >
                    {isCategoriesExpanded ? 'ПРИХОВАТИ' : 'ПОКАЗАТИ ЩЕ'}
                </div>
            )}
        </div>
      </div>

      <div className="filter-group">
        <div className="filter-header">
           <h3 className="filter-title">Бренд</h3>
           <span className="arrow-up">^</span>
        </div>

        <div className="sidebar-search">
            <input 
                type="text" 
                placeholder="Пошук" 
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
        </div>

        <div className={`filter-list ${isBrandsExpanded ? 'scrollable-list' : ''}`}>
            {visibleBrands.length > 0 ? (
              visibleBrands.map((brand, index) => (
                  <label key={`${brand.name}-${index}`} className="checkbox-label">
                      <input type="checkbox" />
                      <span className="custom-checkbox"></span>
                      <span className="label-text">
                          {brand.name} <span className="count">{brand.count}</span>
                      </span>
                  </label>
              ))
            ) : (
               <div style={{color: '#999', fontSize: '14px', padding: '10px 0'}}>Бренд не знайдено</div>
            )}
             
             {!brandSearch && filteredBrands.length > 10 && (
                 <div 
                    className="show-more-link" 
                    onClick={() => setIsBrandsExpanded(!isBrandsExpanded)}
                    style={{marginTop: '10px'}}
                 >
                    {isBrandsExpanded ? 'ПРИХОВАТИ' : 'ПОКАЗАТИ ЩЕ'}
                 </div>
             )}
        </div>
      </div>

       <div className="filter-group">
        <div className="filter-header">
            <h3 className="filter-title">Наявність</h3>
             <span className="arrow-up">^</span>
        </div>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          Тільки в наявності <span className="count">54586</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          В магазині
        </label>
      </div>

      <div className="filter-group">
        <div className="filter-header">
           <h3 className="filter-title">Діючі Акції</h3>
           <span className="arrow-up">^</span>
        </div>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          ЧОРНА П'ЯТНИЦЯ <span className="count">6554</span>
        </label>
         <label className="checkbox-label">
          <input type="checkbox" />
          <span className="custom-checkbox"></span>
          Знижка <span className="count">54936</span>
        </label>
      </div>
      
       <div style={{textAlign: 'center', marginTop: '30px', fontWeight: 500}}>
          Не вистачає фільтрів?
       </div>

    </aside>
  );
};

export default Sidebar;