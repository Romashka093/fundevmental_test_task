// import styles from "./Input.module.scss";
// const {  } = styles;

const Input = ({ type, id, isLabel }) => {
  return (
    <>
      {isLabel && <label htmlFor={id}></label>}
      <input id={id} type={type} />
    </>
  );
};

export default Input;
