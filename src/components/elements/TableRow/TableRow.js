/* eslint-disable no-unused-expressions */
// import styles from './TableRow.modules.scss';
// const {} = styles;
import { useState } from 'react';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
import { ReactComponent as Checkmark } from '../../../assets/icons/checkmark.svg';
import useLocalStorage from '../../../utility/hooks/useLocalStorage';
import { Input } from '../../ui/Input';

const TableRow = ({ user, index, handlerDeleteUser, handlerEditUser }) => {
  const { ID, id, name, age, about, isEditing } = user;

  const [isSwitchedOnEditing, setIsSwitchedOnEditing] = useState(isEditing);

  const [editedId, setEditedId] = useLocalStorage(ID, ID);
  const [editedName, setEditedName] = useLocalStorage(name, name);
  const [editAge, setEditAge] = useLocalStorage(age, age);
  const [editInfo, setEditInfo] = useLocalStorage(about, about);

  const handlerSwitchEditing = () => {
    setIsSwitchedOnEditing(!isSwitchedOnEditing);
    !isSwitchedOnEditing
      ? handlerEditUser(
          {
            ...user,
            isEditing: true,
          },
          id,
        )
      : (handlerEditUser(
          {
            ...user,
            ID: editedId,
            name: editedName,
            age: editAge,
            about: editInfo,
            isEditing: false,
          },
          id,
        ),
        localStorage.clear());
  };

  const hendlerEditUserID = evt => {
    const { value } = evt.target;
    setEditedId(value);
  };

  const hendlerEditUserName = evt => {
    const { value } = evt.target;
    setEditedName(value);
  };

  const hendlerEditUserAge = evt => {
    const { value } = evt.target;
    setEditAge(value);
  };

  const hendlerEditUserInfo = evt => {
    const { value } = evt.target;
    setEditInfo(value);
  };

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <>
            {isSwitchedOnEditing ? (
              <Input
                id={id}
                type="text"
                value={editedId}
                handlerChange={hendlerEditUserID}
              />
            ) : (
              <p>{ID}</p>
            )}
          </>
        </td>
        <td>
          <>
            {isSwitchedOnEditing ? (
              <Input
                id={id}
                type="text"
                value={editedName}
                handlerChange={hendlerEditUserName}
              />
            ) : (
              <p>{name}</p>
            )}
          </>
        </td>
        <td>
          <>
            {isSwitchedOnEditing ? (
              <Input
                id={id}
                type="number"
                value={editAge}
                handlerChange={hendlerEditUserAge}
              />
            ) : (
              <p>{age}</p>
            )}
          </>
        </td>
        <td>
          <>
            {isSwitchedOnEditing ? (
              <Input
                id={id}
                type="text"
                value={editInfo}
                handlerChange={hendlerEditUserInfo}
                isLabel="true"
                labelTitle="User information"
              />
            ) : (
              <p>{about}</p>
            )}
          </>
        </td>
        <td>
          <button id={id} value={ID} onClick={handlerSwitchEditing}>
            {isSwitchedOnEditing ? <Checkmark /> : <Pencil />}
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
