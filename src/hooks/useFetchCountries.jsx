import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useCountries = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const { debouncedValue } = useDebounce({ search });

  useEffect(() => {
    const fetchCountryData = async () => {
      const countryData = [];
      const filter = debouncedValue ? `name/${debouncedValue}` : "all";

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/${filter}`
        );
        const data = await response?.json();
        if (data && data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            let pal = data[i].name.common === "Palestine" ? 1 : 0;
            countryData.push({
              countyName: data[i].name.common,
              population: data[i].population,
              region: data[i].region,
              capital: data[i].capital[pal],
              flag: data[i].flags.svg,
            });
          }
        }
      } catch (error) {
        console.error(`Error fetching data for :`, error);
      }

      setCountries(countryData);
    };

    if (debouncedValue || debouncedValue === "") {
      fetchCountryData();
    }
  }, [debouncedValue]);

  return {
    countries,
  };
};

export default useCountries;
