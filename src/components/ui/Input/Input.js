import styles from './Input.module.scss';
const { input } = styles;

const Input = ({
  type,
  id,

  handlerChange,
  value,

  min,
  max,
}) => {
  return (
    <input
      className={input}
      onChange={handlerChange}
      id={id}
      type={type}
      value={value}
      min={min}
      max={max}
    />
  );
};

export default Input;
