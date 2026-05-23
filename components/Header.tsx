'use client';

import { useState } from 'react';
import { Search, Bell, User, Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  dateRange: string;
  onDateRangeChange: (range: string) => void;
}

export default function Header({
  theme,
  onThemeChange,
  sidebarOpen,
  onSidebarToggle,
  dateRange,
  onDateRangeChange,
}: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);

  const dateRangeOptions = [
    { value: 'today', label: 'Today' },
    { value: 'last7', label: 'Last 7 Days' },
    { value: 'last30', label: 'Last 30 Days' },
    { value: 'last90', label: 'Last 90 Days' },
    { value: 'ytd', label: 'Year to Date' },
  ];

  const currentDateLabel = dateRangeOptions.find(
    (opt) => opt.value === dateRange
  )?.label;

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-button"
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="header-center">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search orders, products, customers..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <div className="date-range-selector">
          <button
            className="date-button"
            onClick={() => setShowDateRange(!showDateRange)}
          >
            📅 {currentDateLabel}
          </button>
          {showDateRange && (
            <div className="dropdown-menu">
              {dateRangeOptions.map((opt) => (
                <button
                  key={opt.value}
                  className={`dropdown-item ${dateRange === opt.value ? 'active' : ''}`}
                  onClick={() => {
                    onDateRangeChange(opt.value);
                    setShowDateRange(false);
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <button
          className="icon-button theme-button"
          onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div className="profile-dropdown">
          <button
            className="profile-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <User size={20} />
          </button>
          {showDropdown && (
            <div className="dropdown-menu profile-menu">
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Settings</button>
              <button className="dropdown-item">Help</button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item">Logout</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 24px;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          height: 70px;
        }

        .header-left {
          display: none;
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 0.2s;
        }

        .menu-button:hover {
          background-color: var(--bg-tertiary);
        }

        .header-center {
          flex: 1;
          max-width: 400px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-tertiary);
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 14px;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .date-range-selector {
          position: relative;
        }

        .date-button {
          padding: 8px 12px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .date-button:hover {
          background-color: var(--bg-tertiary);
        }

        .icon-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s;
        }

        .icon-button:hover {
          background-color: var(--bg-tertiary);
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 20px;
          height: 20px;
          background-color: var(--accent-danger);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        .profile-dropdown {
          position: relative;
        }

        .profile-button {
          width: 40px;
          height: 40px;
          background-color: var(--accent-teal);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .profile-button:hover {
          opacity: 0.9;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          box-shadow: var(--card-hover-shadow);
          min-width: 180px;
          z-index: 100;
          overflow: hidden;
        }

        .profile-menu {
          right: -10px;
        }

        .dropdown-item {
          display: block;
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          text-align: left;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }

        .dropdown-item:hover {
          background-color: var(--bg-secondary);
        }

        .dropdown-item.active {
          background-color: var(--bg-secondary);
          color: var(--accent-teal);
          font-weight: 500;
        }

        .dropdown-divider {
          margin: 0;
          height: 1px;
          background-color: var(--border-color);
          border: none;
        }

        @media (max-width: 768px) {
          .header-left {
            display: block;
          }

          .header-center {
            display: none;
          }

          .header {
            padding: 12px 16px;
          }
        }
      `}</style>
    </header>
  );
}
