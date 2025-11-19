import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, amount, icon: Icon, color, trend }) => (
  <div className="glass p-6 rounded-lg stat-card">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-sm bg-${color}-light text-${color}`}>
        <Icon size={24} />
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend > 0 ? 'text-success' : 'text-danger'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <h3 className="text-muted text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-main">${amount.toLocaleString()}</p>
  </div>
);

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Balance"
        amount={balance}
        icon={Wallet}
        color="primary"
        trend={2.5}
      />
      <StatCard
        title="Total Income"
        amount={income}
        icon={TrendingUp}
        color="success"
        trend={12}
      />
      <StatCard
        title="Total Expenses"
        amount={expenses}
        icon={TrendingDown}
        color="danger"
        trend={-5}
      />
    </div>
  );
};

export default Dashboard;
