'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const discountTypesData = [
  { type: 'Percentage Off', value: 45, amount: '$5,400' },
  { type: 'Fixed Amount', value: 30, amount: '$3,600' },
  { type: 'Loyalty Redemption', value: 15, amount: '$1,800' },
  { type: 'Bundle Deal', value: 10, amount: '$1,200' },
];

const discountImpactData = [
  { period: 'Week 1', discount: 2400, profit: 9400 },
  { period: 'Week 2', discount: 1398, profit: 6200 },
  { period: 'Week 3', discount: 2800, profit: 8300 },
  { period: 'Week 4', discount: 3908, profit: 7400 },
];

const discountStats = [
  { label: 'Total Discounts Given', value: '$12,000', icon: '🏷️' },
  { label: 'Avg Discount/Order', value: '8.5%', icon: '📊' },
  { label: 'Loyalty Points Redeemed', value: '45,320', icon: '⭐' },
  { label: 'Discount Impact on Revenue', value: '-4.2%', icon: '📉' },
];

const colors = ['#3b7a8f', '#d4879f', '#5ba38a', '#d4a574'];

export default function DiscountAnalytics() {
  return (
    <div className="discount-section">
      <h2>Discount Analytics</h2>

      <div className="discount-stats-grid">
        {discountStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-icon">{stat.icon}</span>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="discount-charts-grid">
        <div className="discount-card">
          <h3>Discount Types Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={discountTypesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {discountTypesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="discount-legend">
            {discountTypesData.map((item, index) => (
              <div key={index} className="discount-legend-item">
                <span
                  className="discount-legend-color"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="discount-legend-text">{item.type}</span>
                <span className="discount-legend-value">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="discount-card full-width">
          <h3>Discount Impact on Profit</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={discountImpactData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="period" stroke="var(--text-tertiary)" />
              <YAxis stroke="var(--text-tertiary)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="discount" fill="var(--accent-danger)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="profit" fill="var(--chart-color-2)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="discount-insights">
        <div className="insight-box">
          <h4>Key Insights</h4>
          <ul>
            <li>Percentage-based discounts drive 45% of total discount volume</li>
            <li>Loyalty redemptions account for $1,800 in customer value</li>
            <li>Discounts increase average order value by 12%</li>
            <li>Bundle deals have 3.2x higher profit margin</li>
          </ul>
        </div>
        <div className="insight-box">
          <h4>Recommendations</h4>
          <ul>
            <li>Increase loyalty redemption options to boost retention</li>
            <li>Focus on bundle deals for higher margins</li>
            <li>Cap percentage discounts to maximum 15%</li>
            <li>Launch time-limited promotional events</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .discount-section {
          margin-bottom: 32px;
        }

        .discount-section h2 {
          margin: 0 0 20px 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .discount-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: var(--card-shadow);
          text-align: center;
        }

        .stat-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 8px;
        }

        .stat-label {
          margin: 0 0 4px 0;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.5px;
        }

        .stat-value {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .discount-charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .discount-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
        }

        .discount-card h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .discount-card.full-width {
          grid-column: 1 / -1;
        }

        .discount-legend {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .discount-legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .discount-legend-color {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          min-width: 12px;
        }

        .discount-legend-text {
          flex: 1;
          color: var(--text-primary);
        }

        .discount-legend-value {
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .discount-insights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .insight-box {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
        }

        .insight-box h4 {
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .insight-box ul {
          margin: 0;
          padding-left: 20px;
        }

        .insight-box li {
          margin: 8px 0;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1200px) {
          .discount-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .discount-charts-grid {
            grid-template-columns: 1fr;
          }

          .discount-insights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .discount-stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .stat-card {
            padding: 12px;
          }

          .discount-section {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
}
