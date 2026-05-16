
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ChevronRight, ArrowLeft, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

type CheckoutStep = 'info' | 'shipping' | 'payment';

const CheckoutPage: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<CheckoutStep>('info');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (cart.length === 0 && !isOrderPlaced) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  return (
    <div className="checkout-page">
      <AnimatePresence>
        {isOrderPlaced && (
          <motion.div 
            className="order-success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="order-success-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="success-icon">
                <CheckCircle2 size={80} color="var(--c-accent)" />
              </div>
              <h2>Order Placed Successfully!</h2>
              <p>Thank you for choosing ADORNS. Your order has been received and is being processed.</p>
              <div className="order-details-summary">
                <span>Order #AD-{(Math.random() * 10000).toFixed(0)}</span>
                <span>Amount Paid: Rs. {totalPrice}</span>
              </div>
              <button className="btn-continue" onClick={() => navigate('/')}>
                Continue Shopping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="checkout-container">
        
        {/* Left Column: Form Info */}
        <div className="checkout-main">
          <header className="checkout-header">
            <Link to="/" className="checkout-logo">
              <img src="/adorns_logo-removebg-preview.png" alt="ADORNS Logo" />
            </Link>
            <nav className="checkout-breadcrumbs">
              <Link to="/cart">Cart</Link>
              <ChevronRight size={14} />
              <span className={step === 'info' ? 'active' : ''} onClick={() => setStep('info')}>Information</span>
              <ChevronRight size={14} />
              <span className={step === 'shipping' ? 'active' : ''} onClick={() => setStep('shipping')}>Shipping</span>
              <ChevronRight size={14} />
              <span className={step === 'payment' ? 'active' : ''} onClick={() => setStep('payment')}>Payment</span>
            </nav>
          </header>

          <main className="checkout-form-area">
            <AnimatePresence mode="wait">
              {step === 'info' && (
                <motion.div 
                  key="info"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="checkout-section">
                    <div className="section-header">
                      <h2>Contact</h2>
                      <Link to="/login">Log in</Link>
                    </div>
                    <input type="email" placeholder="Email or mobile phone number" className="checkout-input" />
                    <div className="checkout-checkbox">
                      <input type="checkbox" id="newsletter" />
                      <label htmlFor="newsletter">Email me with news and offers</label>
                    </div>
                  </div>

                  <div className="checkout-section">
                    <h2>Shipping address</h2>
                    <div className="checkout-row">
                      <select className="checkout-input">
                        <option>India</option>
                      </select>
                    </div>
                    <div className="checkout-row">
                      <input type="text" placeholder="First name (optional)" className="checkout-input" />
                      <input type="text" placeholder="Last name" className="checkout-input" />
                    </div>
                    <div className="checkout-row">
                      <input type="text" placeholder="Address" className="checkout-input" />
                    </div>
                    <div className="checkout-row">
                      <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
                    </div>
                    <div className="checkout-row">
                      <input type="text" placeholder="City" className="checkout-input" />
                      <input type="text" placeholder="State" className="checkout-input" />
                      <input type="text" placeholder="PIN code" className="checkout-input" />
                    </div>
                    <div className="checkout-row">
                      <input type="text" placeholder="Phone" className="checkout-input" />
                    </div>
                  </div>

                  <footer className="checkout-footer">
                    <Link to="/cart" className="back-to-cart">
                      <ArrowLeft size={18} /> Return to cart
                    </Link>
                    <button className="btn-continue" onClick={() => setStep('shipping')}>
                      Continue to shipping
                    </button>
                  </footer>
                </motion.div>
              )}

              {step === 'shipping' && (
                <motion.div 
                  key="shipping"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="checkout-section">
                    <div className="shipping-info-summary">
                        <div className="summary-row">
                            <span className="label">Contact</span>
                            <span className="value">user@example.com</span>
                            <button onClick={() => setStep('info')}>Change</button>
                        </div>
                        <div className="summary-row">
                            <span className="label">Ship to</span>
                            <span className="value">Mumbai, Maharashtra, 400001, India</span>
                            <button onClick={() => setStep('info')}>Change</button>
                        </div>
                    </div>
                  </div>

                  <div className="checkout-section">
                    <h2>Shipping method</h2>
                    <div className="shipping-method-card">
                        <div className="method-row">
                            <input type="radio" checked readOnly />
                            <div className="method-info">
                                <span>Standard Shipping</span>
                                <span className="method-time">3-5 business days</span>
                            </div>
                            <span className="method-price">Free</span>
                        </div>
                    </div>
                  </div>

                  <footer className="checkout-footer">
                    <button className="back-to-cart" onClick={() => setStep('info')}>
                      <ArrowLeft size={18} /> Return to information
                    </button>
                    <button className="btn-continue" onClick={() => setStep('payment')}>
                      Continue to payment
                    </button>
                  </footer>
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div 
                  key="payment"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="checkout-section">
                     <div className="shipping-info-summary">
                        <div className="summary-row">
                            <span className="label">Contact</span>
                            <span className="value">user@example.com</span>
                            <button onClick={() => setStep('info')}>Change</button>
                        </div>
                        <div className="summary-row">
                            <span className="label">Ship to</span>
                            <span className="value">Mumbai, Maharashtra, 400001, India</span>
                            <button onClick={() => setStep('info')}>Change</button>
                        </div>
                        <div className="summary-row">
                            <span className="label">Method</span>
                            <span className="value">Standard · Free</span>
                            <button onClick={() => setStep('shipping')}>Change</button>
                        </div>
                    </div>
                  </div>

                  <div className="checkout-section">
                    <div className="section-header">
                        <h2>Payment</h2>
                        <span className="secure-tag"><ShieldCheck size={14} /> Secure Encryption</span>
                    </div>
                    <p className="section-desc">All transactions are secure and encrypted.</p>
                    
                    <div className="payment-card-box">
                        <div className="payment-header">
                            <span>Credit card</span>
                            <div className="card-icons">
                                <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db0e169df4.svg" alt="Visa" />
                                <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae359a4213aa263da365.svg" alt="Mastercard" />
                                <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/f3da197b05539e71ec26.svg" alt="Amex" />
                            </div>
                        </div>
                        <div className="payment-body">
                            <div className="stripe-input-wrapper">
                                <div className="card-number-field">
                                    <input type="text" placeholder="Card number" className="checkout-input" />
                                    <Lock size={16} className="lock-icon" />
                                </div>
                                <div className="checkout-row">
                                    <input type="text" placeholder="Expiration date (MM / YY)" className="checkout-input" />
                                    <input type="text" placeholder="Security code" className="checkout-input" />
                                </div>
                                <input type="text" placeholder="Name on card" className="checkout-input" />
                            </div>
                        </div>
                    </div>
                  </div>

                  <footer className="checkout-footer">
                    <button className="back-to-cart" onClick={() => setStep('shipping')}>
                      <ArrowLeft size={18} /> Return to shipping
                    </button>
                    <button className="btn-continue btn-pay" onClick={handlePlaceOrder}>
                      Pay now
                    </button>
                  </footer>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
          
          <div className="checkout-policies">
             <Link to="/policy/refund">Refund policy</Link>
             <Link to="/policy/shipping">Shipping policy</Link>
             <Link to="/policy/privacy">Privacy policy</Link>
             <Link to="/policy/terms">Terms of service</Link>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="checkout-sidebar">
          <div className="order-summary-sticky">
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-img">
                    <img src={item.image} alt={item.title} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <span className="summary-item-title">{item.title}</span>
                    <span className="summary-item-meta u-mono">{item.material} / {item.category}</span>
                  </div>
                  <span className="summary-item-price u-mono">Rs. {item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="discount-box">
              <input type="text" placeholder="Discount code" className="checkout-input" />
              <button disabled>Apply</button>
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal</span>
                <span className="u-mono">Rs. {totalPrice}</span>
              </div>
              <div className="total-row">
                <span>Shipping</span>
                <span className="u-mono">{step === 'info' ? 'Calculated at next step' : 'FREE'}</span>
              </div>
              <div className="total-row grand-total">
                <div className="total-label">
                   <span>Total</span>
                   <span className="tax-note">Including Rs. 0.00 in taxes</span>
                </div>
                <div className="total-value">
                   <span className="currency">INR</span>
                   <span className="amount u-mono">Rs. {totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default CheckoutPage;
