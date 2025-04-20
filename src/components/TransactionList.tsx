import { Transaction } from "../App";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={transaction.amount < 0 ? "expense" : "income"}
          >
            {transaction.description}{" "}
            <span>
              {transaction.amount < 0 ? "💸" : "💰"} $
              {transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
