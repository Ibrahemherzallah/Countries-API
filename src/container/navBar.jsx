import { ThemeContext } from '../context/themeContext.jsx';
import Button from '../components/buttons/button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import {NavBarBrand} from '../components/navBar/navBarBrand';
import {NavBarTheme} from '../components/navBar/navBarTheme';
import style from '../components/navBar/navBar.module.css';

export function NavBar() {
  const {isDark,handleTheme} = useContext(ThemeContext);
  let mode = isDark? 'Light Mode' : 'Dark Mode';
  let variant = isDark?'dark' :'light';
  let icon = isDark? 
    <FontAwesomeIcon icon={faSun} className={style.navIcon} /> :  
    <FontAwesomeIcon icon={faMoon} style={{ transform:"rotate(-20deg)"}}/>
  return(
      <header className={style.nav}>
        <NavBarBrand>Where is the world ?</NavBarBrand>
        <NavBarTheme>
          <Button variant={variant} size={'sm'} style={{marginBlock:'-5px'}} onClick={handleTheme}>
            {icon}
            &nbsp;
            {mode}
          </Button>  
        </NavBarTheme>
      </header>
  );
}

