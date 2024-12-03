import Display from "../components/Display";
import ButtonsContainer from "../components/ButtonsContainer";
import styles from "./App.module.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      // console.log(buttontext);
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display DisplayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
