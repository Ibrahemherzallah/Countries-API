import { NavBar } from '../container/navBar.jsx';
import Countries from '../container/countries.jsx';
import InputWithIcon from '../components/input/inputWithIcon.jsx';
import Flex from '../components/flex/flex.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from './homePage.module.css';
import {DropDown,DropDownOption} from '../components/dropdown/dropdown.jsx';
import { useEffect, useState, useRef } from 'react';
import SideBar from '../components/sideBar/sideBar.jsx';
import useToggle from '../hooks/useToggle';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import useLocalStorage from '../hooks/useLocalStorage.jsx';
import useCountries from '../hooks/useFetchCountries.jsx';

const HomePage = ({width}) => {
  

  const {setItem,getItem} = useLocalStorage('favorate');
  useEffect(()=>{
    if(getItem()){
      console.log("The get item is ",getItem());
    }
    else {
      setItem([]);
    }
  },[])
  const [search,setSearch] = useState('');
  const [text,setText] = useState('');
  const [favorite,setFavorite] = useState(getItem());
  const [countryData,setCountryData] = useState([]);
  const {isToggle,handleToggle} = useToggle();
  const [indexx,setIndex] = useState();
  const {countries} = useCountries({search});
  let dropDownHint = text? text : 'Filter by Region';
  let continent = text? text : '';

  useEffect(()=>{
    setItem(favorite);
    setCountryData(getItem);
  },[favorite])

  function handleOnDrop(){
    setFavorite((prev)=>{
      let arr = [...prev];
      let filteredArray = arr.filter((item) => item?.countyName !== countries[indexx]?.countyName);
      return [...filteredArray,countries[indexx]]
      })
  }
  function handleRemoveItem(removedItemName){
    const removedItem = countryData.filter((item)=> item.countyName !== removedItemName);
    console.log("The removed item is " , removedItem);
    setFavorite(removedItem)
    setItem(removedItem)
  }
  console.log("The favorate is ",favorite);
    console.log("the country data is " , countryData);
  return( 
    
    <>
      <NavBar />
      <Flex className={style.searchDiv}>
        <InputWithIcon icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#63E6BE" }} />} placeholder={"Search fo a country..."} onChange={(e)=>{setSearch(e.target.value)}} />
        <DropDown isToggle={isToggle} handleToggle={handleToggle} placeholder={dropDownHint} onClick={(e)=>{
          console.log(e.target.getAttribute('value'));
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.flag} alt={`${item.countyName}-flag`} width="45" height="25" style={{objectFit:"cover"}}  />
                  <span style={{ marginLeft: '10px' }}>{item.countyName}</span>
                </div>
                <FontAwesomeIcon icon={faXmark} style={{ cursor:'pointer' }} value={index} onClick={()=>{handleRemoveItem(item.countyName)}}/>
              </Flex>
            ))
          }
        </SideBar>
        <div className={style.countriesDiv}>
            <Countries search={search} continent={continent} countries={countries} setIndex={setIndex} countryData={countryData} handleOnDrop={handleOnDrop} width={width} indexx={indexx} setFavorite={setFavorite} setItem={setItem} />
        </div>
      </Flex>
    </>
  ) 
}
export default HomePage;
