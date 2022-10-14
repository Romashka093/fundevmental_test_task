import styles from './Input.module.scss';
const { input, label } = styles;

const Input = ({ type, id, isLabel, handlerChange, value, labelTitle }) => {
  return (
    <>
      {isLabel && (
        <label className={label} htmlFor={id}>
          {labelTitle}
        </label>
      )}
      <input
        className={input}
        onChange={handlerChange}
        id={id}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
