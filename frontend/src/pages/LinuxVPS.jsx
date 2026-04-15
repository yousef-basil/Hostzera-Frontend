import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Cpu, HardDrive, Shield, Globe, Zap, Headphones } from 'lucide-react';

const LinuxVPS = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 1ms', label: 'NVMe Storage' },
    { value: 'Root', label: 'Full Access' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const plans = [
    {
      name: 'H-KVM 1',
      cpu: 'Enterprise AMD EPYC™ CPU',
      price: '5.99',
      features: ['1 vCPU Core', '2 GB RAM', '30 GB NVMe Storage', '2 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Full Root Access', 'DDoS Protection'],
    },
    {
      name: 'H-KVM 2',
      cpu: 'Enterprise AMD EPYC™ CPU',
      price: '9.99',
      features: ['2 vCPU Cores', '4 GB RAM', '100 GB NVMe Storage', '4 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Full Root Access', 'DDoS Protection'],
    },
    {
      name: 'H-KVM 3',
      cpu: 'Enterprise AMD EPYC™ CPU',
      price: '17.99',
      badge: 'Most Popular',
      features: ['3 vCPU Cores', '8 GB RAM', '150 GB NVMe Storage', '8 TB Monthly Traffic', '400-500 Mbps Dedicated Port', '1 IPv4 Address', 'NVMe Optimized Storage', 'Full Root Access', 'DDoS Protection'],
    },
    {
      name: 'H-KVM 4',
      cpu: 'Enterprise AMD EPYC™ CPU',
      price: '24.99',
      features: ['4 vCPU Cores', '12 GB RAM', '200 GB NVMe Storage', '12 TB Monthly Traffic', '500 Mbps Dedicated Port', '1 IPv4 Address', 'High Performance Node', 'Full Root Access', 'DDoS Protection'],
    },
    {
      name: 'H-KVM 5',
      cpu: 'Enterprise AMD EPYC™ CPU',
      price: '34.99',
      features: ['6 vCPU Cores', '16 GB RAM', '300 GB NVMe Storage', '16 TB Monthly Traffic', '800 Mbps Dedicated Port', '1 IPv4 Address', 'Optimized for Traffic', 'Full Root Access', 'DDoS Protection'],
    },
    {
      name: 'H-KVM 6',
      cpu: 'AMD EPYC™ High-Performance Node',
      price: '49.99',
      features: ['8 vCPU Cores', '24 GB RAM', '400 GB NVMe Storage', '24 TB Monthly Traffic', 'Up to 1 Gbps Port', '1 IPv4 Address', 'Enterprise Node', 'Full Root Access', 'DDoS Protection'],
    },
  ];

  const vpsFeatures = [
    { icon: <Cpu size={24} />, title: 'High-Performance CPUs', desc: 'AMD EPYC™ High-Performance Compute Node processors for enterprise-grade performance.' },
    { icon: <HardDrive size={24} />, title: 'NVMe SSD Storage', desc: 'Ultra-fast NVMe SSDs with up to 7GB/s read speeds for lightning-quick operations.' },
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
          <span className="hosting-badge">Enterprise Cloud VPS</span>
          <h1>Linux VPS</h1>
          <p>Deploy your high-performance instance with full root access in seconds.</p>
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
          <h2>Linux VPS Plans</h2>
          <p>Choose the right plan for your application needs.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card vps-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="plan-name" style={{ marginBottom: '0.25rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>{plan.cpu}</p>
              </div>
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
          <h2>Why Choose Our Linux VPS?</h2>
          <p>Enterprise-grade infrastructure at affordable prices.</p>
        </div>

        <div className="features-grid">
          {vpsFeatures.map((feature, index) => (
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
        <p>Deploy your Linux VPS in minutes. No setup fees, no contracts.</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Get Started</Link>
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

export default LinuxVPS;
