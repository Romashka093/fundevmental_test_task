import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, usersOperations } from '../../redux/users';
import { en } from '../../utility/langs';
import { TableRow } from '../elements/TableRow';
import styles from './Table.module.scss';
import { Button } from '../ui/Button';

const {} = styles;
const { id, name, age, about, actions } = en;

const Table = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSelector.getUsers);
  const isGettingUsers = Boolean(allUsers);

  useEffect(() => {
    dispatch(usersOperations.getAllUsers());
  }, [dispatch, isGettingUsers]);

  const handlerClick = evt => {
    evt.preventDefault();
    dispatch(usersOperations.createUser());
  };

  const handlerDeleteUser = id => {
    dispatch(usersOperations.deleteUser(id));
  };
  const handlerEditUser = (data, id) => {
    dispatch(usersOperations.editUser(data, id));
  };

  return (
    <>
      <Button value="Add new user" type="button" handlerClick={handlerClick} />
      <table>
        <thead>
          <tr>
            <th>
              <p>№</p>
            </th>
            <th>
              <p>{id}</p>
            </th>
            <th>
              <p>{name}</p>
            </th>
            <th>
              <p>{age}</p>
            </th>
            <th>
              <p>{about}</p>
            </th>

            <th colSpan={2}>
              <p>{actions}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.length >= 1 &&
            allUsers?.map((user, index) => (
              <TableRow
                key={user.id}
                user={user}
                index={index}
                handlerDeleteUser={handlerDeleteUser}
                handlerEditUser={handlerEditUser}
              />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>footer</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
