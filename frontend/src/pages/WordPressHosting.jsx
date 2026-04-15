import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Zap, Shield, RefreshCw, Database, Terminal, Headphones } from 'lucide-react';

const WordPressHosting = () => {
  const stats = [
    { value: '20x', label: 'Faster Loads' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '1-Click', label: 'WP Install' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const plans = [
    {
      name: 'WP Starter',
      price: '4.99',
      badge: null,
      features: [
        '1 Website',
        '10 GB SSD',
        '25,000 Visits/mo',
        'Free SSL Certificate',
        'Auto WordPress Updates',
        'Daily Backups',
        '24/7 Support',
      ],
    },
    {
      name: 'WP Business',
      price: '9.99',
      badge: 'Popular',
      features: [
        '3 Websites',
        '30 GB SSD',
        '100,000 Visits/mo',
        'Free SSL Certificate',
        'Auto WordPress Updates',
        'Daily Backups',
        '24/7 Support',
        'Staging Environment',
        'Free CDN',
      ],
    },
    {
      name: 'WP Pro',
      price: '19.99',
      badge: null,
      features: [
        '10 Websites',
        '100 GB SSD',
        '500,000 Visits/mo',
        'Free SSL Certificate',
        'Auto WordPress Updates',
        'Hourly Backups',
        'Priority Support',
        'Staging Environment',
        'Free CDN',
        'Malware Removal',
        'Performance Optimization',
      ],
    },
  ];

  const wpFeatures = [
    { icon: <Zap size={24} />, title: 'LiteSpeed Optimized', desc: 'WordPress hosting powered by LiteSpeed for up to 20x faster page loads.' },
    { icon: <Shield size={24} />, title: 'WordPress Security', desc: 'Automatic malware scanning, firewall protection, and security hardening.' },
    { icon: <RefreshCw size={24} />, title: 'Auto Updates', desc: 'Automatic WordPress core, theme, and plugin updates to keep your site secure.' },
    { icon: <Database size={24} />, title: 'Daily Backups', desc: 'Automatic daily backups with one-click restore functionality.' },
    { icon: <Terminal size={24} />, title: 'Built-in Caching', desc: 'LiteSpeed Cache plugin pre-installed for optimal performance out of the box.' },
    { icon: <Headphones size={24} />, title: 'WordPress Experts', desc: '24/7 support from our team of WordPress specialists.' },
  ];

  const techLinks = ['LiteSpeed', 'Jetpack', 'WooCommerce', 'Elementor', 'Yoast SEO'];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Optimized WordPress Hosting</span>
          <h1>Optimized WordPress Hosting</h1>
          <p>One-click install, automatic updates, and LiteSpeed caching for lightning-fast WordPress sites.</p>
          <div className="hosting-hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" className="cta-primary">Get Started</Link>
            <a href="#plans" className="cta-secondary">Compare Plans</a>
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

        <div className="tech-compatibility" style={{ marginTop: '4rem', padding: '0 1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>Compatible with</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {techLinks.map((tech, i) => (
              <span key={i} style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', opacity: '0.7' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="pricing-section">
        <div className="pricing-header">
          <h2>WordPress Hosting Plans</h2>
          <p>Choose the perfect plan for your WordPress site.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/mo</span>
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

      {/* Features Section */}
      <section className="hosting-features-section">
        <div className="features-header">
          <h2>WordPress Features</h2>
          <p>Everything you need for a fast WordPress site.</p>
        </div>

        <div className="features-grid">
          {wpFeatures.map((feature, index) => (
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
        <h2>Ready for WordPress?</h2>
        <p>Start building your site with optimized hosting.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Start Now</Link>
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

export default WordPressHosting;
