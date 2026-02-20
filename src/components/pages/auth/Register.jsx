import './Auth.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with actual API call
      console.log('Registering user:', { username, password });
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message);
      // localStorage.setItem('token', data.token);
      // window.location.href = '/';
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = (provider) => {
    console.log('OAuth with', provider);
    // TODO: Implement OAuth flow
  };

  return (
    <div className="auth-page">
      <div className="form-container-center">
        <div className="form-card">
          <h2>Create Account</h2>
          <p className="form-subtitle">Join our learning community</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <div style={{ color: '#ff6b6b', fontSize: '14px', textAlign: 'center', marginBottom: '12px' }}>{error}</div>}

            <label className="input-group">
              <span>Username</span>
              <input
                type="text"
                placeholder="choose_username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>

            <label className="input-group">
              <span>Password</span>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="password-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={`toggle-password ${showPassword ? 'visible' : ''}`}
                  onClick={() => handlePasswordToggle('password')}
                  aria-label="Toggle password visibility"
                >
                  <svg className="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </label>

            <label className="input-group">
              <span>Confirm Password</span>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="password-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={`toggle-password ${showConfirmPassword ? 'visible' : ''}`}
                  onClick={() => handlePasswordToggle('confirm')}
                  aria-label="Toggle password visibility"
                >
                  <svg className="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </label>

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <div className="oauth-divider">
              <span>or continue with</span>
            </div>

            <div className="oauth-buttons">
              <button
                type="button"
                className="oauth-btn google"
                onClick={() => handleOAuth('google')}
                aria-label="Sign up with Google"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="9" r="2" fill="#EA4335"></circle>
                  <circle cx="15" cy="9" r="2" fill="#4285F4"></circle>
                  <circle cx="9" cy="15" r="2" fill="#FBBC04"></circle>
                  <circle cx="15" cy="15" r="2" fill="#34A853"></circle>
                </svg>
              </button>
              <button
                type="button"
                className="oauth-btn facebook"
                onClick={() => handleOAuth('facebook')}
                aria-label="Sign up with Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="oauth-btn github"
                onClick={() => handleOAuth('github')}
                aria-label="Sign up with GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </button>
            </div>

            <p className="form-footer">
              Already have an account? <Link to="/login" className="link">Sign in</Link>
            </p>
          </form>
        </div>
      </div>

      <footer className="copyright">
        <p>&copy; 2026 Hexora. All rights reserved.</p>
      </footer>
    </div>
  );
}
