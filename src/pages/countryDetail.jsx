import { NavBar } from "../container/navBar";
import style from './countryDetail.module.css';
import Button from "../components/buttons/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";
import Flex from '../components/flex/flex.jsx';
import {TextCardTitle,TextCards,TextCardBody} from "../components/cards/textCards.jsx";
import Typography from "../components/typography/typography.jsx";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext.jsx";
import useCountryData from "../hooks/useCountryData.jsx";

const CountryDetail = ({width}) => {
  const {countryData} = useCountryData();
  const {isDark,handleTheme} = useContext(ThemeContext);
  const variant = isDark?'dark-shadow':'light-shadow';
  const color = isDark?'light':'dark';

  return(
    <div className={style.countryDetailsPage}>
      <NavBar />
      <Link to={'/'} className={style.backBtn} style={{textDecoration:'none',color:'black'}}>
        <Button style={{
          boxShadow: `0 0 4px 2px rgba(0, 0, 0, 0.1)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingInline: '2.5em',
          height:'2.5em',
          backgroundColor:`var(--element-color)`,
          color: `var(--${color})`,
          fontSize: '14px'
        }}>
          <FontAwesomeIcon icon={faArrowLeftLong} style={{ color:'var(--{{color}.color})',fontSize: '15px'}} />
          &nbsp;
          Back
        </Button>
      </Link>
      
      <div className={style.countryDetails}>
        <img className={style.countyFlag} src={countryData?.flag} alt={`${countryData?.name}-flag`} />
        <TextCards direction={'column'}>
          <TextCardTitle component={'h1'} variant={width > 1200 ? 'h1' : 'h3'}>{countryData?.name}</TextCardTitle>
          <TextCardBody>  
            <div className={style.detailsDiv}>  
              <div>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Native Name: </b>{countryData?.nativeName}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Population: </b>{countryData?.population?.toLocaleString('en', {useGrouping:true})}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Region: </b>{countryData?.region}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Sub Region:</b>{countryData?.subregion}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Capital:</b> {countryData?.capital}</Typography>
              </div>
              <div>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Top Level Domain: </b>{countryData?.topLevelDomain}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Currencies: </b>{countryData?.currencies}</Typography>
                <Typography component={'p'} style={{marginBlock:'10px'}}><b>Languages: </b>
                  {
                    countryData?.languages?.map((item,index) => {return index < 2 ? item : null }).join(',')
                  }
                </Typography>
              </div>
            </div>
            <Flex style={{justifyContent:'flex-start',gap:'0.5em',marginTop: `${width > 1200 ? '8%' : '1%'}`,padding:'0px' , fontSize: `${width<700 ? '0.6em' :''}`}}>
              <span className={style.btnDescription}>Border Countries:</span>
              {
                countryData?.borderCountries?.slice(0, 3).map((borderCountry, index) => (
                  <Button 
                    key={index} 
                    variant={variant} 
                    size={'xs'}
                    style={{ 
                      boxShadow: `0 0 3px -1px var(--shadow-color)`, 
                      paddingInline: '3em', 
                      color: `var(--${color})`,
                      borderRadius: '2px',
                    }}
                  >
                    {borderCountry}
                  </Button>
                ))
              }
            </Flex>
          </TextCardBody> 
        </TextCards>
      </div>
    </div>
  );
}
export default CountryDetail;