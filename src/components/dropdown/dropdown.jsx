import style from './dropdown.module.css';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export const DropDownOption = ({value,children}) => {

  return(
      <li className={style.option} value={value}>{children}</li>
  ) 
}


export const DropDown = ({isToggle,handleToggle,placeholder,children,onClick,...props}) => {
  return(
    <div className={ `${style.dropDown} ${isToggle ? style.active : ''}`} {...props}>
        <div className={style.dropDownBtn} onClick={handleToggle}>
          <span className={style.btnText}>{placeholder}</span>
          <FontAwesomeIcon icon={faAngleDown} className={style.icon} />
          </div>
        {
          isToggle && (<ul className={style.options}
             onClick={onClick}>{children}</ul>)
        } 

    </div> 
  );
}
