import React from 'react';
import './EmailMarketing.scss';
import { FaEnvelope, FaChartLine, FaUsers, FaGears, 
         FaClock, FaBullseye } from 'react-icons/fa6';

const EmailMarketing = () => {
  return (
    <div className="email-marketing">
      <section className="hero-section">
        <div className="container">
          <h1>Email Marketing Solutions</h1>
          <p>Drive engagement and conversions with personalized email campaigns that deliver results</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Email Marketing Strategy</h2>
            <p>In today's digital landscape, email marketing remains one of the most effective channels for reaching and engaging your audience. Our comprehensive email marketing solutions help businesses of all sizes create, execute, and optimize campaigns that drive real results.</p>
            <p>Whether you're looking to nurture leads, boost customer engagement, or increase sales, our expert team and advanced tools will help you achieve your marketing goals.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaEnvelope /></div>
              <h3>Personalized Campaigns</h3>
              <p>Create targeted email campaigns that resonate with your audience and drive engagement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Analytics & Tracking</h3>
              <p>Monitor campaign performance with detailed analytics and real-time tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Segmentation</h3>
              <p>Target specific customer segments with tailored content and offers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Automation Tools</h3>
              <p>Streamline your email marketing with powerful automation features.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaClock /></div>
              <h3>Scheduled Delivery</h3>
              <p>Schedule campaigns to reach your audience at the optimal time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>A/B Testing</h3>
              <p>Optimize your campaigns with comprehensive A/B testing capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Email Marketing Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>High Deliverability Rates</h3>
                <p>Our advanced infrastructure ensures your emails reach the intended inbox with industry-leading deliverability rates.</p>
              </div>
              <div className="benefit-card">
                <h3>Expert Strategy & Support</h3>
                <p>Get guidance from our experienced email marketing specialists to optimize your campaigns and maximize ROI.</p>
              </div>
              <div className="benefit-card">
                <h3>Advanced Automation</h3>
                <p>Save time and increase efficiency with our sophisticated automation tools and workflow builders.</p>
              </div>
              <div className="benefit-card">
                <h3>Detailed Analytics</h3>
                <p>Make data-driven decisions with comprehensive reporting and insights into campaign performance.</p>
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
              <h3>What makes email marketing effective?</h3>
              <p>Email marketing provides direct communication with your audience, offering personalized content, high ROI, and measurable results. It's an essential tool for building customer relationships and driving conversions.</p>
            </div>
            <div className="faq-item">
              <h3>How often should I send marketing emails?</h3>
              <p>The optimal frequency depends on your industry and audience. We help you determine the best schedule based on data analysis and industry benchmarks to maximize engagement without overwhelming subscribers.</p>
            </div>
            <div className="faq-item">
              <h3>Can you help with email list building?</h3>
              <p>Yes, we provide strategies and tools for organic list growth, including opt-in forms, lead magnets, and list segmentation to ensure quality subscriber acquisition.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure email campaign success?</h3>
              <p>We track key metrics including open rates, click-through rates, conversion rates, and ROI. Our detailed analytics help optimize campaigns for better performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Email Marketing Today</h2>
            <p>Ready to take your email campaigns to the next level? Let's create engaging, results-driven strategies together.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;