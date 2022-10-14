// import styles from './TableRow.modules.scss';
// const {} = styles;

const TableRow = ({ user, index }) => {
  const { ID, name, birthday, about } = user;
  const userBirthday = new Date(birthday);
  const today = new Date();

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{ID}</td>
        <td>{name}</td>
        <td>{today.getFullYear() + 21 - userBirthday.getFullYear()}</td>
        <td>{about}</td>
        <td>edit</td>
        <td>remove</td>
      </tr>
    </>
  );
};

export default TableRow;
