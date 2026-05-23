'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

const mockOrders = [
  {
    id: 'REC-001',
    customerId: 'CUST-123',
    source: 'In-store',
    date: '2024-05-23',
    diningOption: 'Takeaway',
    amount: '$45.99',
    paymentType: 'Card',
    status: 'Completed',
  },
  {
    id: 'REC-002',
    customerId: 'CUST-124',
    source: 'Online',
    date: '2024-05-23',
    diningOption: 'Delivery',
    amount: '$78.50',
    paymentType: 'Card',
    status: 'Processing',
  },
  {
    id: 'REC-003',
    customerId: 'CUST-125',
    source: 'In-store',
    date: '2024-05-22',
    diningOption: 'Dine-in',
    amount: '$120.00',
    paymentType: 'Cash',
    status: 'Completed',
  },
  {
    id: 'REC-004',
    customerId: 'CUST-126',
    source: 'Phone',
    date: '2024-05-22',
    diningOption: 'Pickup',
    amount: '$65.30',
    paymentType: 'Card',
    status: 'Pending',
  },
  {
    id: 'REC-005',
    customerId: 'CUST-127',
    source: 'Online',
    date: '2024-05-22',
    diningOption: 'Delivery',
    amount: '$92.75',
    paymentType: 'Digital',
    status: 'Completed',
  },
];

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof mockOrders)[0];
    direction: 'asc' | 'desc';
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'Processing':
        return 'status-processing';
      case 'Pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortConfig) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = sortedOrders.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  const handleSort = (key: keyof (typeof mockOrders)[0]) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const SortIcon = ({ columnKey }: { columnKey: keyof (typeof mockOrders)[0] }) => {
    if (sortConfig?.key !== columnKey) return <div className="sort-spacer" />;
    return sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <div className="orders-section">
      <div className="section-header">
        <h2>Recent Orders</h2>
        <div className="search-box-orders">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search receipt or customer..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input-orders"
          />
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>
                <button onClick={() => handleSort('id')} className="sort-button">
                  Receipt #
                  <SortIcon columnKey="id" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('customerId')} className="sort-button">
                  Customer ID
                  <SortIcon columnKey="customerId" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('source')} className="sort-button">
                  Source
                  <SortIcon columnKey="source" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('date')} className="sort-button">
                  Date
                  <SortIcon columnKey="date" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('diningOption')} className="sort-button">
                  Dining Option
                  <SortIcon columnKey="diningOption" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('amount')} className="sort-button">
                  Amount
                  <SortIcon columnKey="amount" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('paymentType')} className="sort-button">
                  Payment
                  <SortIcon columnKey="paymentType" />
                </button>
              </th>
              <th>
                <button onClick={() => handleSort('status')} className="sort-button">
                  Status
                  <SortIcon columnKey="status" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id}>
                <td className="receipt-id">{order.id}</td>
                <td>{order.customerId}</td>
                <td>{order.source}</td>
                <td>{order.date}</td>
                <td>{order.diningOption}</td>
                <td className="amount">{order.amount}</td>
                <td>{order.paymentType}</td>
                <td>
                  <span className={`status-badge ${getStatusBadgeClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages} ({sortedOrders.length} total)
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .orders-section {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          margin-bottom: 32px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .section-header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .search-box-orders {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-tertiary);
        }

        .search-input-orders {
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 13px;
          min-width: 200px;
        }

        .search-input-orders::placeholder {
          color: var(--text-tertiary);
        }

        .table-container {
          overflow-x: auto;
        }

        .orders-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .orders-table thead {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .orders-table th {
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .sort-button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          transition: color 0.2s;
        }

        .sort-button:hover {
          color: var(--accent-teal);
        }

        .sort-spacer {
          width: 16px;
          display: inline-block;
        }

        .orders-table tbody tr {
          border-bottom: 1px solid var(--border-color);
          transition: background-color 0.2s;
        }

        .orders-table tbody tr:hover {
          background-color: var(--bg-secondary);
        }

        .orders-table td {
          padding: 12px 16px;
          color: var(--text-secondary);
        }

        .receipt-id {
          font-weight: 600;
          color: var(--text-primary);
        }

        .amount {
          font-weight: 600;
          color: var(--accent-teal);
        }

        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-completed {
          background-color: rgba(91, 163, 138, 0.2);
          color: var(--accent-success);
        }

        .status-processing {
          background-color: rgba(212, 165, 116, 0.2);
          color: var(--accent-warning);
        }

        .status-pending {
          background-color: rgba(201, 117, 117, 0.2);
          color: var(--accent-danger);
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-top: 1px solid var(--border-color);
        }

        .pagination-button {
          padding: 6px 12px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .pagination-button:hover:not(:disabled) {
          background-color: var(--bg-tertiary);
        }

        .pagination-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-info {
          font-size: 13px;
          color: var(--text-tertiary);
        }

        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .search-box-orders {
            width: 100%;
          }

          .search-input-orders {
            min-width: 0;
            flex: 1;
          }

          .table-container {
            font-size: 12px;
          }

          .orders-table th,
          .orders-table td {
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
}
