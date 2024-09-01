import { useEffect, useState } from "react";
const useIsFavorite = (countries,countryData,index) => {
  let fav = false;
  if(countryData?.length){
      for(let country of countryData){
        if(country.countyName === countries[index].countyName){
          fav = true
        }
      }
  }    
  return{
    fav
  }
}

export default useIsFavorite;
