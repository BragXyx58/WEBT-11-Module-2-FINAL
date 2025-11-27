import React from 'react';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner__image-wrapper">
            <img src="src/assets/banner.webp" alt="Comfy Logo" style={{height: '220px', backgroundColor: '#ddd'}} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;