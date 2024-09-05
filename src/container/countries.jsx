import { Link } from 'react-router-dom';
import { Card,CardImg,CardTitle,CardBody,CardIcon } from '../components/cards/card.jsx'
import Typography from '../components/typography/typography.jsx';

const Countries = ({continent,setCardIndex,countries,countryData,setFavorite,width}) => {
  function handleOnDragStart(index){ 
    setCardIndex(index);
  }
  return(
    <>
        { 
        countries?.filter((item) => {
          return continent === ''
          ? item
          : item.region === continent 
        })
        .map((item, index) => (
          <Card key={item.key} index={index} setCardIndex={setCardIndex} onDragStart={()=>{handleOnDragStart(index)}}>
            <Link key={index} to={`/country/${item.countyName}`} style={{ textDecoration:'none',color:'var(--font-color)'}} draggable='false'>
              <CardImg src={item.flag} alt={`${item.countyName}-flag`} />
              <CardTitle component={'h2'} variant={'h3'} width={width}>{item.countyName}</CardTitle>
              <CardBody>  
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px',fontSize:`${width < 500 ? '13px' : '15px'}`}}><span style={{fontWeight:'700'}}>Population: </span>{item.population?.toLocaleString('en', {useGrouping:true})}</Typography>
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px',fontSize:`${width < 500 ? '13px' : '15px'}`}}><span style={{fontWeight:'700'}}>Region: </span>{item.region}</Typography>
                <Typography size={'sm'} component={'p'} style={{ marginBlock: '5px',fontSize:`${width < 500 ? '13px' : '15px'}`}}><span style={{fontWeight:'700'}}>Capital: </span>{item.capital}</Typography>
              </CardBody>
            </Link>
            <CardIcon countryData={countryData} index={index} countries={countries} setFavorite={setFavorite}>{'\u2605'}</CardIcon>
          </Card>
      ))}
    </>
  );
}
export default Countries;