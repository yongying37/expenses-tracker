import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

export interface Transaction {
  description: string;
  amount: number;
  category: string;
  transtype: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem("transactions");
    if (stored == null) return [];

    return JSON.parse(stored);
  });

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (index: number) => {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <Header />
      <Balance transactions={transactions} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}

export default App;
