import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
const useTheme = () => {
  const [isDark,setIsDark] = useState(false);
  const {setItem,getItem} = useLocalStorage('isDark'); 
    function handleTheme(){
    // console.log("The set is dark before is " , isDark);
    setIsDark(!isDark)
    // console.log("The set is dark after is " , isDark);
    setItem(!isDark)
    // console.log("The get item is " , getItem());
  }
  return{
    getItem,
    handleTheme
  }
}
export default useTheme;