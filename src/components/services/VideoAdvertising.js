import React from 'react';
import './VideoAdvertising.scss';
import { FaVideo, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaPhotoFilm } from 'react-icons/fa6';

const VideoAdvertising = () => {
  return (
    <div className="video-advertising">
      <section className="hero-section">
        <div className="container">
          <h1>Video Advertising Solutions</h1>
          <p>Engage your audience with compelling video content that drives results</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Transform Your Marketing with Video Advertising</h2>
            <p>In today's digital landscape, video content is king. Our comprehensive video advertising solutions help businesses create engaging video campaigns that capture attention and drive meaningful engagement across all platforms.</p>
            <p>From creative production to performance optimization, our expert team helps you develop and manage video campaigns that tell your brand story and achieve your marketing goals.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaVideo /></div>
              <h3>Creative Production</h3>
              <p>Create compelling video content that resonates with your audience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Analytics</h3>
              <p>Track and optimize video campaign performance in real-time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Targeting</h3>
              <p>Reach specific demographics with precise targeting options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Platform Optimization</h3>
              <p>Optimize videos for different platforms and formats.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Strategic Planning</h3>
              <p>Develop effective video marketing strategies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaPhotoFilm /></div>
              <h3>Multi-Format Support</h3>
              <p>Create videos for various platforms and purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Video Advertising Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Higher Engagement</h3>
                <p>Achieve better engagement rates with dynamic video content.</p>
              </div>
              <div className="benefit-card">
                <h3>Professional Quality</h3>
                <p>Get high-quality video production and post-production services.</p>
              </div>
              <div className="benefit-card">
                <h3>Cross-Platform Reach</h3>
                <p>Reach audiences across multiple video platforms and channels.</p>
              </div>
              <div className="benefit-card">
                <h3>Measurable Results</h3>
                <p>Track and optimize performance with detailed analytics.</p>
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
              <h3>What types of video content do you create?</h3>
              <p>We create various types of video content including promotional videos, product demonstrations, brand stories, social media content, and more.</p>
            </div>
            <div className="faq-item">
              <h3>Where will my videos be distributed?</h3>
              <p>Your videos can be distributed across multiple platforms including YouTube, social media, websites, and other digital channels based on your target audience.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>We track key metrics including views, engagement rates, watch time, click-through rates, and conversions to measure campaign effectiveness.</p>
            </div>
            <div className="faq-item">
              <h3>What's included in video production?</h3>
              <p>Our services include concept development, scripting, filming, editing, post-production, optimization, and distribution strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Video Campaign Today</h2>
            <p>Ready to engage your audience with compelling video content? Let's create your winning strategy.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoAdvertising;