
import React from 'react';

const Marquee: React.FC = () => {
  const items = ["Gold & Diamonds", "Signature Rings", "Artisanal Pendants", "Luxury Timepieces", "Fine Earrings"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot"> ● </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
