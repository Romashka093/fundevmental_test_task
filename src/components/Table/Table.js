/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector, usersOperations } from '../../redux/users';
import { TableRow } from '../elements/TableRow';
import { Button } from '../ui/Button';
import { EmptyRow } from '../elements/EmptyRow';
import { ReactComponent as SortAlphaASC } from '../../assets/icons/sort_alpha_asc.svg';
import { ReactComponent as SortAlphaDESC } from '../../assets/icons/sort_alpha_desc.svg';
import { ReactComponent as SortNumericASC } from '../../assets/icons/sort_numeric_asc.svg';
import { ReactComponent as SortNumericDESC } from '../../assets/icons/sort_numberic_desc.svg';
import { ReactComponent as MoveUp } from '../../assets/icons/move_up.svg';
import { en } from '../../utility/langs';
import styles from './Table.module.scss';
import '../../assets/styles/base.scss';

const {
  table_header_icon__primary_dark,
  table_header_icon__gray,
  section,
  section_header,
  section_header__heading,
  section_header__btns,
  section_header__btn,
  table,
  table_header_wrap,
} = styles;
const {
  id,
  name,
  age,
  about,
  actions,
  reset_sort,
  add_new_user,
  users,
  here_is,
} = en;

const Table = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSelector.getUsers);

  const [isSortingAlpha, setisSortingAlpha] = useState(false);
  const [isSortingNumeric, setisSortingNumeric] = useState(false);
  const [isClickedName, setisClickedName] = useState(false);
  const [isClickedAge, setisClickedAge] = useState(false);

  const handlerAddNewUser = evt => {
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

  const handlerResetSort = () => {
    setisClickedAge(false);
    setisClickedName(false);
    setisSortingNumeric(false);
    setisSortingAlpha(false);
    dispatch(usersOperations.getAllUsers());
  };
  return (
    <section className={section}>
      <div className={section_header}>
        <h2 className={section_header__heading}>User Managment</h2>
        <ul className={section_header__btns}>
          <li className={section_header__btn}>
            <Button
              value={reset_sort}
              type="button"
              handlerClick={handlerResetSort}
            />
          </li>
          <li>
            <Button
              value={add_new_user}
              type="button"
              handlerClick={handlerAddNewUser}
            />
          </li>
        </ul>
      </div>

      <table className={table}>
        <thead>
          <tr>
            <th>
              <p>№</p>
            </th>
            <th className="hide_column">
              <p>{id}</p>
            </th>
            <th>
              <button
                onClick={() => handlerSortingUsers('name')}
                className={table_header_wrap}
              >
                <p>{name}</p>
                {isSortingAlpha ? (
                  <SortAlphaDESC className={table_header_icon__primary_dark} />
                ) : isClickedName ? (
                  <SortAlphaASC
                    className={
                      isClickedName
                        ? table_header_icon__primary_dark
                        : table_header_icon__gray
                    }
                  />
                ) : (
                  <MoveUp className={table_header_icon__gray} />
                )}
              </button>
            </th>
            <th className="hide_column">
              <button
                onClick={() => handlerSortingUsers('age')}
                className={table_header_wrap}
              >
                <p>{age}</p>
                {isSortingNumeric ? (
                  <SortNumericDESC
                    className={table_header_icon__primary_dark}
                  />
                ) : isClickedAge ? (
                  <SortNumericASC
                    className={
                      isClickedAge
                        ? table_header_icon__primary_dark
                        : table_header_icon__gray
                    }
                  />
                ) : (
                  <MoveUp className={table_header_icon__gray} />
                )}
              </button>
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
          {allUsers?.length >= 1 ? (
            allUsers?.map((user, index) => (
              <TableRow
                key={user.id}
                user={user}
                index={index}
                handlerDeleteUser={handlerDeleteUser}
                handlerEditUser={handlerEditUser}
              />
            ))
          ) : (
            <EmptyRow />
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>{`${here_is} ${allUsers?.length} ${users}`}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Table;
