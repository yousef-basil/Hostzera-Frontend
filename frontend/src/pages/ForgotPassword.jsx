import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    alert('Reset link sent to your email.');
    navigate('/login');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text">Host<span>zera</span></h1>
          </Link>
        </div>

        <div className="title-section">
          <h1>Reset Password</h1>
          <p>Don't worry! Enter your email and we'll send you a recovery link.</p>
        </div>

        <form onSubmit={handleReset}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@hostzera.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-btn">Send Reset Link</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: '#6b7280' }}>
          Back to <Link to="/login" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Log in</Link>
        </p>
      </div>

      <div className="visual-side">
        <h2>Restore Access</h2>
        <p>Recover your credentials quickly and securely. Your servers are waiting.</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
