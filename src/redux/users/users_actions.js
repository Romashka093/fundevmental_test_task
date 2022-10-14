// /* eslint-disable import/no-anonymous-default-export */
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import { createAction } from '@reduxjs/toolkit';

const fetchUsersRequest = createAction('users/fetchUsersRequest');
const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
const fetchUsersError = createAction('users/fetchUsersError');

export default { fetchUsersRequest, fetchUsersSuccess, fetchUsersError };
