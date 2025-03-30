import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="Afflyn Logo" />
            </Link>
            <p className="company-desc">
              Your trusted partner in digital marketing solutions, helping businesses grow and succeed in the digital landscape.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services/email-marketing">Email Marketing</Link></li>
              <li><Link to="/services/mobile-marketing">Mobile Marketing</Link></li>
              <li><Link to="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link to="/services/search-advertising">Search Advertising</Link></li>
              <li><Link to="/services/affiliate-marketing">Affiliate Marketing</Link></li>
              <li><Link to="/services/native-advertising">Native Advertising</Link></li>
              <li><Link to="/services/sms-marketing">SMS Marketing</Link></li>
              <li><Link to="/services/display-advertising">Display Advertising</Link></li>
              <li><Link to="/services/video-advertising">Video Advertising</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <span>📍</span>
                123 Business Avenue<br />New York, NY 10001
              </li>
              <li>
                <span>📞</span>
                +1 (555) 123-4567
              </li>
              <li>
                <span>✉️</span>
                contact@afflynext.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Afflyn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;