import { useState } from "react";

const useToggle = () => {
  const [isToggle,setIsToggle] = useState(false);
  function handleToggle(){
    setIsToggle(!isToggle);
  }
  return{
    isToggle,
    handleToggle
  }
} 
export default useToggle;