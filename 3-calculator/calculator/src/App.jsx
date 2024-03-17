import Display from "./component/display";
import Buttonscontainer from "./component/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(String(result));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.Calculator}>
      <Display displayValue={calVal} />
      <Buttonscontainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
