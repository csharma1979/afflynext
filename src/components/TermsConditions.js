import React from 'react';
import './TermsConditions.scss';

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <div className="container">
        <h1>Terms & Conditions</h1>
        <div className="content">
          <section>
            <h2>Agreement to Terms</h2>
            <p>By accessing and using Afflyn's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
          </section>

          <section>
            <h2>Use of Services</h2>
            <p>Our services are provided "as is" and "as available." You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
            <ul>
              <li>You must not use our services for any illegal or unauthorized purpose</li>
              <li>You must not transmit any malicious code or attempt to harm our services</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to reproduce, duplicate, or resell any part of our services</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>The service and all its original content, features, and functionality are owned by Afflyn and are protected by international copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2>User Accounts</h2>
            <p>When you create an account with us, you must provide accurate, complete, and current information. You are solely responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2>Payment Terms</h2>
            <p>For paid services:</p>
            <ul>
              <li>Payments must be made according to the agreed terms</li>
              <li>All fees are exclusive of taxes</li>
              <li>Refunds are subject to our refund policy</li>
              <li>We reserve the right to modify our pricing with notice</li>
            </ul>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>Afflyn shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.</p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>For any questions about these Terms, please contact us at:</p>
            <p>Email: legal@afflynext.com<br />
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

export default TermsConditions;