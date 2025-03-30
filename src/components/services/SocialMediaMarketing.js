import React from 'react';
import './SocialMediaMarketing.scss';
import { FaHashtag, FaChartLine, FaUsers, FaBullhorn, 
         FaRegClock, FaRegComments } from 'react-icons/fa6';

const SocialMediaMarketing = () => {
  return (
    <div className="social-media-marketing">
      <section className="hero-section">
        <div className="container">
          <h1>Social Media Marketing Solutions</h1>
          <p>Build your brand presence and engage with your audience across all major social media platforms</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Elevate Your Social Media Presence</h2>
            <p>In today's digital age, social media is the heartbeat of online engagement. Our comprehensive social media marketing solutions help businesses create meaningful connections, drive engagement, and build lasting relationships with their audience.</p>
            <p>From content strategy to community management, we help you leverage the power of social media to grow your brand and achieve your business goals.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaHashtag /></div>
              <h3>Content Strategy</h3>
              <p>Create engaging content that resonates with your target audience and drives interaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Tracking</h3>
              <p>Monitor and analyze your social media performance with detailed analytics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Community Management</h3>
              <p>Build and nurture an engaged community around your brand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullhorn /></div>
              <h3>Paid Advertising</h3>
              <p>Maximize reach with targeted social media advertising campaigns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaRegClock /></div>
              <h3>Scheduled Posting</h3>
              <p>Maintain consistent presence with scheduled content delivery.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaRegComments /></div>
              <h3>Engagement Optimization</h3>
              <p>Improve engagement rates with data-driven content strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Social Media Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Platform Expertise</h3>
                <p>Specialized strategies for each social media platform to maximize your brand's impact and reach.</p>
              </div>
              <div className="benefit-card">
                <h3>Data-Driven Approach</h3>
                <p>Make informed decisions with comprehensive analytics and performance insights.</p>
              </div>
              <div className="benefit-card">
                <h3>Creative Excellence</h3>
                <p>Stand out with engaging content that captures attention and drives engagement.</p>
              </div>
              <div className="benefit-card">
                <h3>Community Growth</h3>
                <p>Build and nurture an authentic, engaged following that supports your brand.</p>
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
              <h3>Which social media platforms should my business use?</h3>
              <p>We help you identify the most effective platforms based on your target audience, industry, and business goals to maximize your social media marketing efforts.</p>
            </div>
            <div className="faq-item">
              <h3>How often should we post on social media?</h3>
              <p>Posting frequency varies by platform and audience. We develop a customized content calendar that maintains consistent engagement without overwhelming your followers.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure social media success?</h3>
              <p>We track key metrics including engagement rates, reach, conversions, and ROI, providing regular reports and insights to demonstrate campaign effectiveness.</p>
            </div>
            <div className="faq-item">
              <h3>Do you handle paid social advertising?</h3>
              <p>Yes, we manage paid social media campaigns across all major platforms, including audience targeting, ad creation, budget management, and performance optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Transform Your Social Media Presence Today</h2>
            <p>Ready to take your social media marketing to the next level? Let's create engaging, results-driven strategies together.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;