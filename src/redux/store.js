import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersReducer from './users/users_reducer';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
