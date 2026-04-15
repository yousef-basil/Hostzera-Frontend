import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Zap, Shield, Headphones, Layers, Cpu, HardDrive } from 'lucide-react';

const N8nServers = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime' },
    { value: '1-Click', label: 'N8N Install' },
    { value: '√', label: 'Unlimited Workflows' },
    { value: '24/7', label: 'Support' },
  ];

  const cloudPlan = {
    name: 'N8n Cloud Account',
    category: 'No server required',
    desc: 'Just an account—no server needed. Your personal n8n workspace, ready to use in seconds.',
    price: '6.00',
    features: [
      'Up to 10 Workflows',
      'Up to 1,000 Executions / Month',
      'Dedicated Member Workspace',
      'Secure Self-Hosted n8n Access',
      'Private Project Environment',
      'Reliable Automation Hosting',
      'Technical Support Included',
    ],
  };

  const managedPlans = [
    {
      name: 'N8n Starter',
      price: '14.95',
      specs: '2 vCPU · 4 GB RAM',
      features: [
        '100 GB NVMe · 4 TB Traffic',
        'n8n Ready (Docker)',
        'PostgreSQL · DDoS Protection',
        '24/7 Support',
        'Unlimited Workflows',
        'Root Access Available',
      ],
    },
    {
      name: 'N8n Pro',
      price: '34.95',
      badge: 'Best Value',
      specs: '4 vCPU · 12 GB RAM',
      features: [
        '200 GB NVMe · 12 TB Traffic',
        'Optimized for n8n Automation',
        'PostgreSQL + Redis',
        'DDoS Protection',
        '24/7 Support',
        'Unlimited Workflows',
      ],
    },
    {
      name: 'N8n Business',
      price: '69.95',
      specs: '8 vCPU · 24 GB RAM',
      features: [
        '400 GB NVMe · 20 TB Traffic',
        'Heavy Workflows Support',
        'PostgreSQL + Redis',
        'DDoS Protection',
        '24/7 Support',
        'Unlimited Workflows',
      ],
    },
  ];

  const n8nFeatures = [
    { icon: <Zap size={24} />, title: '1-Click Deploy', desc: 'N8N is pre-installed and configured. Start automating in minutes.' },
    { icon: <Shield size={24} />, title: 'Secure & Reliable', desc: 'DDoS protection, firewalls, and automatic updates for your n8n instance.' },
    { icon: <Headphones size={24} />, title: 'Expert Support', desc: 'Our team knows n8n. Get help with workflows and infrastructure.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Workflow Automation</span>
          <h1>Managed N8N Servers for Your Workflows</h1>
          <p>Self-hosted N8N workflows with dedicated resources. Automate your business without limits.</p>
          <div className="hosting-hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" className="cta-primary">View Plans</Link>
            <a href="#features" className="cta-secondary">Learn More</a>
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
          <h2 style={{ color: 'white' }}>N8n Plans</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Choose the right option for your workflow automation needs.</p>
        </div>

        {/* Cloud Account Plan - Special Row */}
        <div style={{ maxWidth: '400px', margin: '0 auto 4rem' }}>
          <div className="pricing-card" style={{ border: '1px solid rgba(103, 58, 183, 0.1)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>{cloudPlan.category}</span>
            <h3 className="plan-name">{cloudPlan.name}</h3>
            <p style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.4' }}>{cloudPlan.desc}</p>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{cloudPlan.price}</span>
              <span className="period">/mo</span>
            </div>
            <ul className="plan-features">
              {cloudPlan.features.map((feature, i) => (
                <li key={i}><Check size={14} className="plan-check" />{feature}</li>
              ))}
            </ul>
            <Link to="/signup" className="plan-btn">Order Now</Link>
          </div>
        </div>

        <div className="pricing-header" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827' }}>Managed N8n Servers</h3>
          <p style={{ color: '#6b7280' }}>Dedicated resources for production workflows</p>
        </div>

        <div className="pricing-grid">
          {managedPlans.map((plan, index) => (
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
          <h2>Why N8N on Hostzera?</h2>
          <p>Production-ready workflow automation infrastructure</p>
        </div>

        <div className="features-grid">
          {n8nFeatures.map((feature, index) => (
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
        <h2>Ready to Automate?</h2>
        <p>Deploy your N8N server in minutes. No setup fees, no contracts.</p>
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

export default N8nServers;
