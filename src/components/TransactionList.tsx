import { Transaction } from "../App";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (index: number) => void;
}

export const TransactionList = ({
  transactions,
  onDelete,
}: TransactionListProps) => {
  return (
    <>
      <h3>History</h3>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={
                transaction.transtype === "expense" ? "expense" : "income"
              }
            >
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>
                {transaction.transtype === "expense" ? "💸" : "💰"} $
                {transaction.amount.toFixed(2)}
              </td>
              <td>
                <button className="btn" onClick={() => onDelete(index)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
