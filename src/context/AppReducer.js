export default (state, action) => {
    switch(action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }