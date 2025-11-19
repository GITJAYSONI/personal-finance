import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Trash2 } from 'lucide-react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="glass rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6 text-main">Recent Transactions</h2>
      <div className="grid gap-4">
        {transactions.length === 0 ? (
          <p className="text-muted text-center py-8">No transactions yet.</p>
        ) : (
          transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 rounded-md hover:bg-card-hover transition-all group">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${t.type === 'income' ? 'bg-success-light text-success' : 'bg-danger-light text-danger'}`}>
                  {t.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                </div>
                <div>
                  <p className="font-medium text-main">{t.description}</p>
                  <p className="text-sm text-muted">{new Date(t.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-bold ${t.type === 'income' ? 'text-success' : 'text-danger'}`}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                </span>
                <button
                  onClick={() => onDelete(t.id)}
                  className="opacity-0 group-hover:opacity-100 text-muted hover:text-danger transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
