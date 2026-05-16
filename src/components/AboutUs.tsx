
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const AboutUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundSize = useTransform(scrollYProgress, [0.3, 0.7], ["0% 100%", "200% 100%"]);

  return (
    <section className="about-section" ref={containerRef}>
      <div className="about-container">
        <div className="about-visual-side">
          <div className="about-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="about-blob-title" className="about-blob-svg">
              <title id="about-blob-title">Shraddha for AD<span className="brand-hyphen">-</span>OR<span className="brand-hyphen">-</span>NS</title>
              <defs>
                <clipPath id="blobClip">
                  <path d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                    transform="translate(100 100)"/>
                </clipPath>
                <path id="textPathHandle" d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                  transform="translate(100 100)" />
              </defs>
              <image href="https://palmonas.com/cdn/shop/files/shraddha_bleser_img_3.jpg?v=1752216350"
                width="200" height="200"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"/>
              <text className="text-content">
                <textPath href="#textPathHandle" startOffset="0%">
                  ❤ LOVED BY SHRADDHA ❤ FROM SHRADDHA, FOR YOU ❤ LOVED BY SHRADDHA ❤ FROM SHRADDHA, FOR YOU 
                  <animate attributeName="startOffset" from="0%" to="100%" dur="15s" repeatCount="indefinite" />
                </textPath>
                <textPath href="#textPathHandle" startOffset="100%">
                  ❤ LOVED BY SHRADDHA ❤ FROM SHRADDHA, FOR YOU ❤ LOVED BY SHRADDHA ❤ FROM SHRADDHA, FOR YOU 
                  <animate attributeName="startOffset" from="-100%" to="0%" dur="15s" repeatCount="indefinite" />
                </textPath>
              </text>
            </svg>
          </div>
          <div className="about-stats-mini">
              <div className="stat-item">
                <span className="stat-num">Demifine</span>
                <span className="stat-label u-mono">18k Gold Plated</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Premium</span>
                <span className="stat-label u-mono">Quality Metals</span>
              </div>
          </div>
        </div>

        <div className="about-content">
          <div className="u-mono about-label">[ Our Story ]</div>
          <h2 className="about-title fill-text">
            <motion.span style={{ backgroundSize }}>The Sparkle is <br/>Always <em>Yours</em> to Keep.</motion.span>
          </h2>
          <p className="about-text fill-text">
            <motion.span style={{ backgroundSize }}>
              At AD<span className="brand-hyphen">-</span>OR<span className="brand-hyphen">-</span>NS, we create jewellery that’s made to be worn — every day and on the days that matter most. It’s premium in quality, thoughtful in design, and priced so it feels right. We don’t believe in saving the good stuff for later. Our pieces are made to move with you, not sit in a box.
            </motion.span>
          </p>
          
          <div className="about-quote">
            <p className="about-quote-text fill-text">
              <motion.span style={{ backgroundSize }}>
                "A lot of us find real gold too expensive — and we don’t want our jewellery locked away. At the same time, imitation jewellery fades, breaks, and doesn’t last. So at AD<span className="brand-hyphen">-</span>OR<span className="brand-hyphen">-</span>NS, we’re building something in the middle — a new category called Demifine : 18k thick gold plating on premium metals, so everyone can enjoy jewellery that’s trendy, lasting, and high on quality."
              </motion.span>
            </p>
            <div className="about-quote-author u-mono">— Shraddha</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
