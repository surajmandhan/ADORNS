
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  Search, User, ShoppingBag, Menu, X, Heart, 
  Package, Settings, LogOut, ChevronRight,
  ArrowRight, Instagram, Facebook, Twitter,
  Youtube, Clock, Minus, Plus, Trash2, ShoppingCart, ArrowLeft
} from 'lucide-react';

// Contexts
import { CartProvider, useCart } from './context/CartContext';
import { WishlistProvider, useWishlist } from './context/WishlistContext';
import { AuthProvider, useAuth } from './context/AuthContext';

// Components
import { MiniCart } from './components/MiniCart';
import { LoginModal } from './components/LoginModal';
import { SearchOverlay } from './components/SearchOverlay';
import { MobileNav } from './components/MobileNav';

// Pages
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import CollectionsPage from './pages/CollectionsPage';
import ProductListingPage from './pages/ProductListingPage';
import AllProductsPage from './pages/AllProductsPage';
import LoginPage from './pages/LoginPage';
import PolicyPage from './pages/PolicyPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import TrackOrderPage from './pages/TrackOrderPage';
import StoreLocatorPage from './pages/StoreLocatorPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';

import { PRODUCTS as STATIC_PRODUCTS } from './data';
import { Product } from './context/CartContext';
import { fetchExternalProducts } from './services/productService';

const Header: React.FC<{ products: Product[] }> = ({ products }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const { user } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const heroHeight = window.innerHeight;

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > heroHeight) {
      if (latest > previous && latest > heroHeight + 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } else {
      setVisible(true);
    }
  });

  const isHome = location.pathname === '/';

  return (
    <>
      <motion.header 
        className={`topbar ${scrolled || !isHome ? 'topbar--scrolled' : ''}`}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="topbar__left">
          <button className="topbar__mobile-toggle">
            <Menu size={24} />
          </button>
          <Link to="/" className="topbar__brand">
            <img src="/adorns_logo-removebg-preview.png" alt="AD-OR-NS Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>
        </div>

        <nav className="topbar__nav">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="topbar__actions">
          <button className="topbar__action" onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="topbar__action">
            <Heart size={20} />
            {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
          </Link>
          <button className="topbar__action topbar__cart-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
          <Link to={user ? "/profile" : "/login"} className="topbar__action">
            <User size={20} />
          </Link>
        </div>
      </motion.header>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} products={products} />
    </>
  );
};

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer__giant">AD<span className="brand-hyphen">-</span>OR<span className="brand-hyphen">-</span>NS</h2>
      <div className="footer__cols">
        <div className="footer__col">
          <h3>Policy</h3>
          <ul>
            <li><Link to="/policy/shipping-delivery">Shipping & Delivery Policy</Link></li>
            <li><Link to="/policy/return-exchange">Return & Exchange Policy</Link></li>
            <li><Link to="/policy/rewards">Palmonas Rewards Policy</Link></li>
            <li><Link to="/policy/warranty">Lifetime Warranty Policy</Link></li>
            <li><Link to="/policy/buyback">Lifetime BuyBack Policy</Link></li>
            <li><Link to="/policy/payment">Payment Policy</Link></li>
            <li><Link to="/policy/grievance">Grievance Redressal Policy</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Help</h3>
          <ul>
            <li><Link to="/faq">FAQ's</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/policy/terms">Terms of Service</Link></li>
            <li><Link to="/policy/privacy">Privacy Policy</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/policy/return-exchange">Return & Exchange</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Stores & Services</h3>
          <ul>
             <li><Link to="/stores">Our Stores</Link></li>
             <li><Link to="/gifting">Corporate Gifting</Link></li>
             <li><Link to="/appointment">Book an Appointment</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2025 AD-OR-NS Luxury. All rights reserved.</span>
        <span>Local Time: {time}</span>
        <span>Crafted for Brilliance</span>
      </div>
    </footer>
  );
};

const DetailsModal: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) setActiveImage(product.image);
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div 
          key="product-modal"
          className="detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="detail__overlay" onClick={onClose} />
          <motion.div 
            className="detail__content"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <button className="detail__close" onClick={onClose} aria-label="Close modal">
              <X size={32} />
            </button>
            
            <div className="detail__grid">
              <div className="detail__gallery">
                <div className="detail__main-image">
                  <img src={activeImage} alt={product.title} />
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="detail__thumbnails">
                    {product.images.map((img, idx) => (
                      <button 
                        key={idx} 
                        className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <img src={img} alt={`${product.title} view ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="detail__info">
                <div className="detail__header">
                  <span className="u-mono">{product.num} / {product.collection}</span>
                  <h2>{product.title}</h2>
                  <div className="detail__price u-mono">Rs. {product.price}</div>
                </div>
                
                <div className="detail__body">
                  <p>{product.description}</p>
                  <div className="detail__specs">
                    <div className="spec"><span>Material</span> <span>{product.material}</span></div>
                    <div className="spec"><span>Collection</span> <span>{product.collection}</span></div>
                    <div className="spec"><span>Stock</span> <span>{product.stock}</span></div>
                  </div>
                </div>

                <div className="detail__actions">
                  <button className="btn-primary flex-1" onClick={() => { addToCart(product); onClose(); }}>
                    Add to Cart <ShoppingBag size={18} />
                  </button>
                  <button 
                    className={`btn-secondary ${isInWishlist(product.id) ? 'active' : ''}`} 
                    onClick={() => toggleWishlist(product)}
                  >
                    <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(STATIC_PRODUCTS);

  useEffect(() => {
    const loadProducts = async () => {
      const external = await fetchExternalProducts();
      if (external.length > 0) {
        setProducts(external);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeProduct]);

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CheckoutLayout 
              products={products} 
              setActiveProduct={setActiveProduct} 
              activeProduct={activeProduct} 
            />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

const CheckoutLayout: React.FC<{ 
  products: Product[], 
  setActiveProduct: (p: Product | null) => void,
  activeProduct: Product | null 
}> = ({ products, setActiveProduct, activeProduct }) => {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="app-container">
      {!isCheckout && <Header products={products} />}
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} onProductClick={setActiveProduct} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailPage products={products} onQuickView={setActiveProduct} />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/products" element={<ProductListingPage onProductClick={setActiveProduct} products={products} />} />
          <Route path="/search" element={<SearchPage onProductClick={setActiveProduct} products={products} />} />
          <Route path="/:type/:name" element={<ProductListingPage onProductClick={setActiveProduct} products={products} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/policy/:slug" element={<PolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/stores" element={<StoreLocatorPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appointment" element={<ContactPage />} />
          <Route path="/gifting" element={<PolicyPage />} />
        </Routes>
      </main>

      {!isCheckout && <Footer />}
      
      <DetailsModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      <MiniCart />
      <LoginModal />
      <MobileNav />
    </div>
  );
};

export default App;
