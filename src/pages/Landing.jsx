import { Link } from 'react-router-dom';
import { Zap, BarChart3, Globe, Shield } from 'lucide-react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <Zap size={28} className="logo-icon" />
            <span className="logo-text">Scrape<span className="text-gradient">Hub</span></span>
          </Link>
          
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          
          <div className="nav-auth">
            <Link to="/login" className="btn btn-ghost">Login</Link>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              Powerful Web Scraping Platform
            </div>
            
            <h1 className="hero-title">
              Extract Data from<br />
              <span className="text-gradient">Any Website</span>
            </h1>
            
            <p className="hero-description">
              Automate your data collection with our intelligent scraping platform. 
              Get structured data from any website with just a few clicks.
            </p>
            
            <div className="hero-cta">
              <Link to="/register" className="btn btn-primary btn-lg">
                Start Free Trial
                <Zap size={20} />
              </Link>
              <a href="#demo" className="btn btn-secondary btn-lg">
                View Demo
              </a>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2.8M+</span>
                <span className="stat-label">Data Points Daily</span>
              </div>
              <div className="stat">
                <span className="stat-value">99.9%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">Enterprise Clients</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-header">
                <div className="visual-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="visual-title">Live Scraping Dashboard</span>
              </div>
              <div className="visual-content">
                <div className="metric-row">
                  <span className="metric-label">Requests</span>
                  <span className="metric-value">1,847</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Success Rate</span>
                  <span className="metric-value success">94.2%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Data Extracted</span>
                  <span className="metric-value">284 KB</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-bg-glow"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Everything you need for<br />
              <span className="text-gradient">web scraping</span>
            </h2>
            <p className="section-description">
              Our platform provides all the tools you need to extract, process, and analyze web data at scale.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={32} />
              </div>
              <h3 className="feature-title">Universal Scraping</h3>
              <p className="feature-description">
                Scrape any website regardless of complexity. We handle JavaScript rendering, CAPTCHAs, and anti-bot measures.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3 className="feature-title">Real-time Analytics</h3>
              <p className="feature-description">
                Monitor your scraping jobs with detailed analytics and insights. Track success rates, response times, and more.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">Proxy Network</h3>
              <p className="feature-description">
                Access our global proxy network with millions of IPs. Rotate automatically to avoid detection and blocking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <Zap size={24} className="logo-icon" />
              <span className="logo-text">Scrape<span className="text-gradient">Hub</span></span>
            </Link>
            <p className="footer-tagline">
              Professional web scraping infrastructure for modern businesses.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#api">API</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#docs">Documentation</a>
              <a href="#help">Help Center</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 ScrapeHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
