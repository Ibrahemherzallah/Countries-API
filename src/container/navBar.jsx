import { ThemeContext } from '../context/themeContext.jsx';
import Button from '../components/buttons/button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import {NavBarBrand} from '../components/navBar/navBarBrand';
import {NavBarTheme} from '../components/navBar/navBarTheme';
import style from '../components/navBar/navBar.module.css';

export function NavBar({width}) {
  const {isDark,handleTheme} = useContext(ThemeContext);
  let mode = isDark? 'Light Mode' : 'Dark Mode';
  let variant = isDark?'dark' :'light';
  let icon = isDark? 
    <FontAwesomeIcon icon={faSun} className={style.navIcon} /> :  
    <FontAwesomeIcon icon={faMoon} className={style.navIcon}/>
  return(
      <header className={style.nav}>
        <NavBarBrand width={width}>Where is the world ?</NavBarBrand>
        <NavBarTheme width={width}>
          <Button variant={variant} size={'sm'} style={{marginBlock:'-5px',fontWeight:'600'}} onClick={handleTheme}>
            {icon}
            &nbsp;
            &nbsp;
            {mode}
          </Button>  
        </NavBarTheme>
      </header>
  );
}

