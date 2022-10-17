/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
const getUsers = ({ users }) => users.data;
const isLoadingUsers = ({ users }) => users.loading;
const getUsersError = ({ users }) => users.error;

export default { getUsers, isLoadingUsers, getUsersError };
