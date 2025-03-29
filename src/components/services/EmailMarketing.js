import React, { useState } from 'react';
import './EmailMarketing.scss';
import { FaChartLine, FaUsers, FaRobot, FaChartBar, FaShieldAlt, FaChartPie } from 'react-icons/fa';

const EmailMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="email-marketing">
      <div className="service-banner">
        <h1>Email Marketing Services</h1>
        <p>Boost Your Business with Powerful Email Marketing Solutions</p>
      </div>

      <div className="service-intro">
        <p>In today's digital age, email marketing remains one of the most effective and cost-efficient ways to engage with your audience, drive conversions, and build brand loyalty. At AfflyNext, we specialize in crafting personalized and data-driven email marketing strategies that deliver real results.</p>
      </div>

      <section className="benefits">
        <h2>Why Choose Our Email Marketing Services?</h2>
        <p className="section-subtitle">Discover the advantages of partnering with our expert email marketing team</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaChartLine className="icon" />
            <h3>Customized Email Campaigns</h3>
            <p>We design and execute tailored email campaigns that align with your brand voice and business goals. From promotional emails to customer retention strategies, we've got you covered.</p>
          </div>
          <div className="benefit-card">
            <FaUsers className="icon" />
            <h3>Advanced Audience Segmentation</h3>
            <p>We segment your audience based on behavior, demographics, and engagement to deliver the right message to the right people, increasing open rates and conversions.</p>
          </div>
          <div className="benefit-card">
            <FaRobot className="icon" />
            <h3>Automated Workflows</h3>
            <p>Streamline your email marketing with automated sequences for welcome emails, abandoned cart recovery, and customer follow-ups, ensuring you never miss a sales opportunity.</p>
          </div>
          <div className="benefit-card">
            <FaChartBar className="icon" />
            <h3>Performance Analytics</h3>
            <p>Gain insights into campaign performance with detailed analytics on open rates, click-through rates, and conversions. We optimize campaigns continuously for better results.</p>
          </div>
          <div className="benefit-card">
            <FaChartPie className="icon" />
            <h3>Dynamic Content Personalization</h3>
            <p>Create highly personalized email experiences with dynamic content that adapts based on user behavior, preferences, and past interactions.</p>
          </div>
          <div className="benefit-card">
            <FaShieldAlt className="icon" />
            <h3>Compliance & Deliverability</h3>
            <p>We follow best practices for email compliance (GDPR, CAN-SPAM) and ensure your emails reach inboxes, not spam folders.</p>
          </div>
        </div>
      </section>

      <section className="process">
        <h2>Our Process</h2>
        <p className="section-subtitle">A systematic approach to delivering successful email marketing campaigns</p>
        <div className="process-steps">
          <div className="step">
            <h3>Strategy Development</h3>
            <p>We understand your business objectives and craft a tailored email marketing plan.</p>
          </div>
          <div className="step">
            <h3>Design & Content</h3>
            <p>Engaging, mobile-friendly email designs with compelling copy.</p>
          </div>
          <div className="step">
            <h3>Automation Setup</h3>
            <p>Implementing automated workflows for seamless customer engagement.</p>
          </div>
          <div className="step">
            <h3>Testing & Optimization</h3>
            <p>A/B testing subject lines, content, and delivery times for maximum impact.</p>
          </div>
          <div className="step">
            <h3>Reporting & Insights</h3>
            <p>Regular performance reports with actionable insights.</p>
          </div>
        </div>
      </section>

      <section className="industries">
        <h2>Industries We Serve</h2>
        <p className="section-subtitle">Tailored email marketing solutions across diverse business sectors</p>
        <div className="industry-scroll">
          <div className="industry-container">
            {['E-commerce', 'SaaS & Technology', 'Real Estate', 'Healthcare', 'Education', 'Professional Services', 'Retail', 'Finance', 'Travel'].map((industry, index) => (
              <div key={index} className="industry-card">{industry}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">Common queries about our email marketing services answered</p>
        <div className="faq-grid">
          {[
            {
              question: "How can email marketing help my business?",
              answer: "Email marketing helps you engage with your audience, nurture leads, and drive sales by delivering personalized and relevant messages directly to their inbox."
            },
            {
              question: "Do you offer automated email workflows?",
              answer: "Yes, we set up automated workflows for welcome emails, abandoned carts, customer re-engagement, and more to save time and improve efficiency."
            },
            {
              question: "How do you measure the success of email campaigns?",
              answer: "We track key metrics like open rates, click-through rates, conversions, and ROI to measure performance and optimize future campaigns."
            },
            {
              question: "Is my email list safe with you?",
              answer: "Absolutely. We follow strict data privacy regulations (GDPR, CAN-SPAM) and ensure the security and confidentiality of your data."
            },
            {
              question: "Can you handle large-scale email campaigns?",
              answer: "Yes, we manage both small and large-scale email campaigns, ensuring smooth delivery and engagement across diverse audience segments."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <span className="icon-line horizontal"></span>
                  <span className={`icon-line vertical ${activeIndex === index ? 'hidden' : ''}`}></span>
                </div>
              </div>
              <div className="faq-answer" style={{ maxHeight: activeIndex === index ? '1000px' : '0' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;