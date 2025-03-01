import styles from "./Buttons.module.css"


const Buttons = () =>{
  const button =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return(
    <>
    {button.map((item)=><button className={styles.button}>{item}</button>)}
    {/* <button className={styles.button}>C</button>
          <button className={styles.button}>1</button>
          <button className={styles.button}>2</button>
          <button className={styles.button}>+</button> */}
          </>
  )

}

export default Buttons;