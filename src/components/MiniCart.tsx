
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import Lottie from 'lottie-react';
import cartEmptyAnimation from '../../public/empty cart.json';
import { FlickerButton, FlashingArrowButton } from './AnimatedButtons';
import { useCart } from '../context/CartContext';

export const MiniCart: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            className="minicart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div 
            className="minicart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="minicart-header">
              <h3>Your Cart ({cart.length})</h3>
              <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
            </div>

            <div className="minicart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="lottie-container">
                    <Lottie animationData={cartEmptyAnimation} loop={true} />
                  </div>
                  <h4 className="u-mono">[ Empty ]</h4>
                  <p>Your bag is waiting for something special.</p>
                  <button onClick={() => setIsCartOpen(false)} className="btn-primary">Discover Catalog</button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="minicart-item">
                    <img src={item.image} alt={item.title} />
                    <div className="item-info">
                      <h4>{item.title}</h4>
                      <p className="u-mono">Rs. {item.price}</p>
                      <div className="qty-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                      </div>
                    </div>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="minicart-footer">
                <div className="total">
                  <span>Subtotal</span>
                  <span className="u-mono">Rs. {totalPrice}</span>
                </div>
                <div className="footer-actions flex flex-col space-y-3">
                  <FlickerButton 
                    text="View Cart" 
                    className="w-full !justify-center !h-[55px] flicker-btn--gold" 
                    onClick={() => window.location.href='/cart'}
                  />
                  <FlashingArrowButton 
                    text="Checkout" 
                    className="flashing-arrow-btn--gold w-full" 
                    onClick={() => window.location.href='/checkout'}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
