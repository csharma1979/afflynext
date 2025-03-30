import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="content">
          <section>
            <h2>Introduction</h2>
            <p>At Afflyn, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including but not limited to:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business information</li>
              <li>Payment information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP addresses</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Process transactions</li>
              <li>Send administrative information</li>
              <li>Provide customer support</li>
              <li>Send marketing communications</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your consent</li>
            </ul>
          </section>

          <section>
            <h2>Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@afflynext.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Business Avenue, New York, NY 10001</p>
          </section>

          <div className="last-updated">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;