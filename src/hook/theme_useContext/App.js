import React,{useState} from 'react';
import '../../css/App.css';
import Page from './Page';
import { ThemeContext } from './ThemeContext';

export default function App() {
    
    const [isDark, setIsDark] = useState(false);
    
    return(
        //prop으로 value를 받음 > 전달하고자하는 데이터를 넣어준다
        //ThemeContext.Prodiver가 감싸는 모든 하위 component는 value로 집어넣어준 요소에 접근 가능해진다
        <ThemeContext.Provider value={{isDark, setIsDark}} >
            <Page />
        </ThemeContext.Provider>
    );
}