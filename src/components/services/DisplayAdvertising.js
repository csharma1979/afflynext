import React from 'react';
import './DisplayAdvertising.scss';
import { FaDisplay, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaPalette } from 'react-icons/fa6';

const DisplayAdvertising = () => {
  return (
    <div className="display-advertising">
      <section className="hero-section">
        <div className="container">
          <h1>Display Advertising Solutions</h1>
          <p>Capture attention and drive engagement with visually compelling display ad campaigns</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Brand Visibility with Display Advertising</h2>
            <p>In today's digital landscape, effective display advertising is crucial for building brand awareness and driving conversions. Our comprehensive display advertising solutions help businesses create visually stunning campaigns that capture attention and deliver results.</p>
            <p>From creative design to performance optimization, our expert team helps you develop and manage display campaigns that resonate with your target audience.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaDisplay /></div>
              <h3>Creative Design</h3>
              <p>Create eye-catching display ads that capture attention.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Tracking</h3>
              <p>Monitor and optimize campaign performance in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Targeting</h3>
              <p>Reach specific demographics with precise targeting options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Campaign Automation</h3>
              <p>Streamline ad delivery with smart automation tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Retargeting</h3>
              <p>Re-engage potential customers with strategic retargeting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaPalette /></div>
              <h3>Ad Format Variety</h3>
              <p>Utilize multiple ad formats for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Display Advertising Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Visual Impact</h3>
                <p>Create memorable brand experiences with visually stunning ads.</p>
              </div>
              <div className="benefit-card">
                <h3>Wide Reach</h3>
                <p>Access extensive networks of premium publishing platforms.</p>
              </div>
              <div className="benefit-card">
                <h3>Brand Awareness</h3>
                <p>Build strong brand recognition across digital channels.</p>
              </div>
              <div className="benefit-card">
                <h3>Measurable Results</h3>
                <p>Track and optimize campaign performance for better ROI.</p>
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
              <h3>What is display advertising?</h3>
              <p>Display advertising involves visual ads (images, banners, videos) placed on websites, apps, and social platforms to reach target audiences and build brand awareness.</p>
            </div>
            <div className="faq-item">
              <h3>Where will my ads appear?</h3>
              <p>Your ads will appear across our network of premium websites, mobile apps, and platforms that match your target audience demographics and interests.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>We track key metrics including impressions, clicks, conversions, and ROI to measure campaign effectiveness and optimize performance.</p>
            </div>
            <div className="faq-item">
              <h3>What ad formats do you support?</h3>
              <p>We support various formats including static images, animated banners, rich media, and responsive ads to ensure maximum engagement across all devices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Launch Your Display Campaign Today</h2>
            <p>Ready to boost your brand visibility with compelling display ads? Let's create your winning strategy.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayAdvertising;