
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FlickerButton } from './AnimatedButtons';

function unsplashUrl(id: string, size: number) {
  return `https://images.unsplash.com/photo-${id}?w=${size}&h=${size}&fit=crop&q=70&auto=format`;
}

const CATEGORY_DATA = [
  { name: "Earrings", img: "https://palmonas.com/cdn/shop/files/Earrings_636281e5-589c-45a5-bd6b-cefd1040b72c.webp?v=1778501398&width=360" },
  { name: "Necklaces", img: "https://palmonas.com/cdn/shop/files/Necklce.webp?v=1778501399&width=360" },
  { name: "Bracelets", img: "https://palmonas.com/cdn/shop/files/Bracelets_non_men.webp?v=1778501398&width=360" },
  { name: "Rings", img: "https://palmonas.com/cdn/shop/files/Ring.webp?v=1778501398&width=360" },
  { name: "Mangalsutras", img: "https://palmonas.com/cdn/shop/files/Mangalsutra_eed5afb8-b9b1-447a-9d0b-e1cfa58d8cb8.webp?v=1778501398&width=360" },
  { name: "Mens", img: "https://palmonas.com/cdn/shop/files/Bracelets_b40e52fd-db59-4b15-8702-fa95eb757bae.webp?v=1778501398&width=360" },
];

const CategorySlider: React.FC = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="categories-section">
      <div className="section-head">
        <h2 className="section-head__title">Shop By Category</h2>
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
      <div className="categories-slider" ref={scrollRef}>
        <div className="categories-track">
          {CATEGORY_DATA.map((cat, i) => (
            <Link key={i} to={`/category/${cat.name}`} className="category-card">
              <div className="category-image">
                <img src={cat.img} alt={cat.name} />
              </div>
              <span className="category-name u-mono">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="section-footer">
        <FlickerButton 
          text="View All Collections" 
          onClick={() => navigate('/collections')}
          className="u-mono"
        />
      </div>
    </section>
  );
}

export default CategorySlider;
