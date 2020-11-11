import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import CurrencyExchangeRate from './CurrencyExchangeRate';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(1);

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount * currency
    }

    addExpense(newTransaction);
  }
  let currencyChanged = (value) => {
    console.log(value);
    setCurrency(value);
  }

  return (
    <>
      <h3>Add Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="currency">Currency <br /></label>
          <CurrencyExchangeRate currencyChanged={currencyChanged}/>
        </div>
        <button className="btn">Add Expense</button>
      </form>
    </>
  )
}