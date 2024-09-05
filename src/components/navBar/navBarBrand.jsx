import style from './navBar.module.css';
import Typography from '../typography/typography';


export function NavBarBrand({width,children,...props}){
  return(
    <Typography style={{fontWeight:'800px',fontSize:`${width < 400 ? '15px' : ''}`}} component={'h1'} variant={'h3'} {...props}>{children}</Typography>
  );
}


