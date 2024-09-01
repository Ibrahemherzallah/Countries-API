import style from './sideBar.module.css';
const SideBar = ({children,...props}) => {
    function handleOnDragOver(event){
    event.preventDefault();
  }
  return(
    <div className={style.sideBar} onDragOver={handleOnDragOver} {...props}>{children}</div>
  );
}
export default SideBar;