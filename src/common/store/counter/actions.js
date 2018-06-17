import * as T from './actionTypes'

export const set = value => ({
    type: T.SET_COUNTER,
    payload: value
  });
  
  export const increment = () => ({
    type: T.INCREMENT_COUNTER
  });
  
  export const decrement = () => ({
    type: T.DECREMENT_COUNTER
  });
  
  export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();
  
    if (counter % 2 === 0) {
      return;
    }
  
    dispatch(increment());
  };
  
  export const incrementAsync = (delay = 1000) => dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };