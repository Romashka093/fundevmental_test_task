/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import axios from 'axios';
import usersActions from './users_actions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getAllUsers = () => async dispatch => {
  dispatch(usersActions.fetchUsersRequest());
  try {
    const response = await axios.get(`/users`);
    dispatch(usersActions.fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.fetchUsersError(error.message));
  }
};

const createUser = () => async dispatch => {
  dispatch(usersActions.createUserRequest());
  try {
    const response = await axios.post(`/users`);
    dispatch(usersActions.createUserSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.createUserError(error.message));
  }
};

const deleteUser = id => async dispatch => {
  dispatch(usersActions.deleteUserRequest());
  try {
    const response = await axios.delete(`/users/${id}`);
    dispatch(usersActions.deleteUserSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.deleteUserError(error.message));
  }
};

const editUser = (newUser, id) => async dispatch => {
  dispatch(usersActions.editUserRequest());
  try {
    const response = await axios.put(`/users/${id}`, newUser);
    dispatch(usersActions.editUserSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.editUserError(error.message));
  }
};

export default { getAllUsers, createUser, deleteUser, editUser };
