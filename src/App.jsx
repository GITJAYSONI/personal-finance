import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { LayoutDashboard } from 'lucide-react';

function App() {
  // Load from local storage or use default data
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, description: 'Freelance Project', amount: 1200, type: 'income', date: '2023-10-24' },
      { id: 2, description: 'Grocery Shopping', amount: 85.50, type: 'expense', date: '2023-10-25' },
      { id: 3, description: 'Netflix Subscription', amount: 15.99, type: 'expense', date: '2023-10-26' },
      { id: 4, description: 'Stock Dividend', amount: 45.20, type: 'income', date: '2023-10-27' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen container">
      <header className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary rounded-md shadow-glow">
          <LayoutDashboard className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gradient">FinanceTracker</h1>
          <p className="text-muted">Manage your money with style</p>
        </div>
      </header>

      <Dashboard transactions={transactions} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </div>
        <div>
          <AddTransaction onAdd={addTransaction} />
        </div>
      </div>
    </div>
  );
}

export default App;
