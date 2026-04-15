import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Check, Cpu, HardDrive, Shield, Globe, Zap, Headphones, BarChart3 } from 'lucide-react';

const DedicatedServers = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 1ms', label: 'Network Latency' },
    { value: 'Root', label: 'Full Access' },
    { value: '24/7', label: 'Priority Support' },
  ];

  const plans = [
    {
      name: 'Core',
      cpu: 'Intel Xeon E3-1275v5 CPU',
      price: '88.61',
      features: [
        '64 GB DDR4 ECC RAM',
        '2 x 512 GB NVMe/SSD Storage',
        '1 Gbps Network Port',
        'Unlimited Traffic',
        '1 IPv4 Address',
        'FSN1 (Germany) Datacenter',
        'Full Root Access',
        'DDoS Protection',
        '24/7 Technical Support',
        'Hardware Replacement Included',
        'Free Email Support',
        'Free Phone Support',
      ],
    },
    {
      name: 'Power',
      cpu: 'AMD Ryzen 5 3600 CPU',
      price: '93.43',
      badge: 'Most Popular',
      features: [
        '64 GB DDR4 ECC RAM',
        '2 x 512 GB NVMe/SSD Storage',
        '1 Gbps Network Port',
        'Unlimited Traffic',
        '1 IPv4 Address',
        'FSN1 (Germany) Datacenter',
        'Full Root Access',
        'DDoS Protection',
        '24/7 Technical Support',
        'Hardware Replacement Included',
        'Free Email Support',
        'Free Phone Support',
      ],
    },
    {
      name: 'Prime',
      cpu: 'AMD Ryzen 9 3900 CPU',
      price: '163.40',
      features: [
        '64 GB DDR4 ECC RAM',
        '2 x 1 TB NVMe/SSD Storage',
        '1 Gbps Network Port',
        'Unlimited Traffic',
        '1 IPv4 Address',
        'FSN1 (Germany) Datacenter',
        'Full Root Access',
        'DDoS Protection',
        '24/7 Technical Support',
        'Hardware Replacement Included',
        'Free Email Support',
        'Free Phone Support',
      ],
    },
  ];

  const dedicatedFeatures = [
    { icon: <Cpu size={24} />, title: 'Bare Metal Performance', desc: 'No virtualization overhead. Full access to physical hardware resources.' },
    { icon: <HardDrive size={24} />, title: 'NVMe SSD Storage', desc: 'Ultra-fast NVMe SSDs with up to 7GB/s read speeds for lightning-quick operations.' },
    { icon: <Shield size={24} />, title: 'Enterprise Security', desc: 'Advanced DDoS protection, firewalls, and security monitoring included.' },
    { icon: <Globe size={24} />, title: 'Global Network', desc: 'Multiple datacenter locations worldwide for optimal latency and redundancy.' },
    { icon: <Zap size={24} />, title: 'Ready in Hours', desc: 'Your dedicated server is ready in hours with your choice of operating system.' },
    { icon: <Headphones size={24} />, title: '24/7 Priority Support', desc: 'Direct access to our senior technical experts around the clock.' },
  ];

  return (
    <div className="hosting-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hosting-hero">
        <div className="hosting-hero-content">
          <span className="hosting-badge">Enterprise Bare Metal</span>
          <h1>Dedicated Servers</h1>
          <p>Bare metal performance for demanding workloads. Uncompromised power for your mission-critical applications.</p>
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
          <h2>Dedicated Server Plans</h2>
          <p>Full hardware resources for maximum performance.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.badge ? 'featured' : ''}`}>
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="plan-name" style={{ marginBottom: '0.25rem' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>{plan.cpu}</p>
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
          <h2>Why Choose Dedicated Hosting?</h2>
          <p>Unmatched performance for mission-critical workloads.</p>
        </div>

        <div className="features-grid">
          {dedicatedFeatures.map((feature, index) => (
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
        <h2>Ready for Dedicated Power?</h2>
        <p>Deploy your dedicated server today. Expert support included. No setup fees, no contracts.</p>
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

export default DedicatedServers;
