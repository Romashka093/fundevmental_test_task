import styles from './Button.module.scss';
const { button } = styles;

const Button = ({ type, value, handlerClick }) => {
  return (
    <>
      <button
        className={button}
        name={value}
        value={value}
        type={type}
        onClick={handlerClick}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
