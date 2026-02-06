import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({children}){
    const [theme, setTheme] = useState(localStorage.getItem("theme")||"light");
    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
  function Button(){
    const {theme} = useContext(ThemeContext);
    return (
        <button>Theme: {theme}</button>
    )
  }
  function Card(){
    return <Button/>
  }
  function Layout() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <Card />
    </>
  );
 }
export default function AppTheme() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

