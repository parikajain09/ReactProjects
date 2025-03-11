import styles from "./Display.module.css"


const Display = ({displayValue}) => {
  return (
    <input
      className={styles.display}
      type="text"
      placeholder="Enter here"
      value={displayValue} readOnly
    ></input>
  );
};
export default Display;
