import styles from './Loader.module.scss';
const {
  overlay,
  loading,
  loading_one,
  loading_two,
  loading_three,
  loading_svg,
} = styles;

const Loader = () => {
  return (
    <div className={overlay}>
      <h2 className={loading}>
        <span className={loading_one}>
          <svg
            className={loading_svg}
            width="24"
            height="24"
            viewBox="0 0 120 120"
            version="1.1"
          >
            <circle cx="60" cy="60" r="50"></circle>
          </svg>
        </span>
        <span className={loading_two}>
          <svg
            className={loading_svg}
            width="24"
            height="24"
            viewBox="0 0 120 120"
            version="1.1"
          >
            <circle cx="60" cy="60" r="50"></circle>
          </svg>
        </span>
        <span className={loading_three}>
          <svg
            className={loading_svg}
            width="24"
            height="24"
            viewBox="0 0 120 120"
            version="1.1"
          >
            <circle cx="60" cy="60" r="50"></circle>
          </svg>
        </span>
      </h2>
    </div>
  );
};

export default Loader;
