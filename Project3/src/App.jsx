import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) =>{
    if(buttonText === 'C'){
      setCalVal("")
    }else if(buttonText === '='){
      let result = eval(calVal)
      setCalVal(result)
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }

  }

  
  return (
    <div className={styles.calculator}>
      <center>
        <Display displayValue={calVal}></Display>
       <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </center>
    </div>
  );
}

export default App;
