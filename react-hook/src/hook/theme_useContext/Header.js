import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

//props로 isDark 받아옴
export default function Header() {

    const {isDark} = useContext(ThemeContext);

    return(
        <header className="header"
            style={{
                backgroundColor : isDark ? 'black' : 'lightgray',
                color : isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome Page</h1>
        </header>
    )
}