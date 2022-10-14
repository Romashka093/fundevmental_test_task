// import styles from './TableRow.modules.scss';
// const {} = styles;
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
import { ReactComponent as Checkmark } from '../../../assets/icons/checkmark.svg';

import { useState } from 'react';
import { Input } from '../../ui/Input';

const TableRow = ({ user, index, handlerDeleteUser, handlerEditUser }) => {
  const { ID, id, name, age, about } = user;

  const [isSwitchedOnEditing, setIsSwitchedOnEditing] = useState(false);
  const [editedId, setEditedId] = useState(ID);
  const [editedName, setEditedName] = useState(name);
  const [editAge, setEditAge] = useState(age);
  const [editInfo, setEditInfo] = useState(about);

  const handlerSwitchOnEditing = () => {
    setIsSwitchedOnEditing(!isSwitchedOnEditing);
    const isChanged =
      editedId !== ID ||
      editedName !== name ||
      editAge !== age ||
      editInfo !== about;

    isSwitchedOnEditing &&
      isChanged &&
      handlerEditUser(
        {
          ...user,
          ID: editedId,
          name: editedName,
          age: editAge,
          about: editInfo,
        },
        id,
      );
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
          <button value={ID} onClick={handlerSwitchOnEditing}>
            {isSwitchedOnEditing ? <Checkmark id={id} /> : <Pencil id={id} />}
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
