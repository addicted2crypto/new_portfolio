"use client"
import React, { useEffect, useState, createContext, useContext } from 'react'

export type Theme = "light" | "dark";

type DarkContextProviderProps = {
    children: React.ReactNode;
};

type DarkModeContextType = {
    theme: Theme,
    toggleTheme: () => void;
}

const DarkmodeContext = createContext<DarkModeContextType | null>(null);

export default function DarkContextProvider({
    children,
}: DarkContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
  

    //stores on clients localstorage to remember prefrence
    const toggleTheme = () => {
      if(theme === 'light') {
          setTheme('dark');
          window.localStorage.setItem('theme', 'dark');
          document.documentElement.classList.add('dark');
      } else {
          setTheme('light');
          window.localStorage.setItem("theme", 'light');
          document.documentElement.classList.remove('dark');
      }
      
    };
  
  
    //useEffect runs a check of local storage-> use effect is good for reading outside react in this situation
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme')as Theme | null;
      if (localTheme) {
          setTheme(localTheme);
  
          if(localTheme === "dark"){
              document.documentElement.classList.add('dark');
          }
  
      } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
          document.documentElement.classList.add('dark');
      }
  
    }, []);
  
  
    return (
    
        <DarkmodeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </DarkmodeContext.Provider>
  )
}
 export function useDarkMode() {
    const context = useContext(DarkmodeContext);

    if(context === null){
        throw new Error("useDark must be used within a DarkModeContextProvider");
    }
    return context;
 }