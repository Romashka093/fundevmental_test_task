/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, usersOperations } from '../../redux/users';
import { en } from '../../utility/langs';
import { TableRow } from '../elements/TableRow';
import { Button } from '../ui/Button';
import { ReactComponent as SortAlphaASC } from '../../assets/icons/sort_alpha_asc.svg';
import { ReactComponent as SortAlphaDESC } from '../../assets/icons/sort_alpha_desc.svg';
import { ReactComponent as SortNumericASC } from '../../assets/icons/sort_numeric_asc.svg';
import { ReactComponent as SortNumericDESC } from '../../assets/icons/sort_numberic_desc.svg';
import { ReactComponent as MoveUp } from '../../assets/icons/move_up.svg';
import styles from './Table.module.scss';

const { red, gray } = styles;
const { id, name, age, about, actions } = en;

const Table = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSelector.getUsers);
  const isGettingUsers = Boolean(allUsers);

  const [isSortingAlpha, setisSortingAlpha] = useState(false);
  const [isSortingNumeric, setisSortingNumeric] = useState(false);
  const [isClickedName, setisClickedName] = useState(false);
  const [isClickedAge, setisClickedAge] = useState(false);

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
  const handlerSortingUsers = byValue => {
    byValue === 'name'
      ? (setisSortingAlpha(!isSortingAlpha), setisClickedName(true))
      : (setisSortingNumeric(!isSortingNumeric), setisClickedAge(true));

    const isSorting = byValue === 'name' ? isSortingAlpha : isSortingNumeric;
    dispatch(usersOperations.sortUsers(byValue, isSorting));
  };

  const handlerRefresh = () => {
    dispatch(usersOperations.getAllUsers());
    setisClickedAge(false);
    setisClickedName(false);
  };
  return (
    <>
      <Button value="Add new user" type="button" handlerClick={handlerClick} />
      <Button value="Refresh" type="button" handlerClick={handlerRefresh} />
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
              <p onClick={() => handlerSortingUsers('name')}>{name}</p>
              {isSortingAlpha ? (
                <SortAlphaDESC className={red} />
              ) : isClickedName ? (
                <SortAlphaASC className={isClickedName ? red : gray} />
              ) : (
                <MoveUp className={gray} />
              )}
            </th>
            <th>
              <p onClick={() => handlerSortingUsers('age')}>{age}</p>
              {isSortingNumeric ? (
                <SortNumericDESC className={red} />
              ) : isClickedAge ? (
                <SortNumericASC className={isClickedAge ? red : gray} />
              ) : (
                <MoveUp className={gray} />
              )}
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
