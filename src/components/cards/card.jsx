import style from './card.module.css';
import Typography from '../typography/typography.jsx';
import { useState, useEffect } from 'react';
import useIsFavorite from '../../hooks/useIsFavorite.jsx';
// import useLocalStorage from '../../hooks/useLocalStorage.jsx';


export function Card({children,index,setIndex,countryData,...props}){
  // const {setItem,getItem} = useLocalStorage('favorate');
  function handleOnDragStart(){
    setIndex(index);
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
export function CardIcon({index,countries,countryData,handleOnDrop,setIndex,indexx,setFavorite,setItem,children}){



  function handleStarOnClick(){
    // console.log("enter to the handle start");
    setFavorite((prev)=>{
      return [...prev,countries[index]]
    })
  }
  function handleRemove(removedItemName){
    // console.log("Enter tohandle delete");
  // console.log("the country data is :" , countryData );
    const removedItem = countryData?.filter((item)=> item.countyName !== removedItemName);
    // console.log("The removed item is " , removedItem);
    setFavorite(removedItem)
  }


  const fav = useIsFavorite(countries,countryData,index);
  // console.log("the favorite iss : " , fav);

  return (
    <span className={style.star} style={{color: `${fav.fav ? 'orange' : '#bababa'}`}}  onClick={() => {return fav.fav ?  handleRemove(countries[index]?.countyName) : handleStarOnClick() }}>
      {children}  
    </span>
  );

}