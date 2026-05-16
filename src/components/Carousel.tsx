
import React, { useState, useEffect } from 'react';
import { FlickerButton } from './AnimatedButtons';

const Carousel: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "GRAFF",
      name: "HIGH JEWELLERY 2026",
      des: "Experience the epitome of luxury with the Graff High Jewellery 2026 collection.",
      img: "https://www.graff.com/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw5528a538/images/megamenu/Navigation_MM_High_Jewellery_2026_1890x1059px.jpg"
    },
    {
      id: 2,
      title: "LEGACY",
      name: "THE HOUSE OF GRAFF",
      des: "A story of brilliance, craftsmanship, and the world's most fabulous diamonds.",
      img: "https://www.graff.com/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw49d922dc/images/megamenu/Megamenu_Banner_House.jpg"
    },
    {
      id: 3,
      title: "BRILLIANCE",
      name: "DIAMOND HERO",
      des: "Capturing the pure essence of light through masterfully cut diamonds.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw02ecbbe0/Homepage%20Images/May_26/Graff-High-Jewellery-Diamond-Hero-3556x2000px.jpg"
    },
    {
      id: 4,
      title: "NATURE",
      name: "BUTTERFLY MOTIF",
      des: "Delicate strength and eternal beauty inspired by the grace of nature.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw1195f814/Homepage%20Images/May_26/Graff-Butterfly-homepage-hero-3556x2000px.jpg"
    },
    {
      id: 5,
      title: "VERDANT",
      name: "EMERALD SPLENDOUR",
      des: "Exceptional emeralds radiating deep green hues of untamed elegance.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwdf80b9a0/Landing%20Pages/High%20Jewellery%202026/Graff-High-Jewellery-Emerald-2000x1125px.jpg"
    },
    {
      id: 6,
      title: "CELESTIAL",
      name: "SAPPHIRE DREAMS",
      des: "Deep velvet blues that mirror the mystery and beauty of the night sky.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwfcef9580/Landing%20Pages/High%20Jewellery%202026/Graff-High-Jewellery-Sapphire-2000x1125px.jpg"
    },
    {
      id: 7,
      title: "WINGS",
      name: "BUTTERFLY GARDEN",
      des: "A whimsical dance of diamonds taking flight in our latest collection.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwf05e83bc/images/PLP%20HEADERS/new/butterflydesktopnew.jpg"
    },
    {
      id: 8,
      title: "CRAFT",
      name: "ARTISANAL MASTERY",
      des: "Where precision meets passion in the creation of timeless treasures.",
      img: "https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/5463980149001/b20ba4f1-ee53-46c4-ac58-d7fa735e958d/main/1280x720/15s168ms/match/image.jpg"
    },
    {
      id: 9,
      title: "RADIANCE",
      name: "YELLOW DIAMONDS",
      des: "Warmth and brilliance captured in the rarest yellow diamonds in the world.",
      img: "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwe537414b/Landing%20Pages/High%20Jewellery%202026/Graff-High-Jewellery-Yellow-Diamond-2000x1125px.jpg"
    }
  ]);

  const [animating, setAnimating] = useState<"next" | "prev" | null>(null);

  const next = () => {
    if (animating) return;
    setAnimating("next");
    setTimeout(() => {
      setItems(prev => {
        const nextArr = [...prev];
        const first = nextArr.shift()!;
        nextArr.push(first);
        return nextArr;
      });
      setAnimating(null);
    }, 1000);
  };

  const prev = () => {
    if (animating) return;
    setAnimating("prev");
    setTimeout(() => {
      setItems(prev => {
        const nextArr = [...prev];
        const last = nextArr.pop()!;
        nextArr.unshift(last);
        return nextArr;
      });
      setAnimating(null);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 7000);
    return () => clearTimeout(timer);
  }, [items, animating]);

  return (
    <section className={`carousel ${animating ? animating : ""}`} id="top">
      <div className="list">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="carousel-logo">
                <img src="/adorns_logo-removebg-preview.png" alt="" />
              </div>
              <div className="title">{item.title}</div>
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <div className="btn" style={{ display: 'flex', gap: '15px' }}>
                <FlickerButton text="SEE COLLECTIONS" onClick={() => window.location.href = "#index"} />
                <FlickerButton text="QUICK VIEW" onClick={() => window.location.href = "#index"} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows-container">
        <div className="bato-nav">
          <div className="bato-nav__buttons">
            <img src="https://bato-web-agency.github.io/bato-shared/img/swipe-slider/navs.svg" alt="Navigation" className="bato-nav__bg" />
            
            <button 
              onClick={prev} 
              className="bato-nav__btn previous"
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3331 17.3333H8.99979L15.9998 24.3333L15.1198 25.3333L6.45312 16.6667L15.1198 8L15.9998 9L8.99979 16H25.3331V17.3333Z" fill="currentColor" />
              </svg>
              <span className="bato-nav__label previous u-mono">PREV</span>
            </button>

            <button 
              onClick={next} 
              className="bato-nav__btn next"
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33203 16H21.6654L14.6654 9L15.5454 8L24.212 16.6667L15.5454 25.3333L14.6654 24.3333L21.6654 17.3333H5.33203V16Z" fill="currentColor" />
              </svg>
              <span className="bato-nav__label next u-mono">NEXT</span>
            </button>
          </div>
        </div>
      </div>

      <div className="timeRunning" key={items[0].id}></div>
    </section>
  );
}

export default Carousel;
