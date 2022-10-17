import { useSelector } from 'react-redux';
import { TableLayout } from './layouts/TableLayout';
import { usersOperations, usersSelector } from './redux/users';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loader from './components/elements/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSelector.getUsers);
  const isGettingUsers = Boolean(allUsers);
  const isLoad = useSelector(usersSelector.isLoadingUsers);

  useEffect(() => {
    dispatch(usersOperations.getAllUsers());
  }, [dispatch, isGettingUsers]);

  return (
    <>
      {isLoad && <Loader />}
      <TableLayout />
    </>
  );
};

export default App;
