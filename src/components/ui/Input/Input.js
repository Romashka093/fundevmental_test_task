import styles from './Input.module.scss';
const { input, label } = styles;

const Input = ({
  type,
  id,
  isLabel,
  handlerChange,
  value,
  labelTitle,
  min,
  max,
}) => {
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
        min={min}
        max={max}
      />
    </>
  );
};

export default Input;
