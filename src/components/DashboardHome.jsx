import { TrendingUp, Activity, Database, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { scrapingDataService } from '../services/scrapingDataService';
import { useState, useEffect } from 'react';
import './DashboardHome.scss';

const StatCard = ({ icon: Icon, label, value, trend, color }) => (
  <div className="stat-card">
    <div className="stat-header">
      <div className={`stat-icon ${color}`}>
        <Icon size={20} />
      </div>
      {trend && (
        <span className={`stat-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
          {trend >= 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const DashboardHome = ({ data, loading }) => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    loadMarketData();
  }, []);

  const loadMarketData = async () => {
    try {
      const result = await scrapingDataService.getMarketData('7d');
      setMarketData(result);
    } catch (error) {
      console.error('Failed to load market data:', error);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-home loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      <div className="page-header">
        <h1 className="page-title">Dashboard Overview</h1>
        <p className="page-subtitle">Monitor your scraping activities and performance metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          icon={Activity}
          label="Total Requests"
          value={data?.totalRequests.toLocaleString() || '0'}
          trend={12.5}
          color="purple"
        />
        <StatCard
          icon={TrendingUp}
          label="Successful Scrapes"
          value={data?.successfulScrapes.toLocaleString() || '0'}
          trend={8.2}
          color="green"
        />
        <StatCard
          icon={Database}
          label="Data Points"
          value={(data?.dataPoints / 1000000).toFixed(2) + 'M' || '0'}
          trend={23.1}
          color="cyan"
        />
        <StatCard
          icon={AlertCircle}
          label="Failed Scrapes"
          value={data?.failedScrapes.toLocaleString() || '0'}
          trend={-5.4}
          color="red"
        />
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card large">
          <div className="chart-header">
            <h3 className="chart-title">Requests Over Time</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis 
                  dataKey="date" 
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value/1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1c1c1f',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    color: '#fafafa',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRequests)"
                />
                <Area
                  type="monotone"
                  dataKey="success"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSuccess)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Success Rate</h3>
          </div>
          <div className="success-rate-display">
            <div className="rate-circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="3"
                />
                <path
                  className="circle"
                  strokeDasharray={`${data?.successRate || 0}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                />
              </svg>
              <div className="rate-value">{data?.successRate.toFixed(1)}%</div>
            </div>
            <p className="rate-description">Overall success rate across all targets</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="info-section">
        <div className="info-card">
          <h4 className="info-title">Active Targets</h4>
          <p className="info-value">{data?.activeTargets || 0} websites being monitored</p>
        </div>
        <div className="info-card">
          <h4 className="info-title">Data Quality</h4>
          <p className="info-value">High - 98.5% accuracy rate</p>
        </div>
        <div className="info-card">
          <h4 className="info-title">Last Update</h4>
          <p className="info-value">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
