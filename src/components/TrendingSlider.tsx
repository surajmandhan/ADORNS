
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../context/CartContext';
import ProductCard from './ProductCard';
import { FlickerButton } from './AnimatedButtons';

interface TrendingSliderProps {
  products: Product[];
  onProductClick: (p: Product) => void;
}

const TrendingSlider: React.FC<TrendingSliderProps> = ({ products, onProductClick }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 500;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="trending-section">
      <div className="section-head">
        <h2 className="section-head__title">Trending Now</h2>
        <div />
        <div className="bato-nav">
          <div className="bato-nav__buttons">
            <img src="https://bato-web-agency.github.io/bato-shared/img/swipe-slider/navs.svg" alt="Navigation" className="bato-nav__bg" />
            
            <button 
              onClick={() => scroll('left')} 
              className="bato-nav__btn previous"
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3331 17.3333H8.99979L15.9998 24.3333L15.1198 25.3333L6.45312 16.6667L15.1198 8L15.9998 9L8.99979 16H25.3331V17.3333Z" fill="currentColor" />
              </svg>
              <span className="bato-nav__label previous u-mono">PREV</span>
            </button>

            <button 
              onClick={() => scroll('right')} 
              className="bato-nav__btn next"
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33203 16H21.6654L14.6654 9L15.5454 8L24.212 16.6667L15.5454 25.3333L14.6654 24.3333L21.6654 17.3333H5.33203V16Z" fill="currentColor" />
              </svg>
              <span className="bato-nav__label next u-mono">NEXT</span>
            </button>
          </div>
        </div>
      </div>
      <div className="trending-slider" ref={scrollRef}>
        <div className="trending-track">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onClick={onProductClick} variant="slider" />
          ))}
        </div>
      </div>
      <div className="section-footer">
        <FlickerButton 
          text="View All Products" 
          onClick={() => navigate('/products')}
          className="u-mono"
        />
      </div>
    </section>
  );
}

export default TrendingSlider;
