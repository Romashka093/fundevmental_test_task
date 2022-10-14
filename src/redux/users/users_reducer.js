import { combineReducers, createReducer } from '@reduxjs/toolkit';
import usersActions from './users_actions';

const data = createReducer(null, {
  [usersActions.fetchUsersSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
});

const error = createReducer(null, {
  [usersActions.fetchUsersError]: (_, { payload }) => payload,
});

export default combineReducers({
  data,
  loading,
  error,
});
