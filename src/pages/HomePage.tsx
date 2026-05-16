
import React from 'react';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import CategorySlider from '../components/CategorySlider';
import TrendingSlider from '../components/TrendingSlider';
import AboutUs from '../components/AboutUs';
import Mosaic from '../components/Mosaic';
import OccasionSlider from '../components/OccasionSlider';
import Testimonials from '../components/Testimonials';
import ShopWithConfidence from '../components/ShopWithConfidence';
import { Product } from '../context/CartContext';

interface HomePageProps {
  products: Product[];
  onProductClick: (p: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onProductClick }) => {
  return (
    <>
      <Carousel />
      <Marquee />
      <CategorySlider />
      <TrendingSlider products={products.slice(0, 10)} onProductClick={onProductClick} />
      <AboutUs />
      <Mosaic products={products.slice(10)} onProductClick={onProductClick} />
      <ShopWithConfidence />
      <OccasionSlider />
      <Testimonials />
      <section className="promo-banner-section">
        <div className="promo-banner-container">
          <img 
            src="/womens_day_web_banner_5000x_crop_center.webp" 
            alt="Women's Day Special Banner" 
            className="promo-banner-img"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
