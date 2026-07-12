import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Compass, ExternalLink } from 'lucide-react';
import AnimatedWrapper from '../components/common/AnimatedWrapper';
import storefrontImg from '../assets/storefront.png';
import { LINKS } from '../constants/links';
import './VisitUs.css';

export default function VisitUs() {
  return (
    <div className="visit-page">
      
      {/* 1. HERO HEADER */}
      <section className="visit-hero bg-sapphire">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="visit-hero-text"
          >
            <span className="text-gold category-label">LOCATE US</span>
            <h1 className="visit-title">Visit Us</h1>
            <p className="visit-subtitle">Step into our royal dessert lounge in the heart of Mumbai</p>
          </motion.div>
        </div>
      </section>

      {/* 2. STORE INFORMATION DETAILS */}
      <section className="bg-cream store-details-section">
        <div className="container details-grid">
          
          <div className="details-text-side">
            <AnimatedWrapper>
              <h2 className="visit-heading text-gold">Mr. Faludawala Store</h2>
              <p className="details-intro-p">
                Experience our signature desserts fresh from the counter in an atmosphere inspired by royal Indian sweet shops and modern digital lounges.
              </p>

              <div className="info-cards-list">
                
                <div className="info-block-card">
                  <MapPin size={24} className="text-gold block-icon" />
                  <div className="block-text">
                    <h4>Our Location</h4>
                    <p>Shop No. 5, Heritage Block, SV Road, Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="info-block-card">
                  <Clock size={24} className="text-gold block-icon" />
                  <div className="block-text">
                    <h4>Opening Hours</h4>
                    <p>Open Daily: 11:00 AM - 11:30 PM</p>
                    <span className="timing-note">Including Sundays & Public Holidays</span>
                  </div>
                </div>

                <div className="info-block-card">
                  <Phone size={24} className="text-gold block-icon" />
                  <div className="block-text">
                    <h4>Direct Contact</h4>
                    <p>Call: +91 99877 39992</p>
                    <p>WhatsApp: +91 99877 39992</p>
                  </div>
                </div>

              </div>

              <div className="visit-cta-container">
                <a 
                  href={LINKS.googleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary maps-btn"
                >
                  <Compass size={20} />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </AnimatedWrapper>
          </div>

          <div className="details-image-side">
            <AnimatedWrapper delay={0.2} yOffset={50}>
              <div className="lounge-showcase-box">
                <img src={storefrontImg} alt="Mr. Faludawala Premium Dessert Lounge Front" className="lounge-img" />
                <div className="lounge-img-caption">
                  <span>Mr. Faludawala Storefront Mockup</span>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

      {/* 3. PARKING & AMENITIES BRIEF */}
      <section className="bg-white amenities-section">
        <div className="container">
          <div className="section-header-center">
            <span className="text-gold section-subtitle">VISITOR GUIDE</span>
            <h2 className="section-title">Amenities & Service</h2>
            <div className="title-divider"></div>
          </div>

          <div className="amenities-grid">
            <AnimatedWrapper className="amenity-card">
              <h4>Dine-in Lounge</h4>
              <p>Comfortable indoor air-conditioned seating spaces designed for families and large dessert groups.</p>
            </AnimatedWrapper>
            <AnimatedWrapper className="amenity-card" delay={0.1}>
              <h4>Takeaway & Packaging</h4>
              <p>Specialized leak-proof temperature-insulated takeaway containers keeping your faloodas frozen.</p>
            </AnimatedWrapper>
            <AnimatedWrapper className="amenity-card" delay={0.2}>
              <h4>Valet Parking Assist</h4>
              <p>Convenient curbside drop-off and parking spaces adjacent to our SV Road heritage block entrance.</p>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

    </div>
  );
}
