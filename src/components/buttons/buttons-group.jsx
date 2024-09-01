import styles from './button-group.module.css';
const ButtonGroup = ({children})=>{
  return(
    <div className={styles.buttons}>
      {children}
    </div>
  );
}
export default ButtonGroup;