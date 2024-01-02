import React,{useState} from 'react';
import '../../css/App.css';
import Page from './Page';

export default function App() {
    
    const [isDark, setIsDark] = useState(false);
    
    return(
        //Page(자녀 컴포넌트)에 porps로 isDark, setIsDark를 넘겨줌
        <Page isDark={isDark} setIsDark={setIsDark}/>
    );
}