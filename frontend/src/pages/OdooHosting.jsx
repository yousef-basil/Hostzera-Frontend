import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Database, Shield, Headphones, Cpu, HardDrive, Box } from 'lucide-react';

const OdooHosting = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime' },
    { value: 'Odoo', label: 'Pre-configured' },
    { value: 'Root', label: 'Full Access' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const plans = [
    {
      name: 'Odoo Starter',
      price: '14.50',
      specs: '2 vCPU · 4 GB RAM',
      features: [
        '100 GB NVMe · 4 TB Traffic',
        'Odoo + PostgreSQL Ready',
        'KVM · Ubuntu 22.04/24.04',
        'DDoS Protection',
        '24/7 Support',
        'Full Root Access',
      ],
    },
    {
      name: 'Odoo Business',
      price: '29.50',
      badge: 'Best Value',
      specs: '4 vCPU · 12 GB RAM',
      features: [
        '200 GB NVMe · 12 TB Traffic',
        'Ideal for Production Odoo',
        'KVM · Ubuntu 22.04/24.04',
        'DDoS Protection',
        '24/7 Support',
        'Full Root Access',
      ],
    },
    {
      name: 'Odoo Enterprise',
      price: '59.50',
      specs: '8 vCPU · 24 GB RAM',
      features: [
        '400 GB NVMe · 20 TB Traffic',
        'Large Odoo Databases',
        'KVM · Ubuntu 22.04/24.04',
        'DDoS Protection',
        '24/7 Support',
        'Full Root Access',
      ],
    },
  ];

  const odooFeatures = [
    { icon: <Database size={24} />, title: 'Odoo + PostgreSQL', desc: 'Servers optimized for Odoo and PostgreSQL. Ubuntu 22.04/24.04 pre-configured.' },
    { icon: <Shield size={24} />, title: 'Secure & Reliable', desc: 'DDoS protection, KVM virtualization, and full root access for complete control.' },
    { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Our team supports Odoo deployments. Get expert help with infrastructure when you need it.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Business ERP Hosting</span>
          <h1>Managed Odoo Hosting for Your Business</h1>
          <p>Run Odoo ERP on dedicated, optimized servers. Pre-configured for Odoo + PostgreSQL with full root access.</p>
          <div className="hosting-hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#plans" className="cta-primary">View Plans</a>
            <Link to="/support" className="cta-secondary">Contact Sales</Link>
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
          <h2>Odoo Hosting Plans</h2>
          <p>Choose the right plan for your Odoo deployment.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '1.5rem' }}>{plan.specs}</p>
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
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="hosting-features-section">
        <div className="features-header">
          <h2>Why Odoo on Hostzera?</h2>
          <p>Production-ready ERP hosting infrastructure</p>
        </div>

        <div className="features-grid">
          {odooFeatures.map((feature, index) => (
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
        <h2>Ready to Deploy Odoo?</h2>
        <p>Launch your Odoo instance in minutes. No setup fees, no contracts. Guaranteed performance.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Launch Instance</Link>
          <Link to="/support" className="cta-secondary">Talk to Experts</Link>
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

export default OdooHosting;
