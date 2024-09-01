const useFavorite = ({setFavorite,countries,cardIndex,countryData,setItem}) => {
  function handleOnDrop(){
    setFavorite((prev)=>{
      let arr = [...prev];
      let filteredArray = arr.filter((item) => item?.countyName !== countries[cardIndex]?.countyName);
      return [...filteredArray,countries[cardIndex]]
      })
  }
  function handleRemoveItem(removedItemName){
    const removedItem = countryData?.filter((item)=> item.countyName !== removedItemName);
    console.log("The removed item is " , removedItem);
    setFavorite(removedItem)
    setItem(removedItem)
  }
  function handleOnDragStart(){ 
    setCardIndex(index);
  }
  return {
    handleOnDrop,
    handleRemoveItem,
    handleOnDragStart
  }
}
export default useFavorite;