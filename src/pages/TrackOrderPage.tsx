
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Package, Truck, CheckCircle, Search, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

const TrackOrderPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<null | 'tracking' | 'done'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('tracking');
    setTimeout(() => setStatus('done'), 1500);
  };

  return (
    <div className="track-page-v2">
      <section className="track-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="u-mono uppercase">Where is my sparkle?</h1>
            <p>Enter your details below to follow your order's journey in real-time.</p>
            
            <form onSubmit={handleTrack} className="track-form-box">
              <div className="input-row">
                <div className="input-group">
                  <label>Order ID</label>
                  <input 
                    type="text" 
                    placeholder="e.g. AD-987654" 
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Email used for order" required />
                </div>
                <button type="submit" className="btn-track">
                  Track <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <div className="track-result-container container">
        <AnimatePresence mode="wait">
          {status === 'tracking' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="track-loader mx-auto"></div>
              <p className="mt-6 u-mono uppercase tracking-widest text-xs">Locating your shipment...</p>
            </motion.div>
          )}

          {status === 'done' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="track-card"
            >
              <div className="track-card-header">
                <div className="order-info">
                  <span className="label u-mono">Order Status</span>
                  <div className="status-badge">In Transit</div>
                </div>
                <div className="order-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>Est. Delivery: <strong>Oct 15, 2024</strong></span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>Current Location: <strong>Pune, MH</strong></span>
                  </div>
                </div>
              </div>

              <div className="track-timeline-v2">
                {[
                  { title: "Order Confirmed", desc: "We've received your order and it's being prepared.", time: "Oct 12, 10:30 AM", status: "completed", icon: CheckCircle },
                  { title: "Quality Check", desc: "Your jewelry passed our 24-point quality inspection.", time: "Oct 12, 02:45 PM", status: "completed", icon: CheckCircle },
                  { title: "Shipped", desc: "Handed over to BlueDart. Tracking ID: 129837192", time: "Oct 13, 08:20 AM", status: "current", icon: Truck },
                  { title: "Delivered", desc: "Estimated delivery to your doorstep.", time: "Expected by Oct 15", status: "pending", icon: Package },
                ].map((step, index) => (
                  <div key={index} className={`timeline-step ${step.status}`}>
                    <div className="step-icon">
                      <step.icon size={20} />
                    </div>
                    <div className="step-content">
                      <div className="step-header">
                        <h4>{step.title}</h4>
                        <span className="step-time u-mono">{step.time}</span>
                      </div>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="track-card-footer">
                <div className="support-prompt">
                  <p>Having issues with your delivery? <Link to="/contact">Contact Support</Link></p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrackOrderPage;
