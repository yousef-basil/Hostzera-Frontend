import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Globe, Languages, Layout, Server, Database, Mail, Terminal, Box, Cpu, HardDrive, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { 
      title: 'Web Hosting', 
      desc: 'Best for small websites and blogs with reliable uptime.', 
      icon: <Globe size={22} /> 
    },
    { 
      title: 'WordPress Hosting', 
      desc: 'Managed hosting optimized for WordPress speed.', 
      icon: <Layout size={22} /> 
    },
    { 
      title: 'Reseller Hosting', 
      desc: 'Launch your own hosting business with WHM.', 
      icon: <Server size={22} /> 
    },
    { 
      title: 'Email Hosting', 
      desc: 'Custom domain email with spam protection.', 
      icon: <Mail size={22} /> 
    },
    { 
      title: 'Linux VPS', 
      desc: 'Full root access with NVMe SSD storage.', 
      icon: <Terminal size={22} /> 
    },
    { 
      title: 'Windows VPS', 
      desc: 'Remote desktop access on Windows Server.', 
      icon: <Box size={22} /> 
    },
    { 
      title: 'Dedicated Server', 
      desc: 'Bare metal performance for heavy workloads.', 
      icon: <Cpu size={22} /> 
    },
    { 
      title: 'N8N Servers', 
      desc: 'Managed self-hosted automation platform.', 
      icon: <HardDrive size={22} /> 
    },
    { 
      title: 'Odoo Hosting', 
      desc: 'Managed ERP hosting with daily backups.', 
      icon: <Database size={22} /> 
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="nav-logo">
            <div className="logo-icon">
              <div className="logo-inner">H</div>
            </div>
            <div className="logo-text">HOST<span>ZERA</span></div>
          </Link>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link></li>
            <li 
              className="has-dropdown"
              onMouseEnter={() => !window.matchMedia("(max-width: 960px)").matches && setIsServicesOpen(true)}
              onMouseLeave={() => !window.matchMedia("(max-width: 960px)").matches && setIsServicesOpen(false)}
              onClick={() => window.matchMedia("(max-width: 960px)").matches && setIsServicesOpen(!isServicesOpen)}
            >
              <button className="dropdown-trigger">
                Services <ChevronDown size={14} className={isServicesOpen ? 'rotate' : ''} />
              </button>
              
              {isServicesOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-header">
                    <span>Our Services</span>
                  </div>
                  <div className="mega-menu-content">
                    {services.map((item, index) => (
                      <Link 
                        key={index} 
                        to={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="mega-menu-item"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="item-icon">{item.icon}</div>
                        <div className="item-text">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/explore" onClick={() => setIsMobileMenuOpen(false)}>Explore</Link></li>
            <li><Link to="/support" onClick={() => setIsMobileMenuOpen(false)}>Support</Link></li>
            
            {/* Mobile-only links */}
            <li className="mobile-only">
               <Link to="/login" className="mobile-login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </li>
            <li className="mobile-only">
               <Link to="/signup" className="mobile-signup" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="lang-btn icon-only" title="Change Language">
            <Globe size={20} />
          </button>
          <Link to="/login" className="nav-login-link desktop-only">Login</Link>
          <Link to="/signup" className="get-started-nav desktop-only">Get Started</Link>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>}
    </nav>
  );
};

export default Navbar;

