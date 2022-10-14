import { combineReducers, createReducer } from '@reduxjs/toolkit';
import usersActions from './users_actions';

const data = createReducer(null, {
  [usersActions.fetchUsersSuccess]: (_, { payload }) => payload,
  [usersActions.createUserSuccess]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
  [usersActions.createUserRequest]: () => true,
  [usersActions.createUserSuccess]: () => false,
  [usersActions.createUserError]: () => false,
});

const error = createReducer(null, {
  [usersActions.fetchUsersError]: (_, { payload }) => payload,
  [usersActions.createUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  data,
  loading,
  error,
});
