
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FlickerButton } from './AnimatedButtons';

const OccasionSlider: React.FC = () => {
  const occasions = [
    {
      title: "Office Wear",
      description: "Elevate your professional look with pieces that balance sophistication and subtle glamour.",
      img: "//palmonas.com/cdn/shop/files/office_look_c3017051-98e4-4dbd-a027-7fb5ae821807.jpg?v=1760076384&width=1500"
    },
    {
      title: "Daily Wear",
      description: "Your everyday spark. Comfortable, durable, and effortlessly stylish jewellery for your routine.",
      img: "//palmonas.com/cdn/shop/files/daily_ware_c32bcc0d-4cd5-41c3-8868-e24936980c93.jpg?v=1760076359&width=1500"
    },
    {
      title: "Party Wear",
      description: "Be the star of the evening. Bold designs that capture light and attention in every room.",
      img: "//palmonas.com/cdn/shop/files/party_ware_fb0025a4-9d04-44dd-a83d-ac0e703e79f4.jpg?v=1760076406&width=1500"
    },
    {
      title: "Day Out",
      description: "Chic and playful pieces perfect for brunch dates, shopping sprees, and sunny walks.",
      img: "//palmonas.com/cdn/shop/files/day_out_look_53c55987-8031-4e78-b09f-32c1db1f2c27.jpg?v=1760076473&width=1500"
    },
    {
      title: "Date Night",
      description: "Romantic and alluring. Jewellery that adds that special touch to your unforgettable evenings.",
      img: "//palmonas.com/cdn/shop/files/date_night_look_d3b9a0f5-1f96-46e9-8ad8-e308147736e6.jpg?v=1760076493&width=1500"
    },
    {
      title: "Wedding Wear",
      description: "Timeless elegance for the biggest days. Heritage-inspired craftsmanship for lasting memories.",
      img: "//palmonas.com/cdn/shop/files/wedding_ware_55482a62-e9e6-408c-8dcf-6994d5501362.jpg?v=1760076518&width=1500"
    }
  ];

  return (
    <section className="occasion-slider-section">
      <div className="occasion-container">
        <div className="occasion-info">
          <span>Discover</span>
          <h1>FOR EVERY YOU</h1>
          <hr />
          <p>Jewellery designed for every moment, every mood, and every version of you. Explore our occasion-based collections.</p>
          <FlickerButton text="Explore All" onClick={() => window.location.href = '#mosaic'} className="u-mono" />
        </div>

        <div className="occasion-swiper-wrap">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            modules={[EffectCoverflow, Pagination, Keyboard, Autoplay, Navigation]}
            slidesPerView="auto"
            autoplay={{ 
              delay: 3500, 
              disableOnInteraction: false 
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            keyboard={{ enabled: true }}
            navigation={{
              nextEl: '.occ-next',
              prevEl: '.occ-prev',
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            breakpoints={{
              320: { slidesPerView: 'auto', spaceBetween: 20 },
              768: { slidesPerView: 'auto', spaceBetween: 30 },
              1024: { slidesPerView: 'auto', spaceBetween: 40 },
            }}
            className="occasion-swiper"
          >
            {occasions.map((occ, i) => (
              <SwiperSlide key={i} className="occasion-slide" style={{ backgroundImage: `url(${occ.img})` }}>
                {/* 
                <div className="occasion-slide-content">
                  <h2>{occ.title}</h2>
                  <p>{occ.description}</p>
                  <a href="#mosaic">Explore</a>
                </div>
                */}
              </SwiperSlide>
            ))}
            
            <div className="occasion-nav">
              <div className="bato-nav">
                <div className="bato-nav__buttons">
                  <img src="https://bato-web-agency.github.io/bato-shared/img/swipe-slider/navs.svg" alt="Navigation" className="bato-nav__bg" />
                  
                  <button 
                    className="bato-nav__btn previous occ-prev"
                    aria-label="Previous"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.3331 17.3333H8.99979L15.9998 24.3333L15.1198 25.3333L6.45312 16.6667L15.1198 8L15.1198 8L15.9998 9L8.99979 16H25.3331V17.3333Z" fill="currentColor" />
                    </svg>
                    <span className="bato-nav__label previous u-mono">PREV</span>
                  </button>

                  <button 
                    className="bato-nav__btn next occ-next"
                    aria-label="Next"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33203 16H21.6654L14.6654 9L15.5454 8L24.212 16.6667L15.5454 25.3333L14.6654 24.3333L21.6654 17.3333H5.33203V16Z" fill="currentColor" />
                    </svg>
                    <span className="bato-nav__label next u-mono">NEXT</span>
                  </button>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OccasionSlider;
