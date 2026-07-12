import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import AnimatedWrapper from '../components/common/AnimatedWrapper';

// Assets
import logoImg from '../assets/logo.png';
import mascotImg from '../assets/mascot.png';
import royalFaloodaImg from '../assets/royal_falooda.png';
import blackJamunImg from '../assets/black_jamun_kulfi.png';
import storefrontImg from '../assets/storefront.png';
import kulfiPopImg from '../assets/kulfi_pop.png';
import './Gallery.css';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    { id: 1, src: royalFaloodaImg, title: 'The Royal Falooda', category: 'Falooda' },
    { id: 2, src: blackJamunImg, title: 'Black Jamun Kulfi Pop', category: 'Kulfi Pop' },
    { id: 3, src: storefrontImg, title: 'Dessert Lounge Storefront', category: 'Our Store' },
    { id: 4, src: kulfiPopImg, title: 'Organic Kulfi Pop', category: 'Kulfi Pop' },
    { id: 5, src: mascotImg, title: 'Mr. Faludawala Mascot', category: 'Brand Mascot' },
    { id: 6, src: logoImg, title: 'Heritage Golden Badge', category: 'Logo Identity' }
  ];

  const openLightbox = (photo) => {
    setActivePhoto(photo);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  return (
    <div className="gallery-page">
      
      {/* 1. HERO HEADER */}
      <section className="gallery-hero bg-sapphire">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gallery-hero-text"
          >
            <span className="text-gold category-label">VISUAL DELIGHTS</span>
            <h1 className="gallery-title">Our Gallery</h1>
            <p className="gallery-subtitle">A glimpse of our premium products and traditional storefront</p>
          </motion.div>
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="bg-cream gallery-grid-section">
        <div className="container">
          
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <AnimatedWrapper 
                key={item.id} 
                delay={index * 0.05} 
                className="gallery-card"
              >
                <div className="gallery-image-container" onClick={() => openLightbox(item)}>
                  <img src={item.src} alt={item.title} className="gallery-img" />
                  <div className="gallery-card-hover-overlay">
                    <ZoomIn className="zoom-icon text-gold" size={32} />
                    <span className="hover-view-text">View Image</span>
                  </div>
                </div>
                <div className="gallery-card-caption-panel">
                  <span className="gallery-item-category">{item.category}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX INTERACTION */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={32} />
            </button>

            <motion.div 
              className="lightbox-content-box"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card itself
            >
              <div className="lightbox-image-frame">
                <img src={activePhoto.src} alt={activePhoto.title} className="lightbox-img" />
              </div>
              <div className="lightbox-info-bar">
                <span className="lightbox-category-tag">{activePhoto.category}</span>
                <h3 className="lightbox-title-text">{activePhoto.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
