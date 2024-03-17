import styles from "./display.module.css";
const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.Display}
        value={displayValue}
        readOnly
      />
    </div>
  );
};
export default Display;
