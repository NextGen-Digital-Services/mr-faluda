import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINKS } from '../../constants/links';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Visit Us', path: '/visit-us' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo-container" onClick={closeMenu}>
          <img src={logoImg} alt="Mr. Faludawala Logo" className="navbar-logo" />
          <div className="navbar-brand-name">
            <span className="brand-title">Mr. Faludawala</span>
            <span className="brand-subtitle">MUMBAI</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Call to Action Buttons */}
        <div className="navbar-cta-container">
          <a href={LINKS.call} className="navbar-cta-btn">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-navbar-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mobile-navbar-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mobile-cta-li">
                <a href={LINKS.call} className="mobile-menu-cta-btn" onClick={closeMenu}>
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
