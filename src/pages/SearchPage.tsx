
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Product } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Search as SearchIcon, ArrowRight, Loader2 } from 'lucide-react';

interface SearchPageProps {
  products: Product[];
  onProductClick: (product: any) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ products, onProductClick }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate slight delay for feel
    const timer = setTimeout(() => {
      if (query) {
        const filtered = products.filter(p => 
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [query, products]);

  if (loading) {
    return (
      <div className="plp-loading">
        <Loader2 className="animate-spin" size={48} />
        <p className="u-mono">Searching for "{query}"...</p>
      </div>
    );
  }

  return (
    <div className="plp">
      <div className="plp-center-header">
        <div className="plp-center-breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">›</span>
          <span className="current">Search</span>
        </div>
        <h1 className="plp-center-title">
          {query ? `Results for "${query}"` : "Search Collection"}
        </h1>
        <p className="u-mono u-muted text-xs uppercase tracking-widest mt-2">{results.length} pieces found</p>
      </div>

      <div className="u-container">
        {results.length > 0 ? (
          <div className="plp-grid">
            {results.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => onProductClick(product)} 
              />
            ))}
          </div>
        ) : (
          <div className="search-empty-state">
            <div className="search-icon-bg">
              <SearchIcon size={32} />
            </div>
            <h2 className="text-2xl font-medium mb-2">No results found for "{query}"</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              We couldn't find any jewellery matching your search. Try different keywords or browse our top categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/category/Earrings" className="pill">Earrings</Link>
              <Link to="/category/Necklaces" className="pill">Necklaces</Link>
              <Link to="/category/Bracelets" className="pill">Bracelets</Link>
              <Link to="/category/Rings" className="pill">Rings</Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .search-empty-state {
          text-align: center;
          padding: var(--s-20) var(--pad-x);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .search-icon-bg {
          width: 80px;
          height: 80px;
          border-radius: 99px;
          background: #f4f4f4;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--s-6);
        }
      `}</style>
    </div>
  );
};

export default SearchPage;

