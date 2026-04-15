import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Cpu, HardDrive, Shield, Globe, Zap, Headphones, Monitor } from 'lucide-react';

const WindowsVPS = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 1ms', label: 'NVMe Storage' },
    { value: 'RDP', label: 'Full Access' },
    { value: '24/7', label: 'Expert Support' },
  ];

  const plans = [
    {
      name: 'W-KVM 1',
      setupFee: '$4.99 Setup Fee',
      price: '9.95',
      features: ['2 vCPU Cores', '4 GB RAM', '60 GB NVMe Storage', '3 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
    {
      name: 'W-KVM 2',
      setupFee: '$4.99 Setup Fee',
      price: '14.75',
      features: ['3 vCPU Cores', '6 GB RAM', '90 GB NVMe Storage', '5 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
    {
      name: 'W-KVM 3',
      setupFee: '$4.99 Setup Fee',
      price: '24.50',
      badge: 'Most Popular',
      features: ['4 vCPU Cores', '8 GB RAM', '150 GB NVMe Storage', '8 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
    {
      name: 'W-KVM 4',
      setupFee: '$4.99 Setup Fee',
      price: '34.25',
      features: ['6 vCPU Cores', '12 GB RAM', '220 GB NVMe Storage', '12 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
    {
      name: 'W-KVM 5',
      setupFee: '$4.99 Setup Fee',
      price: '49.40',
      features: ['8 vCPU Cores', '16 GB RAM', '320 GB NVMe Storage', '16 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
    {
      name: 'W-KVM 6',
      setupFee: '$4.99 Setup Fee',
      price: '69.60',
      features: ['8 vCPU Cores', '16 GB RAM', '320 GB NVMe Storage', '16 TB Monthly Traffic', '200 Mbps Dedicated Port', '1 IPv4 Address', 'KVM Virtualization', 'Windows OS Support', 'Full Admin Access', 'DDoS Protection'],
    },
  ];

  const windowsFeatures = [
    { icon: <Cpu size={24} />, title: 'High-Performance CPUs', desc: 'Latest generation AMD EPYC and Intel Xeon processors for maximum performance.' },
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
          <span className="hosting-badge">Enterprise Windows VPS</span>
          <h1>Windows VPS</h1>
          <p>Windows Server VPS with RDP access. High performance for desktop applications and hosting.</p>
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
          <h2>Windows VPS Plans</h2>
          <p>Choose the right plan for your business needs.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card vps-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="plan-name" style={{ marginBottom: '0.25rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>{plan.setupFee}</p>
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
                Order Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="hosting-features-section">
        <div className="features-header">
          <h2>Why Choose Our Windows VPS?</h2>
          <p>Enterprise Windows hosting at competitive prices.</p>
        </div>

        <div className="features-grid">
          {windowsFeatures.map((feature, index) => (
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
        <p>Deploy your Windows VPS in minutes. No setup fees, no contracts.</p>
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

export default WindowsVPS;
