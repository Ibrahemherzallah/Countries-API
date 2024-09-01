import styles from './buttons-group.module.css';
const ButtonGroup = ({direction,children})=>{
  return(
    <div className= { `${styles.buttons} ${styles[direction]}`}>
      {children}
    </div>
  );
}
export default ButtonGroup;