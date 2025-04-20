import { useState } from "react";
import { Transaction } from "../App";

interface AddTransactionProps {
  onAdd: (transaction: Transaction) => void;
}

export const AddTransaction = ({ onAdd }: AddTransactionProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount) {
      return;
    }

    const newTransaction: Transaction = {
      description,
      amount: parseFloat(amount),
    };

    onAdd(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="desc-input">Description</label>
          <input
            type="text"
            id="desc-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </>
  );
};
