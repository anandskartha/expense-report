import React from 'react';

export const Transaction = ({ transaction }) => {

  return (
    <li>
      {transaction.text} <span>${Math.abs(transaction.amount)}</span>
    </li>
  )
}