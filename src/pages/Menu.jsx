import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { Phone, Check } from 'lucide-react';
import AnimatedWrapper from '../components/common/AnimatedWrapper';
import { MENU_CATEGORIES, SPECIAL_ITEMS } from '../data/menuData';
import { LINKS } from '../constants/links';
import './Menu.css';

export default function Menu() {
  const jamunItem = SPECIAL_ITEMS[0];

  return (
    <div className="menu-page">
      
      {/* 1. HERO HEADER */}
      <section className="menu-hero bg-sapphire">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="menu-hero-text"
          >
            <span className="text-gold category-label">OUR OFFERS</span>
            <h1 className="menu-title">The Royal Menu</h1>
            <p className="menu-subtitle">Every dish crafted with 100% natural ingredients and purity</p>
          </motion.div>
        </div>
      </section>

      {/* 2. REGULAR DESSERT LISTINGS */}
      <section className="bg-cream menu-listings-section">
        <div className="container">
          
          <div className="section-header-center">
            <span className="text-gold section-subtitle">CLASSIC RANGE</span>
            <h2 className="section-title">Falooda, Shakes & Kulfis</h2>
            <div className="title-divider"></div>
          </div>

          <div className="menu-list-grid">
            {MENU_CATEGORIES.map((item, index) => (
              <AnimatedWrapper key={item.id} delay={index * 0.05} className="menu-list-card">
                <div className="menu-list-header">
                  <div className="menu-item-details">
                    <span className="menu-item-badge">{item.tag}</span>
                    <h3 className="menu-item-title">{item.title}</h3>
                  </div>
                  <div className="menu-item-price-box">
                    <span className="price-from">Starts from</span>
                    <span className="price-val">₹{item.startingPrice}</span>
                  </div>
                </div>
                <p className="menu-item-description">{item.description}</p>
                
                {/* Visual support for card (if image is present, e.g. Royal Falooda & Kulfi Pop) */}
                {item.image && (
                  <div className="menu-item-image-wrapper">
                    <img src={item.image} alt={item.title} className="menu-item-img" />
                  </div>
                )}
                
                <div className="menu-item-footer">
                  <div className="menu-features-list">
                    <div className="feature-tick">
                      <Check size={14} className="text-gold" />
                      <span>Fresh Cream Milk</span>
                    </div>
                    <div className="feature-tick">
                      <Check size={14} className="text-gold" />
                      <span>Rich Toppings</span>
                    </div>
                  </div>
                  <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="menu-order-btn">
                    <FaWhatsapp size={14} />
                    <span>Order</span>
                  </a>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* 3. GUILT-FREE SPECIAL SECTION */}
      <section className="bg-white menu-special-section">
        <div className="container">
          
          <div className="section-header-center">
            <span className="text-maroon section-subtitle">SPECIAL HIGHLIGHT</span>
            <h2 className="section-title text-maroon">Guilt-Free Sweetness</h2>
            <div className="title-divider bg-maroon"></div>
          </div>

          <AnimatedWrapper className="special-item-hero-card">
            <div className="special-hero-grid">
              
              <div className="special-hero-image">
                <img src={jamunItem.image} alt={jamunItem.title} className="special-img" />
                <div className="special-badge-absolute">{jamunItem.subBadge}</div>
              </div>

              <div className="special-hero-details">
                <span className="special-item-tag">{jamunItem.tag}</span>
                <h3 className="special-item-title">{jamunItem.title}</h3>
                <p className="special-item-description">
                  Indulge without worry! Our Guilt-Free Black Jamun Kulfi pop features no added white sugar, artificial sweeteners, or preservatives. Made exclusively with rich natural forest-harvested Jamun fruit pulp and dense condensed low-calorie milk. High fiber, fully nutritional, and intensely satisfying.
                </p>
                
                <div className="special-features-row">
                  <div className="sp-feature">
                    <span className="sp-dot bg-emerald"></span>
                    <span>No Sugar Added</span>
                  </div>
                  <div className="sp-feature">
                    <span className="sp-dot bg-emerald"></span>
                    <span>100% Real Jamun Fruit</span>
                  </div>
                  <div className="sp-feature">
                    <span className="sp-dot bg-emerald"></span>
                    <span>No Artificial Preservatives</span>
                  </div>
                </div>

                <div className="special-cta-row">
                  <div className="special-price-tag">{jamunItem.priceLabel}</div>
                  <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary bg-maroon-btn">
                    <FaWhatsapp size={18} />
                    <span>Order Guilt-Free</span>
                  </a>
                </div>
              </div>

            </div>
          </AnimatedWrapper>

        </div>
      </section>

    </div>
  );
}
