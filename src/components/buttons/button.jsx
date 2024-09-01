import style from './button.module.css';
const Button = ({size,variant,children,...props}) => {
  return(
    <button className={`${style.btn} ${style[variant]} ${style[size]}`} {...props}>{children}</button>
  )
}
export default Button;