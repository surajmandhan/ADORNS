import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import AboutUs from '../components/AboutUs';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

const AboutPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="about-page-modern">
      
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <motion.div className="about-hero-bg" style={{ y, opacity }}>
          <img src="https://images.unsplash.com/photo-1599643478524-fb524458f2f2?q=80&w=2500&auto=format&fit=crop" alt="ADORNS Heritage" />
        </motion.div>
        <div className="about-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <span className="u-mono uppercase tracking-widest text-sm mb-4 block text-white/80">The Heritage</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase text-white mb-6">Crafting<br/>Brilliance</h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg">A legacy of fine craftsmanship, redefining luxury jewelry for the modern era.</p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy py-24 md:py-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="u-mono uppercase text-accent mb-6 block">[ Our Philosophy ]</span>
            <h2 className="font-display text-3xl md:text-5xl uppercase leading-tight mb-8">
              Jewelry is not just an accessory.<br/>It is an expression of your journey.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              At ADORNS, we believe that true luxury lies in the details. Every piece we create is a testament to our commitment to uncompromising quality, ethical sourcing, and timeless design. We blend modern aesthetics with heritage techniques to craft jewelry that resonates with your unique story.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Craftsmanship ZigZag */}
      <section className="about-craft py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden max-w-sm mx-auto shadow-2xl rounded-sm">
                <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1200&auto=format&fit=crop" alt="Craftsmanship" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="md:pl-12">
                <span className="u-mono uppercase text-accent mb-4 block">01 / The Process</span>
                <h3 className="font-display text-4xl uppercase mb-6">Masterful Artistry</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our master craftsmen spend hundreds of hours bringing each design to life. From the initial sketch to the final polish, every step is executed with precision and passion.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We honor traditional jewelry-making techniques while embracing modern innovations to ensure that every curve, setting, and finish is flawless.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row-reverse">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden max-w-sm mx-auto shadow-2xl rounded-sm">
                <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop" alt="Materials" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="md:pr-12">
                <span className="u-mono uppercase text-accent mb-4 block">02 / The Materials</span>
                <h3 className="font-display text-4xl uppercase mb-6">Ethical Excellence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We source only the finest materials, ensuring they meet the highest global standards for quality and ethical responsibility. 
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From conflict-free, lab-grown diamonds to premium 18k gold plating over durable core metals, our "Demifine" approach makes luxury accessible without compromising on brilliance or longevity.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="about-values py-24 md:py-32 bg-black text-white text-center px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-16 text-accent">Core Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Uncompromising Quality", desc: "We use only the finest materials, meticulously inspected to meet global luxury standards." },
              { title: "Ethical Sourcing", desc: "Our commitment to sustainability ensures conflict-free diamonds and responsibly sourced metals." },
              { title: "Modern Heritage", desc: "We seamlessly blend traditional artisanal techniques with contemporary, forward-thinking design." }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8 border border-white/10 h-full hover:border-accent transition-colors duration-300">
                  <h3 className="font-display text-xl uppercase mb-4">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section reused from Homepage */}
      <AboutUs />

    </div>
  );
};

export default AboutPage;
