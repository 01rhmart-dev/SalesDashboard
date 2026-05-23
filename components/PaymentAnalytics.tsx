'use client';

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const paymentBreakdownData = [
  { name: 'Card Payments', value: 45, amount: '$8,100' },
  { name: 'Cash Payments', value: 30, amount: '$5,400' },
  { name: 'Digital Wallet', value: 15, amount: '$2,700' },
  { name: 'Loyalty Points', value: 10, amount: '$1,800' },
];

const taxBreakdownData = [
  { category: 'Sales Tax', amount: 1250 },
  { category: 'VAT', amount: 890 },
  { category: 'Service Fee', amount: 450 },
];

const paymentMethodsChartData = [
  { method: 'Card', amount: 8100 },
  { method: 'Cash', amount: 5400 },
  { method: 'Digital', amount: 2700 },
  { method: 'Loyalty', amount: 1800 },
];

const colors = ['#3b7a8f', '#d4879f', '#5ba38a', '#d4a574'];

export default function PaymentAnalytics() {
  return (
    <div className="payment-section">
      <h2>Payment Analytics</h2>

      <div className="payment-grid">
        <div className="payment-card">
          <h3>Payment Method Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={paymentBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {paymentBreakdownData.map((entry, index) => (
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
          <div className="legend-items">
            {paymentBreakdownData.map((item, index) => (
              <div key={index} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="legend-text">{item.name}</span>
                <span className="legend-value">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-card">
          <h3>Payment Methods by Amount</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={paymentMethodsChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="method" stroke="var(--text-tertiary)" />
              <YAxis stroke="var(--text-tertiary)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid var(--border-color)`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="amount" fill="var(--chart-color-1)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="payment-card full-width">
          <h3>Tax Breakdown</h3>
          <div className="tax-table">
            {taxBreakdownData.map((item, index) => (
              <div key={index} className="tax-row">
                <span className="tax-category">{item.category}</span>
                <span className="tax-amount">${item.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="tax-row total">
              <span className="tax-category">Total Tax</span>
              <span className="tax-amount">
                ${taxBreakdownData.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-section {
          margin-bottom: 32px;
        }

        .payment-section h2 {
          margin: 0 0 20px 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .payment-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
        }

        .payment-card h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .payment-card.full-width {
          grid-column: 1 / -1;
        }

        .legend-items {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          min-width: 12px;
        }

        .legend-text {
          flex: 1;
          color: var(--text-primary);
        }

        .legend-value {
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .tax-table {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tax-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .tax-row.total {
          border-bottom: none;
          border-top: 2px solid var(--border-color);
          font-weight: 600;
          margin-top: 8px;
          padding-top: 16px;
        }

        .tax-category {
          color: var(--text-primary);
          font-weight: 500;
        }

        .tax-amount {
          color: var(--accent-teal);
          font-weight: 600;
        }

        @media (max-width: 1200px) {
          .payment-grid {
            grid-template-columns: 1fr;
          }

          .payment-card.full-width {
            grid-column: auto;
          }
        }

        @media (max-width: 768px) {
          .payment-section {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
}
