import style from './card.module.css';
import Typography from '../typography/typography.jsx';
import useStarFavorite from '../../hooks/useStarFavorite.jsx';


export function Card({children,index,setCardIndex,...props}){
  function handleOnDragStart(){ 
    setCardIndex(index);
  }
    return(
      <div className={style.card} draggable="true" onDragStart={() => {handleOnDragStart()}} {...props}>{children}</div>      
    )
}
export function CardImg({src,alt}){
    return(
      <img className={style.cardImg} draggable="false" src={src} alt={alt} />
    )
}
export function CardTitle({variant,component,children}){
   return (
    <Typography component={component} variant={variant} draggable="false" style={{paddingLeft:'10%',color:'var(--font-color)'}}>{children}</Typography>
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
    <span className={style.star} style={{color: `${fav.fav ? 'orange' : '#bababa'}`}}  onClick={handleOnClick}>
      {children}  
    </span>
  );

}