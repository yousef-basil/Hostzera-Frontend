import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Zap, Shield, HardDrive, Lock, Headphones, Server } from 'lucide-react';

const WebHosting = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '1-Click', label: 'App Install' },
    { value: 'SSD', label: 'Storage' },
    { value: '24/7', label: 'Support' },
  ];

  const plans = [
    {
      name: 'Bronze',
      price: '3.99',
      badge: null,
      features: [
        '1 Website',
        '10 GB NVME',
        'Unlimited bandwidth',
        'High-performance NVME storage',
        '5 Email Accounts',
        'WP-Toolkit for WordPress',
        'Sitejet Builder',
        'Weekly backups',
        '100% uptime guarantee',
        'Free CDN',
        'Free automatic SSL installation',
        'LiteSpeed webserver',
        'SSH access',
        '10 FTP users',
        '5 MySQL databases',
        'Free .com domain with Annual billing',
      ],
    },
    {
      name: 'Silver',
      price: '6.49',
      badge: 'Best Value',
      features: [
        '3 Websites',
        '25 GB NVME',
        'Unlimited bandwidth',
        'High-performance NVME storage',
        '10 Email Accounts',
        'WP-Toolkit for WordPress',
        'Sitejet Builder',
        'Weekly backups',
        '100% uptime guarantee',
        'Free CDN',
        'Free automatic SSL installation',
        'LiteSpeed webserver',
        'SSH access',
        '15 FTP users',
        '10 MySQL databases',
        'Free .com domain with Annual billing',
      ],
    },
    {
      name: 'Diamond',
      price: '9.99',
      badge: null,
      features: [
        'Unlimited Websites',
        '50 GB NVME',
        'Unlimited bandwidth',
        'High-performance NVME storage',
        'Unlimited Email Accounts',
        'WP-Toolkit for WordPress',
        'Sitejet Builder',
        'Daily Backups',
        '100% uptime guarantee',
        'Free CDN',
        'Free automatic SSL installation',
        'LiteSpeed webserver',
        'SSH access',
        'Unlimited FTP users',
        'Unlimited MySQL databases',
        'Free .com domain with Annual billing',
      ],
    },
  ];

  const hostingFeatures = [
    { icon: <Zap size={24} />, title: 'LiteSpeed Servers', desc: 'High-performance LiteSpeed web servers for faster load times and better SEO.' },
    { icon: <Server size={24} />, title: 'Built-in Caching', desc: 'Server-side caching and optimization tools included for blazing performance.' },
    { icon: <Shield size={24} />, title: 'DDoS Protection', desc: 'Always-on DDoS protection and a secure firewall keep your site online.' },
    { icon: <HardDrive size={24} />, title: 'SSD Storage', desc: 'Fast SSD storage ensures quick file access and smooth page delivery.' },
    { icon: <Lock size={24} />, title: 'Free SSL', desc: 'Automatic SSL certificates to keep your visitors safe and trusted.' },
    { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Our experts are ready around the clock to help you launch and scale.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Shared Web Hosting</span>
          <h1>Fast & Secure Web Hosting</h1>
          <p>Launch your website on reliable, high-performance hosting with SSD storage, LiteSpeed servers, and 24/7 expert support.</p>
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
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>Web Hosting Plans</h2>
          <p>Choose a plan that fits your website and grow anytime.</p>
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
          <h2>Hosting Features</h2>
          <p>Everything you need to build, launch, and grow.</p>
        </div>

        <div className="features-grid">
          {hostingFeatures.map((feature, index) => (
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
        <h2>Ready to Launch Your Website?</h2>
        <p>Get reliable, fast web hosting with free SSL, daily backups, and 24/7 support.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Start Now</Link>
          <Link to="/support" className="cta-secondary">Talk to Sales</Link>
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

export default WebHosting;
