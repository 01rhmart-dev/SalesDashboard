'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const bestSellingData = [
  { product: 'Chocolate Cake', sales: 450 },
  { product: 'Vanilla Cake', sales: 380 },
  { product: 'Carrot Cake', sales: 320 },
];

const mostProfitableData = [
  { product: 'Cheesecake', profit: 2400 },
  { product: 'Chocolate Cake', profit: 2200 },
  { product: 'Brownies', profit: 1800 },
];

const lowPerformingData = [
  { product: 'Coconut Tart', sales: 45 },
  { product: 'Pistachio Cake', sales: 38 },
  { product: 'Matcha Cookies', sales: 32 },
];

const revenueRankingData = [
  { rank: 1, product: 'Chocolate Cake', revenue: 4500 },
  { rank: 2, product: 'Cheesecake', revenue: 3800 },
  { rank: 3, product: 'Vanilla Cake', revenue: 3200 },
  { rank: 4, product: 'Carrot Cake', revenue: 2800 },
  { rank: 5, product: 'Brownies', revenue: 2400 },
];

export default function ProductPerformance() {
  return (
    <div className="product-section">
      <h2>Product Performance</h2>

      <div className="product-grid">
        <div className="product-card">
          <h3>Best Selling Cakes</h3>
          <div className="product-list">
            {bestSellingData.map((item, index) => (
              <div key={index} className="product-item">
                <span className="product-rank">#{index + 1}</span>
                <span className="product-name">{item.product}</span>
                <span className="product-metric">{item.sales} sales</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-card">
          <h3>Most Profitable Items</h3>
          <div className="product-list">
            {mostProfitableData.map((item, index) => (
              <div key={index} className="product-item">
                <span className="product-rank">#{index + 1}</span>
                <span className="product-name">{item.product}</span>
                <span className="product-metric">${item.profit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-card">
          <h3>Low Performing Products</h3>
          <div className="product-list">
            {lowPerformingData.map((item, index) => (
              <div key={index} className="product-item warning">
                <span className="product-rank">⚠️</span>
                <span className="product-name">{item.product}</span>
                <span className="product-metric">{item.sales} sales</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="revenue-ranking">
        <h3>Product Revenue Ranking</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueRankingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="product" stroke="var(--text-tertiary)" />
            <YAxis stroke="var(--text-tertiary)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-primary)',
                border: `1px solid var(--border-color)`,
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="revenue" fill="var(--chart-color-5)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <style jsx>{`
        .product-section {
          margin-bottom: 32px;
        }

        .product-section h2 {
          margin: 0 0 20px 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .product-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: var(--card-shadow);
        }

        .product-card h3 {
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .product-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background-color: var(--bg-secondary);
          border-radius: 6px;
          font-size: 13px;
        }

        .product-item.warning {
          background-color: rgba(201, 117, 117, 0.1);
        }

        .product-rank {
          font-weight: 600;
          color: var(--accent-teal);
          min-width: 32px;
          text-align: center;
        }

        .product-name {
          flex: 1;
          color: var(--text-primary);
          font-weight: 500;
        }

        .product-metric {
          color: var(--text-tertiary);
          font-weight: 500;
          min-width: 70px;
          text-align: right;
        }

        .revenue-ranking {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
        }

        .revenue-ranking h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 1200px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
