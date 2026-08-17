import { User, Mail, Key, Bell, Shield } from 'lucide-react';
import './SettingsView.scss';

const SettingsView = ({ user }) => {
  return (
    <div className="settings-view">
      <div className="page-header">
        <h1 className="page-title">Account Settings</h1>
        <p className="page-subtitle">Manage your account preferences and security</p>
      </div>

      <div className="settings-grid">
        {/* Profile Section */}
        <div className="settings-card">
          <div className="card-header">
            <User size={20} />
            <h3 className="card-title">Profile Information</h3>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue={user?.name || 'Demo User'} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" defaultValue={user?.email || 'demo@example.com'} />
            </div>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>

        {/* Security Section */}
        <div className="settings-card">
          <div className="card-header">
            <Shield size={20} />
            <h3 className="card-title">Security</h3>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary">Update Password</button>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="settings-card">
          <div className="card-header">
            <Key size={20} />
            <h3 className="card-title">API Keys</h3>
          </div>
          <div className="card-content">
            <div className="api-key-item">
              <div className="key-info">
                <span className="key-name">Production Key</span>
                <code className="key-value">sk_live_••••••••••••••••</code>
              </div>
              <div className="key-actions">
                <button className="btn-icon-small">Copy</button>
                <button className="btn-icon-small danger">Revoke</button>
              </div>
            </div>
            <div className="api-key-item">
              <div className="key-info">
                <span className="key-name">Development Key</span>
                <code className="key-value">sk_test_••••••••••••••••</code>
              </div>
              <div className="key-actions">
                <button className="btn-icon-small">Copy</button>
                <button className="btn-icon-small danger">Revoke</button>
              </div>
            </div>
            <button className="btn btn-secondary">Generate New Key</button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="settings-card">
          <div className="card-header">
            <Bell size={20} />
            <h3 className="card-title">Notifications</h3>
          </div>
          <div className="card-content">
            <div className="toggle-item">
              <div className="toggle-label">
                <span className="toggle-title">Email Notifications</span>
                <span className="toggle-description">Receive email updates about your scraping jobs</span>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div className="toggle-label">
                <span className="toggle-title">Error Alerts</span>
                <span className="toggle-description">Get notified when scraping fails</span>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="toggle-item">
              <div className="toggle-label">
                <span className="toggle-title">Weekly Reports</span>
                <span className="toggle-description">Receive weekly summary reports</span>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
