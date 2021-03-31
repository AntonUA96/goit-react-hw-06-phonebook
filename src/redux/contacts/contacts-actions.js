//import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
const addContacts = createAction('contacts/add');
// const addContacts = text => ({
//     type: types.ADD,
//     payload: text,
// })
const removeContacts = createAction('contacts/remove');
// const removeContacts = id => ({
//     type: types.REMOVE,
//     payload:id,
// })
const filterChange = createAction('contacts/filterChange');
// const filterChange = value => ({
//     type: types.FILTER_CHANGE,
//     payload:value,
// })
export default { addContacts, removeContacts, filterChange };
