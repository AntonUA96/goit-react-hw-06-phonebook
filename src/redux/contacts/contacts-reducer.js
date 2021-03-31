import { combineReducers } from 'redux';
// import types from './contacts-types';
import actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
const items = createReducer([], {
  [actions.addContacts]: (state, { payload }) => {
    if (state && state.find(contact => contact.name === payload.name)) {
      alert('Пользователь с таким именем уже существует');
      return state;
    }
    if (!payload.name || !payload.phone) {
      alert('Данные не введены!');
      return state;
    }
    return [...state, payload];
  },
  [actions.removeContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});
// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
// if (state && state.find(contact => contact.name === payload.name)) {
//     alert('Пользователь с таким именем уже существует');
//     return state;
// }
// if (!payload.name || !payload.phone) {
//     alert('Данные не введены!');
//     return state;
// }
//             return [...state, payload];
//         case types.REMOVE:
//             return state.filter(contact => contact.id !== payload);
//         default:
//             return state;
//     }
// }
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.FILTER_CHANGE:
//             return payload;
//             default:
//                 return state;
//     }
// }
export default combineReducers({ items, filter });
