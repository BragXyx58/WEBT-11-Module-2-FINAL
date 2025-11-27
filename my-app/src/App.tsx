import React from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import TopCategories from './components/TopCategories/TopCategories';
import ProductControls from './components/ProductControls/ProductControls';
import Sidebar from './components/Sidebar/Sidebar';
import ProductGrid from './components/ProductGrid/ProductGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroBanner />
        <TopCategories />
        <ProductControls />
        <div className="container main-layout">
           <div className="sidebar-col">
              <Sidebar />
           </div>
           <div className="content-col">
              <ProductGrid />
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;