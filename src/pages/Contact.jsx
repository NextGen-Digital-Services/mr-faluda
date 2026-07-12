import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa6';
import AnimatedWrapper from '../components/common/AnimatedWrapper';
import { LINKS } from '../constants/links';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      
      {/* 1. HERO HEADER */}
      <section className="contact-hero bg-sapphire">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-hero-text"
          >
            <span className="text-gold category-label">GET IN TOUCH</span>
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">Reach out for orders, feedback, or sweet event catering queries</p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="bg-cream contact-content-section">
        <div className="container contact-grid">
          
          {/* Quick Connect side */}
          <div className="contact-details-side">
            <AnimatedWrapper>
              <h2 className="visit-heading text-gold">Quick Connect</h2>
              <p className="contact-intro-p">
                Have a question about our menu, special flavors, or orders? Drop us a line or visit us directly. We are always ready to help.
              </p>

              <div className="contact-action-cards">
                
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-action-link-card wa-card">
                  <FaWhatsapp size={28} className="card-icon" />
                  <div className="card-text">
                    <h4>Chat on WhatsApp</h4>
                    <p>Instant support & order placement</p>
                    <span className="action-tag text-gold">Start Chat &rarr;</span>
                  </div>
                </a>

                <a href={LINKS.call} className="contact-action-link-card call-card">
                  <Phone size={26} className="card-icon" />
                  <div className="card-text">
                    <h4>Direct Call</h4>
                    <p>Call store directly to order or ask details</p>
                    <span className="action-tag text-gold">Call Now &rarr;</span>
                  </div>
                </a>

              </div>

              {/* Social Connect panel */}
              <div className="social-connect-panel">
                <h4 className="social-panel-title">Follow Mr. Faludawala</h4>
                <div className="social-icons-row">
                  <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                    <FaInstagram size={20} />
                  </a>
                  <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn">
                    <FaYoutube size={20} />
                  </a>
                  <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Form side */}
          <div className="contact-form-side">
            <AnimatedWrapper delay={0.1}>
              <div className="contact-form-wrapper">
                <h3 className="form-header-title">Send a Message</h3>
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      onSubmit={handleFormSubmit} 
                      className="contact-form-element"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key="contact-form"
                    >
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          placeholder="Enter your full name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          placeholder="Enter your contact number" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="4" 
                          placeholder="Tell us what you are looking for..." 
                          value={formData.message} 
                          onChange={handleInputChange} 
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary form-submit-btn">
                        <Send size={16} />
                        <span>Send Message</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      className="form-success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      key="success-message"
                    >
                      <CheckCircle2 size={64} className="success-icon text-emerald" />
                      <h4 className="success-heading">Message Sent!</h4>
                      <p className="success-text">
                        Thank you, <strong>{formData.name}</strong>. Your message has been received. Our team will get back to you shortly at <strong>{formData.phone}</strong>.
                      </p>
                      <button onClick={resetForm} className="btn-primary bg-primary-btn">
                        <span>Send Another Message</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedWrapper>
          </div>

        </div>
      </section>

    </div>
  );
}
