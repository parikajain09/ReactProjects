import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  return (
    <div className={styles.buttonsContainer}>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
};
export default ButtonsContainer;
