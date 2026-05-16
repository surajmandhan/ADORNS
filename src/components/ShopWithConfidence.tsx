
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Lottie from 'lottie-react';

const CARDS = [
  {
    lottiePath: "/Female avatar.json",
    title: "Skin Safe",
    desc: "Our jewelry is hypoallergenic and skin-safe, crafted with care to ensure comfort for all skin types. Enjoy beautiful, irritation-free wear every day, knowing each piece is designed with your well-being in mind."
  },
  {
    lottiePath: "/Gold Bar.json",
    title: "18K Gold Vermeil",
    desc: "Our jewelry is crafted from premium metals like surgical steel, sterling silver, and thick 18k gold plating, ensuring durability and lasting shine. Experience luxury and quality with every piece."
  },
  {
    lottiePath: "/Red Diamond.json",
    title: "Authentic Diamonds",
    desc: "Our lab-grown diamonds are SGL Certified, ensuring the highest standards of quality and authenticity same like natural diamonds. Each diamond undergoes rigorous testing."
  }
];

const LottieIcon: React.FC<{ path: string }> = ({ path }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading lottie:", err));
  }, [path]);

  if (!animationData) return <div style={{ width: 90, height: 90 }} />;

  return (
    <Lottie 
      animationData={animationData} 
      loop={true} 
      style={{ width: "100%", height: "100%" }}
    />
  );
};

const ShopWithConfidence: React.FC = () => {
  return (
    <div className="shop-confi-parent">
      <div className="shop-confi-wrapper">

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Shop With Confidence
        </motion.h3>

        <div className="shop-conf-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="shop-conf-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="swc-image-wrapper">
                <LottieIcon path={card.lottiePath} />
              </div>
              <div className="swc-text">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ShopWithConfidence;
