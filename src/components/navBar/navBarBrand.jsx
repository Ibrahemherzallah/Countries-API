import style from './navBar.module.css';
import Typography from '../typography/typography';


export function NavBarBrand({children}){
  return(
    <Typography component={'h1'} variant={'h3'}>{children}</Typography>
  );
}


