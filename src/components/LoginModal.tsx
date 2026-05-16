
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login } = useAuth();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) login(email);
  };

  return (
    <AnimatePresence>
      {isLoginModalOpen && (
        <div className="login-modal-wrapper">
          <motion.div 
            className="login-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLoginModalOpen(false)}
          />
          <motion.div 
            className="login-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button className="close-btn" onClick={() => setIsLoginModalOpen(false)}><X size={24} /></button>
            <div className="login-modal-content">
              <h2 className="u-mono">[ Sign In ]</h2>
              <p>Enter your email to access your account, wishlist and orders.</p>
              <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary w-full">Continue</button>
              </form>
              <p className="footer-note">By continuing, you agree to our Terms of Service.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
