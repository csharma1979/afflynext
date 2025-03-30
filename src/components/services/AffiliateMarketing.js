import React from 'react';
import './AffiliateMarketing.scss';
import { FaHandshake, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaNetworkWired } from 'react-icons/fa6';

const AffiliateMarketing = () => {
  return (
    <div className="affiliate-marketing">
      <section className="hero-section">
        <div className="container">
          <h1>Affiliate Marketing Solutions</h1>
          <p>Expand your reach and boost sales through strategic partnerships with influential affiliates</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Business with Affiliate Marketing</h2>
            <p>In today's digital ecosystem, affiliate marketing is a powerful way to scale your business. Our comprehensive affiliate marketing solutions help businesses build and manage successful partnership programs that drive sustainable growth.</p>
            <p>From affiliate recruitment to performance optimization, our expert team helps you create and manage affiliate programs that generate measurable results.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaHandshake /></div>
              <h3>Partner Management</h3>
              <p>Build and nurture relationships with high-performing affiliates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Tracking</h3>
              <p>Monitor and analyze affiliate campaign performance in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Affiliate Recruitment</h3>
              <p>Find and onboard quality affiliates aligned with your brand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Program Automation</h3>
              <p>Streamline affiliate management with automated tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Commission Optimization</h3>
              <p>Design competitive commission structures that drive results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaNetworkWired /></div>
              <h3>Network Integration</h3>
              <p>Seamless integration with major affiliate networks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Affiliate Marketing Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Performance-Based</h3>
                <p>Pay only for results with our performance-based affiliate marketing strategies.</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Management</h3>
                <p>Benefit from our experienced team's knowledge in affiliate program management.</p>
              </div>
              <div className="benefit-card">
                <h3>Quality Partners</h3>
                <p>Access a network of vetted, high-performing affiliate partners.</p>
              </div>
              <div className="benefit-card">
                <h3>Scalable Growth</h3>
                <p>Expand your reach and revenue through strategic affiliate partnerships.</p>
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
              <h3>How does affiliate marketing work?</h3>
              <p>Affiliate marketing is a performance-based model where partners earn commissions for driving sales or leads to your business. We help you set up and manage these partnerships effectively.</p>
            </div>
            <div className="faq-item">
              <h3>How do you find quality affiliates?</h3>
              <p>We use a comprehensive vetting process to identify and recruit affiliates who align with your brand values and have proven track records in your industry.</p>
            </div>
            <div className="faq-item">
              <h3>How long until we see results?</h3>
              <p>While initial results can be seen within the first month, we typically recommend a 3-6 month period to fully optimize your affiliate program.</p>
            </div>
            <div className="faq-item">
              <h3>How do you track performance?</h3>
              <p>We use advanced tracking systems to monitor key metrics including conversions, ROI, click-through rates, and affiliate performance to optimize your program.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Launch Your Affiliate Program Today</h2>
            <p>Ready to scale your business through strategic partnerships? Let's create your successful affiliate marketing program.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateMarketing;