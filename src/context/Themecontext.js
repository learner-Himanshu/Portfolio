import {useState,createContext, useContext} from 'react'

const Themecontext = createContext();

const ThemeProvider = ({children}) => {
   const[theme,setTheme] = useState('light');

   return(
    <Themecontext.Provider value={[theme,setTheme]}>
      {children}
    </Themecontext.Provider>
   )
}

// custom hook typr export

const useTheme = () => useContext(Themecontext)

export {useTheme, ThemeProvider}