import React from 'react';
import './MobileMarketing.scss';
import { FaMobile, FaChartBar, FaUsers, FaGears, 
         FaBullseye, FaLocationDot } from 'react-icons/fa6';

const MobileMarketing = () => {
  return (
    <div className="mobile-marketing">
      <section className="hero-section">
        <div className="container">
          <h1>Mobile Marketing Solutions</h1>
          <p>Reach your customers where they are with targeted mobile marketing strategies that drive engagement and conversions</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Mobile Marketing Strategy</h2>
            <p>In today's mobile-first world, effective mobile marketing is crucial for business success. Our comprehensive mobile marketing solutions help businesses connect with their audience through smartphones and tablets, delivering personalized experiences that drive results.</p>
            <p>From SMS campaigns to mobile app marketing, our expert team helps you leverage the power of mobile to reach, engage, and convert your target audience.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaMobile /></div>
              <h3>SMS Marketing</h3>
              <p>Create impactful SMS campaigns that reach customers instantly with relevant messages.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartBar /></div>
              <h3>Performance Analytics</h3>
              <p>Track and analyze campaign performance with detailed mobile analytics and insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Targeting</h3>
              <p>Reach specific customer segments with personalized mobile campaigns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Marketing Automation</h3>
              <p>Automate your mobile marketing campaigns for maximum efficiency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaLocationDot /></div>
              <h3>Location-Based Marketing</h3>
              <p>Target customers based on their location for relevant local promotions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Campaign Optimization</h3>
              <p>Continuously optimize your mobile campaigns for better performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Mobile Marketing Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Instant Reach</h3>
                <p>Connect with your audience instantly through their mobile devices with high open and engagement rates.</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Strategy</h3>
                <p>Get guidance from our mobile marketing specialists to create effective campaigns that drive results.</p>
              </div>
              <div className="benefit-card">
                <h3>Advanced Targeting</h3>
                <p>Leverage precise targeting capabilities to reach the right audience at the right time.</p>
              </div>
              <div className="benefit-card">
                <h3>Real-time Analytics</h3>
                <p>Monitor campaign performance in real-time and make data-driven decisions for optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is mobile marketing?</h3>
              <p>Mobile marketing involves reaching and engaging customers through their mobile devices using various channels like SMS, push notifications, and mobile apps to deliver targeted messages and promotions.</p>
            </div>
            <div className="faq-item">
              <h3>How effective is mobile marketing?</h3>
              <p>Mobile marketing is highly effective with average open rates above 90% for SMS and significant engagement rates for push notifications, making it one of the most direct ways to reach customers.</p>
            </div>
            <div className="faq-item">
              <h3>What types of mobile marketing do you offer?</h3>
              <p>We offer comprehensive mobile marketing services including SMS marketing, push notifications, mobile app marketing, location-based marketing, and mobile advertising campaigns.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure mobile marketing success?</h3>
              <p>We track key metrics including open rates, click-through rates, conversion rates, and ROI. Our detailed analytics help optimize campaigns for better performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Mobile Marketing Today</h2>
            <p>Ready to reach your customers on their mobile devices? Let's create engaging, results-driven mobile marketing strategies together.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileMarketing;