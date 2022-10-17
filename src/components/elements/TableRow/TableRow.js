/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
import { ReactComponent as Checkmark } from '../../../assets/icons/checkmark.svg';
import useLocalStorage from '../../../utility/hooks/useLocalStorage';
import { Input } from '../../ui/Input';
import { en } from '../../../utility/langs';
import '../../../assets/styles/base.scss';
import './TableRow.modules.scss';

const { requiredName, ageRuls, requiredInfo } = en;

const TableRow = ({ user, index, handlerDeleteUser, handlerEditUser }) => {
  const { ID, id, name, age, about, isEditing } = user;

  const [isSwitchedOnEditing, setIsSwitchedOnEditing] = useState(isEditing);

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
            name: editedName,
            age: +editAge,
            about: editInfo,
            isEditing: false,
          },
          id,
        ),
        localStorage.clear());
  };

  const hendlerEditUserName = evt => {
    const { value } = evt.target;

    if (value.length === 0) {
      return alert(requiredName);
    }
    setEditedName(value);
  };

  const hendlerEditUserAge = evt => {
    const { value } = evt.target;
    if (+value >= 100 || +value <= 0) {
      return alert(ageRuls);
    }
    setEditAge(value);
  };

  const hendlerEditUserInfo = evt => {
    const { value } = evt.target;
    if (value.length === 0) {
      return alert(requiredInfo);
    }
    setEditInfo(value);
  };

  return (
    <>
      <tr className="row">
        <td>{index + 1}</td>
        <td className="hide_column">
          <p>{id}</p>
        </td>
        <td>
          {isSwitchedOnEditing ? (
            <Input
              id={id}
              type="text"
              value={editedName}
              handlerChange={hendlerEditUserName}
            />
          ) : (
            <p className="row_name">{name}</p>
          )}
        </td>
        <td className="hide_column">
          {isSwitchedOnEditing ? (
            <Input
              id={id}
              type="number"
              min="1"
              max="99"
              value={editAge}
              handlerChange={hendlerEditUserAge}
            />
          ) : (
            <p>{age}</p>
          )}
        </td>
        <td>
          {isSwitchedOnEditing ? (
            <Input
              id={id}
              type="text"
              value={editInfo}
              handlerChange={hendlerEditUserInfo}
            />
          ) : (
            <p>{about}</p>
          )}
        </td>
        <td>
          <button id={id} value={ID} onClick={handlerSwitchEditing}>
            {isSwitchedOnEditing ? (
              <Checkmark className="icon_done" />
            ) : (
              <Pencil className="icon_edit" />
            )}
          </button>
        </td>
        <td>
          <button id={id} value={ID} onClick={() => handlerDeleteUser(id)}>
            <Delete className="icon_delete" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
