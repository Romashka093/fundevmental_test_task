// /* eslint-disable import/no-anonymous-default-export */
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('users/fetchUsersRequest');
const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
const fetchUsersError = createAction('users/fetchUsersError');

const createUserRequest = createAction('user/createUserRequest');
const createUserSuccess = createAction('user/createUserSuccess');
const createUserError = createAction('user/createUserError');

const deleteUserRequest = createAction('user/deleteUserRequest');
const deleteUserSuccess = createAction('user/deleteUserSuccess');
const deleteUserError = createAction('user/deleteUserError');

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  createUserRequest,
  createUserSuccess,
  createUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
};
