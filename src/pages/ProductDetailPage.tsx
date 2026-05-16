
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, ShoppingBag, Heart, Share2, ChevronRight,
  Star, Truck, RefreshCw, Shield, Check
} from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { FlashingArrowButton } from '../components/AnimatedButtons';
import ProductCard from '../components/ProductCard';

interface ProductDetailPageProps {
  products: Product[];
  onQuickView: (p: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products, onQuickView }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find(p => p.id === Number(id));
  const [activeImg, setActiveImg] = useState('');
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) setActiveImg(product.image);
  }, [product]);

  if (!product) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: '1rem' }}>
        <h2 style={{ fontFamily: 'var(--ff-display)', textTransform: 'uppercase' }}>Product Not Found</h2>
        <Link to="/products" className="btn-primary">← Back to Shop</Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const allImages = product.images?.length > 0 ? product.images : [product.image];
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="pdp">
      {/* Breadcrumb */}
      <div className="pdp__breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <Link to="/products">Shop</Link>
        <ChevronRight size={14} />
        <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link>
        <ChevronRight size={14} />
        <span>{product.title}</span>
      </div>

      {/* Main Grid */}
      <div className="pdp__grid">
        {/* ── Left: Gallery ── */}
        <div className="pdp__gallery">
          <div className="pdp__thumbnails">
            {allImages.map((img, i) => (
              <button
                key={i}
                className={`pdp__thumb ${activeImg === img ? 'pdp__thumb--active' : ''}`}
                onClick={() => setActiveImg(img)}
              >
                <img src={img} alt={`${product.title} view ${i + 1}`} />
              </button>
            ))}
          </div>
          <motion.div
            className="pdp__main-image"
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <img src={activeImg} alt={product.title} />
            {product.tags?.includes('trending') && (
              <span className="pdp__badge u-mono">Trending</span>
            )}
          </motion.div>
        </div>

        {/* ── Right: Info ── */}
        <div className="pdp__info">
          {/* Back */}
          <button className="pdp__back" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back
          </button>

          {/* Tag + Title */}
          <div className="pdp__heading">
            <span className="u-mono pdp__collection">{product.num} / {product.collection}</span>
            <h1 className="pdp__title">{product.title}</h1>
          </div>

          {/* Stars */}
          <div className="pdp__rating">
            {[1,2,3,4,5].map(s => (
              <Star key={s} size={14} fill={s <= 4 ? 'var(--c-accent)' : 'none'} color="var(--c-accent)" />
            ))}
            <span className="u-mono pdp__review-count">128 reviews</span>
          </div>

          {/* Price */}
          <div className="pdp__price">
            <span className="pdp__price-val u-mono">Rs. {(product.price * qty).toLocaleString()}</span>
            <span className="pdp__price-note u-mono">MRP incl. of all taxes</span>
          </div>

          {/* Description */}
          <p className="pdp__desc">{product.description}</p>

          {/* Specs */}
          <div className="pdp__specs">
            {[
              { label: 'Material', val: product.material },
              { label: 'Collection', val: product.collection },
              { label: 'Category', val: product.category },
              { label: 'Stock', val: product.stock },
            ].map(({ label, val }) => (
              <div key={label} className="pdp__spec">
                <span className="pdp__spec-label u-mono">{label}</span>
                <span className="pdp__spec-val">{val}</span>
              </div>
            ))}
          </div>

          {/* Qty */}
          <div className="pdp__qty-row">
            <span className="u-mono pdp__qty-label">Quantity</span>
            <div className="pdp__qty">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pdp__actions">
            <FlashingArrowButton
              text={added ? '✓ Added to Cart' : 'Add to Cart'}
              className={`flashing-arrow-btn--gold pdp__add-btn ${added ? 'pdp__add-btn--added' : ''}`}
              onClick={handleAddToCart}
            />
            <button
              className={`pdp__wishlist-btn ${inWishlist ? 'pdp__wishlist-btn--active' : ''}`}
              onClick={() => toggleWishlist(product)}
              aria-label="Add to wishlist"
            >
              <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
            </button>
            <button className="pdp__share-btn" aria-label="Share">
              <Share2 size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pdp__trust">
            <div className="pdp__trust-item">
              <Truck size={18} />
              <span>Free Delivery</span>
            </div>
            <div className="pdp__trust-item">
              <RefreshCw size={18} />
              <span>Easy Returns</span>
            </div>
            <div className="pdp__trust-item">
              <Shield size={18} />
              <span>Lifetime Warranty</span>
            </div>
            <div className="pdp__trust-item">
              <Check size={18} />
              <span>Certified Genuine</span>
            </div>
          </div>

          {/* Features */}
          {product.features?.length > 0 && (
            <div className="pdp__features">
              <h3 className="u-mono pdp__features-title">[ Features ]</h3>
              <ul>
                {product.features.map((f, i) => (
                  <li key={i}>
                    <span className="pdp__feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="pdp__related">
          <div className="pdp__related-head">
            <h2 className="pdp__related-title">You May Also Like</h2>
            <Link to="/products" className="pdp__related-all u-mono">View All →</Link>
          </div>
          <div className="pdp__related-cards">
            {related.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <ProductCard product={p} onClick={onQuickView} variant="slider" />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
