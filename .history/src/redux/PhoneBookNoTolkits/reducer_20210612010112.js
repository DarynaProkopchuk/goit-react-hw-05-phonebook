import { combineReducers } from 'redux';
import types from './types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

const reducer = combineReducers({ items, filter });
export default reducer;
