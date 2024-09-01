import { Link } from 'react-router-dom';
import { Card,CardImg,CardTitle,CardBody,CardIcon } from '../components/cards/card.jsx'
import Typography from '../components/typography/typography.jsx';
import { useState , useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.jsx';

const Countries = ({search,continent,setIndex,countries,countryData,handleOnDrop,width,setFavorite,indexx,setItem}) => {
  
  return(
    <>
        { 
        countries?.filter((item) => {
          return continent === ''
          ? item
          : item.region === continent 
        })
        .map((item, index) => (
          <Card key={item.key} style={{backgroundColor:'var(--element-color)'}} index={index} countries={countries} setIndex={setIndex}>
            <Link key={index} to={`/country/${item.countyName}`} style={{ textDecoration:'none',color:'var(--font-color)'}} draggable='false'>
              <CardImg src={item.flag} alt={`${item.countyName}-flag`} />
              <CardTitle component={'h4'} variant={'h3'}>{item.countyName}</CardTitle>
              <CardBody>
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px' }}><b>Population: </b>{item.population}</Typography>
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px' }}><b>Region: </b>{item.region}</Typography>
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px' }}><b>Capital: </b>{item.capital}</Typography>
              </CardBody>
            </Link>
            <CardIcon countryData={countryData} index={index} countries={countries} handleOnDrop={handleOnDrop} setIndex={setIndex} indexx={indexx} setFavorite={setFavorite} setItem={setItem}>{'\u2605'}</CardIcon>
          </Card>
      ))}
    </>
  );
}
export default Countries;