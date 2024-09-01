import style from './navBar.module.css';
import Typography from '../typography/typography';

export function NavBarTheme({children}){
  return(
    <Typography component={'p'} size={'sm'} style={{backGround:'#fff'}}>{children}</Typography>
  );
}