
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const unsplashUser = (id: string) => `https://images.unsplash.com/photo-${id}?w=150&h=150&fit=crop&q=80`;

const REVIEWS_TOP = [
  { name: "Aria Montgomery", text: "The elegance of the designs is truly unmatched. I'm in love!", img: unsplashUser("1494790108377-be9c29b29330") },
  { name: "Sophia Loren", text: "Expert craftsmanship and beautiful packaging. Highly recommended!", img: unsplashUser("1534528741775-53994a69daeb") },
  { name: "Isabella Rossi", text: "I bought a ring for my anniversary and it's absolutely stunning.", img: unsplashUser("1507003211169-0a1dd7228f2d") },
];

const REVIEWS_BOTTOM = [
  { name: "Elena Gilbert", text: "Fast delivery and the jewellery looks even better in person.", img: unsplashUser("1544005313-94ddf0286df2") },
  { name: "Mia Wallace", text: "Aurum Luxe has become my go-to for special gifts.", img: unsplashUser("1531746020798-e6953c6e8e04") },
  { name: "Gigi Hadid", text: "The quality and shine are incredible. Truly premium pieces.", img: unsplashUser("1554151228-14d9def656e4") },
];

const Testimonials: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(".review", {
      x: "-50%",
      duration: 30,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });
    gsap.to(".review2", {
      x: "-10%",
      duration: 30,
      repeat: -1,
      ease: "none",
      yoyo: true,
      startAt: { x: "-60%" }
    });
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <h2>CUSTOMERS</h2>
        <div className="exp row flex ac">
          <p>
            Our customers appreciate the quality, elegance, and comfort of our jewellery. We ensure a smooth shopping
            experience, reliable service, and lasting satisfaction, making every purchase feel special and truly
            memorable.✨
          </p>
          <h2>EXPERIENCE</h2>
        </div>
      </div>
      <div className="outter">
        <div className="review" ref={row1Ref} style={{ width: "fit-content" }}>
          {[...REVIEWS_TOP, ...REVIEWS_TOP, ...REVIEWS_TOP, ...REVIEWS_TOP].map((rev, i) => (
            <div key={i} className="col">
              <img src={rev.img} alt={rev.name} />
              <div className="content">
                <h4>"{rev.text}"</h4>
                <p><i>{rev.name}</i></p>
              </div>
            </div>
          ))}
        </div>
        <div className="review2" ref={row2Ref} style={{ width: "fit-content" }}>
          {[...REVIEWS_BOTTOM, ...REVIEWS_BOTTOM, ...REVIEWS_BOTTOM, ...REVIEWS_BOTTOM].map((rev, i) => (
            <div key={i} className="col">
              <img src={rev.img} alt={rev.name} />
              <div className="content">
                <h4>"{rev.text}"</h4>
                <p><i>{rev.name}</i></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
