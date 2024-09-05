import style from './navBar.module.css';
import Typography from '../typography/typography';

export function NavBarTheme({width,children}){
  return(
    <Typography component={'p'} size={'sm'} style={{backGround:'#fff',fontSize:`${width < 400 ? '12px' : ''}`}}>{children}</Typography>
  );
}