import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
const useTheme = () => {
  const [isDark,setIsDark] = useState(false);
  const {setItem,getItem} = useLocalStorage('isDark'); 
    function handleTheme(){
    setIsDark(!isDark)
    setItem(!isDark)
  }
  return{
    getItem,
    handleTheme
  }
}
export default useTheme;