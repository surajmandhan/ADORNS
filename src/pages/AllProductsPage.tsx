
import React, { useState } from 'react';
import { Product } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface AllProductsPageProps {
  products: Product[];
  onProductClick: (product: any) => void;
}

const AllProductsPage: React.FC<AllProductsPageProps> = ({ products, onProductClick }) => {
  const [sortBy, setSortBy] = useState('newest');
  
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return b.id - a.id;
  });

  return (
    <div className="plp">
      <div className="plp-header">
        <div className="plp-title-row">
          <h1>All Products</h1>
          <div className="plp-stats u-mono">{products.length} Results</div>
        </div>

        <div className="plp-controls">
          <button className="filter-btn">
            <SlidersHorizontal size={16} /> Filter
          </button>
          
          <div className="sort-wrapper">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Sort by: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="plp-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
