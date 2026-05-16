
import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../context/CartContext';
import ProductCard from './ProductCard';

interface MosaicProps {
  products: Product[];
  onProductClick: (p: Product) => void;
}

const Mosaic: React.FC<MosaicProps> = ({ products, onProductClick }) => {
  const TOTAL_SLOTS = 96;
  const displayProducts = [...products].slice(0, TOTAL_SLOTS);
  const slots = Array.from({ length: TOTAL_SLOTS });

  return (
    <section id="index">
      <div className="section-head">
        <h2 className="section-head__title">The Catalog <span style={{ color: "var(--c-fg-soft)" }}>New Arrivals</span></h2>
      </div>
      <div className="mosaic" id="mosaic" role="list">
        {slots.map((_, i) => {
          const product = displayProducts[i];
          return (
            <motion.div
              key={product ? product.id : `empty-${i}`}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ delay: Math.min((i % 12) * 0.05, 0.6) }}
              className="mosaic-tile-wrapper"
            >
              {product ? (
                <ProductCard product={product} onClick={onProductClick} variant="grid" />
              ) : (
                <div className="mosaic-empty-slot" />
              )}
            </motion.div>
          );
        })}
      </div>
      <style>{`
        .mosaic-empty-slot {
          width: 100%;
          aspect-ratio: 1;
          background: var(--c-bg-soft);
          border: var(--bw) solid var(--c-line);
        }
      `}</style>
    </section>
  );
}

export default Mosaic;
