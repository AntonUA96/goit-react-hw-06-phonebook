// import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import Filter from '../components/Filter';
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// const rootReducer = combineReducers({
//   contacts:contactsReducer,
// })
// const store = createStore(rootReducer, composeWithDevTools())
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// })
// const persistedReducer = persistReducer(persistConfig,rootReducer )
// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// })
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistore = persistStore(store);
export default { store, persistore };
