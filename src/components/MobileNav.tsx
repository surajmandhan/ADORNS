
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingBag, Heart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const { user, setIsLoginModalOpen } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="mobile-nav" id="mobile-navigation">
      <Link to="/" className={`mobile-nav__item ${isActive('/') ? 'mobile-nav__item--active' : ''}`}>
        <Home size={20} />
        <span>Home</span>
      </Link>
      
      <Link to="/collections" className={`mobile-nav__item ${isActive('/collections') ? 'mobile-nav__item--active' : ''}`}>
        <Package size={20} />
        <span>Collection</span>
      </Link>
      
      <Link to="/cart" className={`mobile-nav__item ${isActive('/cart') ? 'mobile-nav__item--active' : ''}`}>
        <div className="relative">
          <ShoppingBag size={20} />
          {totalItems > 0 && <span className="mobile-nav__badge">{totalItems}</span>}
        </div>
        <span>Cart</span>
      </Link>
      
      <Link to="/wishlist" className={`mobile-nav__item ${isActive('/wishlist') ? 'mobile-nav__item--active' : ''}`}>
        <div className="relative">
          <Heart size={20} />
          {wishlist.length > 0 && <span className="mobile-nav__badge">{wishlist.length}</span>}
        </div>
        <span>Wishlist</span>
      </Link>
      
      <Link to={user ? "/profile" : "/login"} className={`mobile-nav__item ${isActive('/profile') || isActive('/login') ? 'mobile-nav__item--active' : ''}`}>
        <User size={20} />
        <span>Profile</span>
      </Link>
    </nav>
  );
};
