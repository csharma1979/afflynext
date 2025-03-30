import React from 'react';
import './SmsMarketing.scss';
import { FaMessage, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaListCheck } from 'react-icons/fa6';

const SmsMarketing = () => {
  return (
    <div className="sms-marketing">
      <section className="hero-section">
        <div className="container">
          <h1>SMS Marketing Solutions</h1>
          <p>Connect with your customers instantly through powerful, personalized text message campaigns</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Customer Engagement with SMS Marketing</h2>
            <p>In today's mobile-first world, SMS marketing provides direct access to your customers' most personal device. Our comprehensive SMS marketing solutions help businesses create and manage effective text message campaigns that drive engagement and conversions.</p>
            <p>From campaign creation to delivery optimization, our expert team helps you develop SMS strategies that resonate with your audience and deliver measurable results.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaMessage /></div>
              <h3>Campaign Creation</h3>
              <p>Design engaging SMS campaigns with compelling messages.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Tracking</h3>
              <p>Monitor delivery rates, engagement, and campaign success.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Segmentation</h3>
              <p>Target specific customer groups for personalized messaging.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Automation Tools</h3>
              <p>Streamline message delivery with smart automation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Conversion Optimization</h3>
              <p>Optimize messages for maximum response rates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaListCheck /></div>
              <h3>Compliance Management</h3>
              <p>Ensure adherence to SMS marketing regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our SMS Marketing Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Instant Delivery</h3>
                <p>Reach customers instantly with time-sensitive messages and promotions.</p>
              </div>
              <div className="benefit-card">
                <h3>High Open Rates</h3>
                <p>Benefit from SMS marketing's industry-leading open and engagement rates.</p>
              </div>
              <div className="benefit-card">
                <h3>Cost-Effective</h3>
                <p>Maximize ROI with affordable, high-impact text message campaigns.</p>
              </div>
              <div className="benefit-card">
                <h3>Direct Communication</h3>
                <p>Connect directly with customers on their preferred device.</p>
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
              <h3>How does SMS marketing work?</h3>
              <p>SMS marketing involves sending promotional messages, updates, and offers directly to customers' mobile phones. We help you create targeted campaigns that comply with regulations and drive engagement.</p>
            </div>
            <div className="faq-item">
              <h3>Is SMS marketing effective?</h3>
              <p>Yes! SMS messages have a 98% open rate and are typically read within minutes, making it one of the most effective marketing channels available.</p>
            </div>
            <div className="faq-item">
              <h3>How do you ensure compliance?</h3>
              <p>We follow all SMS marketing regulations, including opt-in requirements, message timing restrictions, and content guidelines to ensure compliant campaigns.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>We track key metrics including delivery rates, open rates, click-through rates, and conversion rates to measure campaign effectiveness and optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your SMS Marketing Campaign</h2>
            <p>Ready to reach customers directly on their mobile devices? Let's create your winning SMS marketing strategy.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmsMarketing;