import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap, LayoutDashboard, Globe, BarChart3, Settings, LogOut, 
  Menu, X, Bell, Search, TrendingUp, Activity, Database, AlertCircle 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { scrapingDataService } from '../../services/scrapingDataService';
import DashboardHome from '../components/DashboardHome';
import TargetsView from '../components/TargetsView';
import AnalyticsView from '../components/AnalyticsView';
import SettingsView from '../components/SettingsView';
import './Dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const data = await scrapingDataService.getDashboardData();
      setDashboardData(data);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'targets', label: 'Targets', icon: Globe },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardHome data={dashboardData} loading={loading} />;
      case 'targets':
        return <TargetsView loading={loading} />;
      case 'analytics':
        return <AnalyticsView loading={loading} />;
      case 'settings':
        return <SettingsView user={user} />;
      default:
        return <DashboardHome data={dashboardData} loading={loading} />;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <Zap size={24} className="logo-icon" />
            {sidebarOpen && <span className="logo-text">Scrape<span className="text-gradient">Hub</span></span>}
          </Link>
          <button 
            className="sidebar-toggle desktop-only"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="top-header">
          <div className="header-left">
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
            
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
              />
            </div>
          </div>

          <div className="header-right">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            
            <div className="user-menu">
              <div className="user-avatar">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <span className="user-name">{user?.name || 'User'}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
