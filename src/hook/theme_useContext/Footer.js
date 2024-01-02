import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Footer(){
    
    //const {isDark} = useContext(ThemeContext);
    //const {setIsDark} = useContext(ThemeContext);
    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    
    return(
        <footer
            className="footer"
            style={{
                backgroundColor : isDark ? 'black' : 'lightgray',
            }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    )
}