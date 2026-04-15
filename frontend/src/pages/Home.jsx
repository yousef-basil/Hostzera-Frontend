import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Globe, Layout, Server, Database, Mail, Terminal, Box, Cpu, HardDrive, ArrowRight, Check } from 'lucide-react';


const Home = () => {
  const services = [
    { 
      title: 'Web Hosting', 
      desc: 'Fast shared hosting for websites', 
      icon: <Globe size={32} />,
      features: ['Unmetered Bandwidth', 'Free SSL Certificate', '99.9% Uptime'],
      price: '2.99'
    },
    { 
      title: 'WordPress Hosting', 
      desc: 'Optimized for WordPress', 
      icon: <Layout size={32} />,
      features: ['One-Click Install', 'WP Accelerator', 'Daily Backups'],
      price: '3.99'
    },
    { 
      title: 'Reseller Hosting', 
      desc: 'Start your hosting business', 
      icon: <Server size={32} />,
      features: ['WHM Panel', 'White Label', 'Client Billing'],
      price: '14.99'
    },
    { 
      title: 'Email Hosting', 
      desc: 'Professional business email', 
      icon: <Mail size={32} />,
      features: ['IMAP/POP3', 'Webmail', 'Anti-spam'],
      price: '1.99'
    },
    { 
      title: 'Linux VPS', 
      desc: 'Full root access', 
      icon: <Terminal size={32} />,
      features: ['Root Access', 'NVMe SSD', 'DDoS Protection'],
      price: '5.99'
    },
    { 
      title: 'Windows VPS', 
      desc: 'RDP access included', 
      icon: <Box size={32} />,
      features: ['RDP Access', 'Windows Server', 'Full Control'],
      price: '9.99'
    },
    { 
      title: 'Dedicated Server', 
      desc: 'Bare metal performance', 
      icon: <Cpu size={32} />,
      features: ['Full Resources', 'Custom Config', '24/7 Support'],
      price: '49.00'
    },
    { 
      title: 'N8N Servers', 
      desc: 'Self-hosted automation', 
      icon: <HardDrive size={32} />,
      features: ['Managed N8N', 'Auto Updates', 'Backups'],
      price: '19.00'
    },
    { 
      title: 'Odoo Hosting', 
      desc: 'Managed Odoo ERP hosting', 
      icon: <Database size={32} />,
      features: ['Managed Odoo', 'Daily Backups', 'Support'],
      price: '29.00'
    },
  ];

  return (
    <div className="home-page">
      <Navbar />
      
      <header className="hero">
        <div className="hero-content">
          <h1>Premium Hosting for Professionals</h1>
          <p>Everything you need to create, manage and scale your website. Fast, secure and reliable hosting solutions.</p>
          <div className="hero-cta">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Pricing</button>
          </div>
        </div>
      </header>

      <section className="services-section">
        <div className="section-title">
          <h2>Our Hosting Services</h2>
          <p>Choose the perfect hosting plan for your project</p>
        </div>

        <div className="services-grid-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                
                <ul className="feature-list">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <Check size={14} className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>


                <div className="price-tag">
                  From <span>{'$'}{service.price}</span> /mo
                </div>

                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="view-plans-btn">
                  View Plans <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
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

export default Home;
