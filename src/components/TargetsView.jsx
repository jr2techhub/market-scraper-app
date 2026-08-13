import { useState, useEffect } from 'react';
import { Globe, CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { scrapingDataService } from '../services/scrapingDataService';
import './TargetsView.scss';

const TargetsView = ({ loading: parentLoading }) => {
  const [targets, setTargets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTargets();
  }, []);

  const loadTargets = async () => {
    try {
      const result = await scrapingDataService.getTargetPerformance();
      setTargets(result);
    } catch (error) {
      console.error('Failed to load targets:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="status-active" />;
      case 'warning':
        return <AlertTriangle size={16} className="status-warning" />;
      case 'error':
        return <XCircle size={16} className="status-error" />;
      default:
        return <Clock size={16} className="status-pending" />;
    }
  };

  if (parentLoading || loading) {
    return (
      <div className="targets-view loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="targets-view">
      <div className="page-header">
        <h1 className="page-title">Scraping Targets</h1>
        <p className="page-subtitle">Manage and monitor your target websites</p>
      </div>

      <div className="targets-table-container">
        <table className="targets-table">
          <thead>
            <tr>
              <th>Target</th>
              <th>Status</th>
              <th>Requests</th>
              <th>Success Rate</th>
              <th>Avg Response</th>
              <th>Last Scrape</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {targets.map((target) => (
              <tr key={target.id}>
                <td>
                  <div className="target-info">
                    <div className="target-icon">
                      <Globe size={20} />
                    </div>
                    <div className="target-details">
                      <span className="target-name">{target.name}</span>
                      <span className="target-url">{target.url}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="status-badge">
                    {getStatusIcon(target.status)}
                    <span>{target.status}</span>
                  </div>
                </td>
                <td>{target.requests.toLocaleString()}</td>
                <td>
                  <div className="success-rate-bar">
                    <div 
                      className="rate-fill" 
                      style={{ 
                        width: `${target.successRate}%`,
                        backgroundColor: target.successRate >= 90 ? '#10b981' : target.successRate >= 70 ? '#f59e0b' : '#ef4444'
                      }}
                    ></div>
                    <span>{target.successRate}%</span>
                  </div>
                </td>
                <td>{target.avgResponseTime}s</td>
                <td>{new Date(target.lastScrape).toLocaleString()}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-icon">View</button>
                    <button className="btn-icon">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TargetsView;
