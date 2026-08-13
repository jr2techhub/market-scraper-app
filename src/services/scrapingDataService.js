// Mock data service for scraping platform metrics
// Returns fake market data obtained from scraping

export const scrapingDataService = {
  // Get dashboard overview data
  async getDashboardData() {
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    return {
      totalRequests: 15847,
      successfulScrapes: 14923,
      failedScrapes: 924,
      successRate: 94.17,
      dataPoints: 2847563,
      activeTargets: 47,
    };
  },

  // Get market data over time
  async getMarketData(timeframe = '7d') {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const now = new Date();
    const data = [];
    const days = timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 24;
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        requests: Math.floor(Math.random() * 2000) + 1500,
        success: Math.floor(Math.random() * 1800) + 1400,
        failed: Math.floor(Math.random() * 200) + 50,
        dataPoints: Math.floor(Math.random() * 50000) + 30000,
      });
    }
    
    return data;
  },

  // Get target websites performance
  async getTargetPerformance() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const targets = [
      { id: 1, name: 'E-commerce Site A', url: 'shop-example.com', status: 'active' },
      { id: 2, name: 'News Portal B', url: 'news-portal.com', status: 'active' },
      { id: 3, name: 'Social Platform C', url: 'social-net.com', status: 'warning' },
      { id: 4, name: 'Forum D', url: 'community-forum.com', status: 'active' },
      { id: 5, name: 'Marketplace E', url: 'market-place.com', status: 'error' },
      { id: 6, name: 'Blog Network F', url: 'blog-network.com', status: 'active' },
    ];
    
    return targets.map(target => ({
      ...target,
      requests: Math.floor(Math.random() * 3000) + 500,
      successRate: (Math.random() * 15 + 85).toFixed(2),
      avgResponseTime: (Math.random() * 2 + 0.5).toFixed(2),
      lastScrape: new Date(Date.now() - Math.random() * 3600000).toISOString(),
    }));
  },

  // Get scraping errors
  async getRecentErrors() {
    await new Promise((resolve) => setTimeout(resolve, 400));
    
    const errors = [
      { id: 1, type: 'Timeout', target: 'shop-example.com', message: 'Request timeout after 30s', timestamp: new Date(Date.now() - 300000).toISOString() },
      { id: 2, type: 'CAPTCHA', target: 'social-net.com', message: 'CAPTCHA detected', timestamp: new Date(Date.now() - 600000).toISOString() },
      { id: 3, type: 'Blocked', target: 'market-place.com', message: 'IP blocked by target server', timestamp: new Date(Date.now() - 900000).toISOString() },
      { id: 4, type: 'Parse Error', target: 'news-portal.com', message: 'Failed to parse HTML structure', timestamp: new Date(Date.now() - 1200000).toISOString() },
      { id: 5, type: 'Timeout', target: 'market-place.com', message: 'Request timeout after 30s', timestamp: new Date(Date.now() - 1500000).toISOString() },
    ];
    
    return errors;
  },

  // Get data categories distribution
  async getDataCategories() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return [
      { name: 'Products', value: 45000, color: '#8b5cf6' },
      { name: 'Prices', value: 38000, color: '#06b6d4' },
      { name: 'Reviews', value: 32000, color: '#10b981' },
      { name: 'Articles', value: 28000, color: '#f59e0b' },
      { name: 'Profiles', value: 22000, color: '#ec4899' },
      { name: 'Other', value: 15000, color: '#6366f1' },
    ];
  },
};
