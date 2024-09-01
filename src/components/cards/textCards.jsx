import Typography from "../typography/typography";
import style from "./textCards.module.css";

export const TextCardTitle = ({component,variant,children}) => {
  return(
    <Typography component={component} variant={variant}>{children}</Typography>
  );
}

export const TextCardBody = ({children,...props}) => {
  return(
    <>
      <div {...props}>{children}</div>
    </>
  );
}

export const TextCards = ({direction,children,...props}) => { 
  return(
    <>
      <div className={ `${style.cardText} ${style[direction]}`} {...props}>{children}</div>
    </>
  );
}
