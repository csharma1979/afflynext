import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const services = [
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    icon: '📧'
  },
  {
    id: 'mobile-marketing',
    name: 'Mobile Marketing',
    icon: '📱'
  },
  {
    id: 'social-media-marketing',
    name: 'Social Media Marketing',
    icon: '🌐'
  },
  {
    id: 'search-advertising',
    name: 'Search Advertising',
    icon: '🔍'
  },
  {
    id: 'affiliate-marketing',
    name: 'Affiliate Marketing',
    icon: '🤝'
  },
  {
    id: 'native-advertising',
    name: 'Native Advertising',
    icon: '📢'
  },
  {
    id: 'sms-marketing',
    name: 'SMS Marketing',
    icon: '💬'
  },
  {
    id: 'display-advertising',
    name: 'Display Advertising',
    icon: '🖼️'
  },
  {
    id: 'video-advertising',
    name: 'Video Advertising',
    icon: '🎥'
  }
];

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Inside your Header component, just before the closing header tag
  <div 
    className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
    onClick={() => setIsMobileMenuOpen(false)}
  ></div>

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Afflyn Logo" />
        </Link>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li 
              className={`services-dropdown ${isServicesOpen ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services">Services</Link>
              <div className="dropdown-menu">
                <div className="services-grid">
                  {services.map((service) => (
                    <Link 
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="service-item"
                    >
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-name">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
        <div className="contact-button">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;