import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Globe, Shield } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import './Landing.scss';

const Landing = () => {
  const { t } = useTranslation();

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
            <a href="#features">{t('landing.features')}</a>
            <a href="#pricing">{t('landing.pricing')}</a>
            <a href="#about">{t('landing.about')}</a>
          </div>
          
          <div className="nav-auth">
            <LanguageSelector />
            <Link to="/login" className="btn btn-ghost">{t('landing.login')}</Link>
            <Link to="/register" className="btn btn-primary">{t('landing.getStarted')}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span>
              {t('landing.subtitle')}
            </div>
            
            <h1 className="hero-title">
              {t('landing.title')}<br />
              <span className="text-gradient">Any Website</span>
            </h1>
            
            <p className="hero-description">
              {t('landing.description')}
            </p>
            
            <div className="hero-cta">
              <Link to="/register" className="btn btn-primary btn-lg">
                {t('landing.getStarted')}
                <Zap size={20} />
              </Link>
              <a href="#demo" className="btn btn-secondary btn-lg">
                {t('landing.viewDemo')}
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
              {t('landing.featuresTitle')}<br />
              <span className="text-gradient">{t('landing.featuresSubtitle')}</span>
            </h2>
            <p className="section-description">
              {t('landing.description')}
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={32} />
              </div>
              <h3 className="feature-title">{t('landing.feature1Title')}</h3>
              <p className="feature-description">
                {t('landing.feature1Desc')}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={32} />
              </div>
              <h3 className="feature-title">{t('landing.feature2Title')}</h3>
              <p className="feature-description">
                {t('landing.feature2Desc')}
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">{t('landing.feature3Title')}</h3>
              <p className="feature-description">
                {t('landing.feature3Desc')}
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
              {t('landing.footerTagline')}
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('nav.product')}</h4>
              <a href="#features">{t('nav.features')}</a>
              <a href="#pricing">{t('nav.pricing')}</a>
              <a href="#api">{t('nav.api')}</a>
            </div>
            <div className="footer-column">
              <h4>{t('nav.company')}</h4>
              <a href="#about">{t('nav.about')}</a>
              <a href="#blog">{t('nav.blog')}</a>
              <a href="#careers">{t('nav.careers')}</a>
            </div>
            <div className="footer-column">
              <h4>{t('nav.support')}</h4>
              <a href="#docs">{t('nav.documentation')}</a>
              <a href="#help">{t('nav.helpCenter')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 ScrapeHub. All rights reserved.</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="container newsletter-container">
            <div className="newsletter-content">
              <h3>{t('newsletter.title')}</h3>
              <p>{t('newsletter.subtitle')}</p>
            </div>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')} 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
