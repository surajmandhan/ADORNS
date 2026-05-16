
import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, ArrowLeft, ShoppingBag, Trash2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Lottie from 'lottie-react';
import wishlistEmptyAnimation from '../../public/EMPTY WISHLIST HEART.json';
import { FlashingArrowButton } from '../components/AnimatedButtons';

const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());

  const handleAddToCart = (item: any) => {
    addToCart(item);
    setAddedIds(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 2000);
  };

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page wishlist-page--empty">
        <div className="wishlist-empty-state">
          <div className="wishlist-empty-lottie">
            <Lottie animationData={wishlistEmptyAnimation} loop={true} />
          </div>
          <span className="wishlist-empty-tag u-mono">[ Your Wishlist ]</span>
          <h2 className="wishlist-empty-title">Nothing saved yet</h2>
          <p className="wishlist-empty-desc">
            Save your favorite pieces here to keep an eye on them.<br />
            Your style journey starts with a single spark.
          </p>
          <Link to="/products" className="wishlist-explore-btn">
            <span>Explore Collection</span>
            <Sparkles size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      {/* Hero Header */}
      <div className="wishlist-hero">
        <div className="wishlist-hero__inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <div className="wishlist-hero__title-row">
            <div>
              <span className="u-mono wishlist-hero__label">[ Curated by you ]</span>
              <h1 className="wishlist-hero__title">Your Wishlist</h1>
            </div>
            <div className="wishlist-hero__count">
              <Heart size={24} fill="currentColor" />
              <span className="u-mono">{wishlist.length} piece{wishlist.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="wishlist-body">
        <AnimatePresence>
          <div className="wishlist-grid">
            {wishlist.map((item, i) => (
              <motion.div
                key={item.id}
                className="wl-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                layout
              >
                {/* Image */}
                <div className="wl-card__img-wrap">
                  <img src={item.image} alt={item.title} className="wl-card__img" />
                  {/* Overlay actions */}
                  <div className="wl-card__overlay">
                    <button
                      className="wl-card__quick-add"
                      onClick={() => handleAddToCart(item)}
                    >
                      {addedIds.has(item.id) ? (
                        <>Added ✓</>
                      ) : (
                        <><ShoppingBag size={16} /> Quick Add</>
                      )}
                    </button>
                  </div>
                  {/* Remove button */}
                  <button
                    className="wl-card__remove"
                    onClick={() => toggleWishlist(item)}
                    aria-label="Remove from wishlist"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>
                  {/* Category badge */}
                  <span className="wl-card__badge u-mono">{item.category}</span>
                </div>

                {/* Info */}
                <div className="wl-card__info">
                  <h3 className="wl-card__title">{item.title}</h3>
                  <div className="wl-card__meta">
                    <span className="wl-card__material u-mono">{item.material}</span>
                    <span className="wl-card__price u-mono">Rs. {item.price}</span>
                  </div>
                  <button
                    className={`wl-card__add-btn ${addedIds.has(item.id) ? 'wl-card__add-btn--added' : ''}`}
                    onClick={() => handleAddToCart(item)}
                  >
                    {addedIds.has(item.id) ? (
                      <><span>✓</span> Added to Cart</>
                    ) : (
                      <><ShoppingBag size={15} /> Add to Cart</>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="wishlist-cta">
          <p className="wishlist-cta__text u-mono">— {wishlist.length} piece{wishlist.length !== 1 ? 's' : ''} saved —</p>
          <FlashingArrowButton
            text="Continue Shopping"
            className="flashing-arrow-btn--gold"
            onClick={() => window.location.href = '/products'}
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
