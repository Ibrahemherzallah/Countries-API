import useIsFavorite from './useIsFavorite.jsx';

const useStarFavorite = ({index,countries,countryData,setFavorite}) => {

  const fav = useIsFavorite(countries,countryData,index);

  function handleStarOnClick(){
    setFavorite((prev)=>{
      return [...prev,countries[index]]
    })
  }
  function handleRemove(removedItemName){
    const removedItem = countryData?.filter((item)=> item.countyName !== removedItemName);
    setFavorite(removedItem)
  }
  function handleOnClick(){
    return fav.fav ?  handleRemove(countries[index]?.countyName) : handleStarOnClick() 
  }
  return {
    handleOnClick,
    fav
  }
}
export default useStarFavorite;