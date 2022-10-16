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

const editUserRequest = createAction('user/editUserRequest');
const editUserSuccess = createAction('user/editUserSuccess');
const editUserError = createAction('user/editUserError');

const sortUsersRequest = createAction('users/sortUsersRequest');
const sortUsersSuccess = createAction('users/sortUsersSuccess');
const sortUsersError = createAction('users/sortUsersError');

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
  editUserRequest,
  editUserSuccess,
  editUserError,
  sortUsersRequest,
  sortUsersSuccess,
  sortUsersError,
};
