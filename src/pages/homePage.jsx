import { NavBar } from '../container/navBar.jsx';
import Countries from '../container/countries.jsx';
import InputWithIcon from '../components/input/inputWithIcon.jsx';
import Flex from '../components/flex/flex.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from './homePage.module.css';
import {DropDown,DropDownOption} from '../components/dropdown/dropdown.jsx';
import { useEffect, useState } from 'react';
import SideBar from '../components/sideBar/sideBar.jsx';
import useToggle from '../hooks/useToggle';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import useLocalStorage from '../hooks/useLocalStorage.jsx';
import useCountries from '../hooks/useFetchCountries.jsx';
import useFavorite from '../hooks/useFavorite.jsx';
import { ThemeContext } from '../context/themeContext.jsx';
import { useContext } from 'react';

const HomePage = ({width}) => {
  

  const {setItem,getItem} = useLocalStorage('favorite');
  useEffect(()=>{setItem(getItem() ? getItem() : []);})
  const [search,setSearch] = useState('');
  const [text,setText] = useState('');
  const [favorite,setFavorite] = useState(getItem());
  const [countryData,setCountryData] = useState([]);
  const {isToggle,handleToggle} = useToggle();
  const [cardIndex,setCardIndex] = useState();
  const {countries} = useCountries({search});
  const {isDark,handleTheme} = useContext(ThemeContext);
  let variant = isDark? 'dark' :'light';
  let dropDownHint = text? text : 'Filter by Region';
  let continent = text? text : '';
  useEffect(()=>{setItem(favorite);setCountryData(getItem);},[favorite])
  const {handleOnDrop,handleRemoveItem} = useFavorite({setFavorite,countries,cardIndex,countryData,setItem})
  return(   
    <>
      <NavBar width={width} />
      <Flex className={style.searchDiv}>
        <InputWithIcon icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "cadetblue" }} />} placeholder={"Search for a country..."} onChange={(e)=>{setSearch(e.target.value)}} />
        <DropDown isToggle={isToggle} handleToggle={handleToggle} variant={variant} placeholder={dropDownHint} onClick={(e)=>{
          setText(e.target.getAttribute('value'));
          return handleToggle();
          }}>
            <DropDownOption value={''}>no filter</DropDownOption>
            <DropDownOption value={'Africa'}>Africa</DropDownOption>
            <DropDownOption value={'America'}>America</DropDownOption>
            <DropDownOption value={'Asia'}>Asia</DropDownOption>
            <DropDownOption value={'Europe'}>Europe</DropDownOption>
            <DropDownOption value={'Oceania'}>Oceania</DropDownOption>
        </DropDown>
      </Flex>
      <Flex gap={'small'} className={style.mainContent}>
        <SideBar onDrop={handleOnDrop}>
          <h3 className={style.span}>Favourites</h3>
          {
             countryData?.map((item,index) => (
              <Flex key={item.key} style={{ marginTop: `${index ? '0.1em' : '0.7em'}`, justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={style.sideBarFlagDiv}>
                  <img className={style.sideBarFlag} src={item.flag} alt={`${item.countyName}-flag`} />
                  <span className={style.countryName}>{item.countyName}</span>
                </div>
                <FontAwesomeIcon icon={faXmark} style={{ cursor:'pointer',fontSize:'15px',backgroundColor:'var(--circle)',color:'var(--font-color)',borderRadius:'100%',padding:'5px',width:'10px',height:'9px'}} value={index} onClick={()=>{handleRemoveItem(item.countyName)}}/>
              </Flex>
            ))
          }          
        </SideBar>
          <div className={style.countriesDiv}>
              <Countries continent={continent} countries={countries} setCardIndex={setCardIndex} countryData={countryData} handleOnDrop={handleOnDrop} setFavorite={setFavorite} width={width}/>
          </div>
        
      </Flex>
    </>
  ) 
}
export default HomePage;
