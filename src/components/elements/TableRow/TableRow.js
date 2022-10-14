// import styles from './TableRow.modules.scss';
// const {} = styles;
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
// import { Button } from '../../ui/Button';
import { useState } from 'react';

const TableRow = ({ user, index, handlerDeleteUser }) => {
  const { ID, id, name, birthday, about } = user;
  const userBirthday = new Date(birthday);
  const today = new Date();
  const [isSwitchedOnEditing, setIsSwitchedOnEditing] = useState(false);

  //   const handlerDeletUser = (evt, id) => {
  //     //
  //     // deleteUser
  //   };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>{today.getFullYear() + 21 - userBirthday.getFullYear()}</td>
        <td>{about}</td>
        <td>
          <button id={id} value={ID}>
            <Pencil />
          </button>
        </td>
        <td>
          <button id={id} value={ID} onClick={() => handlerDeleteUser(id)}>
            <Delete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
