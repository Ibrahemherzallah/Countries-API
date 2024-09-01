import { NavBar } from '../container/navBar.jsx';
import Countries from '../components/countries.jsx';
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

const HomePage = ({width}) => {
  

  const {setItem,getItem} = useLocalStorage('favorite');
  useEffect(()=>{
    console.log("The get item issssssssssss" , getItem());
    setItem(getItem() ? getItem() : []);
  })
  const [search,setSearch] = useState('');
  const [text,setText] = useState('');
  const [favorite,setFavorite] = useState(getItem());
  const [countryData,setCountryData] = useState([]);
  const {isToggle,handleToggle} = useToggle();
  const [cardIndex,setCardIndex] = useState();
  const {countries} = useCountries({search});
  let dropDownHint = text? text : 'Filter by Region';
  let continent = text? text : '';
  useEffect(()=>{
    setItem(favorite);
    setCountryData(getItem);
  },[favorite])
  const {handleOnDrop,handleRemoveItem} = useFavorite({setFavorite,countries,cardIndex,countryData,setItem})
  return(   
    <>
      <NavBar />
      <Flex className={style.searchDiv}>
        <InputWithIcon icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#63E6BE" }} />} placeholder={"Search fo a country..."} onChange={(e)=>{setSearch(e.target.value)}} />
        <DropDown isToggle={isToggle} handleToggle={handleToggle} placeholder={dropDownHint} onClick={(e)=>{
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
          <b>Favourites</b>
          {
             countryData?.map((item,index) => (
              <Flex key={item.key} style={{ marginTop: `${index ? '0.3em' : '1.5em'}`, justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={style.sideBarFlagDiv}>
                  <img className={style.sideBarFlag} src={item.flag} alt={`${item.countyName}-flag`} />
                  <span className={style.countryName}>{item.countyName}</span>
                </div>
                <FontAwesomeIcon icon={faXmark} style={{ cursor:'pointer' }} value={index} onClick={()=>{handleRemoveItem(item.countyName)}}/>
              </Flex>
            ))
          }
        </SideBar>
        <div className={style.countriesDiv}>
            <Countries continent={continent} countries={countries} setCardIndex={setCardIndex} countryData={countryData} handleOnDrop={handleOnDrop} setFavorite={setFavorite}/>
        </div>
      </Flex>
    </>
  ) 
}
export default HomePage;
