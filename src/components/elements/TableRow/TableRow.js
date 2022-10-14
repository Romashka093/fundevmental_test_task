// import styles from './TableRow.modules.scss';
// const {} = styles;

const TableRow = ({ user }) => {
  const { id, name, birthday, about } = user;
  const userBirthday = new Date(birthday);
  const today = new Date();

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{id}</td>
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
