import styles from "./ButtonsContainer.module.css";
const Buttonscontainer = ({ onButtonClick }) => {
  const buttonsName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((btnName) => (
        <button
          className={styles.buttons}
          onClick={() => onButtonClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};
export default Buttonscontainer;
