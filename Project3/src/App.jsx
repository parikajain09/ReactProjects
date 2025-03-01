import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <center>
        <Display></Display>
       <ButtonsContainer></ButtonsContainer>
      </center>
    </div>
  );
}

export default App;
