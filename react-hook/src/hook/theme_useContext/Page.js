import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

//isDark, setIsDark를 props로 받아와서 또 다른 자식 컴포넌트에 전달
//Page 자체에서는 isDark를 사용하지 않기 때문에, 단지 그냥 중간 컴포넌트의 역할을 한다
export default function Page() {

    //useContext로 data 잘 받아와지는지 console로 테스트
    const data = useContext(ThemeContext);
    console.log('data', data);

    return(
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};