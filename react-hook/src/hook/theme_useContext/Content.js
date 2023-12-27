import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content(){

    const {isDark} = useContext(ThemeContext);

    return(
        <div
            className="content"
            style={{
                backgroundColor : isDark ? 'black' : 'white',
                color : isDark ? 'white' : 'black',
            }}
        >
            <p>오늘도 좋은 하루~~^^</p>
            <p>꽃 한 송이 놓고 갑니다 @/-----</p>
        </div>
    )
}