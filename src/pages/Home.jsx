import { ArrowRight, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { LINKS } from '../constants/links';
import { MENU_CATEGORIES, SPECIAL_ITEMS } from '../data/menuData';
import mascotImg from '../assets/mascot.png';
import royalFaloodaImg from '../assets/royal_falooda.png';
import blackJamunImg from '../assets/black_jamun_kulfi.png';
import storefrontImg from '../assets/storefront.png';
import AnimatedWrapper from '../components/common/AnimatedWrapper';
import './Home.css';

export default function Home() {
  const jamunItem = SPECIAL_ITEMS[0];

  // Floating bob animation for hero image
  const floatAnim = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section bg-sapphire">
        <div className="container hero-grid">
          
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-pretitle">ESTD. 1956</span>
            <h1 className="hero-title">Mr. Faludawala</h1>
            <p className="hero-tagline">Mumbai's Falooda & Kulfi Specialists</p>
            <div className="hero-promise-badge">
              <span className="promise-dot"></span> Real Fruit • Real Milk • Real Kulfi
            </div>
            <p className="hero-description">
              Experience legacy Indian desserts crafted with royal purity and modern packaging. Indulge in Mumbai's most loaded, rich, and delicious layered Faloodas.
            </p>
            <div className="hero-ctas">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaWhatsapp size={20} />
                <span>Order on WhatsApp</span>
              </a>
              <a href={LINKS.call} className="btn-secondary">
                <Phone size={18} />
                <span>Call Store</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-content"
            variants={floatAnim}
            animate="animate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mascot-frame">
              <img src={mascotImg} alt="Mr. Faludawala Mascot" className="hero-mascot-img" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. BRAND INTRO STRIP */}
      <section className="brand-intro-strip bg-cream">
        <div className="container intro-container">
          <AnimatedWrapper className="intro-card">
            <h2 className="intro-heading text-gold">The Pure Heritage of Taste</h2>
            <p className="intro-text">
              Since our inception, Mr. Faludawala has been dedicated to one goal: serving the finest quality traditional desserts. Our signature recipes use <strong>100% real fruit, pure thick milk, and authentic artisanal kulfi</strong>. We do not compromise on ingredients, bringing you a royal sweet dining experience on every single sip.
            </p>
            <div className="intro-features">
              <div className="intro-feature-item">
                <ShieldCheck className="text-gold" size={24} />
                <span>100% Organic Ingredients</span>
              </div>
              <div className="intro-feature-item">
                <Heart className="text-gold" size={24} />
                <span>Made With Love & Purity</span>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* 3. FEATURED MENU CATEGORIES */}
      <section className="bg-white featured-menu-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle text-gold">EXPLORE MENU</span>
            <h2 className="section-title">Our Dessert Masterpieces</h2>
            <div className="title-divider"></div>
          </div>

          <div className="categories-grid">
            {MENU_CATEGORIES.map((category, index) => (
              <AnimatedWrapper key={category.id} delay={index * 0.1} className="category-card">
                <div className="category-tag-badge">{category.tag}</div>
                <div className="category-image-placeholder">
                  {category.image ? (
                    <img src={category.image} alt={category.title} className="cat-img" />
                  ) : (
                    <div className="no-cat-img">
                      <span>{category.title[0]}</span>
                    </div>
                  )}
                </div>
                <div className="category-card-body">
                  <h3 className="category-card-title">{category.title}</h3>
                  <p className="category-card-desc">{category.description}</p>
                  <div className="category-card-footer">
                    <span className="price-label">Starts at <strong className="text-gold">₹{category.startingPrice}</strong></span>
                    <Link to="/menu" className="category-btn">
                      <span>View</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PRODUCT SPOTLIGHT */}
      <section className="bg-sapphire spotlight-section">
        <div className="container spotlight-grid">
          
          <div className="spotlight-image-side">
            <AnimatedWrapper yOffset={50}>
              <div className="spotlight-image-frame">
                <img src={royalFaloodaImg} alt="The Royal Falooda close-up" className="spotlight-img" />
              </div>
            </AnimatedWrapper>
          </div>

          <div className="spotlight-text-side">
            <AnimatedWrapper delay={0.2}>
              <span className="text-gold spotlight-badge">SIGNATURE MASTERPIECE</span>
              <h2 className="spotlight-title">The Royal Falooda</h2>
              <p className="spotlight-description">
                A grand layered spectacle of flavor and texture. This premium dessert starts with a base of rich, aromatic rose syrup, followed by silky vermicelli layers, healthy sweet basil seeds (sabja), and pure, house-made rabri milk. We crown it with a generous scoop of organic vanilla ice cream, toasted almond shavings, pistachios, and glazed red jelly cubes. 
              </p>
              <div className="spotlight-price-box">
                <span className="spotlight-price-text">Starting at Just</span>
                <span className="spotlight-price-num">₹149</span>
              </div>
              <div className="spotlight-actions">
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaWhatsapp size={20} />
                  <span>Order Now on WhatsApp</span>
                </a>
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

      {/* 5. GUILT-FREE RANGE HIGHLIGHT */}
      <section className="bg-cream guilt-free-section">
        <div className="container guilt-free-grid">
          
          <div className="guilt-free-text-side">
            <AnimatedWrapper>
              <div className="guilt-free-badge-container">
                <span className="badge-maroon">GUILT-FREE RANGE</span>
                <span className="badge-emerald">NO ADDED SUGAR</span>
              </div>
              <h2 className="guilt-free-title">{jamunItem.title}</h2>
              <p className="guilt-free-desc">
                Dessert cravings without any worry! Our signature Black Jamun Kulfi pop features the natural sweetness and tang of pure forest-harvested Jamun fruits. 100% natural, with no added artificial sweeteners or sugar. Safe, wholesome, and incredibly refreshing.
              </p>
              <div className="guilt-free-highlights-row">
                <div className="highlight-tag">
                  <span className="tag-dot bg-emerald"></span>
                  <span>Pure Fruit Pulp</span>
                </div>
                <div className="highlight-tag">
                  <span className="tag-dot bg-emerald"></span>
                  <span>Sugar Free</span>
                </div>
                <div className="highlight-tag">
                  <span className="tag-dot bg-emerald"></span>
                  <span>Artisanal Crafted</span>
                </div>
              </div>
              <div className="guilt-free-action">
                <Link to="/menu" className="btn-primary bg-maroon-btn">
                  <span>Explore Healthy Range</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedWrapper>
          </div>

          <div className="guilt-free-image-side">
            <AnimatedWrapper delay={0.2} yOffset={50}>
              <div className="guilt-free-image-frame">
                <img src={jamunItem.image} alt={jamunItem.title} className="guilt-free-img" />
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

      {/* 6. INSTAGRAM STRIP */}
      <section className="bg-white insta-strip-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle text-gold">@mr.faludawala</span>
            <h2 className="section-title">Follow the Faluda Story</h2>
            <p className="insta-intro-text">Join our community on Instagram for daily dose of traditional sweetness, customer stories, and behind-the-scenes magic.</p>
          </div>

          <AnimatedWrapper className="insta-grid">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="insta-item">
              <img src={royalFaloodaImg} alt="Insta Post 1" className="insta-img" />
              <div className="insta-overlay">
                <FaInstagram size={32} />
              </div>
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="insta-item">
              <img src={storefrontImg} alt="Insta Post 2" className="insta-img" />
              <div className="insta-overlay">
                <FaInstagram size={32} />
              </div>
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="insta-item">
              <img src={blackJamunImg} alt="Insta Post 3" className="insta-img" />
              <div className="insta-overlay">
                <FaInstagram size={32} />
              </div>
            </a>
          </AnimatedWrapper>

          <div className="insta-btn-center">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaInstagram size={18} />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. VISIT US TEASER */}
      <section className="bg-sapphire visit-teaser-section">
        <div className="container visit-teaser-grid">
          
          <div className="visit-teaser-text">
            <AnimatedWrapper>
              <span className="text-gold section-subtitle">FIND OUR STORE</span>
              <h2 className="visit-teaser-title">Craving Something Sweet?</h2>
              <p className="visit-teaser-desc">
                Step into our premium heritage dessert boutique and experience luxury Indian sweets in person. Freshly whipped milk, chilled toppings, and a premium atmosphere await you.
              </p>
              
              <div className="visit-info-card">
                <div className="visit-info-line">
                  <MapPin size={22} className="text-gold icon" />
                  <span>Shop No. 5, Heritage Block, SV Road, Mumbai, Maharashtra</span>
                </div>
                <div className="visit-info-line">
                  <Phone size={20} className="text-gold icon" />
                  <span>+91 99877 39992</span>
                </div>
              </div>

              <div className="visit-actions">
                <a href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MapPin size={18} />
                  <span>Get Directions on Maps</span>
                </a>
                <Link to="/visit-us" className="btn-secondary">
                  <span>View Store Details</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedWrapper>
          </div>

          <div className="visit-teaser-image">
            <AnimatedWrapper delay={0.2}>
              <div className="teaser-storefront-frame">
                <img src={storefrontImg} alt="Storefront Lounge View" className="teaser-storefront-img" />
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

    </div>
  );
}
