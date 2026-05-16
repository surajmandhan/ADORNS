
import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import cartEmptyAnimation from '../../public/empty cart.json';

import { FlashingArrowButton } from '../components/AnimatedButtons';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page empty">
         <div className="empty-state-card">
            <div className="lottie-container">
              <Lottie animationData={cartEmptyAnimation} loop={true} />
            </div>
            <h2 className="u-mono">[ Empty Cart ]</h2>
            <p>Your collection is currently waiting for its first arrival. Start adding pieces that resonate with your style.</p>
            <Link to="/" className="btn-primary">Return to Shop</Link>
         </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Shop</Link>
        <h1 className="u-mono">[ Shopping Cart ]</h1>
        <p>{totalItems} Items</p>
      </div>

      <div className="cart-content">
        <div className="cart-items-list">
          {cart.map(item => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="item-meta u-mono">{item.category} / {item.material}</p>
                <div className="item-actions">
                  <div className="qty-picker">
                    <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <Trash2 size={18} /> Remove
                  </button>
                </div>
              </div>
              <div className="cart-item-price u-mono">
                Rs. {item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="u-mono">Rs. {totalPrice}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="u-mono">FREE</span>
          </div>
          <div className="summary-row total">
            <span>Estimated Total</span>
            <span className="u-mono">Rs. {totalPrice}</span>
          </div>
          <FlashingArrowButton 
            text="Proceed to Checkout" 
            className="flashing-arrow-btn--gold w-full mt-4" 
            onClick={() => window.location.href='/checkout'}
          />
          <p className="summary-note">Taxes and shipping calculated at checkout.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
