import React from 'react';
import './NativeAdvertising.scss';
import { FaNewspaper, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaPenToSquare } from 'react-icons/fa6';

const NativeAdvertising = () => {
  return (
    <div className="native-advertising">
      <section className="hero-section">
        <div className="container">
          <h1>Native Advertising Solutions</h1>
          <p>Create seamless, engaging advertising experiences that blend naturally with your target platforms</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Enhance Your Brand with Native Advertising</h2>
            <p>In today's digital landscape, consumers value authentic, non-disruptive advertising experiences. Our native advertising solutions help businesses create content that seamlessly integrates with popular platforms while delivering powerful marketing messages.</p>
            <p>From content creation to performance optimization, our expert team helps you develop and manage native advertising campaigns that resonate with your audience.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaNewspaper /></div>
              <h3>Content Strategy</h3>
              <p>Develop engaging native content that aligns with platform contexts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Analytics</h3>
              <p>Track and optimize campaign performance with detailed insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Targeting</h3>
              <p>Reach specific demographics with precisely targeted content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Platform Integration</h3>
              <p>Seamless integration with major native advertising platforms.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Campaign Optimization</h3>
              <p>Continuously optimize campaigns for maximum engagement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaPenToSquare /></div>
              <h3>Creative Development</h3>
              <p>Create compelling native content that drives engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Native Advertising Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Natural Integration</h3>
                <p>Create ads that blend seamlessly with platform content for better user experience.</p>
              </div>
              <div className="benefit-card">
                <h3>Higher Engagement</h3>
                <p>Achieve better engagement rates with non-disruptive advertising formats.</p>
              </div>
              <div className="benefit-card">
                <h3>Brand Safety</h3>
                <p>Ensure your content appears in brand-safe, contextually relevant environments.</p>
              </div>
              <div className="benefit-card">
                <h3>Better ROI</h3>
                <p>Generate higher returns through targeted, engaging native content.</p>
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
              <h3>What is native advertising?</h3>
              <p>Native advertising is a form of paid media where the ad experience follows the natural form and function of the platform where it appears, creating a more seamless user experience.</p>
            </div>
            <div className="faq-item">
              <h3>Which platforms do you work with?</h3>
              <p>We create native advertising campaigns across major platforms including social media, content discovery networks, and premium publisher sites.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>We track key metrics including engagement rates, time spent, conversion rates, and ROI to measure campaign effectiveness and optimize performance.</p>
            </div>
            <div className="faq-item">
              <h3>How long until we see results?</h3>
              <p>While initial results can be seen quickly, we typically recommend a 2-3 month period to fully optimize campaigns and achieve optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Native Advertising Campaign</h2>
            <p>Ready to create engaging native advertising campaigns? Let's develop your strategy together.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NativeAdvertising;