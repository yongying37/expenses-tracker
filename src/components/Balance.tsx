//import React from "react";
import { Transaction } from "../App";

interface BalanceProps {
  transactions: Transaction[];
}

export const Balance = ({ transactions }: BalanceProps) => {
  let bal = 0;
  for (let transaction of transactions) {
    bal += transaction.amount;
  }
  return (
    <>
      <h3>Balance</h3>
      <h4 id="balance">${bal.toFixed(2)}</h4>
    </>
  );
};
