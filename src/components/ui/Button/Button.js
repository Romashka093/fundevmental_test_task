// /import styles from './Button.module.scss';
// const {  } = styles;

const Button = ({ type, value }) => {
  return (
    <>
      <button name={value} value={value} type={type}>
        {value}
      </button>
    </>
  );
};

export default Button;
