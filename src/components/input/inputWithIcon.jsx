import style from './input.module.css';

const InputWithIcon = ({icon,placeholder,...props}) => {
  return(
    <div className={style.inputDiv}>
      <span className={style.icon}>{icon}</span>
      <input className={style.input} type="text" placeholder={`${placeholder}`} {...props}/>
    </div>
  );
} 
export default InputWithIcon;
/*onChange={(e)=>{setSearch(e.target.value) ;console.log("The search is" , e.target.value);}}*/