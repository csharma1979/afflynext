import React, { useState } from 'react';
import './Header.scss';
import { FaEnvelope, FaMobile, FaHashtag, FaMagnifyingGlass, 
         FaHandshake, FaNewspaper, FaCommentSms, 
         FaRectangleAd, FaVideo } from 'react-icons/fa6';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { icon: <FaEnvelope />, name: 'Email Marketing' },
    { icon: <FaMobile />, name: 'Mobile Marketing' },
    { icon: <FaHashtag />, name: 'Social Media Marketing' },
    { icon: <FaMagnifyingGlass />, name: 'Search Advertising' },
    { icon: <FaHandshake />, name: 'Affiliate Marketing' },
    { icon: <FaNewspaper />, name: 'Native Advertising' },
    { icon: <FaCommentSms />, name: 'SMS Marketing' },
    { icon: <FaRectangleAd />, name: 'Display Advertising' },
    { icon: <FaVideo />, name: 'Video Advertising' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li 
              className={`services-dropdown ${isServicesOpen ? 'active' : ''}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="/services">Services</a>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  <div className="services-grid">
                    {services.map((service, index) => (
                      <a key={index} href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="service-item">
                        <span className="service-icon">{service.icon}</span>
                        <span className="service-name">{service.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="contact-button">
          <a href="tel:+1-832-312-5501">Call now: +1- 832-312-5501</a>
        </div>
      </div>
    </header>
  );
};

export default Header;