import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// Import Pages
import Home from './pages/Home';
// Service pages (currently uncommitted, deploying later)
import WebHosting from './pages/WebHosting';
import ResellerHosting from './pages/ResellerHosting';
import WordPressHosting from './pages/WordPressHosting';
import EmailHosting from './pages/EmailHosting';
import LinuxVPS from './pages/LinuxVPS';
import WindowsVPS from './pages/WindowsVPS';
import DedicatedServers from './pages/DedicatedServers';
import N8nServers from './pages/N8nServers';
import OdooHosting from './pages/OdooHosting';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTP from './pages/OTP';
import ForgotPassword from './pages/ForgotPassword';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Home />} />
        
        {/* Service Pages (Commented out until we push them later) */}
        <Route path="/services/web-hosting" element={<WebHosting />} />
        <Route path="/services/reseller-hosting" element={<ResellerHosting />} />
        <Route path="/services/wordpress-hosting" element={<WordPressHosting />} />
        <Route path="/services/email-hosting" element={<EmailHosting />} />
        <Route path="/services/linux-vps" element={<LinuxVPS />} />
        <Route path="/services/windows-vps" element={<WindowsVPS />} />
        <Route path="/services/dedicated-server" element={<DedicatedServers />} />
        <Route path="/services/n8n-servers" element={<N8nServers />} />
        <Route path="/services/odoo-hosting" element={<OdooHosting />} />
        
        {/* Authentication Routes wrapped in layout */}
        <Route path="/login" element={<div className="auth-layout"><Login /></div>} />
        <Route path="/signup" element={<div className="auth-layout"><Signup /></div>} />
        <Route path="/otp" element={<div className="auth-layout"><OTP /></div>} />
        <Route path="/forgot-password" element={<div className="auth-layout"><ForgotPassword /></div>} />
        

        
        {/* Handle Unknown Routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
