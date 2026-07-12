import React from 'react';
import { Heart, Sparkles, Trophy, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import AnimatedWrapper from '../components/common/AnimatedWrapper';
import mascotImg from '../assets/mascot.png';
import storefrontImg from '../assets/storefront.png';
import royalFaloodaImg from '../assets/royal_falooda.png';
import blackJamunImg from '../assets/black_jamun_kulfi.png';
import { LINKS } from '../constants/links';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      
      {/* 1. HERO HEADER */}
      <section className="about-hero bg-sapphire">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-hero-text"
          >
            <span className="text-gold category-label">OUR LEGACY</span>
            <h1 className="about-title">The Story of Sweetness</h1>
            <p className="about-subtitle">Traditional Indian desserts crafted with royal authenticity</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STORY & PHILOSOPHY */}
      <section className="about-story bg-cream">
        <div className="container story-grid">
          
          <div className="story-content-side">
            <AnimatedWrapper>
              <h2 className="about-heading text-gold">Where Purity Meets Passion</h2>
              <p className="story-paragraph">
                Born in the heart of Mumbai, <strong>Mr. Faludawala</strong> began with a simple vision: to elevate the traditional Indian Falooda and Kulfi into a premium royal dining experience. We believe that true sweetness cannot be rushed or simulated with artificial flavorings.
              </p>
              <p className="story-paragraph">
                Every ingredient in our shop is selected for its ultimate purity. We use 100% real fruit pulps, slow-boiled thick cream milk, and traditional clay-pot churned kulfi. Our signature layered faloodas are hand-assembled to ensure a perfect balance of textures and visual magnificence.
              </p>
              
              <div className="story-core-pillars">
                <div className="pillar-item">
                  <ShieldCheck className="text-gold" size={24} />
                  <div>
                    <h4>Real Fruit</h4>
                    <p>Natural sweet flavors derived directly from high-quality forest and orchard fruits.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <Sparkles className="text-gold" size={24} />
                  <div>
                    <h4>Real Milk</h4>
                    <p>Slowly simmered full-cream milk base with zero synthetic thickening agents.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <Heart className="text-gold" size={24} />
                  <div>
                    <h4>Real Kulfi</h4>
                    <p>Authentic density and texture churned in accordance with centuries-old heritage recipes.</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          <div className="story-image-side">
            <AnimatedWrapper delay={0.2} yOffset={50}>
              <div className="story-image-box">
                <img src={royalFaloodaImg} alt="Layered Falooda assembly close-up" className="about-story-img" />
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

      {/* 3. MEET THE MASCOT */}
      <section className="about-mascot bg-white">
        <div className="container mascot-grid">
          
          <div className="mascot-image-side">
            <AnimatedWrapper yOffset={50}>
              <div className="mascot-illust-frame">
                <img src={mascotImg} alt="Mr. Faludawala Mascot" className="about-mascot-img" />
              </div>
            </AnimatedWrapper>
          </div>

          <div className="mascot-text-side">
            <AnimatedWrapper delay={0.2}>
              <span className="text-gold label-spaced">THE MASCOT</span>
              <h2 className="about-heading">Meet Mr. Faludawala</h2>
              <p className="mascot-intro-paragraph">
                The warm, smiling face of our brand represents the spirit of Indian hospitality. Styled in a traditional saffron turban and classic white kurta, Mr. Faludawala holds the signature tall rainbow-layered falooda glass topped with vanilla ice cream, toasted nuts, and cherries. 
              </p>
              <p className="mascot-intro-paragraph">
                He is the guardian of our legacy recipes, ensuring that every customer is treated to the same authentic warmth and rich sweetness that has defined our brand since day one.
              </p>
              <div className="mascot-cta-box">
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaWhatsapp size={20} />
                  <span>Order His Favorites</span>
                </a>
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

      {/* 4. THE LOUNGE / STOREFRONT GALLERY */}
      <section className="about-gallery bg-cream">
        <div className="container">
          <div className="section-header-center">
            <span className="text-gold section-subtitle">OUR LOUNGE</span>
            <h2 className="section-title">The Sweet Sanctuary</h2>
            <p className="insta-intro-text">Take a look inside our premium boutique shop where traditional meets modern digital luxury.</p>
          </div>

          <div className="about-gallery-grid">
            <AnimatedWrapper className="gallery-item-card">
              <img src={storefrontImg} alt="Storefront facade mockup" className="gallery-card-img" />
              <div className="gallery-card-caption">Boutique Exterior</div>
            </AnimatedWrapper>
            <AnimatedWrapper className="gallery-item-card" delay={0.1}>
              <img src={royalFaloodaImg} alt="Premium serving layout" className="gallery-card-img" />
              <div className="gallery-card-caption">Authentic Presentation</div>
            </AnimatedWrapper>
            <AnimatedWrapper className="gallery-item-card" delay={0.2}>
              <img src={blackJamunImg} alt="Guilt-free black jamun kulfi" className="gallery-card-img" />
              <div className="gallery-card-caption">Modern Flavors</div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

    </div>
  );
}
