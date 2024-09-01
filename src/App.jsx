// import { createContext, useState } from 'react'
import { ThemeContext } from './context/themeContext';
import './App.css'
import HomePage from './pages/homePage';
import useTheme from './hooks/useTheme';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CountryDetail from './pages/countryDetail';
import { useEffect, useState } from 'react';
import Button from './components/buttons/button';
import useLocalStorage from './hooks/useLocalStorage';
import { DropDown , DropDownOption } from './components/dropdown/dropdown';

function App() {
    const {getItem,handleTheme} = useTheme();
  let [isDark,setIsDark] = useState();
  useEffect(() => {
    setIsDark(getItem)
  },[getItem])

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id={isDark?'dark':'light'}>
      <ThemeContext.Provider value={{isDark,handleTheme}}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<HomePage width={width} />} />
            <Route path={"/country/:countryName"} element={<CountryDetail width={width} />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
