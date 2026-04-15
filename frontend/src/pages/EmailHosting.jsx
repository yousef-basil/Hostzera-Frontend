import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Mail, Shield, Smartphone, Lock, Headphones, Send } from 'lucide-react';

const EmailHosting = () => {
  const stats = [
    { value: '99.9%', label: 'Spam Blocked' },
    { value: '50GB+', label: 'Storage' },
    { value: '256-bit', label: 'Encryption' },
    { value: '24/7', label: 'Support' },
  ];

  const plans = [
    {
      name: 'Business Email Starter',
      price: '39.00',
      period: '/yr',
      badge: null,
      features: [
        '10 Email Accounts',
        '10 GB SSD Storage',
        'Webmail Access',
        'Mobile Sync (IMAP / POP / SMTP)',
        'Advanced Spam Protection',
        'Email Forwarders',
        'Auto Responders',
        'SSL Secure Mail',
      ],
    },
    {
      name: 'Business Email Growth',
      price: '69.00',
      period: '/yr',
      badge: 'Most Popular',
      features: [
        '30 Email Accounts',
        '30 GB SSD Storage',
        'Webmail Access',
        'Mobile Sync',
        'Advanced Spam Protection',
        'Email Forwarders',
        'Auto Responders',
        'SSL Secure Mail',
      ],
    },
    {
      name: 'Business Email Corporate',
      price: '119.00',
      period: '/yr',
      badge: null,
      features: [
        '75 Email Accounts',
        '75 GB SSD Storage',
        'All Starter features',
        'Priority Support',
        'Webmail Access',
        'Mobile Sync',
        'Advanced Spam Protection',
        'SSL Secure Mail',
      ],
    },
  ];

  const emailFeatures = [
    { icon: <Shield size={24} />, title: 'Advanced Spam Protection', desc: 'AI-powered spam filtering blocks 99.9% of unwanted emails.' },
    { icon: <Lock size={24} />, title: 'Enterprise Security', desc: 'TLS encryption, two-factor authentication, and threat protection.' },
    { icon: <Smartphone size={24} />, title: 'Mobile Ready', desc: 'Full sync support for iOS, Android, and desktop clients.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Professional Email Hosting</span>
          <h1>Professional Email Hosting</h1>
          <p>Secure, reliable email for your domain.</p>
          <div className="hosting-hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" className="cta-primary">Get Started</Link>
            <a href="#features" className="cta-secondary">View Features</a>
          </div>
        </div>

        <div className="hosting-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="pricing-section">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your business needs.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={14} className="plan-check" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/signup" className={`plan-btn ${plan.badge ? 'plan-btn-primary' : ''}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Features Section */}
      <section id="features" className="hosting-features-section">
        <div className="features-header">
          <h2>Everything You Need</h2>
          <p>Professional email features for modern businesses</p>
        </div>

        <div className="features-grid">
          {emailFeatures.map((feature, index) => (
            <div key={index} className="hosting-feature-card">
              <div className="feature-icon-box">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hosting-cta">
        <h2>Ready to Go Professional?</h2>
        <p>Start with your custom email today. Setup takes just minutes.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Start Free Trial</Link>
          <Link to="/support" className="cta-secondary">Contact Sales</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 HOSTZERA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EmailHosting;
