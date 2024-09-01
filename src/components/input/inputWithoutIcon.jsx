import style from './input.module.css';
import InputWithIcon from './inputWithIcon';

const InputWithoutIcon = ({placeholder,...props}) => {
  return(
    <InputWithIcon placeholder={placeholder}/>
  );
} 
export default InputWithoutIcon;
