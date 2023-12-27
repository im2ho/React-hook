import React from "react";

export default function Content({isDark}){
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