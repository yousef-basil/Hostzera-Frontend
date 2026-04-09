import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Only allow 1 digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otp.join(''));
    // Redirect to dashboard (simulate success)
    alert('Account Verified! Welcome to Hostzera.');
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
          <h1>Verify Your Email</h1>
          <p>We've sent a code to your email. Enter it below to confirm your account.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '2rem' }}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                style={{
                  width: '45px',
                  height: '55px',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  borderRadius: '10px',
                  border: '1.5px solid #e5e7eb',
                  outline: 'none'
                }}
              />
            ))}
          </div>

          <button type="submit" className="login-btn">Confirm OTP</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: '#6b7280' }}>
          Didn't receive the code? <a href="#resend" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Resend</a>
        </p>
      </div>

      <div className="visual-side">
        <h2>Security First</h2>
        <p>Keep your account safe with 2FA and secure verification.</p>
      </div>
    </div>
  );
};

export default OTP;
