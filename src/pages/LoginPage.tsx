
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import { User, Mail, Lock, Github, Linkedin, Facebook, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    navigate('/profile');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, just login
    login(email);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${isActive ? 'active' : ''}`}>
        {/* Login Form */}
        <div className="auth-form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="auth-input-box">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <Mail className="icon" size={20} />
            </div>
            <div className="auth-input-box">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <Lock className="icon" size={20} />
            </div>
            <div className="auth-forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="auth-btn">Login</button>
          </form>
        </div>

        {/* Register Form */}
        <div className="auth-form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="auth-input-row">
              <div className="auth-input-box">
                <input type="text" placeholder="First Name" required />
                <User className="icon" size={20} />
              </div>
              <div className="auth-input-box">
                <input type="text" placeholder="Last Name" required />
                <User className="icon" size={20} />
              </div>
            </div>
            <div className="auth-input-box">
              <input type="email" placeholder="Email" required />
              <Mail className="icon" size={20} />
            </div>
            <div className="auth-input-box">
              <input type="password" placeholder="Password" required />
              <Lock className="icon" size={20} />
            </div>
            <button type="submit" className="auth-btn">Register</button>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="auth-toggle-box">
          <div className="auth-toggle-panel auth-toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="auth-btn register-btn" onClick={() => setIsActive(true)}>Register</button>
          </div>

          <div className="auth-toggle-panel auth-toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="auth-btn login-btn" onClick={() => setIsActive(false)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
