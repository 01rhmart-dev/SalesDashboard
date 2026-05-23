'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface KPICardsProps {
  dateRange: string;
}

const mockKPIData = [
  {
    id: 'total-sales',
    label: 'Total Sales',
    value: '$18,234',
    trend: 12.5,
    comparison: 'vs last period',
    sparklineData: [
      { value: 40 },
      { value: 30 },
      { value: 35 },
      { value: 50 },
      { value: 45 },
      { value: 55 },
      { value: 60 },
    ],
    icon: '💰',
  },
  {
    id: 'total-orders',
    label: 'Total Orders',
    value: '456',
    trend: 8.3,
    comparison: 'vs last period',
    sparklineData: [
      { value: 20 },
      { value: 25 },
      { value: 22 },
      { value: 30 },
      { value: 28 },
      { value: 35 },
      { value: 40 },
    ],
    icon: '📦',
  },
  {
    id: 'avg-order-value',
    label: 'Average Order Value',
    value: '$39.95',
    trend: 5.2,
    comparison: 'vs last period',
    sparklineData: [
      { value: 35 },
      { value: 40 },
      { value: 38 },
      { value: 45 },
      { value: 42 },
      { value: 50 },
      { value: 55 },
    ],
    icon: '📊',
  },
  {
    id: 'discounts-given',
    label: 'Discounts Given',
    value: '$2,340',
    trend: -3.1,
    comparison: 'vs last period',
    sparklineData: [
      { value: 50 },
      { value: 40 },
      { value: 45 },
      { value: 35 },
      { value: 40 },
      { value: 30 },
      { value: 25 },
    ],
    icon: '🏷️',
  },
  {
    id: 'tax-collected',
    label: 'Tax Collected',
    value: '$1,823.40',
    trend: 12.5,
    comparison: 'vs last period',
    sparklineData: [
      { value: 30 },
      { value: 35 },
      { value: 40 },
      { value: 45 },
      { value: 50 },
      { value: 55 },
      { value: 60 },
    ],
    icon: '🧾',
  },
  {
    id: 'loyalty-points',
    label: 'Loyalty Points Earned',
    value: '2,340',
    trend: 20.1,
    comparison: 'vs last period',
    sparklineData: [
      { value: 20 },
      { value: 30 },
      { value: 25 },
      { value: 40 },
      { value: 35 },
      { value: 50 },
      { value: 60 },
    ],
    icon: '⭐',
  },
  {
    id: 'refunds',
    label: 'Refunds',
    value: '$340.00',
    trend: -2.4,
    comparison: 'vs last period',
    sparklineData: [
      { value: 40 },
      { value: 35 },
      { value: 38 },
      { value: 30 },
      { value: 32 },
      { value: 28 },
      { value: 25 },
    ],
    icon: '↩️',
  },
  {
    id: 'best-product',
    label: 'Best Selling Product',
    value: 'Chocolate Cake',
    trend: 15.8,
    comparison: 'sales growth',
    sparklineData: [
      { value: 25 },
      { value: 35 },
      { value: 30 },
      { value: 45 },
      { value: 50 },
      { value: 60 },
      { value: 70 },
    ],
    icon: '🍰',
  },
];

export default function KPICards({ dateRange }: KPICardsProps) {
  return (
    <div className="kpi-section">
      <div className="kpi-grid">
        {mockKPIData.map((kpi) => (
          <div key={kpi.id} className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-icon">{kpi.icon}</span>
              <div className="kpi-trend-badge" data-positive={kpi.trend > 0}>
                {kpi.trend > 0 ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {Math.abs(kpi.trend)}%
              </div>
            </div>

            <div className="kpi-content">
              <h3 className="kpi-label">{kpi.label}</h3>
              <p className="kpi-value">{kpi.value}</p>
              <p className="kpi-comparison">{kpi.comparison}</p>
            </div>

            <div className="kpi-sparkline">
              <ResponsiveContainer width="100%" height={40}>
                <LineChart data={kpi.sparklineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--accent-teal)"
                    dot={false}
                    strokeWidth={2}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .kpi-section {
          margin-bottom: 32px;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .kpi-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
        }

        .kpi-card:hover {
          box-shadow: var(--card-hover-shadow);
          transform: translateY(-2px);
        }

        .kpi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .kpi-icon {
          font-size: 28px;
        }

        .kpi-trend-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          background-color: var(--bg-secondary);
        }

        .kpi-trend-badge[data-positive='true'] {
          color: var(--accent-success);
        }

        .kpi-trend-badge[data-positive='false'] {
          color: var(--accent-danger);
        }

        .kpi-content {
          margin-bottom: 12px;
        }

        .kpi-label {
          margin: 0 0 4px 0;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.5px;
        }

        .kpi-value {
          margin: 0 0 2px 0;
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .kpi-comparison {
          margin: 0;
          font-size: 12px;
          color: var(--text-tertiary);
        }

        .kpi-sparkline {
          margin-top: 8px;
        }

        @media (max-width: 1400px) {
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .kpi-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .kpi-card {
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}
