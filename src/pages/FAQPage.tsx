import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle, Package, Heart, RefreshCcw } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Orders & Shipping",
    icon: Package,
    questions: [
      { q: "How do I track my order?", a: "Once your order is shipped, you will receive a tracking link via email and WhatsApp. You can also track it on our 'Track Order' page." },
      { q: "Do you offer international shipping?", a: "Yes, we ship to over 50 countries. Shipping rates and delivery times vary by location." },
      { q: "Can I change my shipping address after placing an order?", a: "If the order hasn't been shipped, we can update it. Please contact our support team immediately." }
    ]
  },
  {
    category: "Jewelry Care",
    icon: Heart,
    questions: [
      { q: "Is the jewelry authentic?", a: "All ADORNS jewelry is crafted with genuine materials and comes with a certificate of authenticity." },
      { q: "How should I store my jewelry?", a: "Store each piece separately in a soft-lined box or pouch to prevent scratching. Keep away from perfumes and chemicals." },
      { q: "Do you offer polishing services?", a: "Yes, we offer complimentary polishing services for life. Just bring your piece to any of our boutiques." }
    ]
  },
  {
    category: "Returns & Warranty",
    icon: RefreshCcw,
    questions: [
      { q: "What is your return policy?", a: "We offer a 14-day hassle-free return policy. The item must be in its original condition with tags intact." },
      { q: "Does the jewelry come with a warranty?", a: "Yes, all our pieces come with a Lifetime Warranty covering manufacturing defects." },
      { q: "How long does a refund take?", a: "Once the return is processed, the refund will reflect in your original payment method within 5-7 business days." }
    ]
  }
];

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-page-v2">
      <section className="faq-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="u-mono uppercase tracking-widest text-sm mb-4 block text-gold">Help Center</span>
            <h1 className="font-display">Frequently Asked Questions</h1>
            
            <div className="faq-search-box mx-auto">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search for questions, keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="faq-content py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="faq-categories-wrap mb-16 flex justify-center">
            <div className="faq-categories flex flex-wrap justify-center gap-4">
                {FAQ_DATA.map(cat => (
                  <button 
                    key={cat.category}
                    onClick={() => {
                        setActiveCategory(cat.category);
                        setOpenIndex(0);
                    }}
                    className={`faq-cat-btn ${activeCategory === cat.category ? 'active' : ''}`}
                  >
                    <cat.icon size={18} />
                    <span>{cat.category}</span>
                  </button>
                ))}
            </div>
          </div>

          <div className="faq-list-container max-w-3xl mx-auto">
            {FAQ_DATA.find(c => c.category === activeCategory)?.questions.map((item, idx) => (
              <motion.div 
                key={idx}
                className="faq-item"
              >
                <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="faq-trigger"
                >
                  <span className="question-text">{item.q}</span>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="faq-footer text-center mt-24">
            <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
                <HelpCircle size={48} className="mx-auto mb-6 text-gold" />
                <h2 className="text-3xl font-display mb-4">Still have questions?</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">If you couldn't find the answer you were looking for, our concierge team is always here to help.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-all">Contact Concierge</Link>
                  <a href="https://wa.me/919876543210" className="border border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all">WhatsApp Us</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
