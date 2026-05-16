
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Info } from 'lucide-react';

const STORES = [
  {
    city: "Pune",
    name: "Flagship Store - Koregaon Park",
    address: "Lane 5, Koregaon Park, Pune 411001",
    phone: "+91 90000 12345",
    hours: "10:30 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1582037928867-1738112133b9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    city: "Mumbai",
    name: "Boutique Store - Bandra",
    address: "Hill Road, Bandra West, Mumbai 400050",
    phone: "+91 90000 54321",
    hours: "11:00 AM - 9:30 PM",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    city: "New Delhi",
    name: "Experience Center - South Ex",
    address: "Main Market, South Extension I, Delhi 110049",
    phone: "+91 90000 67890",
    hours: "10:30 AM - 8:30 PM",
    image: "https://images.unsplash.com/photo-1541604193435-2258a3a96aa6?auto=format&fit=crop&q=80&w=1200"
  }
];

const StoreLocatorPage: React.FC = () => {
    return (
        <div className="stores-page-v2">
            <section className="stores-hero">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="u-mono uppercase">Our Boutiques</h1>
                        <p>Experience the world of ADORNS in person. Visit our boutiques for personalized styling and exclusive previews.</p>
                    </motion.div>
                </div>
            </section>

            <div className="stores-container container">
                <div className="stores-grid-v2">
                    {STORES.map((store, index) => (
                        <motion.div 
                            key={index} 
                            className="store-card-v2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="store-image-v2">
                                <img src={store.image} alt={store.name} />
                                <div className="city-overlay">
                                    <span className="u-mono">{store.city}</span>
                                </div>
                            </div>
                            <div className="store-content-v2">
                                <h3>{store.name}</h3>
                                <div className="store-details">
                                    <div className="detail-row">
                                        <MapPin size={16} />
                                        <span>{store.address}</span>
                                    </div>
                                    <div className="detail-row">
                                        <Phone size={16} />
                                        <a href={`tel:${store.phone}`}>{store.phone}</a>
                                    </div>
                                    <div className="detail-row">
                                        <Clock size={16} />
                                        <span>{store.hours}</span>
                                    </div>
                                </div>
                                <div className="store-footer">
                                    <button className="btn-directions">
                                        <Navigation size={16} /> Get Directions
                                    </button>
                                    <button className="btn-info">
                                        <Info size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="visit-us-cta container py-24">
                <div className="cta-box">
                    <div className="cta-content">
                        <h2>Private Appointments</h2>
                        <p>Looking for a more personalized experience? Book a one-on-one session with our master stylists at any of our boutique locations.</p>
                        <button className="btn-primary">Schedule Appointment</button>
                    </div>
                    <div className="cta-image">
                        <img src="https://images.unsplash.com/photo-1541604193435-2258a3a96aa6?auto=format&fit=crop&q=80&w=1200" alt="Private Viewing" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StoreLocatorPage;
