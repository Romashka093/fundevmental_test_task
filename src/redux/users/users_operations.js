/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import axios from 'axios';
import usersActions from './users_actions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getAllUsers = () => async dispatch => {
  dispatch(usersActions.fetchUsersRequest());
  try {
    const response = await axios.get(`/users`);
    console.log('response', response);

    dispatch(usersActions.fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(usersActions.fetchUsersError(error.message));
  }
};

export default { getAllUsers };
