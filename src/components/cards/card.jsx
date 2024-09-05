import style from './card.module.css';
import Typography from '../typography/typography.jsx';
import useStarFavorite from '../../hooks/useStarFavorite.jsx';


export function Card({children,setCardIndex,...props}){
    return(
      <div className={style.card} draggable="true"  {...props}>{children}</div>      
    )
}
export function CardImg({src,alt}){
    return(
      <img className={style.cardImg} draggable="false" src={src} alt={alt} />
    )
}
export function CardTitle({width,variant,component,children}){
   return (
    <Typography component={component} variant={variant} draggable="false" style={{paddingLeft:'10%',color:'var(--font-color)',fontSize:`${width < 500 ? '18px' : ''}`}}>{children}</Typography>
   )
} 
export function CardBody({children,...props}){
  return (
    <>
        <div className={style.cardBody} draggable="false" {...props}>
          {children}
        </div>
    </>
   )
} 
export function CardIcon({index,countries,countryData,setFavorite,children}){
  const {handleOnClick,fav} = useStarFavorite({index,countries,countryData,setFavorite})
  return (
    <span className={style.star} style={{color: `${fav.fav ? '#e09100' : '#bababa'}`}}  onClick={handleOnClick}>
      {children}  
    </span>
  );
}