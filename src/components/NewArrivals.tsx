
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../context/CartContext';
import ProductCard from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
  onProductClick: (p: Product) => void;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products, onProductClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Take first 10 products tagged as new or just first 10
  const newProducts = products.slice(0, 10);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (!newProducts.length) return null;

  return (
    <section className="na-section">
      {/* Header */}
      <div className="na-header">
        <div className="na-header__left">
          <motion.span
            className="u-mono na-header__tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            [ New Arrivals ]
          </motion.span>
          <motion.h2
            className="na-header__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fresh to the
            <br />
            <span className="na-header__title-accent">Collection</span>
          </motion.h2>
          <motion.p
            className="na-header__desc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our latest arrivals — each piece a new story in gold.
          </motion.p>
        </div>

        <div className="na-header__right">
          <Link to="/products" className="na-view-all u-mono">
            View All <ArrowRight size={14} />
          </Link>
          <div className="na-nav">
            <button className="na-nav__btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <ArrowLeft size={18} />
            </button>
            <button className="na-nav__btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Card Row */}
      <div className="na-slider" ref={scrollRef}>
        {newProducts.map((product, i) => (
          <motion.div
            key={product.id}
            className="na-card-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
          >
            <ProductCard product={product} onClick={onProductClick} variant="slider" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
