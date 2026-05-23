'use client';

import { useState } from 'react';
import {
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  PercentSquare,
  CreditCard,
  FileText,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'sales', label: 'Sales Analytics', icon: ShoppingCart },
    { id: 'orders', label: 'Orders', icon: FileText },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'discounts', label: 'Discounts', icon: PercentSquare },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      <aside className={`sidebar ${open ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-section">
            <div className="logo-placeholder">🧁</div>
            <div className="logo-text">
              <h2>SweetMetrics</h2>
              <p>Bakery Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <label className="nav-label">Menu</label>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                  onClick={() => setActiveItem(item.id)}
                  title={item.label}
                >
                  <Icon size={20} />
                  <span className="nav-label-text">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-section">
            <div className="user-avatar">M</div>
            <div className="user-info">
              <p className="user-name">Monica</p>
              <p className="user-role">Owner</p>
            </div>
          </div>
        </div>
      </aside>

      <style jsx>{`
        .sidebar {
          width: 280px;
          background-color: var(--sidebar-bg);
          color: var(--sidebar-text);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar.closed {
          width: 80px;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-placeholder {
          font-size: 32px;
          min-width: 40px;
          text-align: center;
        }

        .logo-text {
          min-width: 0;
        }

        .logo-text h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
        }

        .logo-text p {
          margin: 2px 0 0 0;
          font-size: 12px;
          opacity: 0.8;
          white-space: nowrap;
        }

        .sidebar.closed .logo-text {
          display: none;
        }

        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
          overflow-y: auto;
        }

        .nav-section {
          padding: 0;
        }

        .nav-label {
          display: block;
          padding: 0 20px;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.6;
          letter-spacing: 0.5px;
        }

        .sidebar.closed .nav-label {
          display: none;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 20px;
          background: none;
          border: none;
          color: var(--sidebar-text);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          text-align: left;
        }

        .nav-item:hover {
          background-color: var(--sidebar-hover);
        }

        .nav-item.active {
          background-color: var(--sidebar-hover);
          border-left: 3px solid #fff;
          padding-left: 17px;
        }

        .nav-label-text {
          white-space: nowrap;
          overflow: hidden;
        }

        .sidebar.closed .nav-item {
          padding: 12px;
          justify-content: center;
        }

        .sidebar.closed .nav-label-text {
          display: none;
        }

        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          min-width: 40px;
        }

        .user-info {
          min-width: 0;
        }

        .user-name {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        .user-role {
          margin: 2px 0 0 0;
          font-size: 12px;
          opacity: 0.7;
          white-space: nowrap;
        }

        .sidebar.closed .user-info {
          display: none;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            z-index: 1000;
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
