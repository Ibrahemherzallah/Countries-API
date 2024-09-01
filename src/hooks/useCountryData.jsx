import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

const useCountryData = () => {
  const countryName = useParams();
  const [countryData,setCountryData] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName.countryName}`)
    .then(Response => Response.json())
    .then(data => {
      let obj = {}
      const langNativeName = Object.values(data[0].name.nativeName);
      const languages = Object.values(data[0].languages);
      const currencies = Object.values(data[0].currencies)[0].name;
      
      obj.flag = data[0].flags.svg;
      obj.name = data[0].name.common;
      obj.nativeName = langNativeName[0].common;
      obj.population = data[0].population;
      obj.region = data[0].region;
      obj.subregion = data[0].subregion;
      obj.capital = data[0].capital[0];
      obj.topLevelDomain = data[0].tld[0];
      obj.currencies = currencies;  
      obj.languages = languages;
      obj.borderCountries = data[0].borders
      setCountryData(obj)
    })
  },[])
  return {
    countryData
  }
}
export default useCountryData;