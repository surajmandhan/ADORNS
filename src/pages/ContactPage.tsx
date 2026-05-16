import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, CheckCircle, Clock, Calendar, Gift } from 'lucide-react';
import { FlashingArrowButton } from '../components/AnimatedButtons';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page-v2">
      <section className="contact-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="u-mono uppercase tracking-widest text-sm mb-4 block text-gold">Concierge Service</span>
            <h1 className="font-display">Contact Us</h1>
            <p className="max-w-2xl mx-auto">Our dedicated support team is here to assist you with everything from styling advice to order tracking.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="contact-info-cards mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="info-card"
            >
              <div className="card-icon"><Mail size={24} /></div>
              <h3>Email Us</h3>
              <p>For general inquiries and support.</p>
              <a href="mailto:support@adorns.in" className="link">support@adorns.in</a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="info-card"
            >
              <div className="card-icon"><Phone size={24} /></div>
              <h3>Call Us</h3>
              <p>Mon-Sat, 10am - 7pm IST</p>
              <a href="tel:+919876543210" className="link">+91 98765 43210</a>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="info-card"
            >
              <div className="card-icon"><Gift size={24} /></div>
              <h3>Corporate Gifting</h3>
              <p>Looking for bulk orders?</p>
              <Link to="/policy/corporate-gifting" className="link">Learn More</Link>
            </motion.div>
          </div>

          <div className="contact-form-section">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="form-card"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-3xl font-display mb-8 text-center">Send us a Message</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="form-group mb-6">
                      <label>Subject</label>
                      <select required>
                        <option value="">Select an inquiry type</option>
                        <option value="order">Order Support</option>
                        <option value="product">Product Information</option>
                        <option value="return">Returns & Exchanges</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group mb-8">
                      <label>Message</label>
                      <textarea rows={5} placeholder="How can we help you today?" required></textarea>
                    </div>
                    <FlashingArrowButton text="Submit Inquiry" className="w-full" />
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10"
                  >
                    <div className="flex justify-center mb-6">
                      <CheckCircle size={80} className="text-gold" />
                    </div>
                    <h2 className="text-3xl font-display mb-4">Message Received</h2>
                    <p className="text-gray-600 mb-8 max-w-sm mx-auto">Thank you for reaching out. Our concierge team will get back to you within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="underline font-semibold">Send another message</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Store Preview */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="u-mono text-gold mb-4 block">[ Experience in Person ]</span>
              <h2 className="text-4xl font-display mb-6">Visit Our Boutiques</h2>
              <p className="text-gray-600 mb-8">Discover our collections in person at one of our flagship stores. Experience the craftsmanship and get personalized styling from our experts.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-700">
                    <MapPin size={20} className="text-gold" />
                    <span>Flagship Pune: Koregaon Park, Lane 5</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                    <Clock size={20} className="text-gold" />
                    <span>Open Daily: 11 AM - 9 PM</span>
                </div>
              </div>
              <Link to="/stores" className="link inline-block underline">View all store locations</Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1582037928827-422131913c74?auto=format&fit=crop&q=80&w=1200" 
                  alt="Store Interior"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
