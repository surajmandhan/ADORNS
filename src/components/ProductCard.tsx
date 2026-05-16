
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, ShoppingBag, Heart } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void; // Quick View
  variant?: 'slider' | 'grid';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, variant = 'slider' }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const inWishlist = isInWishlist(product.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  if (variant === 'grid') {
    return (
      <div className="tile" onClick={handleCardClick}>
        <div className="tile__image-wrapper">
          <div className="product-card__image-container">
            <img src={product.image} alt={product.title} className="product-card__img product-card__img--primary" />
            {product.images && product.images.length > 1 && (
              <img src={product.images[1]} alt={`${product.title} alt view`} className="product-card__img product-card__img--secondary" />
            )}
          </div>
          <div className="product-actions-overlay">
            <div className="product-info-hover">
              <div className="product-info-hover__inner">
                <h4 className="product-info-hover__title">{product.title}</h4>
                <div className="product-info-hover__price u-mono">Rs. {product.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slider/default variant — premium redesigned card
  return (
    <div className="pcard" onClick={handleCardClick}>
      {/* Image Section */}
      <div className="pcard__img-wrap">
        <div className="product-card__image-container pcard__img-container">
          <img src={product.image} alt={product.title} className="product-card__img product-card__img--primary" />
          {product.images && product.images.length > 1 && (
            <img src={product.images[1]} alt={`${product.title} alt`} className="product-card__img product-card__img--secondary" />
          )}
        </div>

        {/* Trending badge */}
        {product.tags?.includes('trending') && (
          <span className="pcard__trend-badge u-mono">Hot</span>
        )}

        {/* Wishlist top-right */}
        <button
          className={`pcard__wish ${inWishlist ? 'pcard__wish--active' : ''}`}
          onClick={handleWishlist}
          aria-label="Wishlist"
        >
          <Heart size={15} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Hover overlay */}
        <div className="pcard__overlay">
          {/* Quick View */}
          <button className="pcard__qv-btn" onClick={handleQuickView}>
            <Eye size={15} />
            <span className="u-mono">Quick View</span>
          </button>
          {/* Add to Cart */}
          <button
            className={`pcard__cart-btn ${added ? 'pcard__cart-btn--added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? (
              <span className="u-mono">✓ Added</span>
            ) : (
              <><ShoppingBag size={15} /><span className="u-mono">Add to Cart</span></>
            )}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="pcard__info">
        <div className="pcard__meta">
          <span className="pcard__category u-mono">{product.category}</span>
          <span className="pcard__material u-mono">{product.material}</span>
        </div>
        <h3 className="pcard__title">{product.title}</h3>
        <div className="pcard__price-row">
          <span className="pcard__price u-mono">Rs. {product.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
