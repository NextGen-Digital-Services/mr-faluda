import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { LINKS } from '../../constants/links';
import logoImg from '../../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Info Section */}
        <div className="footer-column brand-info">
          <div className="footer-logo-row">
            <img src={logoImg} alt="Mr. Faludawala Logo" className="footer-logo" />
            <div className="footer-brand-text">
              <span className="footer-brand-title">Mr. Faludawala</span>
              <span className="footer-brand-subtitle">DESSERT SHOP</span>
            </div>
          </div>
          <p className="footer-tagline">
            "Mumbai's Falooda & Kulfi Specialists"
          </p>
          <p className="footer-promise">
            Real Fruit. Real Milk. Real Kulfi.
          </p>
          <div className="footer-social-icons">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
            <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={22} />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/visit-us">Visit Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="footer-column contact-column">
          <h4 className="footer-title">Get in Touch</h4>
          <ul className="footer-contact-info">
            <li>
              <a href={LINKS.whatsapp} className="contact-link">
                <FaWhatsapp className="icon" size={16} />
                <span>WhatsApp: +91 99877 39992</span>
              </a>
            </li>
            <li>
              <a href={LINKS.call} className="contact-link">
                <Phone className="icon" size={16} />
                <span>Call: +91 99877 39992</span>
              </a>
            </li>
            <li>
              <div className="contact-item">
                <MapPin className="icon" size={16} />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <Clock className="icon" size={16} />
                <span>Open Daily: 11:00 AM - 11:30 PM</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            &copy; {currentYear} Mr. Faludawala. All rights reserved.
          </p>
          <p className="credit-text">
            Powered by <a href="https://nextgendigital.services" target="_blank" rel="noopener noreferrer" className="credit-link">NextGen Digital Services</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
