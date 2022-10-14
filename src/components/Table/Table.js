import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, usersOperations } from '../../redux/users';
import { en } from '../../utility/langs';
import { TableRow } from '../elements/TableRow';
import styles from './Table.module.scss';

// const {} = styles;
const { id, name, age, about, actions } = en;

const Table = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSelector.getUsers);

  const isGettingUsers = Boolean(allUsers);
  //   console.log('all users', allUsers);

  useEffect(() => {
    dispatch(usersOperations.getAllUsers());
  }, [dispatch, isGettingUsers]);

  return (
    <>
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
            allUsers.map(user => <TableRow key={user.ID} user={user} />)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>footer</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
