import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h1>Get in Touch</h1>
            <p className="subtitle">Let's discuss how we can help grow your business</p>
            
            <div className="info-items">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Business Avenue<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@afflynext.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;