import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

const useCountryData = () => {
  const countryName = useParams();
  const [countryData,setCountryData] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName.countryName}`)
    .then(Response => Response.json())
    .then(data => {
      let country = {}
      const langNativeName = Object.values(data[0].name.nativeName);
      const languages = Object.values(data[0].languages);
      const currencies = Object.values(data[0].currencies)[0].name;
      
      country.flag = data[0].flags.svg;
      country.name = data[0].name.common;
      country.nativeName = langNativeName[0].common;
      country.population = data[0].population;
      country.region = data[0].region;
      country.subregion = data[0].subregion;
      country.capital = data[0].capital[0];
      country.topLevelDomain = data[0].tld[0];
      country.currencies = currencies;  
      country.languages = languages;
      country.borderCountries = data[0].borders
      setCountryData(country)
    })
  },[])
  return {
    countryData
  }
}
export default useCountryData;