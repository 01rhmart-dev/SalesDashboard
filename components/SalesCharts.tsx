'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface SalesChartsProps {
  dateRange: string;
}

const dailySalesData = [
  { date: 'Mon', sales: 4000, revenue: 2400 },
  { date: 'Tue', sales: 3000, revenue: 1398 },
  { date: 'Wed', sales: 2000, revenue: 12000 },
  { date: 'Thu', sales: 2780, revenue: 3908 },
  { date: 'Fri', sales: 1890, revenue: 4800 },
  { date: 'Sat', sales: 2390, revenue: 3800 },
  { date: 'Sun', sales: 3490, revenue: 4300 },
];

const weeklyRevenueData = [
  { week: 'Week 1', revenue: 12000 },
  { week: 'Week 2', revenue: 15000 },
  { week: 'Week 3', revenue: 13500 },
  { week: 'Week 4', revenue: 18000 },
];

const paymentMethodData = [
  { name: 'Card', value: 45, color: '#3b7a8f' },
  { name: 'Cash', value: 30, color: '#d4879f' },
  { name: 'Digital', value: 15, color: '#5ba38a' },
  { name: 'Loyalty', value: 10, color: '#d4a574' },
];

const topProductsData = [
  { name: 'Chocolate Cake', sales: 450 },
  { name: 'Vanilla Cake', sales: 380 },
  { name: 'Carrot Cake', sales: 320 },
  { name: 'Cheesecake', sales: 280 },
  { name: 'Brownies', sales: 250 },
];

const hourlyHeatmapData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i.toString().padStart(2, '0')}:00`,
  sales: Math.floor(Math.random() * 100 + 20),
}));

export default function SalesCharts({ dateRange }: SalesChartsProps) {
  return (
    <div className="charts-section">
      <div className="charts-grid">
        {/* Daily Sales Chart */}
        <div className="chart-card">
          <h3>Daily Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-tertiary)" />
              <YAxis stroke="var(--text-tertiary)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="var(--chart-color-1)"
                strokeWidth={2}
                dot={{ fill: 'var(--chart-color-1)', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--chart-color-2)"
                strokeWidth={2}
                dot={{ fill: 'var(--chart-color-2)', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue Chart */}
        <div className="chart-card">
          <h3>Weekly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="week" stroke="var(--text-tertiary)" />
              <YAxis stroke="var(--text-tertiary)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="revenue" fill="var(--chart-color-4)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Methods Pie Chart */}
        <div className="chart-card">
          <h3>Payment Methods</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={paymentMethodData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name} ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {paymentMethodData.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
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
        </div>

        {/* Top Products Chart */}
        <div className="chart-card">
          <h3>Top Selling Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={topProductsData}
              layout="vertical"
              margin={{ left: 100, right: 20, top: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis type="number" stroke="var(--text-tertiary)" />
              <YAxis dataKey="name" type="category" stroke="var(--text-tertiary)" width={90} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="sales" fill="var(--chart-color-3)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Sales Heatmap */}
        <div className="chart-card full-width">
          <h3>Hourly Sales Heatmap</h3>
          <div className="heatmap-container">
            {hourlyHeatmapData.map((item, index) => (
              <div
                key={index}
                className="heatmap-cell"
                style={{
                  backgroundColor: `rgba(59, 122, 143, ${item.sales / 100})`,
                }}
                title={`${item.hour}: ${item.sales} sales`}
              >
                <span className="heatmap-label">{item.hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .charts-section {
          margin-bottom: 32px;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .chart-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
          transition: all 0.3s ease;
        }

        .chart-card:hover {
          box-shadow: var(--card-hover-shadow);
        }

        .chart-card h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .chart-card.full-width {
          grid-column: 1 / -1;
        }

        .heatmap-container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 8px;
        }

        .heatmap-cell {
          aspect-ratio: 1;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          min-height: 50px;
        }

        .heatmap-cell:hover {
          transform: scale(1.05);
          box-shadow: var(--card-hover-shadow);
        }

        .heatmap-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 1200px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .charts-section {
            margin-bottom: 24px;
          }

          .charts-grid {
            gap: 16px;
          }

          .chart-card {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
