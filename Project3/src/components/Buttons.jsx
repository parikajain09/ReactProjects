import styles from "./Buttons.module.css";

const Buttons = ({onButtonClick}) => {
  const button = [
    "C",
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
    <>
      {button.map((item) => (
        <button className={styles.button}
        onClick={() => onButtonClick(item)}
        >{item}</button>
      ))}
     
    </>
  );
};

export default Buttons;
