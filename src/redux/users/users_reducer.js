import { combineReducers, createReducer } from '@reduxjs/toolkit';
import usersActions from './users_actions';

const data = createReducer(null, {
  [usersActions.fetchUsersSuccess]: (_, { payload }) => payload,
  [usersActions.createUserSuccess]: (state, { payload }) => [...state, payload],
  [usersActions.deleteUserSuccess]: (state, { payload }) =>
    state.filter(user => user.id !== payload.id),
  [usersActions.editUserSuccess]: (state, { payload }) =>
    state.map(user => {
      if (user.id !== payload.id) {
        return user;
      } else {
        return payload;
      }
    }),
  [usersActions.sortUsersSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [usersActions.fetchUsersRequest]: () => true,
  [usersActions.fetchUsersSuccess]: () => false,
  [usersActions.fetchUsersError]: () => false,
  [usersActions.createUserRequest]: () => true,
  [usersActions.createUserSuccess]: () => false,
  [usersActions.createUserError]: () => false,
  [usersActions.deleteUserRequest]: () => true,
  [usersActions.deleteUserSuccess]: () => false,
  [usersActions.deleteUserError]: () => false,
  [usersActions.editUserRequest]: () => true,
  [usersActions.editUserSuccess]: () => false,
  [usersActions.editUserError]: () => false,
  [usersActions.sortUsersRequest]: () => true,
  [usersActions.sortUsersSuccess]: () => false,
  [usersActions.sortUsersError]: () => false,
});

const error = createReducer(null, {
  [usersActions.fetchUsersError]: (_, { payload }) => payload,
  [usersActions.createUserError]: (_, { payload }) => payload,
  [usersActions.deleteUserError]: (_, { payload }) => payload,
  [usersActions.editUserError]: (_, { payload }) => payload,
  [usersActions.sortUsersError]: (_, { payload }) => payload,
});

export default combineReducers({
  data,
  loading,
  error,
});
