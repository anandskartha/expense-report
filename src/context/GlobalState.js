import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addExpense(transaction) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    addExpense
  }}>
    {children}
  </GlobalContext.Provider>);
}