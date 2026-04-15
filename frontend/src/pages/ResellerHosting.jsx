import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Settings, HardDrive, Shield, Globe, Zap, Headphones } from 'lucide-react';

const ResellerHosting = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 1ms', label: 'Network Latency' },
    { value: '24/7', label: 'Expert Support' },
    { value: '10+', label: 'Global Locations' },
  ];

  const plans = [
    {
      name: 'Starter Reseller',
      price: '10.99',
      badge: null,
      features: [
        '50 GB NVME Disk Space',
        'Unmetered Bandwidth',
        '10 cPanel Accounts',
        'Free SSL Certificates',
        'WHM Access',
        'LiteSpeed Web Server',
        'Daily Security Monitoring',
        '24/7 Technical Support',
        'Free .com domain with Annual billing',
      ],
    },
    {
      name: 'Pro Reseller',
      price: '18.99',
      badge: 'Most Popular',
      features: [
        '100 GB NVME Storage',
        'Unmetered Bandwidth',
        'Up to 30 cPanel Accounts',
        'Free SSL Certificates',
        'WHM Access',
        'LiteSpeed + Advanced Cache',
        'Priority Support',
        'Free Migration Assistance',
        'Free .com domain with Annual billing',
      ],
    },
    {
      name: 'Elite Reseller',
      price: '29.99',
      badge: null,
      features: [
        '200 GB NVME Storage',
        'Unmetered Bandwidth',
        'Up to 50 cPanel Accounts',
        'Free SSL Certificates',
        'WHM Access',
        'LiteSpeed + Advanced Cache',
        'High Priority Support',
        'High Performance Limits',
        'Free .com domain with Annual billing',
      ],
    },
  ];

  const resellerFeatures = [
    { icon: <Settings size={24} />, title: 'cPanel & WHM', desc: 'Industry-standard control panels for full management of your hosting accounts.' },
    { icon: <HardDrive size={24} />, title: 'SSD Storage', desc: 'Fast SSD storage for your reseller accounts with excellent read/write performance.' },
    { icon: <Shield size={24} />, title: 'Enterprise Security', desc: 'Advanced DDoS protection, firewalls, and security monitoring included.' },
    { icon: <Globe size={24} />, title: 'Global Network', desc: 'Multiple datacenter locations worldwide for optimal latency and redundancy.' },
    { icon: <Zap size={24} />, title: 'Instant Deployment', desc: 'Your VPS is ready in seconds with your choice of operating system.' },
    { icon: <Headphones size={24} />, title: '24/7 Expert Support', desc: 'Our technical experts are available around the clock to assist you.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">White-Label Reseller</span>
          <h1>Reseller Hosting</h1>
          <p>Start your own hosting business with white-label reseller plans.</p>
          <div className="hosting-hero-btns" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#plans" className="cta-primary">View Plans</a>
            <a href="#features" className="cta-secondary">Compare Features</a>
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
          <h2>Reseller Hosting Plans</h2>
          <p>Start selling hosting with cPanel/WHM. All plans include white-label branding.</p>
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
      <section id="features" className="hosting-features-section">
        <div className="features-header">
          <h2>Why Choose Our Reseller Hosting?</h2>
          <p>White-label hosting infrastructure at affordable prices</p>
        </div>

        <div className="features-grid">
          {resellerFeatures.map((feature, index) => (
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
        <h2>Ready to Get Started?</h2>
        <p>Start your hosting business today. No setup fees, no contracts.</p>
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

export default ResellerHosting;
