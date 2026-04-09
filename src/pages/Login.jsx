import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo-text">Host<span>zera</span></h1>
          </Link>
        </div>

        <div className="title-section">
          <h1>Welcome Back</h1>
          <p>Login to your Hostzera dashboard to manage your servers.</p>
        </div>

        <div className="social-section">
          <button className="social-btn">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="divider">
          <span>OR LOG IN WITH EMAIL</span>
        </div>

        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@hostzera.com" />
          </div>
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label>Password</label>
              <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>Forgot password?</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontWeight: '600', fontSize: '0.8rem' }}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
          </div>
          <button className="login-btn">Log In</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: '#6b7280' }}>
          New to Hostzera? <Link to="/signup" style={{ color: '#2563eb', fontWeight: '700', textDecoration: 'none' }}>Create an account</Link>
        </p>
      </div>

      <div className="visual-side">
        <h2>Power Your Vision</h2>
        <p>Premium hosting for high-performance projects. Your journey starts here.</p>
      </div>
    </div>
  );
};

export default Login;
