import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const AddTransaction = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      date: new Date().toISOString(),
    });

    setDescription('');
    setAmount('');
  };

  return (
    <div className="glass rounded-lg p-6 h-fit">
      <h2 className="text-xl font-bold mb-6 text-main">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm text-muted mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            placeholder="e.g. Grocery Shopping"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setType('expense')}
            className={`p-3 rounded-sm border transition-all ${type === 'expense'
                ? 'bg-danger border-danger text-white'
                : 'border-glass text-muted hover:border-danger'
              }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType('income')}
            className={`p-3 rounded-sm border transition-all ${type === 'income'
                ? 'bg-success border-success text-white'
                : 'border-glass text-muted hover:border-success'
              }`}
          >
            Income
          </button>
        </div>

        <button
          type="submit"
          className="w-full btn-primary font-bold py-3 rounded-sm flex items-center justify-center gap-2 mt-4"
        >
          <Plus size={20} />
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
