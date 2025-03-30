import React from 'react';
import './SearchAdvertising.scss';
import { FaMagnifyingGlass, FaChartLine, FaUsers, FaGears, 
         FaBullseye, FaFileLines } from 'react-icons/fa6';

const SearchAdvertising = () => {
  return (
    <div className="search-advertising">
      <section className="hero-section">
        <div className="container">
          <h1>Search Advertising Solutions</h1>
          <p>Drive qualified traffic and increase conversions with targeted search engine advertising campaigns</p>
        </div>
      </section>

      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <h2>Maximize Your Search Advertising ROI</h2>
            <p>In today's competitive digital landscape, effective search advertising is crucial for capturing high-intent audiences. Our comprehensive search advertising solutions help businesses reach potential customers at the exact moment they're searching for relevant products or services.</p>
            <p>From keyword research to campaign optimization, our expert team helps you create and manage search campaigns that deliver measurable results.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaMagnifyingGlass /></div>
              <h3>Keyword Strategy</h3>
              <p>Target the right keywords with comprehensive research and analysis.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Performance Tracking</h3>
              <p>Monitor and optimize campaign performance with detailed analytics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Audience Targeting</h3>
              <p>Reach specific demographics and interests with precise targeting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaGears /></div>
              <h3>Campaign Automation</h3>
              <p>Streamline campaign management with smart automation tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaBullseye /></div>
              <h3>Conversion Optimization</h3>
              <p>Improve conversion rates with data-driven optimization.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaFileLines /></div>
              <h3>Ad Copy Creation</h3>
              <p>Craft compelling ad copy that drives clicks and conversions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Search Advertising Services</h2>
          <div className="benefits-content">
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Targeted Reach</h3>
                <p>Connect with users actively searching for your products or services with precise targeting capabilities.</p>
              </div>
              <div className="benefit-card">
                <h3>Data-Driven Strategy</h3>
                <p>Make informed decisions with comprehensive analytics and performance insights.</p>
              </div>
              <div className="benefit-card">
                <h3>Cost Efficiency</h3>
                <p>Optimize your advertising budget with strategic bid management and campaign optimization.</p>
              </div>
              <div className="benefit-card">
                <h3>Measurable Results</h3>
                <p>Track and measure campaign performance with detailed reporting and ROI analysis.</p>
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
              <h3>How does search advertising work?</h3>
              <p>Search advertising displays your ads to users who are actively searching for keywords related to your business. You only pay when someone clicks on your ad, making it a cost-effective way to reach potential customers.</p>
            </div>
            <div className="faq-item">
              <h3>What platforms do you advertise on?</h3>
              <p>We manage campaigns across major search engines including Google Ads, Bing Ads, and other relevant platforms based on your target audience and goals.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to see results?</h3>
              <p>While initial results can be seen quickly, we typically recommend a 3-month period to fully optimize campaigns and achieve optimal performance.</p>
            </div>
            <div className="faq-item">
              <h3>How do you measure success?</h3>
              <p>We track key metrics including click-through rates, conversion rates, cost per click, and return on ad spend to measure campaign success and optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Driving Quality Traffic Today</h2>
            <p>Ready to boost your online visibility and drive more qualified leads? Let's create your winning search advertising strategy.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchAdvertising;