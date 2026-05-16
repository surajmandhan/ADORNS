import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Gem } from 'lucide-react';
import { FlickerButton } from '../components/AnimatedButtons';

const COLLECTIONS = [
  {
    name: "Earrings",
    slug: "Earrings",
    count: "124 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Earrings_636281e5-589c-45a5-bd6b-cefd1040b72c.webp?v=1778501398&width=600",
    description: "Elegant studs and statement danglers crafted for every mood.",
    accent: "#D4AF37",
    featured: true
  },
  {
    name: "Necklaces",
    slug: "Necklaces",
    count: "98 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Necklce.webp?v=1778501399&width=600",
    description: "Timeless pieces that drape beautifully on every neckline.",
    accent: "#B8860B",
    featured: false
  },
  {
    name: "Bracelets",
    slug: "Bracelets",
    count: "76 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Bracelets_non_men.webp?v=1778501398&width=600",
    description: "Refined wristwear for all occasions, from casual to couture.",
    accent: "#D4AF37",
    featured: false
  },
  {
    name: "Rings",
    slug: "Rings",
    count: "64 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Ring.webp?v=1778501398&width=600",
    description: "Exquisite bands and solitaires for your most precious moments.",
    accent: "#B8860B",
    featured: false
  },
  {
    name: "Mangalsutras",
    slug: "Mangalsutras",
    count: "32 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Mangalsutra_eed5afb8-b9b1-447a-9d0b-e1cfa58d8cb8.webp?v=1778501398&width=600",
    description: "Where sacred tradition meets the finest modern craftsmanship.",
    accent: "#D4AF37",
    featured: false
  },
  {
    name: "Men's",
    slug: "Mens",
    count: "42 Pieces",
    image: "https://palmonas.com/cdn/shop/files/Bracelets_b40e52fd-db59-4b15-8702-fa95eb757bae.webp?v=1778501398&width=600",
    description: "Sophisticated jewellery designed with strength and subtlety.",
    accent: "#B8860B",
    featured: false
  }
];

const CollectionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="col-page">

      {/* ── Hero Banner ── */}
      <section className="col-hero">
        <div className="col-hero__inner">
          <motion.div
            className="col-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="u-mono col-hero__tag">[ Our Collections ]</span>
            <h1 className="col-hero__title">
              Shop By<br />
              <span className="col-hero__title--accent">Category</span>
            </h1>
            <p className="col-hero__desc">
              Discover curated collections of premium jewellery — each piece a testament
              to unrivaled craftsmanship and timeless elegance.
            </p>
            <div className="col-hero__breadcrumb u-mono">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Collections</span>
            </div>
          </motion.div>

          {/* Decorative right side stat bar */}
          <motion.div
            className="col-hero__stats"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { val: '6', label: 'Collections' },
              { val: '436+', label: 'Pieces' },
              { val: '18K', label: 'Gold Vermeil' },
              { val: '∞', label: 'Warranty' },
            ].map(s => (
              <div key={s.label} className="col-hero__stat">
                <span className="col-hero__stat-val">{s.val}</span>
                <span className="col-hero__stat-label u-mono">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Marquee Strip ── */}
      <div className="col-marquee">
        <div className="col-marquee__track">
          {[...COLLECTIONS, ...COLLECTIONS].map((c, i) => (
            <span key={i} className="col-marquee__item">
              <Gem size={12} /> {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Collections Grid ── */}
      <section className="col-grid-section">
        <div className="col-grid">
          {COLLECTIONS.map((col, idx) => (
            <motion.div
              key={col.name}
              className={`col-card ${col.featured ? 'col-card--featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              onMouseEnter={() => setHovered(col.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/category/${col.slug}`)}
            >
              {/* Image */}
              <div className="col-card__img-wrap">
                <img
                  src={col.image}
                  alt={col.name}
                  className="col-card__img"
                />
                {/* Dark gradient overlay */}
                <div className="col-card__gradient" />

                {/* Count badge */}
                <span className="col-card__count u-mono">{col.count}</span>

                {/* Hover CTA inside image */}
                <div className="col-card__hover-cta">
                  <span className="u-mono">Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Text below image */}
              <div className="col-card__body">
                <div className="col-card__name-row">
                  <h2 className="col-card__name">{col.name}</h2>
                  <ArrowRight
                    size={18}
                    className={`col-card__arrow ${hovered === col.name ? 'col-card__arrow--active' : ''}`}
                  />
                </div>
                <p className="col-card__desc">{col.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom Banner ── */}
      <section className="col-bottom">
        <motion.div
          className="col-bottom__inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="u-mono col-bottom__tag">[ Adorns Promise ]</span>
          <h2 className="col-bottom__title">Crafted for<br />Brilliance</h2>
          <p className="col-bottom__desc">
            Every piece is hallmarked, certified, and crafted with 18K gold vermeil.
          </p>
          <div className="mt-4">
            <FlickerButton 
              text="Shop All Collections" 
              onClick={() => navigate('/products')}
              className="!w-auto !px-10"
            />
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default CollectionsPage;
