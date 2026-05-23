'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const repeatCustomersData = [
  { name: 'First Time', value: 45, percentage: '25%' },
  { name: 'Repeat (2-5x)', value: 89, percentage: '50%' },
  { name: 'Loyal (5+x)', value: 54, percentage: '25%' },
];

const loyaltyPointsData = [
  { name: 'John Doe', points: 2450, status: 'Gold' },
  { name: 'Sarah Smith', points: 1890, status: 'Silver' },
  { name: 'Mike Johnson', points: 1540, status: 'Silver' },
  { name: 'Emma Wilson', points: 980, status: 'Bronze' },
  { name: 'David Brown', points: 750, status: 'Bronze' },
];

const customerRetentionData = [
  { month: 'Jan', retention: 78 },
  { month: 'Feb', retention: 81 },
  { month: 'Mar', retention: 79 },
  { month: 'Apr', retention: 85 },
  { month: 'May', retention: 88 },
  { month: 'Jun', retention: 90 },
];

const customerMetrics = [
  { label: 'Total Customers', value: '1,248', icon: '👥' },
  { label: 'Avg Spend/Customer', value: '$145.30', icon: '💵' },
  { label: 'Customer Lifetime Value', value: '$2,890', icon: '💎' },
  { label: 'Churn Rate', value: '2.3%', icon: '📉' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Gold':
      return '#d4a574';
    case 'Silver':
      return '#5ba38a';
    case 'Bronze':
      return '#6b4423';
    default:
      return '#3b7a8f';
  }
};

export default function CustomerInsights() {
  return (
    <div className="customer-section">
      <h2>Customer Insights</h2>

      <div className="metrics-grid">
        {customerMetrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <span className="metric-icon">{metric.icon}</span>
            <p className="metric-label">{metric.label}</p>
            <p className="metric-value">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="insights-grid">
        <div className="insight-card">
          <h3>Customer Categories</h3>
          <div className="category-list">
            {repeatCustomersData.map((item, index) => (
              <div key={index} className="category-item">
                <div className="category-header">
                  <span className="category-name">{item.name}</span>
                  <span className="category-percentage">{item.percentage}</span>
                </div>
                <div className="category-bar">
                  <div
                    className="category-fill"
                    style={{
                      width: item.percentage,
                      backgroundColor:
                        index === 0 ? '#d4879f' : index === 1 ? '#3b7a8f' : '#5ba38a',
                    }}
                  />
                </div>
                <span className="category-count">{item.value} customers</span>
              </div>
            ))}
          </div>
        </div>

        <div className="insight-card">
          <h3>Top Loyalty Members</h3>
          <div className="loyalty-list">
            {loyaltyPointsData.map((customer, index) => (
              <div key={index} className="loyalty-item">
                <span className="loyalty-rank">#{index + 1}</span>
                <div className="loyalty-info">
                  <p className="loyalty-name">{customer.name}</p>
                  <p className="loyalty-status" style={{ color: getStatusColor(customer.status) }}>
                    {customer.status} Member
                  </p>
                </div>
                <span className="loyalty-points">{customer.points.toLocaleString()} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="insight-card full-width">
          <h3>Customer Retention Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={customerRetentionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="month" stroke="var(--text-tertiary)" />
              <YAxis stroke="var(--text-tertiary)" domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="retention"
                stroke="var(--chart-color-2)"
                strokeWidth={3}
                dot={{ fill: 'var(--chart-color-2)', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style jsx>{`
        .customer-section {
          margin-bottom: 32px;
        }

        .customer-section h2 {
          margin: 0 0 20px 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .metric-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: var(--card-shadow);
          text-align: center;
        }

        .metric-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 8px;
        }

        .metric-label {
          margin: 0 0 4px 0;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.5px;
        }

        .metric-value {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .insight-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
        }

        .insight-card h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .insight-card.full-width {
          grid-column: 1 / -1;
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .category-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-percentage {
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .category-bar {
          height: 8px;
          background-color: var(--bg-secondary);
          border-radius: 4px;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .category-count {
          font-size: 12px;
          color: var(--text-tertiary);
        }

        .loyalty-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .loyalty-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background-color: var(--bg-secondary);
          border-radius: 8px;
        }

        .loyalty-rank {
          font-weight: 600;
          color: var(--accent-teal);
          min-width: 28px;
          text-align: center;
        }

        .loyalty-info {
          flex: 1;
          min-width: 0;
        }

        .loyalty-name {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .loyalty-status {
          margin: 2px 0 0 0;
          font-size: 12px;
          font-weight: 500;
        }

        .loyalty-points {
          font-weight: 600;
          color: var(--accent-teal);
          font-size: 13px;
        }

        @media (max-width: 1200px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .metric-card {
            padding: 12px;
          }

          .metric-icon {
            font-size: 24px;
            margin-bottom: 6px;
          }

          .metric-value {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
