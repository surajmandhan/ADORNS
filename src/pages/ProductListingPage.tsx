
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import {
  SlidersHorizontal, ChevronDown, X, LayoutGrid, LayoutList,
  Loader2, ArrowRight, Gem
} from 'lucide-react';
import { FlickerButton } from '../components/AnimatedButtons';
import {
  fetchCollectionDetails, fetchCollectionProducts,
  ShopifyProduct, ShopifyCollection, CATEGORY_HANDLES
} from '../services/apiService';

interface PLPProps {
  products: Product[];
  onProductClick: (product: any) => void;
}

const BANNER_MAP: Record<string, string> = {
  "Earrings":     "https://palmonas.com/cdn/shop/files/Earrings_1.webp?v=1773063871&width=3000",
  "Necklaces":    "https://palmonas.com/cdn/shop/files/Necklaces_1.webp?v=1773064060&width=3000",
  "Bracelets":    "https://palmonas.com/cdn/shop/files/Bracelets_1_2a7ca5e6-1271-4224-97e6-efd0e68f4a12.webp?v=1773063871&width=3000",
  "Rings":        "https://palmonas.com/cdn/shop/files/Rings_1.webp?v=1773063871&width=3000",
  "Mangalsutras": "https://palmonas.com/cdn/shop/files/Mangalsutras_1.webp?crop=center&height=794&v=1773063871&width=2000",
  "Mens":         "https://palmonas.com/cdn/shop/files/Mens_1.webp?v=1773063871&width=3000",
};

const SUB_CATEGORIES: Record<string, string[]> = {
  "Earrings":     ["All Earrings", "Stud Earrings", "Hoop Earrings", "Drop Earrings", "Danglers", "Earrings Set", "Pearl Earrings"],
  "Necklaces":    ["All Necklaces", "Pendant Necklaces", "Pearl Necklaces", "Layered Necklaces", "Lariat Necklaces", "Station Necklaces", "Chains", "Charm Necklaces", "Initials Necklaces", "Choker Necklaces"],
  "Bracelets":    ["All Bracelets", "Bangles", "Charm Bracelets", "Chain Bracelets", "Layered Bracelets", "Cuff Bracelets", "Pearl Bracelets"],
  "Rings":        ["All Rings", "Statement Rings", "Dainty Rings", "Solitaire Rings", "Bands", "Pearl Rings", "Stackable Rings", "Signet Rings"],
  "Mangalsutras": ["All Mangalsutras"],
  "Mens":         ["All Men's Collection", "Men's Rings", "Men's Chain", "Men's Bracelets"],
};

const SORT_OPTIONS = [
  { val: 'newest',     label: 'Newest First' },
  { val: 'price-low',  label: 'Price: Low to High' },
  { val: 'price-high', label: 'Price: High to Low' },
];

