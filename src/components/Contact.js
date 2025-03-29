import React from 'react';
import './Contact.scss';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for personalized digital marketing solutions</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h3>Our Office</h3>
              <p>123 Business Avenue</p>
              <p>Houston, TX 77001</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone />
            <div>
              <h3>Phone</h3>
              <p>+1-832-312-5501</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>info@afflynext.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaClock />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;