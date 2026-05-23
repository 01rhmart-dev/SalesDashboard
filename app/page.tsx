'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import KPICards from '@/components/KPICards';
import SalesCharts from '@/components/SalesCharts';
import RecentOrders from '@/components/RecentOrders';
import ProductPerformance from '@/components/ProductPerformance';
import PaymentAnalytics from '@/components/PaymentAnalytics';
import CustomerInsights from '@/components/CustomerInsights';
import DiscountAnalytics from '@/components/DiscountAnalytics';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [dateRange, setDateRange] = useState('last30');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="dashboard-container" data-theme={theme}>
      <Sidebar open={sidebarOpen} />
      <div className="main-layout">
        <Header 
          theme={theme} 
          onThemeChange={setTheme}
          sidebarOpen={sidebarOpen}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        <main className="dashboard-content">
          <div className="content-wrapper">
            <div className="page-header">
              <h1>Sales Overview</h1>
              <p>Hi Monica, here's how your sales area is looking today</p>
            </div>

            <KPICards dateRange={dateRange} />
            <SalesCharts dateRange={dateRange} />
            <RecentOrders />
            <ProductPerformance />
            <PaymentAnalytics />
            <CustomerInsights />
            <DiscountAnalytics />
          </div>
        </main>
      </div>
      <style jsx>{`
        [data-theme='light'] {
          --bg-primary: #ffffff;
          --bg-secondary: #f8f6f1;
          --bg-tertiary: #ece7e1;
          --text-primary: #1a1a1a;
          --text-secondary: #666666;
          --text-tertiary: #999999;
          --border-color: #e0dbd5;
          --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          --card-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          --sidebar-bg: #2c5f7b;
          --sidebar-text: #ffffff;
          --sidebar-hover: #3a7a9b;
          --accent-teal: #3b7a8f;
          --accent-pink: #d4879f;
          --accent-chocolate: #6b4423;
          --accent-success: #5ba38a;
          --accent-warning: #d4a574;
          --accent-danger: #c97575;
          --chart-color-1: #3b7a8f;
          --chart-color-2: #5ba38a;
          --chart-color-3: #d4879f;
          --chart-color-4: #d4a574;
          --chart-color-5: #6b4423;
        }
        
        [data-theme='dark'] {
          --bg-primary: #1a1a1a;
          --bg-secondary: #2a2a2a;
          --bg-tertiary: #3a3a3a;
          --text-primary: #f5f5f5;
          --text-secondary: #b3b3b3;
          --text-tertiary: #808080;
          --border-color: #3a3a3a;
          --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          --card-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          --sidebar-bg: #1a3a4a;
          --sidebar-text: #f5f5f5;
          --sidebar-hover: #2a5570;
          --accent-teal: #5ba3ba;
          --accent-pink: #e8a8bf;
          --accent-chocolate: #8b6633;
          --accent-success: #7bc9aa;
          --accent-warning: #e6c89a;
          --accent-danger: #e89999;
          --chart-color-1: #5ba3ba;
          --chart-color-2: #7bc9aa;
          --chart-color-3: #e8a8bf;
          --chart-color-4: #e6c89a;
          --chart-color-5: #8b6633;
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .dashboard-container {
          display: flex;
          height: 100vh;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          transition: background-color 0.3s, color 0.3s;
        }

        .main-layout {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .dashboard-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          background-color: var(--bg-secondary);
        }

        .content-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
        }

        .page-header {
          margin-bottom: 32px;
        }

        .page-header h1 {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .page-header p {
          margin: 0;
          font-size: 14px;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 16px;
          }

          .page-header h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
