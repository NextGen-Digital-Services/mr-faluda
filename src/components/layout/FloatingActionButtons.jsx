import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { LINKS } from '../../constants/links';
import './FloatingActionButtons.css';

export default function FloatingActionButtons() {
  return (
    <div className="floating-buttons-container">
      {/* Call Button */}
      <a 
        href={LINKS.call} 
        className="floating-btn call-btn" 
        aria-label="Call Mr. Faludawala"
      >
        <Phone size={24} />
        <span className="pulse-ring bg-gold-pulse"></span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={LINKS.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn" 
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span className="pulse-ring bg-green-pulse"></span>
      </a>
    </div>
  );
}