const ProductListingPage: React.FC<PLPProps> = ({ products: initialProducts, onProductClick }) => {
  const { type, name } = useParams<{ type: string; name: string }>();
  const [sortBy, setSortBy]             = useState('newest');
  const [loading, setLoading]           = useState(type === 'category');
  const [refreshing, setRefreshing]     = useState(false);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [collectionInfo, setCollectionInfo]     = useState<ShopifyCollection | null>(null);
  const [selectedSub, setSelectedSub]   = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortOpen, setSortOpen]         = useState(false);
  const [gridCols, setGridCols]         = useState<3 | 4>(4);
  const sortRef = useRef<HTMLDivElement>(null);

  const currentBanner        = (name && BANNER_MAP[name]) || collectionInfo?.image?.src;
  const currentSubCategories = name ? SUB_CATEGORIES[name] || [] : [];
  const pageTitle            = collectionInfo?.title || name || 'All Products';

  // Close sort on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (name) setSelectedSub(currentSubCategories[0] || '');
  }, [name]);

  useEffect(() => {
    if (type === 'category' && name) {
      const load = async () => {
        setLoading(true);
        const [info, prods] = await Promise.all([
          fetchCollectionDetails(name),
          fetchCollectionProducts(name),
        ]);
        setCollectionInfo(info);
        const mapped: Product[] = prods.map((p: ShopifyProduct) => ({
          id: p.id, title: p.title,
          price: parseFloat(p.variants[0].price),
          image: p.images[0]?.src || '',
          images: p.images.map((img: any) => img.src),
          category: name, collection: name,
          num: p.handle.slice(0, 5).toUpperCase(),
          description: p.body_html.replace(/<[^>]*>?/gm, '').slice(0, 100) + '...',
          material: p.product_type || 'Exquisite',
          stock: 'In Stock', tags: [],
          features: ['Premium Craftsmanship', 'Lifetime Warranty'], related: [],
        }));
        setCategoryProducts(mapped);
        setLoading(false);
      };
      load();
    } else {
      setLoading(false);
    }
  }, [type, name]);

  const displayProducts = type === 'category'
    ? categoryProducts
    : initialProducts.filter(p => {
        if (type === 'collection') return p.collection === name;
        return true;
      });

  const filteredBySub = displayProducts.filter(p => {
    if (!selectedSub || selectedSub.toLowerCase().includes('all')) return true;
    const keywords = selectedSub.toLowerCase()
      .replace(name?.toLowerCase() || '', '')
      .replace("'s", '').split(/\s+/).filter(k => k.length > 2);
    if (!keywords.length) return true;
    return keywords.every(k =>
      p.title.toLowerCase().includes(k) ||
      p.description.toLowerCase().includes(k) ||
      p.tags?.some(tag => tag.toLowerCase().includes(k))
    );
  });

  const sortedProducts = [...filteredBySub].sort((a, b) => {
    if (sortBy === 'price-low')  return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProducts.length;

  const handleSubSelect = (sub: string) => {
    setRefreshing(true);
    setSelectedSub(sub);
    setVisibleCount(12);
    setTimeout(() => setRefreshing(false), 500);
  };

  if (loading) {
    return (
      <div className="plp2-loading">
        <div className="plp2-loading__spinner">
          <Loader2 size={40} className="animate-spin" />
        </div>
        <p className="u-mono plp2-loading__text">Fetching {name}…</p>
      </div>
    );
  }

  const currentSortLabel = SORT_OPTIONS.find(o => o.val === sortBy)?.label || 'Sort';

  return (
    <div className="plp2">

      {/* ── Hero Banner (category pages) ── */}
      {type === 'category' && currentBanner && (
        <div className="plp2__banner">
          <img src={currentBanner} alt={pageTitle} className="plp2__banner-img" />
          <div className="plp2__banner-overlay">
            <motion.div
              className="plp2__banner-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="u-mono plp2__banner-tag">[ Collection ]</span>
              <h1 className="plp2__banner-title">{pageTitle}</h1>
              <div className="plp2__banner-breadcrumb u-mono">
                <Link to="/">Home</Link> <span>/</span>
                <Link to="/collections">Collections</Link> <span>/</span>
                <span>{pageTitle}</span>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* ── Header (non-category / all products) ── */}
      {type !== 'category' && (
        <div className="plp2__header">
          <div className="plp2__header-inner">
            <div>
              <span className="u-mono plp2__header-tag">[ Our Products ]</span>
              <h1 className="plp2__header-title">{pageTitle}</h1>
              <nav className="plp2__breadcrumb u-mono">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>{pageTitle}</span>
              </nav>
            </div>

          </div>
        </div>
      )}

      {/* ── Sub-category pills ── */}
      {currentSubCategories.length > 0 && (
        <div className="plp2__pills-wrap">
          <div className="plp2__pills">
            {currentSubCategories.map(sub => (
              <button
                key={sub}
                onClick={() => handleSubSelect(sub)}
                className={`plp2__pill ${selectedSub === sub ? 'plp2__pill--active' : ''}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Toolbar ── */}
      <div className="plp2__toolbar">


        <div className="plp2__toolbar-right">
          {/* Grid toggle */}
          <div className="plp2__grid-toggle">
            <button
              className={`plp2__grid-btn ${gridCols === 3 ? 'plp2__grid-btn--active' : ''}`}
              onClick={() => setGridCols(3)}
              aria-label="3 column grid"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              className={`plp2__grid-btn ${gridCols === 4 ? 'plp2__grid-btn--active' : ''}`}
              onClick={() => setGridCols(4)}
              aria-label="4 column grid"
            >
              <LayoutList size={16} />
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="plp2__sort" ref={sortRef}>
            <button
              className="plp2__sort-btn"
              onClick={() => setSortOpen(v => !v)}
            >
              <span className="u-mono">{currentSortLabel}</span>
              <ChevronDown size={14} className={`plp2__sort-chevron ${sortOpen ? 'open' : ''}`} />
            </button>
            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  className="plp2__sort-dropdown"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.val}
                      className={`plp2__sort-option u-mono ${sortBy === opt.val ? 'active' : ''}`}
                      onClick={() => { setSortBy(opt.val); setSortOpen(false); }}
                    >
                      {opt.label}
                      {sortBy === opt.val && <span className="plp2__sort-check">✓</span>}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className={`plp2__grid plp2__grid--${gridCols}`}>
        <AnimatePresence mode="wait">
          {refreshing ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="plp2__skeleton">
                <div className="plp2__skeleton-img shimmer" />
                <div className="plp2__skeleton-body">
                  <div className="plp2__skeleton-line shimmer" />
                  <div className="plp2__skeleton-line plp2__skeleton-line--short shimmer" />
                </div>
              </div>
            ))
          ) : sortedProducts.length === 0 ? (
            <div className="plp2__empty">
              <Gem size={48} strokeWidth={1} />
              <h3 className="u-mono">No pieces found</h3>
              <p>Try a different category or browse all products.</p>
              <Link to="/products" className="plp2__empty-link u-mono">
                Browse All <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            visibleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.32) }}
              >
                <ProductCard product={product} onClick={onProductClick} variant="slider" />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* ── Load More ── */}
      {hasMore && !refreshing && (
        <div className="plp2__load-more">
          <FlickerButton
            text="Load More"
            onClick={() => setVisibleCount(v => v + 12)}
          />
        </div>
      )}



    </div>
  );
};

export default ProductListingPage;
