import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { scrapingDataService } from '../services/scrapingDataService';
import './AnalyticsView.scss';

const AnalyticsView = ({ loading: parentLoading }) => {
  const [marketData, setMarketData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [marketResult, categoriesResult] = await Promise.all([
        scrapingDataService.getMarketData('30d'),
        scrapingDataService.getDataCategories()
      ]);
      setMarketData(marketResult);
      setCategories(categoriesResult);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (parentLoading || loading) {
    return (
      <div className="analytics-view loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="analytics-view">
      <div className="page-header">
        <h1 className="page-title">Analytics</h1>
        <p className="page-subtitle">Deep insights into your scraping performance</p>
      </div>

      <div className="analytics-grid">
        <div className="chart-card full-width">
          <div className="chart-header">
            <h3 className="chart-title">30-Day Performance Trend</h3>
          </div>
          <div className="chart-container tall">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
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
                <Bar dataKey="requests" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="success" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="failed" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Data Categories</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1c1c1f',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    color: '#fafafa',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="category-legend">
            {categories.map((category, index) => (
              <div key={index} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: category.color }}></span>
                <span className="legend-label">{category.name}</span>
                <span className="legend-value">{(category.value / 1000).toFixed(0)}k</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Daily Averages</h3>
          </div>
          <div className="stats-vertical">
            <div className="stat-item">
              <span className="stat-label">Avg Requests/Day</span>
              <span className="stat-value">
                {(marketData.reduce((acc, curr) => acc + curr.requests, 0) / marketData.length).toFixed(0)}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Avg Success/Day</span>
              <span className="stat-value success">
                {(marketData.reduce((acc, curr) => acc + curr.success, 0) / marketData.length).toFixed(0)}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Avg Failed/Day</span>
              <span className="stat-value error">
                {(marketData.reduce((acc, curr) => acc + curr.failed, 0) / marketData.length).toFixed(0)}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Avg Data Points</span>
              <span className="stat-value">
                {(marketData.reduce((acc, curr) => acc + curr.dataPoints, 0) / marketData.length / 1000).toFixed(1)}k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
