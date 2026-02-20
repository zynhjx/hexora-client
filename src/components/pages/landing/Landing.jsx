import './Landing.css';
// ParticleCanvas import removed
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  // Sample backend output object
  const sampleAuthOutput = {
    user: {
      id: 1,
      username: "demoUser",
      email: "demo@hexora.com"
    },
    token: "sample.jwt.token",
    isAuthenticated: true // Toggle this to false to simulate logged out
  };

  const isAuthenticated = sampleAuthOutput.isAuthenticated;

  useEffect(() => {
    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');

    // Add index CSS variable to feature cards for staggered animation
    const featureCards = document.querySelectorAll('.feature-card.reveal');
    featureCards.forEach((card, index) => {
      card.style.setProperty('--index', index);
    });

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements (show immediately if already passed)
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('active');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing">
      <header className="header">
        <div className="container">
          <a href="#hero" className="logo">
            <img className='logo-name' src="/hexora_name.png" alt="Hexora logo" />
          </a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>
          <div className="auth-links">
            {isAuthenticated ? (
              <Link to="/dashboard" className="dashboard-link">Go to Dashboard</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <span className="divider">|</span>
                <Link to="/register">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Master Cybersecurity, One Module at a Time</h1>
              <p className="hero-description">
                Learn real-world cybersecurity concepts through interactive challenges, quizzes, and hands-on puzzles. Build your skills at your own pace.
              </p>
              <div className="hero-buttons">
                <Link to={isAuthenticated ? "/dashboard" : "/register"} className="btn-primary">Get Started</Link>
                <a href="#features" className="btn-outline">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">What You'll Get</span>
              <h2>Everything You Need to Learn Cybersecurity</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Structured Learning Paths</h3>
                <p>Follow carefully designed modules that build your skills from beginner to advanced levels.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3>Hands-On Challenges</h3>
                <p>Practice with real-world scenarios and interactive puzzles that test your knowledge.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3>Track Your Progress</h3>
                <p>Monitor your learning journey with detailed analytics and achievement tracking.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Security Focused</h3>
                <p>Learn essential cybersecurity concepts including encryption, threats, and defense strategies.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3>Bite-Sized Modules</h3>
                <p>Learn at your own pace with focused, manageable lessons that fit your schedule.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Earn Achievements</h3>
                <p>Unlock badges and certifications as you complete challenges and master new skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="pricing">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Pricing</span>
              <h2>Flexible Plans Coming Soon</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card reveal">
                <h3>Free Starter</h3>
                <p>Access beginner modules and sample challenges while we finalize plans.</p>
              </div>
              <div className="feature-card reveal">
                <h3>Pro Learner</h3>
                <p>Unlock advanced labs, guided paths, and achievement tracking.</p>
              </div>
              <div className="feature-card reveal">
                <h3>Team Access</h3>
                <p>Invite your cohort with shared progress, reporting, and mentoring.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="about">
          <div className="container">
            <div className="cta-content reveal">
              <span className="eyebrow">Ready to Begin?</span>
              <h2>Start Your Cybersecurity Journey Today</h2>
              <p>Explore interactive challenges and hands-on modules designed to teach you cybersecurity from the ground up.</p>
              <Link to={isAuthenticated ? "/dashboard" : "/register"} className="btn-primary">Get Started for Free</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">Hexora</div>
              <p>Master cybersecurity through interactive learning.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Platform</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
                <Link to="/login">Sign In</Link>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Tutorials</a>
                <a href="#">Community</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Hexora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
