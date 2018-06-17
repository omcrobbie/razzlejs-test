import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes'

export const initialState = 0

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};
