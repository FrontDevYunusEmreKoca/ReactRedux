import { createStore } from 'redux';


// Initial state
const initialState = {
    count: 5,
  };
  
  // Reducer
  //Blog
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
          ...state,  // state'in diğer özelliklerini korur
          count: state.count + incrementBy,
        };
      case 'DECREMENT':
        return {
          ...state,  // state'in diğer özelliklerini korur
          count: state.count - 1,
        };
      case 'RESET':
        return {
          ...state,  // state'in diğer özelliklerini korur
          count: initialState.count,
        };
      default:
        return state;
    }
  };
  
  
  // Create store
  const store = createStore(counterReducer);
  
  // Subscribe to store changes
  store.subscribe(() => {
    console.log('Current State:', store.getState());
  });
  
  // Dispatch actions
  store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10,
  });
  store.dispatch({
    type: 'DECREMENT',
  });
  store.dispatch({
    type: 'RESET',
  });
  
  console.log('Final State:', store.getState());