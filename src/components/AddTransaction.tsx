import { useState } from "react";
import { Transaction } from "../App";

interface AddTransactionProps {
  onAdd: (transaction: Transaction) => void;
}

export const AddTransaction = ({ onAdd }: AddTransactionProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Select category");
  const [open, setOpen] = useState(false);
  const [transtype, setTranstype] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount || category === "Select category") {
      return;
    }

    const newTransaction: Transaction = {
      description,
      amount: parseFloat(amount),
      category,
      transtype,
    };

    onAdd(newTransaction);
    setDescription("");
    setAmount("");
    setCategory("Select category");
    setTranstype("");
  };

  const handleCategory = (value: string) => {
    setCategory(value);
    setOpen(false);
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
        <div className="form-control">
          <label>Category</label>
          <button
            onClick={() => setOpen(!open)}
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span>{category}</span>
            {category === "Select category" && (
              <span className="material-symbols-outlined">arrow_drop_down</span>
            )}
          </button>
          {open && (
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => handleCategory("Food")}
                >
                  Food
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => handleCategory("Entertainment")}
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => handleCategory("Utilities")}
                >
                  Utilities
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => handleCategory("Allowance")}
                >
                  Allowance
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="radio-group">
          <input
            type="radio"
            id="expense"
            className="type"
            value={"expense"}
            checked={transtype === "expense"}
            onChange={(e) => setTranstype(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            id="income"
            className="type"
            value={"income"}
            checked={transtype === "income"}
            onChange={(e) => setTranstype(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>

        <button type="submit">Add transaction</button>
      </form>
    </>
  );
};
